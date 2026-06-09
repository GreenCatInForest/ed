import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const TO = "maple@cambridgelogic.com";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") ?? "";

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Webhook signature verification failed" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Forward to Django — handles idempotency, User linking, and sends email via Celery.
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";
    try {
      const res = await fetch(`${apiUrl}/orders/record/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(session),
      });
      const data = await res.json();
      // Django handled it — only fall through to email if it was a new order
      if (data.created === false) {
        return NextResponse.json({ received: true });
      }
      if (res.ok) {
        return NextResponse.json({ received: true });
      }
    } catch {
      // Django unavailable — fall back to direct email so the order isn't lost.
    }

    // Fallback: send email directly if Django is down.
    await sendFallbackEmail(session);
  }

  return NextResponse.json({ received: true });
}

async function sendFallbackEmail(session: Stripe.Checkout.Session) {
  const m = session.metadata ?? {};
  const amount = `£${((session.amount_total ?? 0) / 100).toFixed(2)}`;

  const text = `New Kit Order — Payment Confirmed (email fallback)
═══════════════════════════════════

Stripe Session: ${session.id}
Amount paid:    ${amount}

─── Kit ──────────────────────────
${m.kit_name} (${m.kit_id})

─── Contact ──────────────────────
Name:         ${m.customer_name}
Organisation: ${m.customer_org || "—"}
Email:        ${session.customer_email}
Phone:        ${m.customer_phone}

─── Delivery address ─────────────
${m.delivery_address}

─── Property address ─────────────
${m.property_address}

─── Notes ────────────────────────
${m.notes || "—"}`.trim();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  await transporter.sendMail({
    from:    `Maple Diagnostics <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
    to:      TO,
    replyTo: session.customer_email ?? undefined,
    subject: `New order: ${m.kit_name} — ${m.customer_name}`,
    text,
  });
}
