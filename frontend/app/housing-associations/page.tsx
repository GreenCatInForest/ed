import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Pill from "@/components/Pill/Pill";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import PricingTiers from "@/components/PricingTiers/PricingTiers";
import { IconBuilding, IconChartBar, IconListCheck, IconShieldCheck } from "@tabler/icons-react";
import { ORG_ID } from "@/lib/seo";

export const metadata: Metadata = {
  title: "For housing associations & councils",
  description:
    "Portfolio-scale Awaab's Law compliance for housing associations. Monitor every property, meet every deadline, defend every case.",
  keywords: [
    "housing association Awaab's Law",
    "portfolio damp monitoring",
    "housing ombudsman defence HA",
    "social housing compliance sensors",
    "provider damp evidence",
  ],
  openGraph: {
    title: "For Housing Associations — Maple Diagnostics",
    description:
      "Portfolio-scale Awaab's Law compliance for housing associations. Continuous monitoring, automatic evidence collection, and court-ready reports.",
    url: "/housing-associations",
  },
  twitter: {
    title: "For Housing Associations — Maple Diagnostics",
    description:
      "Portfolio-scale Awaab's Law compliance. Monitor every property, meet every deadline, defend every case.",
  },
  alternates: { canonical: "/housing-associations" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Portfolio Damp & Mould Compliance for Housing Associations",
  provider: { "@id": ORG_ID },
  description:
    "Continuous monitoring and court-ready reports for housing associations managing Awaab's Law compliance across large property portfolios.",
  // offers: [
  //   { "@type": "Offer", name: "Professional Report", price: "249", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
  //   {
  //     "@type": "Offer",
  //     name: "Portfolio Monitoring",
  //     priceCurrency: "GBP",
  //     priceSpecification: { "@type": "UnitPriceSpecification", price: "249", priceCurrency: "GBP", unitText: "MON" },
  //   },
  // ],
  audience: { "@type": "Audience", audienceType: "Housing Associations, Registered Social Landlords" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
};

const challenges = [
  {
    icon: <IconBuilding size={24} stroke={1.5} />,
    title: "Scale",
    body: "Hundreds or thousands of units. A complaint can arrive from any property, at any time. Manual processes don't hold up under volume.",
  },
  {
    icon: <IconListCheck size={24} stroke={1.5} />,
    title: "Deadlines",
    body: "10 working days to investigate. 3 days for written findings. Missed milestones are Ombudsman evidence against you — even if the repair was completed.",
  },
  {
    icon: <IconChartBar size={24} stroke={1.5} />,
    title: "Evidence",
    body: "Condensation vs. structural distinction requires objective data. Assertions without timestamped sensor readings carry little weight — the Ombudsman expects documented, dated evidence of cause.",
  },
  {
    icon: <IconShieldCheck size={24} stroke={1.5} />,
    title: "Audit trail",
    body: "Every case needs a full documented record from complaint receipt to repair completion. Gaps anywhere in the chain become findings of maladministration.",
  },
];

const stats = [
  { value: "10", label: "working days to investigate — legal deadline" },
  { value: "3", label: "days for written findings after investigation" },
  { value: "Up to £32,000", label: "largest single Ombudsman order, 2024–25" },
];

const features = [
  "Always-on humidity, temperature, and surface sensors",
  "Automated damp and moisture analysis",
  "Timestamped evidence trail from complaint to closure",
  "Structural defect vs. condensation cause classification",
  "Disclosure-ready evidence reports per property",
  "Portfolio dashboard — compliance state across all units",
  "Monthly reports and threshold alerts",
];

// const testimonials = [
//   {
//     quote:
//       "We had three simultaneous Ombudsman complaints. Maple Diagnostics gave us timestamped sensor data for every property. All three cases were closed in our favour within 6 weeks.",
//     name: "Sarah Chen",
//     role: "Operations Director · Midlands Housing Association",
//     stat: "3/3 cases won",
//   },
//   {
//     quote:
//       "Tenant claimed structural damp. Our report showed condensation issues across all three rooms. The Shelter referral was withdrawn before it reached the Ombudsman.",
//     name: "James Marshall",
//     role: "Property Compliance Lead · Cambridgeshire HA",
//     stat: "£8,000 claim avoided",
//   },
// ];

export default function HousingAssociationsPage() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>
    
    <section className="max-w-6xl mx-auto px-6 w-full pt-8 md:pt-16 flex flex-col gap-6">
    {/* Hero */} 
      <section className="max-w-2xl ">
        <div className="flex flex-col gap-4 max-w-3xl">
          <Pill text="For housing associations & councils" type="info" />
          {/* <h1 className="text-4xl md:text-5xl font-bold">
            Awaab&apos;s Law evidence{" "}
            <span className="text-accent">across your whole portfolio.</span>
          </h1> */}
         <h1 className="text-4xl md:text-5xl font-bold">
            Defend every case.{" "}
            <span className="text-accent">Audit every property.</span>
          </h1>
          <p className="text-fg-muted text-base max-w-2xl">
            Built for compliance teams managing 500–50,000 units. 
            Housing associations face Awaab&apos;s Law at scale. A complaint on any property starts a
            legal clock. Maple Diagnostics gives you continuous monitoring, automatic evidence collection,
            and court-ready reports — before the Ombudsman gets involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
             <a
              href="/order"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get portfolio pricing 
            </a>
            {/* <a
              href="/order"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Book a 3-property pilot
            </a> */}
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-(--color-border) text-fg px-6 py-3 rounded-lg font-medium transition-colors hover:border-fg-muted"
            >
              Book a FREE 3-property pilot
            </a>
          </div>
        </div>
      </section>
    </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-surface border border-(--color-border) rounded-xl p-6 flex flex-col gap-1"
            >
              <p className="text-3xl font-bold text-accent">{s.value}</p>
              <p className="text-sm text-fg-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">
            Why HAs face unique risk
          </p>
          <h2 className="text-3xl font-bold">Four compliance challenges. One solution.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {challenges.map((item) => (
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

      {/* Feature list */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="bg-surface border border-(--color-border) rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4 flex-1">
            <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">
              What you get
            </p>
            <h2 className="text-3xl font-bold">
              Continuous monitoring designed around Awaab&apos;s Law evidence standards{" "}
            </h2>
            <p className="text-fg-muted text-sm">
              Maple Diagnostics is built around the questions  an investigation can
              ask. Every report, every timestamp, every data point is structured to answer those
              questions with objective, auditable evidence.
            </p>
            <a
              href="/order"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors self-start"
            >
              Start monitoring your portfolio
            </a>
          </div>
          <div className="flex flex-col gap-3 flex-1 md:border-l border-(--color-border) md:pl-8">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <span className="text-success mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-fg-muted">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Case outcomes</p>
          <h2 className="text-3xl font-bold">Housing associations that used the data.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface border border-(--color-border) rounded-xl p-6 flex flex-col gap-4"
            >
              <p className="text-sm text-fg-muted italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-fg-subtle">{t.role}</p>
                </div>
                <p className="text-accent text-sm font-bold">{t.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Pricing
      <PricingTiers
        eyebrow="HA pricing"
        heading="Scale from a single kit to portfolio-wide monitoring."
        tiers={[
          {
            name: "Professional Report",
            price: "£249",
            description: "Per-property report for active complaints or Ombudsman cases.",
            features: [
              "14-day equipment rental",
              "3-room diagnostic report",
              "Written findings summary",
              "Ombudsman case template",
            ],
            ctaLabel: "Order kit",
            href: "/order?kit=professional",
          },
          {
            name: "Portfolio Monitoring",
            price: "£49",
            period: "/month per property",
            description: "Continuous monitoring — always ready before complaints arrive.",
            features: [
              "Always-on sensors",
              "Monthly reports + alerts",
              "Portfolio dashboard",
              "Bulk case export",
            ],
            ctaLabel: "Start monitoring",
            href: "/order?kit=portfolio",
            featured: true,
          },
          {
            name: "Enterprise",
            price: "Custom",
            description: "For 50+ properties, white-label reports, and API integration.",
            features: [
              "Volume sensor pricing",
              "Dedicated account manager",
              "White-label PDF reports",
              "API access",
            ],
            ctaLabel: "Contact us",
            href: "/contact",
          },
        ]}
        footnote={
          <>
            RICS surveyor?{" "}
            <Link href="#" className="text-fg underline hover:text-accent-light transition-colors">
              Practice licence at £79/mo →
            </Link>
          </>
        }
      /> */}

      <CtaBanner
        heading="The next Ombudsman complaint could arrive today."
        body="Don't wait for a complaint to start collecting evidence. Portfolio monitoring means you're always ready."
        primaryCta={{ label: "Get portfolio pricing", href: "/order" }}
        secondaryCta={{ label: "Download sample report", href: "#" }}
      />

      <Footer />
    </main>
  );
}
