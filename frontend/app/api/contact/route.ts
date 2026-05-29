import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO = "maple-diagnostics@cambridgelogic.com";

const SUBJECTS: Record<string, string> = {
  guide: "New guide download request",
  "download-guide": "New template download request",
  "social-program": "New Maple Social Program application",
  contact: "New general enquiry",
};

const TITLES: Record<string, string> = {
  guide: "Guide Download Request",
  "download-guide": "Template Download Request",
  "social-program": "Maple Social Program Application",
  contact: "General Enquiry",
};

function formatText(data: Record<string, string>): string {
  const { type, ...fields } = data;
  const title = TITLES[type] ?? type;
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k.charAt(0).toUpperCase() + k.replace(/([A-Z])/g, " $1").slice(1)}: ${v}`)
    .join("\n");
  return `${title}\n${"─".repeat(title.length)}\n\n${rows}\n`;
}

export async function POST(req: NextRequest) {
  const data: Record<string, string> = await req.json();
  const { type } = data;

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
      subject: SUBJECTS[type] ?? "New contact form submission",
      text: formatText(data),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] email send error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
