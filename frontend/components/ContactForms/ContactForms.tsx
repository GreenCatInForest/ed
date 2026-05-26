"use client";

import { useState } from "react";

type FormType = "guide" | "social" | "contact";
type Status = "idle" | "loading" | "success" | "error";

const ROLES = [
  { value: "private", label: "Private landlord" },
  { value: "social", label: "Social landlord" },
  { value: "agency", label: "Letting agency" },
  { value: "surveyor", label: "Surveyor" },
  { value: "other", label: "Other" },
];

const input =
  "w-full bg-surface border border-(--color-border-input) rounded-lg px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:border-accent transition-colors";
const label = "block text-sm font-medium text-fg mb-1.5";

async function submitForm(payload: Record<string, string>) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Request failed");
}

function SuccessMessage({ message }: { message: string }) {
  return (
    <div className="bg-success/10 border border-success/20 rounded-xl p-8 text-center">
      <p className="text-success-text font-semibold mb-2">Done!</p>
      <p className="text-sm text-fg-muted">{message}</p>
    </div>
  );
}

function RoleSelect({
  value,
  otherValue,
  onChange,
  onOtherChange,
}: {
  value: string;
  otherValue: string;
  onChange: (v: string) => void;
  onOtherChange: (v: string) => void;
}) {
  return (
    <div>
      <label className={label}>Who are you?</label>
      <select
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${input} appearance-none`}
      >
        <option value="">Select…</option>
        {ROLES.map((r) => (
          <option key={r.value} value={r.value}>
            {r.label}
          </option>
        ))}
      </select>
      {value === "other" && (
        <input
          required
          className={`${input} mt-2`}
          placeholder="Please describe your role"
          value={otherValue}
          onChange={(e) => onOtherChange(e.target.value)}
        />
      )}
    </div>
  );
}

function GuideDownloadForm() {
  const [f, setF] = useState({ name: "", company: "", email: "", role: "", roleOther: "", notes: "" });
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setF((p) => ({ ...p, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitForm({ type: "guide", ...f });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success")
    return <SuccessMessage message="Check your inbox — the guide is on its way." />;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Full name</label>
          <input required className={input} placeholder="Jane Smith" value={f.name} onChange={set("name")} />
        </div>
        <div>
          <label className={label}>
            Company name <span className="text-fg-subtle font-normal">(optional)</span>
          </label>
          <input className={input} placeholder="Smith Properties Ltd" value={f.company} onChange={set("company")} />
        </div>
      </div>
      <div>
        <label className={label}>Email address</label>
        <input required type="email" className={input} placeholder="jane@company.com" value={f.email} onChange={set("email")} />
      </div>
      <RoleSelect
        value={f.role}
        otherValue={f.roleOther}
        onChange={(v) => setF((p) => ({ ...p, role: v, roleOther: "" }))}
        onOtherChange={(v) => setF((p) => ({ ...p, roleOther: v }))}
      />
      <div>
        <label className={label}>
          Notes <span className="text-fg-subtle font-normal">(optional)</span>
        </label>
        <textarea
          rows={4}
          className={input}
          placeholder="Anything else we should know?"
          value={f.notes}
          onChange={set("notes")}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-danger-text">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
      >
        {status === "loading" ? "Sending…" : "Download guide"}
      </button>
    </form>
  );
}

function SocialProgramForm() {
  const [f, setF] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    role: "",
    roleOther: "",
    purpose: "",
    notes: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setF((p) => ({ ...p, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitForm({ type: "social-program", ...f });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success")
    return (
      <SuccessMessage message="We'll review your application and get back to you within 2 working days." />
    );

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Full name</label>
          <input required className={input} placeholder="Jane Smith" value={f.name} onChange={set("name")} />
        </div>
        <div>
          <label className={label}>Company name</label>
          <input required className={input} placeholder="Smith Properties Ltd" value={f.company} onChange={set("company")} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Email address</label>
          <input required type="email" className={input} placeholder="jane@company.com" value={f.email} onChange={set("email")} />
        </div>
        <div>
          <label className={label}>
            Phone number <span className="text-fg-subtle font-normal">(optional)</span>
          </label>
          <input type="tel" className={input} placeholder="+44 7700 900000" value={f.phone} onChange={set("phone")} />
        </div>
      </div>
      <RoleSelect
        value={f.role}
        otherValue={f.roleOther}
        onChange={(v) => setF((p) => ({ ...p, role: v, roleOther: "" }))}
        onOtherChange={(v) => setF((p) => ({ ...p, roleOther: v }))}
      />
      <div>
        <label className={label}>Purpose</label>
        <input
          required
          className={input}
          placeholder="e.g. Monitor 3 properties affected by mould complaints"
          value={f.purpose}
          onChange={set("purpose")}
        />
      </div>
      <div>
        <label className={label}>
          Notes <span className="text-fg-subtle font-normal">(optional)</span>
        </label>
        <p className="text-xs text-fg-subtle mb-2">
          Include number of kits needed, property types, urgency, or any other context.
        </p>
        <textarea
          rows={4}
          className={input}
          placeholder="e.g. 4 kits, 2-bed social housing, live Ombudsman complaint"
          value={f.notes}
          onChange={set("notes")}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-danger-text">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
      >
        {status === "loading" ? "Submitting…" : "Apply for free installation"}
      </button>
    </form>
  );
}

function GeneralContactForm() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const set =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setF((p) => ({ ...p, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitForm({ type: "contact", ...f });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success")
    return <SuccessMessage message="We'll get back to you within 1–2 working days." />;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={label}>Full name</label>
          <input required className={input} placeholder="Jane Smith" value={f.name} onChange={set("name")} />
        </div>
        <div>
          <label className={label}>Email address</label>
          <input required type="email" className={input} placeholder="jane@company.com" value={f.email} onChange={set("email")} />
        </div>
      </div>
      <div>
        <label className={label}>Subject</label>
        <input required className={input} placeholder="What's this about?" value={f.subject} onChange={set("subject")} />
      </div>
      <div>
        <label className={label}>Message</label>
        <textarea
          required
          rows={6}
          className={input}
          placeholder="Tell us more…"
          value={f.message}
          onChange={set("message")}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-danger-text">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

const TABS: { id: FormType; label: string; description: string }[] = [
  {
    id: "guide",
    label: "Download a guide",
    description: "Get our compliance guide delivered to your inbox",
  },
  {
    id: "social",
    label: "Maple Social Program",
    description: "Apply for a free installation through our social housing initiative",
  },
  {
    id: "contact",
    label: "General enquiry",
    description: "Any other questions? We'll get back to you within 2 working days",
  },
];

export default function ContactForms() {
  const [active, setActive] = useState<FormType>("guide");
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-3">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`flex-1 text-left px-5 py-4 rounded-xl border transition-colors ${
              active === t.id
                ? "bg-accent/10 border-(--color-accent-border) text-fg"
                : "border-(--color-border) text-fg-muted hover:border-(--color-border-emphasis)"
            }`}
          >
            <span className="block text-sm font-semibold">{t.label}</span>
            <span className="block text-xs text-fg-subtle mt-0.5">{t.description}</span>
          </button>
        ))}
      </div>

      <div className="bg-surface border border-(--color-border) rounded-2xl p-6 md:p-8">
        <div className="mb-6 pb-6 border-b border-(--color-border)">
          <h2 className="text-xl font-semibold">{tab.label}</h2>
          <p className="text-sm text-fg-muted mt-1">{tab.description}</p>
        </div>
        {active === "guide" && <GuideDownloadForm />}
        {active === "social" && <SocialProgramForm />}
        {active === "contact" && <GeneralContactForm />}
      </div>
    </div>
  );
}
