import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Pill from "@/components/Pill/Pill";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import PricingTiers from "@/components/PricingTiers/PricingTiers";
import { IconBriefcase, IconUsers, IconFileText, IconShieldCheck } from "@tabler/icons-react";
import { ORG_ID } from "@/lib/seo";

export const metadata: Metadata = {
  title: "For Letting Agents",
  description:
    "Protect your clients and your agency from damp and mould disrepair claims. Court-ready evidence for every managed property.",
  keywords: [
    "letting agent damp compliance",
    "managed property mould evidence",
    "Awaab's Law letting agent",
    "disrepair claim defence agent",
    "court-ready report managed property",
  ],
  openGraph: {
    title: "For Letting Agents — Maple Diagnostics",
    description:
      "Court-ready damp and mould evidence for every managed property. Protect your landlord clients and your agency from disrepair claims.",
    url: "/agents",
  },
  twitter: {
    title: "For Letting Agents — Maple Diagnostics",
    description:
      "Court-ready damp and mould evidence for every managed property.",
  },
  alternates: { canonical: "/agents" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Damp & Mould Diagnostic Kit for Letting Agents",
  provider: { "@id": ORG_ID },
  description:
    "Court-ready 14-day sensor evidence for letting agents managing damp and mould complaints across a landlord portfolio. Protects both agent and client from disrepair claims.",
  // offers: [
  //   { "@type": "Offer", name: "Starter Report", price: "149", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
  //   { "@type": "Offer", name: "Professional Report", price: "249", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
  //   {
  //     "@type": "Offer",
  //     name: "Portfolio Monitoring",
  //     priceCurrency: "GBP",
  //     priceSpecification: { "@type": "UnitPriceSpecification", price: "49", priceCurrency: "GBP", unitText: "MON" },
  //   },
  // ],
  audience: { "@type": "Audience", audienceType: "Letting Agents" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
};

const risks = [
  {
    label: "Landlord blames agent for missed compliance",
    value: "Lost client",
    context: "Plus potential negligence claim",
  },
  {
    label: "Ombudsman case with no evidence trail for social housing clients",
    value: "up to £32k",
    context: "Per property finding",
  },
   {
    label: "Ombudsman case with no evidence trail for private clients",
    value: "county court disrepair claims £2k–£25k typical settlement",
    context: "Per property finding",
  },
  {
    label: "Disrepair solicitor — initial instruction",
    value: "£500+",
    context: "Before you've responded",
  },
  {
    label: "Maple Diagnostics per-property report",
    value: "£249",
    context: "Evidence. Report. Defence.",
  },
];

const reasons = [
  {
    icon: <IconBriefcase size={24} stroke={1.5} />,
    title: "You're the first point of contact",
    body: "When a tenant reports damp, they call your office — not the landlord. For social housing clients, the Awaab's Law 10-day investigation clock starts immediately. Missing it is your liability to explain.",
  },
  {
    icon: <IconUsers size={24} stroke={1.5} />,
    title: "Your clients depend on your due diligence",
    body: "Landlords trust you to manage compliance. An Ombudsman ruling against one of your managed properties reflects directly on your agency — even if the landlord caused the issue.",
  },
  {
    icon: <IconFileText size={24} stroke={1.5} />,
    title: "Dispute resolution is part of your service",
    body: "Distinguishing structural damp from condensation protects your landlord client's position. Without sensor data, you're guessing — and guesses don't hold up in front of a solicitor.",
  },
  {
    icon: <IconShieldCheck size={24} stroke={1.5} />,
    title: "Differentiate your agency",
    body: "Offering Maple Diagnostics as part of your managed service is a commercial differentiator. Landlords choosing between agencies will favour one that actively protects their compliance position.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Complaint received",
    body: "Tenant reports damp or mould. Log the date — for social housing clients, this starts the 10-day investigation clock under Awaab's Law.",
  },
  {
    step: "02",
    title: "Dispatch sensor kit",
    body: "Order a kit for the affected property. Same-day dispatch. No technical setup — tenant plugs in the sensors.",
  },
  {
    step: "03",
    title: "14-day monitoring window",
    body: "Sensors continuously log humidity, temperature, and surface conditions. Data is timestamped and tamper-evident.",
  },
  {
    step: "04",
    title: "Generate report",
    body: "Upload sensor data. Get a court-ready PDF classifying structural defect vs. condensation cause with full evidence trail.",
  },
  {
    step: "05",
    title: "Issue written findings",
    body: "Use the report to issue written findings to the tenant within 3 working days of completing the investigation — as required under Awaab's Law for social housing clients, and best practice for all managed properties.",
  },
  {
    step: "06",
    title: "Case closed",
    body: "Evidence on file. Landlord protected. Ombudsman case defensible. Tenant formally responded to with objective data.",
  },
];

export default function AgentsPage() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 w-full pt-8 md:pt-16 flex flex-col gap-6">
        <div className="flex flex-col gap-4 max-w-3xl">
          <Pill text="For letting agents" type="info" />
          <h1 className="text-4xl md:text-5xl font-bold">
            Your managed properties.{" "}
            <span className="text-accent">Your compliance risk.</span>
          </h1>
          <p className="text-fg-muted text-base max-w-2xl">
            Letting agents sit between landlords and tenants — and between their landlord clients and disrepair claims. When a damp complaint arrives in a property managed for a social housing client, the Awaab&apos;s Law clock starts. For private letting clients, the Pre-Action Protocol clock can start at any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/order"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Order a kit for your client
            </a>
            <a
              href="/awaabs-law"
              className="inline-flex items-center justify-center border border-(--color-border) text-fg px-6 py-3 rounded-lg font-medium transition-colors hover:border-fg-muted"
            >
              Awaab&apos;s Law timeline
            </a>
          </div>
        </div>
      </section>

      {/* Risk comparison */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">The cost of getting it wrong</p>
          <h2 className="text-3xl font-bold">£249 per property. Not £25,000.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {risks.map((item, i) => (
            <div
              key={item.label}
              className={`bg-surface border rounded-xl p-6 flex flex-col gap-2 ${
                i === risks.length - 1 ? "border-accent" : "border-(--color-border)"
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

      {/* Why agents */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Why it matters for agents</p>
          <h2 className="text-3xl font-bold">Four reasons your agency is exposed.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-surface border border-(--color-border) rounded-xl p-6 flex flex-col gap-3"
            >
              <span className="text-accent">{item.icon}</span>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-fg-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Your workflow</p>
          <h2 className="text-3xl font-bold">From complaint to closed case in 14 days.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflow.map((item) => (
            <div key={item.step} className="flex flex-col gap-2">
              <p className="text-xs font-mono text-fg-subtle">{item.step}</p>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-fg-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      {/* <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="bg-surface border border-(--color-border) rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="text-lg text-fg-muted italic leading-relaxed">
              &ldquo;We had three simultaneous Ombudsman complaints. Maple Diagnostics gave us timestamped
              sensor data for every property. All three cases were closed in our favour within 6 weeks.&rdquo;
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold">Sarah Chen</p>
              <p className="text-xs text-fg-subtle">Operations Director · Midlands Letting Agency</p>
            </div>
          </div>
          <div className="md:border-l border-(--color-border) md:pl-8 flex flex-col gap-1">
            <p className="text-3xl font-bold text-accent">3/3</p>
            <p className="text-sm text-fg-muted">Ombudsman cases closed in favour</p>
          </div>
        </div>
      </section> */}

      {/* Pricing */}
      {/* <PricingTiers
        eyebrow="Agent pricing"
        heading="Per-property or portfolio-wide — your choice."
        tiers={[
          {
            name: "Starter Report",
            price: "£249",
            description: "Single property. One dispute to resolve.",
            features: [
              "14-day equipment rental",
              "1-property diagnostic report",
              "Court-ready PDF",
            ],
            ctaLabel: "Order kit",
            href: "/order?kit=starter",
          },
          {
            name: "Professional Report",
            price: "£249",
            description: "Multi-room or complex dispute for a managed property.",
            features: [
              "14-day equipment rental",
              "3-room diagnostic report",
              "Written findings summary",
              "Ombudsman template",
            ],
            ctaLabel: "Order kit",
            href: "/order?kit=professional",
            featured: true,
          },
          {
            name: "Portfolio Monitoring",
            price: "£49",
            period: "/month per property",
            description: "Always-on for your full managed portfolio.",
            features: [
              "Always-on sensors",
              "Monthly reports + alerts",
              "Portfolio dashboard",
            ],
            ctaLabel: "Start monitoring",
            href: "/order?kit=portfolio",
          },
        ]}
        footnote={
          <>
            Managing 20+ properties?{" "}
            <Link href="#" className="text-fg underline hover:text-accent-light transition-colors">
              Agency volume pricing →
            </Link>
            {" · "}
            RICS surveyor?{" "}
            <Link href="#" className="text-fg underline hover:text-accent-light transition-colors">
              Practice licence at £79/mo →
            </Link>
          </>
        }
      /> */}

      <CtaBanner
        heading="Your tenant just reported damp. What do you do next?"
        body="Order a kit for the property today. Evidence collected, report ready, case closed."
        primaryCta={{ label: "Order kit — £249", href: "/order" }}
        secondaryCta={{ label: "Download sample report", href: "#" }}
      />

      <Footer />
    </main>
  );
}
