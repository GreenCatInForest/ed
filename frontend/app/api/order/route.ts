import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO = "maple-diagnostics@cambridgelogic.com";

interface Address {
  line1: string;
  line2?: string;
  city: string;
  county?: string;
  postcode: string;
}

function formatAddress(a: Address): string {
  return [a.line1, a.line2, a.city, a.county, a.postcode]
    .filter(Boolean)
    .join(", ");
}

function buildEmailText(body: Record<string, unknown>): string {
  const delivery = body.delivery as Address;
  const property = body.propertyAddress as Address;

  return `
New Kit Order
═════════════

Kit:          ${body.kit} (${body.kitPrice})

─── Contact ──────────────────────
Name:         ${body.name}
Organisation: ${body.organisation || "—"}
Email:        ${body.email}
Phone:        ${body.phone}

─── Delivery address ─────────────
${formatAddress(delivery)}

─── Property address ─────────────
${formatAddress(property)}

─── Notes ────────────────────────
${body.notes || "—"}
`.trim();
}

export async function POST(req: NextRequest) {
  const body: Record<string, unknown> = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Maple Diagnostics <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: TO,
      replyTo: String(body.email),
      subject: `New order: ${body.kit} — ${body.name}`,
      text: buildEmailText(body),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[order] email send error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
