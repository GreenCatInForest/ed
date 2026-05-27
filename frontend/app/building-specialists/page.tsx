import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Pill from "@/components/Pill/Pill";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import PricingTiers from "@/components/PricingTiers/PricingTiers";
import { IconShieldCheck, IconChartBar, IconFileText, IconBriefcase, IconActivity, IconFileReport, IconListCheck } from "@tabler/icons-react";

export const metadata = {
  title: "For Surveyors — Maple Diagnostics",
  description:
    "Enhance your damp and mould surveys with 14-day continuous sensor data. Court-ready evidence that defends your professional findings.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const risks = [
  {
    label: "Survey methodology challenged — single visit",
    value: "Findings rejected",
    context: "No data to support your opinion",
  },
  {
    label: "Opposing expert submits sensor evidence",
    value: "Expert undermined",
    context: "Your report becomes the weaker submission",
  },
  {
    label: "Client disputes your structural vs. lifestyle call",
    value: "Liability exposure",
    context: "Professional indemnity engaged",
  },
  {
    label: "Maple 14-day kit per survey",
    value: "£149",
    context: "Objective data. Defensible findings.",
  },
];

const benefits = [
  {
    icon: <IconActivity size={24} stroke={1.5} />,
    title: "14 days, not 14 minutes",
    body: "A site visit captures a snapshot. Damp is seasonal and behavioural — it manifests differently in winter, on heating days, when laundry is drying. Continuous sensors capture what a single inspection cannot.",
  },
  {
    icon: <IconChartBar size={24} stroke={1.5} />,
    title: "Automated structural vs. lifestyle classification",
    body: "Maple's analysis engine correlates humidity, surface temperature, and dew-point data against BMI thresholds. The classification is reproducible and scientifically documented — aligned with established UK damp assessment practice and accepted in Ombudsman proceedings.",
  },
  {
    icon: <IconShieldCheck size={24} stroke={1.5} />,
    title: "Your opinion, defended",
    body: "A Maple report doesn't replace your professional judgement — it backs it. Timestamped data that answers every question a solicitor or Ombudsman will ask. Professional indemnity is better protected with evidence on file.",
  },
  {
    icon: <IconBriefcase size={24} stroke={1.5} />,
    title: "A differentiator for your practice",
    body: "Surveyors who include continuous sensor data in their methodology win more instructed cases, charge higher fees, and produce reports that solicitors and insurers actually trust. It's a commercial upgrade, not just a tool.",
  },
];

const methodology = [
  {
    num: "01",
    title: "Deploy sensors at the property",
    body: "Place calibrated sensors in affected rooms during or after your site visit. No installation required — plug in and position. The tenant can manage this themselves.",
  },
  {
    num: "02",
    title: "14-day continuous logging",
    body: "Sensors record humidity, temperature, and surface temperature every minute. BMI index and dew-point calculations run automatically. No WiFi or connectivity required during collection.",
  },
  {
    num: "03",
    title: "Upload data, receive the Maple report",
    body: "Upload sensor data to the platform. Maple generates a court-ready PDF classifying cause, with full timestamped evidence trail. Attach it to your survey report or use it as a standalone evidential document.",
  },
];

const practiceFeatures = [
  "Kits at discounted practitioner rate",
  "Practice dashboard — manage all active surveys",
  "White-label PDFs with your practice branding",
  "Unlimited client surveys",
  "Priority same-day dispatch",
  "Dedicated account contact",
];

