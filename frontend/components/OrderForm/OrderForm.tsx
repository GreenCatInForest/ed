"use client";

import { useState } from "react";
import { IconCheck, IconShieldCheck, IconTruck, IconFileReport } from "@tabler/icons-react";

// ─── Kit data ─────────────────────────────────────────────────────────────────

const KITS = [
  {
    id: "starter",
    name: "Starter Report",
    price: "£149",
    priceNote: "one-time",
    description: "Single damp or mould dispute. Evidence in 14 days.",
    features: ["14-day equipment rental", "1-room diagnostic", "Court-ready PDF", "Same-day dispatch"],
  },
  {
    id: "professional",
    name: "Professional Report",
    price: "£249",
    priceNote: "one-time",
    description: "Multi-room or Awaab's Law compliance. Includes written findings.",
    features: [
      "14-day equipment rental",
      "Up to 3-room diagnostic",
      "Court-ready PDF",
      "Written findings summary",
      "Ombudsman response template",
    ],
    featured: true,
  },
  {
    id: "portfolio",
    name: "Portfolio Monitoring",
    price: "£49",
    priceNote: "/month per property",
    description: "Always-on monitoring. Cancel anytime.",
    features: ["Continuous 24/7 sensors", "Monthly reports + alerts", "Portfolio dashboard"],
  },
];

type KitId = "starter" | "professional" | "portfolio";

// ─── Shared input styles ──────────────────────────────────────────────────────

const inp =
  "w-full bg-surface border border-(--color-border-input) rounded-lg px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:outline-none focus:border-accent transition-colors";
const lbl = "block text-sm font-medium text-fg mb-1.5";

type Status = "idle" | "loading" | "success" | "error";

// ─── Address block ────────────────────────────────────────────────────────────

interface Address {
  line1: string;
  line2: string;
  city: string;
  county: string;
  postcode: string;
}

const emptyAddress = (): Address => ({
  line1: "",
  line2: "",
  city: "",
  county: "",
  postcode: "",
});

