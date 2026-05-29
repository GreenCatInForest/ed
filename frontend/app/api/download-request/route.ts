import { NextRequest, NextResponse } from "next/server";

const DJANGO_API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Forward to Django — it owns validation, honeypot checking, storage, and email delivery.
  try {
    const upstream = await fetch(`${DJANGO_API}/api/leads/download-request/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": req.headers.get("x-forwarded-for") ?? "",
        "User-Agent": req.headers.get("user-agent") ?? "",
        "Referer": req.headers.get("referer") ?? "",
      },
      body: JSON.stringify(body),
    });

    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch (err) {
    // Django unavailable — fall back to email-only via nodemailer so the form
    // still works in local dev without a running backend.
    console.warn("[download-request] Django unavailable, using email fallback:", err);
    return emailFallback(body);
  }
}

async function emailFallback(body: Record<string, unknown>): Promise<NextResponse> {
  const nodemailer = await import("nodemailer");

  const transporter = nodemailer.default.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const rows = Object.entries(body)
    .filter(([k, v]) => k !== "company_website" && v !== "" && v !== false)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `Maple Diagnostics <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: "maple-diagnostics@cambridgelogic.com",
      subject: `Template download request — ${body.guide_name ?? "unknown"}`,
      text: `Download Request (email fallback)\n${"─".repeat(40)}\n\n${rows}\n`,
    });
    return NextResponse.json({ ok: true });
  } catch (mailErr) {
    console.error("[download-request] email fallback failed:", mailErr);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