const objections = [
  {
    myth: "\"My visual inspection and moisture readings are already sufficient.\"",
    reality:
      "They may be — for a straightforward case. But in disputed cases, opposing experts increasingly use continuous sensor data. A 14-day dataset makes your methodology the stronger submission. Courts give greater weight to continuous monitoring evidence; the Housing Ombudsman expects landlords to use competent surveyors and keep proper records — sensor data directly supports both.",
  },
  {
    myth: "\"Adding sensors makes the survey process slower.\"",
    reality:
      "Sensors are deployed at the end of your site visit and collected 14 days later — your client handles collection. Your time investment is 10 minutes of placement, not 14 days of attendance.",
  },
  {
    myth: "\"The client won't pay for the additional cost.\"",
    reality:
      "At £149 per property, it's line-itemable. Most instructing solicitors and landlords will pay for a report that defends their position — because their legal fees dwarf the kit cost. Frame it as evidence enhancement, not an extra charge.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BuildingSpecialistsPage() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16">
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 w-full pt-8 md:pt-16 flex flex-col gap-6">
        <div className="flex flex-col gap-4 max-w-3xl">
          <Pill text="For surveyors" type="info" />
          <h1 className="text-4xl md:text-5xl font-bold">
            Your professional opinion.{" "}
            <span className="text-accent">Backed by 14 days of data.</span>
          </h1>
          <p className="text-fg-muted text-base max-w-2xl">
            A single site visit creates a snapshot. Damp and mould is seasonal, behavioural, and time-dependent — patterns that only continuous sensor data can capture. Maple Diagnostics gives surveyors the objective evidence to make findings that hold up in court, in Housing Ombudsman proceedings (social housing), and against opposing experts. Where Awaab&apos;s Law applies — registered providers from October 2025 — continuous data directly supports the investigation record required within 10 working days.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get a practice licence
            </Link>
            <Link
              href="/order?kit=professional"
              className="inline-flex items-center justify-center border border-(--color-border) text-fg px-6 py-3 rounded-lg font-medium transition-colors hover:border-fg-muted"
            >
              Order a single kit
            </Link>
          </div>
        </div>
      </section>

      {/* Legal scope note */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="bg-surface border border-(--color-border) rounded-xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-fg">Awaab&apos;s Law</p>
            <p className="text-fg-muted text-xs">Applies to <strong className="text-fg">social housing only</strong> (registered providers). In force from October 2025. Strict investigation and written-findings deadlines. Private sector extension pending — no confirmed date.</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-fg">Section 11 LTA 1985</p>
            <p className="text-fg-muted text-xs">Applies to <strong className="text-fg">all landlords</strong> with tenancies under 7 years. Covers structure, exterior, and installations. Lifestyle defence increasingly difficult without objective evidence.</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-fg">Homes Act 2018 &amp; HHSRS</p>
            <p className="text-fg-muted text-xs">Applies to <strong className="text-fg">all landlords</strong>. Property must be fit for habitation. HHSRS hazard scoring used by councils for enforcement. Sensor data is admissible in appeal proceedings.</p>
          </div>
        </div>
      </section>

      {/* The snapshot problem */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">The problem with snapshots</p>
          <h2 className="text-3xl font-bold">One visit. One moment in time.</h2>
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

      {/* Benefits */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">What Maple adds to your survey</p>
          <h2 className="text-3xl font-bold">Four ways it strengthens your methodology.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((item) => (
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

      {/* Methodology */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">How it works</p>
          <h2 className="text-3xl font-bold">Three steps. No disruption to your workflow.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methodology.map((step) => (
            <div key={step.num} className="bg-surface border border-(--color-border) rounded-xl p-6 flex flex-col gap-4">
              <p className="text-xs font-mono text-fg-subtle">{step.num}</p>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-fg-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice licence */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="bg-surface border border-accent/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4 flex-1">
            <Pill text="For RICS-accredited practices" type="info" />
            <h2 className="text-3xl font-bold">
              Run Maple across your whole practice.{" "}
              <span className="text-accent">£79/month.</span>
            </h2>
            <p className="text-fg-muted text-sm max-w-lg">
              A practice licence gives your firm access to discounted kits, a multi-survey dashboard, and optional white-label reports under your practice brand. Order kits for any client, track active surveys, and generate reports at scale — for less than the cost of one hour of your time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Apply for a practice licence
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center border border-(--color-border) text-fg px-6 py-3 rounded-lg font-medium transition-colors hover:border-fg-muted"
              >
                Compare all plans
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-1 md:border-l border-(--color-border) md:pl-8">
            <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">What&apos;s included</p>
            {practiceFeatures.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <span className="text-success mt-0.5 shrink-0 text-xs font-bold">✓</span>
                <span className="text-sm text-fg-muted">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objection handling */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Common concerns</p>
          <h2 className="text-3xl font-bold">What surveyors ask first.</h2>
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

      {/* Testimonial */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="bg-surface border border-(--color-border) rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="text-lg text-fg-muted italic leading-relaxed">
              &ldquo;The opposing surveyor had a single moisture reading from one visit. We had 14 days of timestamped sensor data showing peak humidity consistently below the structural threshold. The judge found in our client&apos;s favour before we finished cross-examination.&rdquo;
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold">Richard Okafor MRICS</p>
              <p className="text-xs text-fg-subtle">Building Surveyor · London</p>
            </div>
          </div>
          <div className="md:border-l border-(--color-border) md:pl-8 flex flex-col gap-1 shrink-0">
            <p className="text-3xl font-bold text-accent">Day 1</p>
            <p className="text-sm text-fg-muted">Case decided before cross-examination ended</p>
          </div>
        </div>
      </section>

      {/* What's in a report */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">The deliverable</p>
          <h2 className="text-3xl font-bold">What the Maple report contains.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: <IconFileReport size={22} stroke={1.5} />,
              title: "Timestamped sensor data",
              body: "Full 14-day log of humidity, temperature, and surface temperature readings. Every data point dated and signed.",
            },
            {
              icon: <IconChartBar size={22} stroke={1.5} />,
              title: "BMI and dew-point analysis",
              body: "Automated calculation of the Building Moisture Index and dew-point crossings — established metrics in UK damp assessment practice, applied by qualified surveyors and used in disrepair proceedings and Ombudsman submissions.",
            },
            {
              icon: <IconListCheck size={22} stroke={1.5} />,
              title: "Structural vs. lifestyle classification",
              body: "A clear, scientifically documented determination of probable cause with threshold evidence. Reproducible and defensible.",
            },
            {
              icon: <IconFileText size={22} stroke={1.5} />,
              title: "Court-ready PDF",
              body: "Formatted for use in disrepair proceedings, Pre-Action Protocol exchanges, Ombudsman submissions, and expert witness bundles.",
            },
          ].map((item) => (
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

      {/* Pricing */}
      <PricingTiers
        eyebrow="Surveyor pricing"
        heading="Ad-hoc kits or a practice licence — your choice."
        tiers={[
          {
            name: "Starter Report",
            price: "£149",
            description: "Single property, one-off instruction.",
            features: [
              "14-day equipment rental",
              "1-room diagnostic",
              "Court-ready PDF",
              "Same-day dispatch",
            ],
            ctaLabel: "Order kit",
            href: "/order?kit=starter",
          },
          {
            name: "Professional Report",
            price: "£249",
            description: "Multi-room or complex disputed case.",
            features: [
              "14-day equipment rental",
              "Up to 3-room diagnostic",
              "Court-ready PDF",
              "Written findings summary",
              "Ombudsman response template",
            ],
            ctaLabel: "Order kit",
            href: "/order?kit=professional",
            featured: true,
          },
          {
            name: "Practice Licence",
            price: "£79",
            period: "/month",
            description: "For RICS-accredited practices. Unlimited client surveys.",
            features: [
              "Discounted kit rate",
              "Unlimited client surveys",
              "Practice dashboard",
              "White-label reports",
              "Priority dispatch",
            ],
            ctaLabel: "Apply for licence",
            href: "/contact",
          },
        ]}
        footnote={
          <>
            Instructed by a solicitor?{" "}
            <Link href="/contact" className="text-fg underline hover:text-accent-light transition-colors">
              Expert witness support →
            </Link>
            {" · "}
            Housing association?{" "}
            <Link href="/housing-associations" className="text-fg underline hover:text-accent-light transition-colors">
              Portfolio pricing →
            </Link>
          </>
        }
      />

      <CtaBanner
        heading="Your next report is being challenged. Do you have the data to defend it?"
        body="Add 14 days of continuous sensor evidence to every survey. Same-day kit dispatch."
        primaryCta={{ label: "Order a kit — £149", href: "/order?kit=starter" }}
        secondaryCta={{ label: "Get a practice licence", href: "/contact" }}
      />

      <Footer />
    </main>
  );
}
