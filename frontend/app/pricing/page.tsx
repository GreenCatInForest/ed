import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PricingTiers from "@/components/PricingTiers/PricingTiers";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import Testimonial from "@/components/Testimonial/Testimonial";
import PricingFaq from "@/components/PricingFaq/PricingFaq";
import { IconCheck, IconMinus, IconHome, IconBuildingCommunity, IconBuilding } from "@tabler/icons-react";

import type { Metadata } from "next";
import { SITE_URL, ORG_ID } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Court-ready damp and mould evidence from £249. One-time kit rental or ongoing portfolio monitoring. No contracts, no lock-in.",
  keywords: [
    "damp evidence kit price",
    "Awaab's Law compliance cost",
    "landlord mould diagnostic pricing",
    "portfolio monitoring housing association",
    "court-ready report cost",
  ],
  openGraph: {
    title: "Pricing — Maple Diagnostics",
    description:
      "Court-ready damp and mould evidence from £249. One-time kit rental or ongoing portfolio monitoring. No contracts, no lock-in.",
    url: "/pricing",
  },
  twitter: {
    title: "Pricing — Maple Diagnostics",
    description:
      "Court-ready damp and mould evidence from £249. One-time kit rental or ongoing portfolio monitoring. No contracts, no lock-in.",
  },
  alternates: { canonical: "/pricing" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What's included in the equipment rental?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every kit includes calibrated humidity, temperature, and surface-temperature sensors, a data logger, full setup instructions, and a prepaid return label. No installation is required — plug in and place.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly will I receive the kit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kits are dispatched same day for orders placed before 2 pm (Monday–Friday). Standard delivery is next working day.",
        },
      },
      {
        "@type": "Question",
        name: "Can I extend my 14-day rental?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Contact us before your rental period ends and we will extend it at £19 per additional week. Also you can switch to a proactive monitoring tier. Extensions do not affect your final report.",
        },
      },
      {
        "@type": "Question",
        name: "Is Portfolio Monitoring a minimum-term contract?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Portfolio Monitoring is billed monthly and can be cancelled any time with no notice period. Sensors must be returned upon cancellation; we send a prepaid label.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Starter kit satisfy Awaab's Law requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Starter kit provides objective sensor evidence but does not include the written findings summary required under Awaab's Law. Social landlords and housing associations should use the Professional report, which includes the formatted written findings and Ombudsman template.",
        },
      },
      {
        "@type": "Question",
        name: "Is the report admissible in court or with the Housing Ombudsman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Reports are timestamped, produced from calibrated sensors, and formatted to meet court evidence standards. They have been used successfully in Ombudsman proceedings and Pre-Action Protocol exchanges.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer volume or enterprise pricing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. For 10+ annual kits or 50+ properties on monitoring we offer negotiated rates, a dedicated account manager, and API access for property management systems. Contact us to discuss.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/pricing#service`,
    name: "Damp & Mould Diagnostic Kit",
    provider: { "@id": ORG_ID },
    offers: [
      { "@type": "Offer", name: "Starter Report", price: "149", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Professional Report", price: "249", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
      {
        "@type": "Offer",
        name: "Portfolio Monitoring",
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "49",
          priceCurrency: "GBP",
          unitText: "MON",
        },
      },
    ],
  },
];

// ─── Comparison table ────────────────────────────────────────────────────────

type CellValue = true | false | string;

interface Feature {
  label: string;
  starter: CellValue;
  professional: CellValue;
  portfolio: CellValue;
  group?: string;
}

const FEATURES: Feature[] = [
  // Evidence
  { group: "Evidence",      label: "disclosure-ready PDF report",           starter: true,         professional: true,       portfolio: true },
  {                         label: "Written findings summary",          starter: false,        professional: true,       portfolio: true },
  {                         label: "Ombudsman response template",       starter: false,        professional: true,       portfolio: true },
  {                         label: "Timestamped sensor data",           starter: true,         professional: true,       portfolio: true },
  {                         label: "Structural vs. condensation analysis",  starter: true,         professional: true,       portfolio: true },
  // Equipment
  { group: "Equipment",     label: "Equipment rental",                  starter: "14 days",    professional: "14 days",  portfolio: "Ongoing" },
  {                         label: "Rooms covered",                     starter: "1 room",     professional: "Up to 3",  portfolio: "Unlimited" },
  {                         label: "Continuous 24/7 monitoring",        starter: false,        professional: false,      portfolio: true },
  {                         label: "Portfolio dashboard",               starter: false,        professional: false,      portfolio: true },
  {                         label: "Monthly reports + alerts",          starter: false,        professional: false,      portfolio: true },
  // Support
  { group: "Support",       label: "Email support",                     starter: true,         professional: true,       portfolio: true },
  {                         label: "Compliance guidance notes",         starter: false,        professional: true,       portfolio: true },
  {                         label: "Same-day kit dispatch",             starter: true,         professional: true,       portfolio: true },
];

