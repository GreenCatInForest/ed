import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import PricingTiers from "@/components/PricingTiers/PricingTiers";
import { IconShieldCheck, IconFileReport, IconCloudUpload, IconClock } from "@tabler/icons-react";
import LandlordsHero from "@/components/LandlordsHero/LandlordsHero";
import { ORG_ID } from "@/lib/seo";


export const metadata: Metadata = {
  title: "For Private Landlords",
  description:
    "Protect yourself from disrepair claims and local authority enforcement. Court-ready damp and mould evidence for private landlords from £249.",
  keywords: [
    "private landlord damp evidence",
    "disrepair claim defence",
    "HHSRS enforcement landlord",
    "mould complaint evidence UK",
    "court-ready damp report landlord",
  ],
  openGraph: {
    title: "For Private Landlords — Maple Diagnostics",
    description:
      "Court-ready damp and mould evidence for private landlords. Defend disrepair claims and local authority enforcement with objective sensor data.",
    url: "/landlords",
  },
  twitter: {
    title: "For Private Landlords — Maple Diagnostics",
    description:
      "Court-ready damp and mould evidence for private landlords.",
  },
  alternates: { canonical: "/landlords" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Damp & Mould Diagnostic Kit for Private Landlords",
  provider: { "@id": ORG_ID },
  description:
    "Court-ready 14-day sensor evidence for private landlords facing damp and mould complaints. Defends against disrepair claims and local authority HHSRS enforcement.",
  // offers: [
  //   { "@type": "Offer", name: "Starter Report", price: "249", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
  //   { "@type": "Offer", name: "Professional Report", price: "249", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
  // ],
  audience: { "@type": "Audience", audienceType: "Private Landlords" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
};

const risks = [
  {
    label: "Average disrepair claim",
    value: "£8,000",
    context: "Settled out of court",
  },
  {
    label: "HHSRS civil penalty — category 1 hazard",
    value: "£5,000–30k",
    context: "Local authority enforcement",
  },
  {
    label: "Solicitor letter — first response",
    value: "£350+",
    context: "Before you've even replied",
  },
  {
    label: "Maple Diagnostics 14-day kit",
    value: "£249",
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
    body: "Upload sensor data to the platform. Get a court-ready PDF within minutes — structural defect vs. condensation cause, timestamped.",
  },
  {
    icon: <IconShieldCheck size={24} stroke={1.5} />,
    title: "Respond with evidence",
    body: "Use the report to respond to the tenant, solicitor, or local authority. Objective data, not assertion.",
  },
];

const objections = [
  {
    myth: "\"What if my tenant won't let me install sensors?\"",
    reality:
      "Section 11(6) of the Landlord and Tenant Act 1985 gives you a right of entry to view the state and condition of the property with at least 24 hours' written notice. Our welcome pack includes a template Section 11 notice letter that meets statutory requirements.",
  },
  {
    myth: "\"The tenant is causing it themselves — I shouldn't need evidence.\"",
    reality:
      "Courts and local authorities won't take the word for it. Without sensor data showing condensation issues (poor ventilation, cooking, drying laundry), you can't distinguish structural damp from tenant behaviour. The assumption goes against you.",
  },
  {
    myth: "\"I'll deal with it if they actually make a complaint.\"",
    reality:
      "By the time a Shelter referral or solicitor letter arrives, you're already in reactive mode. Pre-emptive monitoring is admissible evidence and demonstrates due diligence.",
  },
  {
    myth: "\"A surveyor's inspection should be enough.\"",
    reality:
      "A one-day visit creates a snapshot. Damp and mould is seasonal and behavioural — a 10 or 14-day continuous record shows patterns a single inspection cannot.",
  },
];

export default function LandlordsPage() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>

      <LandlordsHero />

      {/* Risk comparison */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">The cost of inaction</p>
          <h2 className="text-3xl font-bold">£249 versus everything else.</h2>
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
        {/* <PricingTiers
        eyebrow="Transparent pricing"
        heading="Pay per property. Or monitor your whole portfolio."
        tiers={
          [
            {
              name: "Proactive Monitoring",
              price: "£33",
              period: "per month",
              description: "For proactive landlords and HAs. Ongoing compliance with continuous sensor data and monthly graphs.",
              features: [
                "3 months of always-on sensors",
                "Monthly graphs on the platform showing the dynamic of readings + mobile phone alerts in case of deviations",
                "Protective setup for any future complaints",
                "Ombudsman-ready proactive evidence trail",
                "Demonstrate duty of care and proactive compliance",
                "Reports to show your ongoing efforts to resolve damp and mould issues",
              ],
              ctaLabel: "Start monitoring",
              href: "/order?kit=monitoring",
            },
            {
              name: "Emergency kit",
              price: "£249",
              description: "For private landlords with a single mould dispute to resolve. Registered providers with an active complaint. Protect your rights from day 1.",
              features: [
                "14-day of always-on sensors",
                "1-property diagnostic report",
                "Court-ready PDF",
                "Ombudsman-ready trail of timestamped evidences",
                "Documented all the actions taken within the legal timeline",
              ],
              ctaLabel: "Order kit",
              href: "/order?kit=diagnostic",
              featured: true,
            },
            {
              name: "Social ",
              price: "£0",
              description: "For landlords with an active complaint. Protect your rights from the 1 day.",
              features: [
                "14-day equipment rental",
                "1-property diagnostic report",
                "Court-ready PDF",
                "Trail of timestamped evidences",
                "Documented all the actions taken within the legal timeline",
              ],
              ctaLabel: "Order kit",
              href: "/order?kit=diagnostic",
            },
            
          ]
        }
        // tiers={[
        //   {
        //     name: "Starter Report",
        //     price: "£249",
        //     description: "For private landlords with a single mould dispute to resolve.",
        //     features: [
        //       "14-day equipment rental",
        //       "1-property diagnostic report",
        //       "Court-ready PDF",
        //     ],
        //     ctaLabel: "Order kit",
        //     href: "/order?kit=starter",
        //   },
        //   {
        //     name: "Professional Report",
        //     price: "£249",
        //     description: "For letting agents and HA property managers handling multiple rooms.",
        //     features: [
        //       "14-day equipment rental",
        //       "3-room diagnostic report",
        //       "Written findings summary",
        //       "Ombudsman template",
        //     ],
        //     ctaLabel: "Order kit",
        //     href: "/order?kit=professional",
        //     featured: true,
        //   },
        //   {
        //     name: "Portfolio Monitoring",
        //     price: "£49",
        //     period: "/month per property",
        //     description: "Continuous monitoring for multi-property landlords and HAs.",
        //     features: [
        //       "Always-on sensors",
        //       "Monthly reports + alerts",
        //       "Portfolio dashboard",
        //     ],
        //     ctaLabel: "Start monitoring",
        //     href: "/order?kit=portfolio",
        //   },
        // ]}
        footnote={
          <>
            Need 50+ properties?{" "}
            <Link href="#" className="text-fg underline hover:text-accent-light transition-colors">
              Enterprise pricing →
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
        heading="A complaint arrived this morning. Get the evidence before the Letter of Claim does."
        body="Order your kit now. Sensors dispatched same day via tracked delivery."
        primaryCta={{ label: "Order kit — £249", href: "/order" }}
        secondaryCta={{ label: "Download sample report", href: "#" }}
      />

      <Footer />
    </main>
  );
}
