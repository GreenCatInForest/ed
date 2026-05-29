"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconX, IconFileDownload, IconSend } from "@tabler/icons-react";

const inputCls =
  "w-full bg-(--color-surface-2) border border-(--color-border-input) rounded-lg px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:outline-none focus:border-accent transition-colors";
const fieldLabel =
  "block text-xs uppercase tracking-wider text-fg-subtle font-medium mb-2";

const ROLES = [
  { value: "private-landlord", label: "Private landlord" },
  { value: "housing-association", label: "Housing association / council" },
  { value: "surveyor", label: "Surveyor / consultant" },
  { value: "letting-agent", label: "Letting agent" },
];

const PROPERTY_RANGES = [
  { value: "1-5", label: "1–5" },
  { value: "6-20", label: "6–20" },
  { value: "21-50", label: "21–50" },
  { value: "51-200", label: "51–200" },
  { value: "200+", label: "200+" },
];

type Status = "idle" | "loading" | "success" | "error";

interface Props {
  title: string;
  guideName: string;
  format?: "pdf" | "word";
  onClose: () => void;
}

export default function DownloadModal({ title, guideName, format, onClose }: Props) {
  const formatLabel = format === "pdf" ? "PDF" : format === "word" ? "Word" : null;
  const resolvedGuideName = formatLabel ? `${guideName} (${formatLabel})` : guideName;
  const [f, setF] = useState({
    name: "",
    email: "",
    organisation: "",
    role: "",
    propertiesRange: "",
    marketingConsent: false,
    companyWebsite: "", // honeypot — must remain empty
  });
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent background scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/download-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guide_name: resolvedGuideName,
          name: f.name,
          email: f.email,
          organisation: f.organisation,
          role: f.role,
          properties_range: f.propertiesRange,
          marketing_consent: f.marketingConsent,
          company_website: f.companyWebsite, // honeypot
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-lg bg-surface border border-(--color-border) rounded-2xl overflow-y-auto max-h-[90vh]">

        {/* Header row */}
        <div className="flex items-center justify-between px-6 pt-6 pb-0">
          <span className="flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-widest">
            <IconFileDownload size={13} stroke={2} />
            Free download
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-fg-subtle hover:text-fg transition-colors"
          >
            <IconX size={18} stroke={1.5} />
          </button>
        </div>

        {status === "success" ? (
          <div className="px-6 py-10 flex flex-col items-center gap-3 text-center">
            <p className="text-lg font-bold text-fg">Check your inbox.</p>
            <p className="text-sm text-fg-muted leading-relaxed">
              The template for <strong className="text-fg">{title}</strong> is on its way.
            </p>
            <button
              onClick={onClose}
              className="mt-4 text-sm text-fg-subtle hover:text-fg transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="px-6 pt-4 pb-6 flex flex-col gap-5">

            {/* Title + description */}
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold text-fg">{title}</h2>
              <p className="text-sm text-fg-muted leading-relaxed">
                {format === "pdf"
                  ? "A printable 7-page PDF. Tell us a little about you and we’ll email it."
                  : format === "word"
                  ? "A fillable Word template. Tell us a little about you and we’ll email it."
                  : "Tell us a little about you and we’ll email the template."}
              </p>
            </div>

            {/* Name + Email */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={fieldLabel}>Full name</label>
                <input
                  required
                  className={inputCls}
                  placeholder="Jane Smith"
                  value={f.name}
                  onChange={(e) => setF((p) => ({ ...p, name: e.target.value }))}
                />
              </div>
              <div>
                <label className={fieldLabel}>Work email</label>
                <input
                  required
                  type="email"
                  className={inputCls}
                  placeholder="jane@example.co.uk"
                  value={f.email}
                  onChange={(e) => setF((p) => ({ ...p, email: e.target.value }))}
                />
              </div>
            </div>

            {/* Organisation */}
            <div>
              <label className={fieldLabel}>Organisation</label>
              <input
                className={inputCls}
                placeholder="Smith Surveyors Ltd"
                value={f.organisation}
                onChange={(e) => setF((p) => ({ ...p, organisation: e.target.value }))}
              />
            </div>

            {/* Role radio grid */}
            <div>
              <label className={fieldLabel}>I work as a…</label>
              <div className="grid grid-cols-2 gap-2">
                {ROLES.map((r) => {
                  const selected = f.role === r.value;
                  return (
                    <label
                      key={r.value}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                        selected
                          ? "border-(--color-accent-border) bg-(--color-accent-soft)"
                          : "border-(--color-border) hover:border-(--color-border-emphasis)"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={r.value}
                        checked={selected}
                        onChange={() => setF((p) => ({ ...p, role: r.value }))}
                        className="sr-only"
                      />
                      <span
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          selected ? "border-accent" : "border-fg-subtle"
                        }`}
                      >
                        {selected && <span className="w-2 h-2 rounded-full bg-accent block" />}
                      </span>
                      <span className="text-sm text-fg leading-snug">{r.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Properties range */}
            <div>
              <label className={fieldLabel}>Properties under your responsibility</label>
              <select
                className={`${inputCls} appearance-none`}
                value={f.propertiesRange}
                onChange={(e) => setF((p) => ({ ...p, propertiesRange: e.target.value }))}
              >
                <option value="">Select range…</option>
                {PROPERTY_RANGES.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>

            {/* Marketing consent */}
            <label className="flex items-start gap-3 border border-(--color-border) rounded-lg p-4 cursor-pointer hover:border-(--color-border-emphasis) transition-colors">
              <input
                type="checkbox"
                className="sr-only"
                checked={f.marketingConsent}
                onChange={(e) => setF((p) => ({ ...p, marketingConsent: e.target.checked }))}
              />
              <span
                className={`w-4 h-4 mt-0.5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                  f.marketingConsent ? "border-accent bg-accent" : "border-fg-subtle"
                }`}
              >
                {f.marketingConsent && (
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                    <path
                      d="M2 5l2.5 2.5L8 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
              <span className="text-sm text-fg-muted leading-relaxed">
                Send me occasional updates from Maple Diagnostics about Awaab&apos;s Law, new resources, and product news.{" "}
                <strong className="text-fg font-medium">Unsubscribe anytime.</strong>
              </span>
            </label>

            {/* Honeypot — hidden from humans, filled by bots */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                value={f.companyWebsite}
                onChange={(e) => setF((p) => ({ ...p, companyWebsite: e.target.value }))}
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-danger-text">Something went wrong — please try again.</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center justify-center gap-2.5 w-full bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-semibold text-sm px-6 py-4 rounded-xl transition-colors"
            >
              <IconSend size={15} stroke={2} />
              {status === "loading" ? "Sending…" : "Email me the template"}
            </button>

            {/* Legal */}
            <p className="text-xs text-fg-faint text-center leading-relaxed">
              We use your details under{" "}
              <a href="/privacy" className="text-accent underline hover:text-accent-light transition-colors">
                legitimate interests
              </a>{" "}
              to send you the resource and respond to enquiries. No marketing without your explicit opt-in above.
            </p>

          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