function AddressFields({
  value,
  onChange,
  required,
}: {
  value: Address;
  onChange: (v: Address) => void;
  required?: boolean;
}) {
  const set = (k: keyof Address) => (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange({ ...value, [k]: e.target.value });

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className={lbl}>Address line 1</label>
        <input
          required={required}
          className={inp}
          placeholder="12 Example Street"
          value={value.line1}
          onChange={set("line1")}
        />
      </div>
      <div>
        <label className={lbl}>
          Address line 2{" "}
          <span className="text-fg-subtle font-normal">(optional)</span>
        </label>
        <input
          className={inp}
          placeholder="Flat, suite, unit…"
          value={value.line2}
          onChange={set("line2")}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-1">
          <label className={lbl}>Town / City</label>
          <input
            required={required}
            className={inp}
            placeholder="Cambridge"
            value={value.city}
            onChange={set("city")}
          />
        </div>
        <div>
          <label className={lbl}>
            County <span className="text-fg-subtle font-normal">(optional)</span>
          </label>
          <input
            className={inp}
            placeholder="Cambridgeshire"
            value={value.county}
            onChange={set("county")}
          />
        </div>
        <div>
          <label className={lbl}>Postcode</label>
          <input
            required={required}
            className={inp}
            placeholder="CB1 1AA"
            value={value.postcode}
            onChange={set("postcode")}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────

function SectionHeader({ num, title }: { num: number; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-accent/15 text-accent-light text-xs font-semibold shrink-0">
        {num}
      </span>
      <h2 className="text-base font-semibold text-fg">{title}</h2>
    </div>
  );
}

// ─── Order summary ────────────────────────────────────────────────────────────

function OrderSummary({ kitId }: { kitId: KitId }) {
  const kit = KITS.find((k) => k.id === kitId)!;

  return (
    <div className="bg-surface border border-(--color-border) rounded-2xl p-6 flex flex-col gap-5 sticky top-6">
      <div>
        <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium mb-3">
          Order summary
        </p>
        {kit.featured && (
          <span className="inline-block text-xs font-semibold text-accent bg-accent/10 border border-(--color-accent-border) px-2 py-0.5 rounded-full mb-2">
            Most popular
          </span>
        )}
        <p className="font-semibold text-fg">{kit.name}</p>
        <p className="text-xs text-fg-muted mt-0.5">{kit.description}</p>
      </div>

      <div className="border-t border-(--color-border) pt-4 flex items-baseline gap-1.5">
        <span className="text-3xl font-bold text-fg">{kit.price}</span>
        <span className="text-sm text-fg-muted">{kit.priceNote}</span>
      </div>

      <ul className="flex flex-col gap-2">
        {kit.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-fg-muted">
            <IconCheck size={14} stroke={2} className="text-success shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="border-t border-(--color-border) pt-4 flex flex-col gap-3">
        {[
          { icon: <IconTruck size={14} stroke={1.5} />, text: "Same-day dispatch (orders before 2 pm)" },
          { icon: <IconFileReport size={14} stroke={1.5} />, text: "Report delivered within 24 h of data upload" },
          { icon: <IconShieldCheck size={14} stroke={1.5} />, text: "Court-ready, timestamped evidence" },
        ].map(({ icon, text }) => (
          <div key={text} className="flex items-start gap-2 text-xs text-fg-subtle">
            <span className="mt-px shrink-0">{icon}</span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Success screen ───────────────────────────────────────────────────────────

function SuccessScreen({ kit }: { kit: KitId }) {
  const k = KITS.find((k) => k.id === kit)!;
  return (
    <div className="flex flex-col items-center gap-6 py-16 text-center max-w-md mx-auto">
      <div className="w-14 h-14 rounded-full bg-success/10 border border-success/20 flex items-center justify-center">
        <IconCheck size={28} stroke={2} className="text-success" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Order received</h2>
        <p className="text-fg-muted text-sm">
          Thank you — we&apos;ve received your {k.name} order and will be in touch shortly with
          dispatch confirmation. Kits ordered before 2 pm ship the same day.
        </p>
      </div>
      <div className="bg-surface border border-(--color-border) rounded-xl p-5 w-full text-left flex flex-col gap-2">
        <p className="text-xs text-fg-subtle uppercase tracking-widest font-medium">What happens next</p>
        {[
          "We confirm your order by email within 1 hour",
          "Kit dispatched via tracked next-day delivery",
          "Place sensors — no installation required",
          "Upload data after 14 days to generate your report",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-fg-muted pt-2">
            <span className="text-xs font-mono text-fg-faint mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main form ────────────────────────────────────────────────────────────────

export default function OrderForm({ defaultKit = "professional" }: { defaultKit?: string }) {
  const validDefault = KITS.find((k) => k.id === defaultKit)?.id ?? "professional";

  const [selectedKit, setSelectedKit] = useState<KitId>(validDefault as KitId);
  const [sameAddress, setSameAddress] = useState(true);
  const [status, setStatus] = useState<Status>("idle");

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
  });

  const [delivery, setDelivery] = useState<Address>(emptyAddress());
  const [property, setProperty] = useState<Address>(emptyAddress());
  const [notes, setNotes] = useState("");

  const setContactField =
    (k: keyof typeof contact) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setContact((p) => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const kit = KITS.find((k) => k.id === selectedKit)!;
    const propertyAddress = sameAddress ? delivery : property;

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kit: kit.name,
          kitPrice: kit.price,
          ...contact,
          delivery,
          propertyAddress,
          notes,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") return <SuccessScreen kit={selectedKit} />;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

        {/* ── Left: form fields ──────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col gap-10 min-w-0">

          {/* 1. Kit selection */}
          <section>
            <SectionHeader num={1} title="Choose your kit" />
            <div className="flex flex-col gap-3">
              {KITS.map((kit) => {
                const selected = selectedKit === kit.id;
                return (
                  <button
                    key={kit.id}
                    type="button"
                    onClick={() => setSelectedKit(kit.id as KitId)}
                    className={`text-left p-5 rounded-xl border transition-colors ${
                      selected
                        ? "bg-accent/8 border-(--color-accent-border)"
                        : "bg-surface border-(--color-border) hover:border-(--color-border-emphasis)"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-1 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-fg">{kit.name}</span>
                          {kit.featured && (
                            <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                              Most popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-fg-subtle">{kit.description}</p>
                      </div>
                      <div className="flex flex-col items-end shrink-0">
                        <span className={`text-base font-bold ${selected ? "text-accent" : "text-fg"}`}>
                          {kit.price}
                        </span>
                        <span className="text-xs text-fg-subtle">{kit.priceNote}</span>
                      </div>
                    </div>

                    {selected && (
                      <ul className="mt-3 pt-3 border-t border-(--color-accent-border) flex flex-col gap-1.5">
                        {kit.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-fg-muted">
                            <IconCheck size={12} stroke={2.5} className="text-success shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* 2. Contact details */}
          <section>
            <SectionHeader num={2} title="Your details" />
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={lbl}>Full name</label>
                  <input
                    required
                    className={inp}
                    placeholder="Jane Smith"
                    value={contact.name}
                    onChange={setContactField("name")}
                  />
                </div>
                <div>
                  <label className={lbl}>
                    Organisation{" "}
                    <span className="text-fg-subtle font-normal">(optional)</span>
                  </label>
                  <input
                    className={inp}
                    placeholder="Smith Properties Ltd"
                    value={contact.organisation}
                    onChange={setContactField("organisation")}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={lbl}>Email address</label>
                  <input
                    required
                    type="email"
                    className={inp}
                    placeholder="jane@company.com"
                    value={contact.email}
                    onChange={setContactField("email")}
                  />
                </div>
                <div>
                  <label className={lbl}>Phone number</label>
                  <input
                    required
                    type="tel"
                    className={inp}
                    placeholder="+44 7700 900000"
                    value={contact.phone}
                    onChange={setContactField("phone")}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 3. Delivery address */}
          <section>
            <SectionHeader num={3} title="Delivery address" />
            <AddressFields value={delivery} onChange={setDelivery} required />
          </section>

          {/* 4. Property address */}
          <section>
            <SectionHeader num={4} title="Property address" />
            <p className="text-sm text-fg-muted -mt-2 mb-4">
              Where will the sensors be installed?
            </p>
            <label className="flex items-center gap-3 cursor-pointer mb-5 group">
              <span
                onClick={() => setSameAddress((v) => !v)}
                className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                  sameAddress
                    ? "bg-accent border-accent"
                    : "border-(--color-border-input) bg-surface"
                }`}
              >
                {sameAddress && <IconCheck size={12} stroke={2.5} className="text-white" />}
              </span>
              <span
                className="text-sm text-fg select-none"
                onClick={() => setSameAddress((v) => !v)}
              >
                Same as delivery address
              </span>
            </label>
            {!sameAddress && (
              <AddressFields value={property} onChange={setProperty} required />
            )}
          </section>

          {/* 5. Notes */}
          <section>
            <SectionHeader num={5} title="Additional notes" />
            <div>
              <label className={lbl}>
                Notes{" "}
                <span className="text-fg-subtle font-normal">(optional)</span>
              </label>
              <p className="text-xs text-fg-subtle mb-2">
                Urgency, number of affected rooms, any access requirements, or context about
                the dispute.
              </p>
              <textarea
                rows={4}
                className={inp}
                placeholder="e.g. Live Ombudsman complaint — investigation deadline this Friday"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </section>

          {/* Error + submit */}
          <div className="flex flex-col gap-3">
            {status === "error" && (
              <p className="text-sm text-danger-text">
                Something went wrong. Please try again or email us directly at{" "}
                <a href="mailto:maple-diagnostics@cambridgelogic.com" className="underline">
                  maple-diagnostics@cambridgelogic.com
                </a>
              </p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-semibold text-sm px-8 py-4 rounded-xl transition-colors flex items-center gap-2 self-start"
            >
              {status === "loading" ? (
                "Placing order…"
              ) : (
                <>
                  Place order —{" "}
                  {KITS.find((k) => k.id === selectedKit)?.price}
                </>
              )}
            </button>
            <p className="text-xs text-fg-subtle">
              We&apos;ll confirm by email within 1 hour. Kits dispatched same day for orders before 2 pm.
            </p>
          </div>
        </div>

        {/* ── Right: sticky summary ──────────────────────────────────────── */}
        <div className="w-full lg:w-72 xl:w-80 shrink-0">
          <OrderSummary kitId={selectedKit} />
        </div>
      </div>
    </form>
  );
}