function Cell({ value }: { value: CellValue }) {
  if (value === true)
    return (
      <span className="flex items-center justify-center">
        <IconCheck size={16} stroke={2} className="text-success" />
      </span>
    );
  if (value === false)
    return (
      <span className="flex items-center justify-center">
        <IconMinus size={16} stroke={1.5} className="text-fg-faint" />
      </span>
    );
  return <span className="text-xs text-fg-muted text-center block">{value}</span>;
}

function ComparisonTable() {
  let lastGroup = "";
  return (
    <div className="overflow-x-auto -mx-6 px-6">
      <table className="w-full min-w-[600px] text-sm border-collapse">
        <thead>
          <tr className="border-b border-(--color-border)">
            <th className="text-left py-4 pr-6 font-medium text-fg-subtle w-1/2" />
            <th className="py-4 px-4 text-center font-semibold text-fg">Starter<br /><span className="font-normal text-fg-muted text-xs">£249</span></th>
            <th className="py-4 px-4 text-center font-semibold text-fg bg-accent/5 border-x border-(--color-accent-border)">
              Professional<br /><span className="font-normal text-fg-muted text-xs">£249</span>
            </th>
            <th className="py-4 px-4 text-center font-semibold text-fg">Portfolio<br /><span className="font-normal text-fg-muted text-xs">£49/mo</span></th>
          </tr>
        </thead>
        <tbody>
          {FEATURES.map((f, i) => {
            const showGroup = f.group && f.group !== lastGroup;
            if (f.group) lastGroup = f.group;
            return (
              <>
                {showGroup && (
                  <tr key={`group-${f.group}`}>
                    <td colSpan={4} className="pt-6 pb-2 text-xs uppercase tracking-widest text-fg-subtle font-medium">
                      {f.group}
                    </td>
                  </tr>
                )}
                <tr key={i} className="border-b border-(--color-border) last:border-0">
                  <td className="py-3 pr-6 text-fg-muted">{f.label}</td>
                  <td className="py-3 px-4"><Cell value={f.starter} /></td>
                  <td className="py-3 px-4 bg-accent/5 border-x border-(--color-accent-border)"><Cell value={f.professional} /></td>
                  <td className="py-3 px-4"><Cell value={f.portfolio} /></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── Audience match cards ─────────────────────────────────────────────────────

const AUDIENCES = [
  {
    icon: <IconHome size={22} stroke={1.5} />,
    who: "Private landlord",
    situation: "You've received a damp or mould complaint — or want evidence before one arrives.",
    tier: "Starter — £249",
    cta: "Order kit",
    href: "/order",
  },
  {
    icon: <IconBuilding size={22} stroke={1.5} />,
    who: "Letting agent · Social landlord",
    situation: "Active Awaab's Law investigation or multi-room dispute. You need written findings.",
    tier: "Professional — £249",
    cta: "Order kit",
    href: "/order",
    featured: true,
  },
  {
    icon: <IconBuildingCommunity size={22} stroke={1.5} />,
    who: "Housing association · Portfolio landlord",
    situation: "Ongoing compliance across multiple properties. Catch problems before complaints.",
    tier: "Portfolio — £49/mo",
    cta: "Start monitoring",
    href: "/order",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-4 pt-4">
        <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Transparent pricing</p>
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
          Pay for evidence.{" "}
          <span className="text-accent">Not subscriptions.</span>
        </h1>
        <p className="text-fg-muted text-base max-w-xl">
          One-time kit rental from £249. Ongoing portfolio monitoring from £49 per property per month.
          No setup fees, no contracts, no lock-in.
        </p>
        <div className="flex gap-6 mt-2">
          <div>
            <p className="text-2xl font-bold text-accent">£249</p>
            <p className="text-xs text-fg-subtle mt-0.5">one-time diagnostic</p>
          </div>
          <div className="w-px bg-(--color-border)" />
          <div>
            <p className="text-2xl font-bold text-fg">£49</p>
            <p className="text-xs text-fg-subtle mt-0.5">per property / month</p>
          </div>
          <div className="w-px bg-(--color-border)" />
          <div>
            <p className="text-2xl font-bold text-fg">Same day</p>
            <p className="text-xs text-fg-subtle mt-0.5">kit dispatch</p>
          </div>
        </div>
      </section>

      {/* ── Pricing tiers ──────────────────────────────────────────────────── */}
      {/* <PricingTiers
        eyebrow="Choose your kit"
        heading="Three ways to protect yourself."
        tiers={[
          {
            name: "Starter Report",
            price: "£249",
            description: "A single damp or mould dispute. Evidence delivered in 14 days.",
            features: [
              "14-day equipment rental",
              "1-room diagnostic",
              "Court-ready PDF report",
              "Same-day dispatch",
            ],
            ctaLabel: "Order kit",
            href: "/order?kit=starter",
          },
          {
            name: "Professional Report",
            price: "£249",
            description: "Multi-room disputes, letting agents, and Awaab's Law compliance.",
            features: [
              "14-day equipment rental",
              "Up to 3-room diagnostic",
              "Court-ready PDF report",
              "Written findings summary",
              "Ombudsman response template",
              "Compliance guidance notes",
            ],
            ctaLabel: "Order kit",
            href: "/order?kit=professional",
            featured: true,
          },
          {
            name: "Portfolio Monitoring",
            price: "£49",
            period: "/month per property",
            description: "Always-on monitoring for housing associations and large landlords.",
            features: [
              "Continuous 24/7 sensors",
              "Monthly reports + alerts",
              "Portfolio dashboard",
              "Written findings on demand",
              "Cancel anytime",
            ],
            ctaLabel: "Start monitoring",
            href: "/order?kit=portfolio",
          },
        ]}
        footnote={
          <>
            50+ properties?{" "}
            <Link href="/contact" className="text-fg underline hover:text-accent-light transition-colors">
              Enterprise pricing →
            </Link>
            {" · "}
            RICS surveyor?{" "}
            <Link href="/contact" className="text-fg underline hover:text-accent-light transition-colors">
              Practice licence at £79/mo →
            </Link>
          </>
        }
      /> */}

      {/* ── Enterprise callout ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="bg-surface border border-(--color-border) rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Enterprise</p>
            <h2 className="text-2xl font-bold">Managing 50+ properties?</h2>
            <p className="text-sm text-fg-muted max-w-lg">
              Negotiated rates, dedicated account manager, API access for your property management
              system, white-label reports, and custom SLA. We work directly with housing association
              procurement teams.
            </p>
            <ul className="flex flex-col gap-1.5 mt-1">
              {[
                "Volume-discounted kit pricing",
                "API integration with your PMS",
                "White-label reports",
                "Dedicated compliance manager",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-fg-muted">
                  <IconCheck size={14} stroke={2} className="text-success shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors text-center"
            >
              Talk to us
            </Link>
            <p className="text-xs text-fg-subtle text-center">Usually responds within 1 working day</p>
          </div>
        </div>
      </section>

      {/* ── Comparison table ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Side by side</p>
          <h2 className="text-3xl font-bold">What's in each kit.</h2>
        </div>
        <ComparisonTable />
      </section>

      {/* ── Which kit is right for you ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Not sure which to choose?</p>
          <h2 className="text-3xl font-bold">Match your situation.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AUDIENCES.map((a) => (
            <div
              key={a.who}
              className={`flex flex-col gap-4 p-6 rounded-xl border ${
                a.featured
                  ? "bg-accent/5 border-(--color-accent-border)"
                  : "bg-surface border-(--color-border)"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={a.featured ? "text-accent" : "text-fg-subtle"}>{a.icon}</span>
                <p className="text-sm font-semibold">{a.who}</p>
              </div>
              <p className="text-sm text-fg-muted flex-1">{a.situation}</p>
              <div className="border-t border-(--color-border) pt-4 flex flex-col gap-3">
                <p className="text-xs text-fg-subtle uppercase tracking-widest font-medium">Recommended</p>
                <p className="font-semibold text-fg">{a.tier}</p>
                <Link
                  href={a.href}
                  className={`text-center text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors ${
                    a.featured
                      ? "bg-accent hover:bg-accent-hover text-white"
                      : "border border-(--color-border) hover:border-(--color-border-emphasis) text-fg"
                  }`}
                >
                  {a.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonial ────────────────────────────────────────────────────── */}
      {/* <Testimonial
        items={[
          {
            quote:
              "Tenant claimed structural damp. Our Maple report showed condensation issues across all three rooms. The Shelter referral was withdrawn. We avoided an £8,000 disrepair claim.",
            name: "James Marshall",
            role: "Property Compliance Lead · Cambridgeshire HA",
            stat: { value: "£8,000", label: "Claim avoided" },
          },
          {
            quote:
              "As a private landlord with six properties I can't afford a solicitor for every dispute. The 14-day kit costs less than a single hour of legal advice and the report does the heavy lifting.",
            name: "David Okafor",
            role: "Private Landlord · Greater Manchester",
            stat: { value: "£249", label: "vs £350+ solicitor" },
          },
        ]}
      /> */}

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Common questions</p>
          <h2 className="text-3xl font-bold">Pricing FAQ.</h2>
        </div>
        <PricingFaq />
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CtaBanner
        heading="Day Zero starts today."
        body="Day 1 begins tomorrow. The investigation must complete by working-day 10."
        primaryCta={{ label: "Order kit — £249", href: "/order" }}
        secondaryCta={{ label: "Download sample report", href: "#" }}
      />

      <Footer />
    </main>
  );
}
