import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Pill from "@/components/Pill/Pill";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import PricingTiers from "@/components/PricingTiers/PricingTiers";
import { IconShieldCheck, IconFileReport, IconCloudUpload, IconClock } from "@tabler/icons-react";

export const metadata = {
  title: "For Private Landlords — Maple Diagnostics",
  description:
    "Protect yourself from disrepair claims and Housing Ombudsman rulings. Court-ready damp and mould evidence for private landlords from £149.",
};

const risks = [
  {
    label: "Average disrepair claim",
    value: "£8,000",
    context: "Settled out of court",
  },
  {
    label: "Ombudsman finding — maladministration",
    value: "£2,000–25k",
    context: "Per property, per case",
  },
  {
    label: "Solicitor letter — first response",
    value: "£350+",
    context: "Before you've even replied",
  },
  {
    label: "Maple Diagnostics 14-day kit",
    value: "£149",
    context: "Evidence. Report. Done.",
  },
];

const steps = [
  {
    icon: <IconCloudUpload size={24} stroke={1.5} />,
    title: "Order online",
    body: "Choose your kit. Sensors are dispatched same day via tracked delivery.",
  },
  {
    icon: <IconClock size={24} stroke={1.5} />,
    title: "Monitor for 14 days",
    body: "Plug-in sensors record humidity, temperature, and surface conditions continuously. No WiFi setup required.",
  },
  {
    icon: <IconFileReport size={24} stroke={1.5} />,
    title: "Upload & generate report",
    body: "Upload sensor data to the platform. Get a court-ready PDF within minutes — structural defect vs. lifestyle cause, timestamped.",
  },
  {
    icon: <IconShieldCheck size={24} stroke={1.5} />,
    title: "Respond with evidence",
    body: "Use the report to respond to the tenant, solicitor, or Ombudsman. Objective data, not assertion.",
  },
];

const objections = [
  {
    myth: "\"The tenant is causing it themselves — I shouldn't need evidence.\"",
    reality:
      "The Ombudsman doesn't take your word for it. Without sensor data showing lifestyle-driven condensation (poor ventilation, cooking, drying laundry), you can't distinguish structural damp from tenant behaviour. The assumption goes against you.",
  },
  {
    myth: "\"I'll deal with it if they actually make a complaint.\"",
    reality:
      "By the time a Shelter referral or solicitor letter arrives, you're already in reactive mode. Pre-emptive monitoring is admissible evidence and demonstrates due diligence.",
  },
  {
    myth: "\"A surveyor's inspection should be enough.\"",
    reality:
      "A one-day visit creates a snapshot. Damp and mould is seasonal and behavioural — a 14-day continuous record shows patterns a single inspection cannot.",
  },
];

export default function LandlordsPage() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16">
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 w-full pt-8 md:pt-16 flex flex-col gap-6">
        <div className="flex flex-col gap-4 max-w-3xl">
          <Pill text="For private landlords" type="info" />
          <h1 className="text-4xl md:text-5xl font-bold">
            One tenant complaint.{" "}
            <span className="text-accent">One court-ready report.</span>
          </h1>
          <p className="text-fg-muted text-base max-w-2xl">
            Damp and mould disputes are the most common disrepair claims in the UK. Without objective
            timestamped evidence, you lose by default — regardless of what actually caused the problem.
            Maple Diagnostics gives you the data to defend yourself for £149.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/order"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Order your compliance kit
            </a>
            <a
              href="/awaabs-law"
              className="inline-flex items-center justify-center border border-(--color-border) text-fg px-6 py-3 rounded-lg font-medium transition-colors hover:border-fg-muted"
            >
              Learn about Awaab&apos;s Law
            </a>
          </div>
        </div>
      </section>

      {/* Risk comparison */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">The cost of inaction</p>
          <h2 className="text-3xl font-bold">£149 versus everything else.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {risks.map((item, i) => (
            <div
              key={item.label}
              className={`bg-surface border rounded-xl p-6 flex flex-col gap-2 ${
                i === risks.length - 1
                  ? "border-accent"
                  : "border-(--color-border)"
              }`}
            >
              <p className={`text-2xl font-bold ${i === risks.length - 1 ? "text-accent" : "text-fg"}`}>
                {item.value}
              </p>
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-xs text-fg-subtle">{item.context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">How it works</p>
          <h2 className="text-3xl font-bold">Four steps. Evidence in 14 days.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-fg-subtle text-xs font-mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-accent">{step.icon}</span>
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-fg-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objection handling */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Common assumptions</p>
          <h2 className="text-3xl font-bold">What landlords get wrong.</h2>
        </div>
        <div className="flex flex-col gap-4">
          {objections.map(({ myth, reality }) => (
            <div
              key={myth}
              className="bg-surface border border-(--color-border) rounded-xl p-6 flex flex-col gap-3"
            >
              <p className="text-fg-muted text-sm italic">{myth}</p>
              <p className="text-sm">{reality}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <PricingTiers
        eyebrow="Landlord pricing"
        heading="Pay per property. No subscription required."
        tiers={[
          {
            name: "Starter Report",
            price: "£149",
            description: "Single property dispute. 14-day evidence window.",
            features: [
              "14-day equipment rental",
              "1-property diagnostic report",
              "Court-ready PDF",
            ],
            ctaLabel: "Order kit",
          },
          {
            name: "Professional Report",
            price: "£249",
            description: "Multi-room property or complex dispute.",
            features: [
              "14-day equipment rental",
              "3-room diagnostic report",
              "Written findings summary",
              "Ombudsman template",
            ],
            ctaLabel: "Order kit",
            featured: true,
          },
          {
            name: "Portfolio Monitoring",
            price: "£49",
            period: "/month per property",
            description: "Continuous monitoring for multi-property landlords.",
            features: [
              "Always-on sensors",
              "Monthly reports + alerts",
              "Portfolio dashboard",
            ],
            ctaLabel: "Start monitoring",
          },
        ]}
        footnote={
          <>
            Managing 10+ properties?{" "}
            <a href="#" className="text-fg underline hover:text-accent-light transition-colors">
              Volume pricing →
            </a>
          </>
        }
      />

      <CtaBanner
        heading="A complaint arrived this morning. Evidence is due by Friday."
        body="Order your kit now. Sensors dispatched same day via tracked delivery."
        primaryCta={{ label: "Order kit — £149", href: "/order" }}
        secondaryCta={{ label: "Download sample report", href: "#" }}
      />

      <Footer />
    </main>
  );
}
