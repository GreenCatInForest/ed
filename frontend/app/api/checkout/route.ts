import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const KIT_CONFIG = {
  starter:      { amount: 24900, name: "Starter Report",       mode: "payment"      },
  professional: { amount: 24900, name: "Professional Report",  mode: "payment"      },
  portfolio:    { amount:  4900, name: "Portfolio Monitoring",  mode: "subscription" },
} as const;

function formatAddress(a: Record<string, string>): string {
  return [a.line1, a.line2, a.city, a.county, a.postcode].filter(Boolean).join(", ");
}

export async function POST(req: NextRequest) {
  const { kitId, contact, delivery, propertyAddress, notes } = await req.json();

  const kit = KIT_CONFIG[kitId as keyof typeof KIT_CONFIG];
  if (!kit) return NextResponse.json({ error: "Invalid kit" }, { status: 400 });

  const origin = req.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL ?? "";

  const metadata: Record<string, string> = {
    kit_id:           kitId,
    kit_name:         kit.name,
    customer_name:    contact.name,
    customer_org:     contact.organisation ?? "",
    customer_phone:   contact.phone,
    delivery_address: formatAddress(delivery),
    property_address: formatAddress(propertyAddress),
    notes:            notes ?? "",
  };

  const priceData: Stripe.Checkout.SessionCreateParams.LineItem["price_data"] =
    kit.mode === "subscription"
      ? { currency: "gbp", product_data: { name: kit.name }, unit_amount: kit.amount, recurring: { interval: "month" } }
      : { currency: "gbp", product_data: { name: kit.name }, unit_amount: kit.amount };

  const session = await stripe.checkout.sessions.create({
    mode: kit.mode,
    customer_email: contact.email,
    line_items: [{ quantity: 1, price_data: priceData }],
    metadata,
    success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:  `${origin}/order`,
  });

  return NextResponse.json({ url: session.url });
}
