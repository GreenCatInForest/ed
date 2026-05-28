import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProcessSteps from "@/components/ProcessSteps/ProcessSteps";
import FeatureSplit from "@/components/FeatureSplit/FeatureSplit";
import Testimonial from "@/components/Testimonial/Testimonial";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import {
  IconPackage,
  IconActivity,
  IconFileReport,
  IconCloudUpload,
  IconShieldCheck,
  IconListCheck,
  IconFileText,
  IconChartBar,
  IconCheck,
  IconClock,
} from "@tabler/icons-react";

import type { Metadata } from "next";
import { SITE_URL, ORG_ID } from "@/lib/seo";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Three calibrated sensors. Fourteen days of continuous data. One court-ready report. Learn how Maple Diagnostics turns a damp complaint into defensible evidence.",
  keywords: [
    "damp sensor kit rental",
    "mould evidence 14 days",
    "Building Moisture Index dew point analysis landlord",
    "how to get court-ready damp report",
    "structural vs condensation damp",
  ],
  openGraph: {
    title: "How it works — Maple Diagnostics",
    description:
      "Three  sensors. Fourteen days of continuous data. One court-ready report. From complaint to defensible evidence in 14 days.",
    url: "/how-it-works",
  },
  twitter: {
    title: "How it works — Maple Diagnostics",
    description:
      "Three sensors. Fourteen days of continuous data. One court-ready report.",
  },
  alternates: { canonical: "/how-it-works" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to get court-ready damp and mould evidence in 14 days",
  description:
    "A step-by-step guide to using the Maple Diagnostics sensor kit to generate court-ready damp and mould evidence for landlords and housing associations.",
  provider: { "@id": ORG_ID },
  supply: [
    { "@type": "HowToSupply", name: "Calibrated humidity and temperature sensors" },
    { "@type": "HowToSupply", name: "Surface-temperature probe" },
    { "@type": "HowToSupply", name: "USB data logger" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Order your kit",
      text: "Choose your tier online. The kit is dispatched same day via tracked next-day delivery for orders placed before 2 pm. No account setup required.",
      url: `${SITE_URL}/order`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Deploy the sensors",
      text: "Place sensors in the affected rooms. No installer, no drilling, no WiFi. Sensors run on internal batteries and log data locally. A tenant can deploy them unassisted in under 10 minutes.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Monitor for 14 days",
      text: "Sensors record humidity, temperature, and surface temperature every 15 minutes for the full monitoring window. Data is stored on the device, ensuring tamper-evident continuity.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Upload and get your report",
      text: "Return the kit using the prepaid label. We process the data OR you process the data online - and generate your court-ready PDF within 24 hours. Download, attach to your response, and case closed.",
    },
  ],
  totalTime: "P14D",
  estimatedCost: { "@type": "MonetaryAmount", currency: "GBP", value: "149" },
};

// ─── Kit contents ─────────────────────────────────────────────────────────────

const KIT_CONTENTS = [
  "3 calibrated humidity and temperature sensors",
  "USB data logger",
  "Access to the firmware",
  "Room placement guide",
  "Prepaid tracked return label",
  "Access to the report generation platform",
];

// ─── Measurement cards ────────────────────────────────────────────────────────

// const MEASUREMENTS = [
//   {
//     label: "Relative humidity",
//     unit: "% RH",
//     icon: <IconActivity size={20} stroke={1.5} />,
//     body: "Recorded every minute in each room. Readings sustained above 70% indicate condensation risk; above 80% confirms active damp conditions. Spikes during cooking or bathing hours are logged and distinguished from baseline.",
//     threshold: "Structural threshold: sustained >80% RH during heated, ventilated periods",
//   },
//   {
//     label: "Ambient temperature",
//     unit: "°C",
//     icon: <IconChartBar size={20} stroke={1.5} />,
//     body: "Heating patterns reveal occupant behaviour. Low ambient temperature is a key factor in separating inadequate heating — a condensation issue — from thermal bridging or fabric failure, which are structural defects.",
//     threshold: "Below 18°C during occupied hours triggers condensation issue flags",
//   },
//   {
//     label: "Surface temperature",
//     unit: "°C (wall/glass)",
//     icon: <IconListCheck size={20} stroke={1.5} />,
//     body: "Measured at wall and window surfaces. When surface temperature falls below the dew point of the room air, condensation is thermodynamically inevitable — regardless of occupant behaviour. This is the definitive structural test.",
//     threshold: "Dew-point crossing = structural defect indicator",
//   },
// ];

// ─── Report features ──────────────────────────────────────────────────────────

const REPORT_FEATURES = [
  {
    icon: <IconFileText size={20} stroke={1.5} />,
    title: "Court-ready PDF",
    body: "Formatted for use in disrepair proceedings, Pre-Action Protocol exchanges, Housing Ombudsman submissions, and expert witness bundles. Includes a clear cause classification, detailed evidence summary, and a comprehensive data appendix.",
  },
  {
    icon: <IconActivity size={20} stroke={1.5} />,
    title: "Full timestamped data log",
    body: "Every sensor reading for all 14 days, date- and time-stamped to the minute. Tamper-evident and exportable. The Housing Ombudsman expects proper case records — timestamped data provides a complete, auditable trail.",
  },
  {
    icon: <IconShieldCheck size={20} stroke={1.5} />,
    title: "Structural vs. condensation classification",
    body: "A clear determination of probable cause with threshold evidence cited. Reproducible, scientifically documented, and aligned with damp assessment practice.",
  },
  {
    icon: <IconFileReport size={20} stroke={1.5} />,
    title: "Written findings summary",
    body: "Included in the Professional tier. Pre-formatted to meet the written findings requirements under Awaab's Law (social housing) — hazard identified, proposed action, and target timescales for beginning and completing works.",
  },
];

// ─── Legal mapping ────────────────────────────────────────────────────────────

const LEGAL_ROWS = [
  {
    law: "Awaab's Law",
    requirement: "Investigation must be completed within 10 working days of a damp or mould complaint (social housing — registered providers)",
    maple: "Same-day kit dispatch means monitoring begins the day the complaint is logged. The monitoring lasts 10 calendar days, ensuring the investigation window is met even with weekends and bank holidays.",
  },
  {
    law: "Awaab's Law",
    requirement: "Written findings must be issued within 3 working days of investigation completion (social housing — registered providers)",
    maple: "Professional report includes a pre-formatted written findings template ready to issue",
  },
  {
    law: "Housing Ombudsman",
    requirement: "Objective, timestamped evidence to distinguish structural cause from condensation",
    maple: "All reports contain minute-level timestamped sensor data providing an auditable evidence trail for Ombudsman submissions",
  },
  {
    law: "Section 11 LTA 1985",
    requirement: "Landlord's repairing obligation covers structure and exterior — objective evidence of cause (structural defect vs. condensation) is central to defending or settling a disrepair claim",
    maple: "Classification report provides objective structural vs. condensation determination admissible in proceedings",
  },
  {
    law: "HHSRS enforcement",
    requirement: "Evidence to challenge or support a council hazard score under the Housing Health and Safety Rating System",
    maple: "Court-ready PDF is admissible in HHSRS appeal proceedings and used by surveyors as supporting evidence",
  },
];

// ─── Cause outcomes ───────────────────────────────────────────────────────────

// const OUTCOMES = [
//   {
//     verdict: "Structural cause",
//     color: "danger",
//     indicators: [
//       "Dew-point crossings during heated, ventilated periods",
//       "High surface RH in unoccupied rooms with no moisture-generating activity",
//       "Building Moisture Index exceeds structural threshold independently of ventilation patterns",
//       "Surface temperature persistently below dew point of room air",
//     ],
//     meaning:
//       "The property has a defect — thermal bridging, inadequate insulation, or moisture ingress. The landlord or owner has a repair obligation under Section 11 LTA 1985 or Awaab's Law (social landlords).",
//   },
//   {
//     verdict: "Condensation cause",
//     color: "success",
//     indicators: [
//       "Humidity spikes correlate tightly with cooking, bathing, or drying laundry events",
//       "Surface temperature consistently above dew point when ventilation is present",
//       "Building Moisture Index normalises during periods of adequate heating and ventilation",
//       "No condensation in well-ventilated, consistently heated rooms",
//     ],
//     meaning:
//       "The damp is driven by occupant behaviour — inadequate ventilation or heating — rather than a structural defect. This finding defends the landlord's position in disrepair proceedings.",
//   },
// ];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full pt-8 md:pt-12 flex flex-col gap-6">
        <div className="flex flex-col gap-4 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">How it works</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            From complaint to court-ready evidence{" "}
            <span className="text-accent">in 14 days.</span>
          </h1>
          <p className="text-fg-muted text-base max-w-2xl">
            Three calibrated sensors. Fourteen days of continuous data. One court-ready report.
            Maple Diagnostics turns a damp or mould complaint into a defensible position — without installers,
            without guesswork, and for less than the cost of one solicitor&apos;s letter.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 pt-2">
          {[
            { value: "Same day", label: "kit dispatch" },
            { value: "14 days", label: "monitoring window" },
            { value: "24 h", label: "report turnaround" },
            { value: "0", label: "installation required" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="text-2xl font-bold text-accent">{value}</span>
              <span className="text-xs text-fg-subtle">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process overview ─────────────────────────────────────────────── */}
      <ProcessSteps
        eyebrow="The process"
        heading="Four steps. Evidence trail. One report."
        steps={[
          {
            num: 1,
            icon: <IconPackage size={28} stroke={1.5} />,
            title: "Order your kit",
            body: "Choose your tier online. The kit is dispatched same day via tracked next-day delivery for orders placed before 2 pm. No account setup — just order and wait for the box.",
          },
          {
            num: 2,
            icon: <IconCloudUpload size={28} stroke={1.5} />,
            title: "Deploy the sensors",
            body: "Place sensors in the affected rooms. No installer, no drilling, no WiFi. Sensors run on AA batteries and log data locally. A tenant can deploy them unassisted in under 10 minutes.",
          },
          {
            num: 3,
            icon: <IconActivity size={28} stroke={1.5} />,
            title: "Monitor for 14 days",
            body: "Sensors record humidity, temperature, and surface temperature every minute for the full monitoring window. Data is stored on the device — not transmitted — ensuring tamper-evident continuity.",
          },
          {
            num: 4,
            icon: <IconFileReport size={28} stroke={1.5} />,
            title: "Upload and get your report",
            body: "Return the kit (prepaid label included). We upload the data and generate your court-ready PDF within 24 hours. Download, attach to your response, and case closed.",
          },
        ]}
      />

      {/* ── What's in the kit ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="bg-surface border border-(--color-border) rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">The kit</p>
              <h2 className="text-3xl font-bold">Everything you need. Nothing you don&apos;t.</h2>
              <p className="text-sm text-fg-muted mt-1">
                The kit is designed to require no technical knowledge. A tenant can deploy it unassisted.
                Sensors run on built-in battery and store data locally — no WiFi required.
              </p>
            </div>
            <ul className="flex flex-col gap-2.5">
              {KIT_CONTENTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-fg-muted">
                  <IconCheck size={15} stroke={2.5} className="text-success shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/order"
              className="self-start bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
            >
              Order kit — £249
            </Link>
          </div>

          {/* Right — abstract sensor visual */}
          <div className="flex flex-col gap-3">
            {[
              { id: "S1", label: "Bedroom — affected room", status: "active", rh: "74% RH", temp: "17.2°C" },
              { id: "S2", label: "Living room — control room", status: "normal", rh: "52% RH", temp: "20.1°C" },
              { id: "S3", label: "Bathroom — moisture source", status: "active", rh: "81% RH", temp: "18.6°C" },
            ].map((sensor) => (
              <div
                key={sensor.id}
                className="bg-bg border border-(--color-border) rounded-xl px-5 py-4 flex items-center gap-4"
              >
                <div className="relative shrink-0">
                  <div
                    className={`w-3 h-3 rounded-full ${sensor.status === "active" ? "bg-warning" : "bg-success"}`}
                  />
                  <div
                    className={`absolute inset-0 w-3 h-3 rounded-full animate-ping ${sensor.status === "active" ? "bg-warning" : "bg-success"} opacity-60`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-fg-subtle">{sensor.id}</p>
                  <p className="text-sm font-medium text-fg truncate">{sensor.label}</p>
                </div>
                <div className="flex gap-4 shrink-0">
                  <div className="text-right">
                    <p className={`text-sm font-semibold ${sensor.status === "active" ? "text-warning" : "text-success"}`}>{sensor.rh}</p>
                    <p className="text-xs text-fg-subtle">humidity</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-fg">{sensor.temp}</p>
                    <p className="text-xs text-fg-subtle">temp</p>
                  </div>
                </div>
              </div>
            ))}
            <p className="text-xs text-fg-subtle text-center pt-1">Live sensor readings during monitoring window</p>
          </div>
        </div>
      </section>

      {/* ── What sensors measure ──────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">The science</p>
          <h2 className="text-3xl font-bold">What the sensors measure — and why it matters.</h2>
          <p className="text-fg-muted text-sm max-w-2xl">
            Three variables. Continuously logged. Together they answer the one question every landlord,
            solicitor, and Ombudsman needs answered: is this damp structural or condensation?
          </p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MEASUREMENTS&&MEASUREMENTS.map((m) => (
            <div key={m.label} className="bg-surface border border-(--color-border) rounded-xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-accent">{m.icon}</span>
                <span className="text-xs font-mono text-fg-subtle bg-bg border border-(--color-border) px-2 py-1 rounded">
                  {m.unit}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">{m.label}</h3>
                <p className="text-sm text-fg-muted">{m.body}</p>
              </div>
              <div className="border-t border-(--color-border) pt-3 mt-auto">
                <p className="text-xs text-fg-subtle italic">{m.threshold}</p>
              </div>
            </div>
          ))}
        </div> */}
      </section>

      {/* ── Analysis: structural vs condensation ────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">The analysis</p>
          <h2 className="text-3xl font-bold">How Maple determines cause.</h2>
          <p className="text-fg-muted text-sm max-w-2xl">
            The analysis engine correlates all three sensor streams to calculate the Building Moisture Index (BMI)
            and identify dew-point crossings. Results are mapped against established thresholds from UK building
            research. The output is one of two classifications — each with a documented evidence trail.
          </p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OUTCOMES.map((outcome) => (
            <div
              key={outcome.verdict}
              className={`rounded-xl border p-6 flex flex-col gap-4 ${
                outcome.color === "danger"
                  ? "bg-danger/5 border-danger/20"
                  : "bg-success/5 border-success/20"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    outcome.color === "danger" ? "bg-danger" : "bg-success"
                  }`}
                />
                <h3 className={`font-semibold text-sm uppercase tracking-wide ${
                  outcome.color === "danger" ? "text-danger-text" : "text-success-text"
                }`}>
                  {outcome.verdict}
                </h3>
              </div>
              <ul className="flex flex-col gap-2">
                {outcome.indicators.map((ind) => (
                  <li key={ind} className="flex items-start gap-2.5 text-sm text-fg-muted">
                    <span className={`shrink-0 mt-0.5 text-xs ${outcome.color === "danger" ? "text-danger-text" : "text-success-text"}`}>→</span>
                    {ind}
                  </li>
                ))}
              </ul>
              <div className="border-t border-(--color-border) pt-3">
                <p className="text-xs text-fg-subtle">{outcome.meaning}</p>
              </div>
            </div>
          ))}
        </div> */}
      </section>

      {/* ── The report ───────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">The deliverable</p>
          <h2 className="text-3xl font-bold">What you receive after 14 days.</h2>
          <p className="text-fg-muted text-sm max-w-2xl">
            Return the kit using the prepaid label. We process the data and generate your report within 24 hours
            of receiving it. The PDF is downloadable from your account and ready to attach to any legal correspondence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REPORT_FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className={`bg-surface border rounded-xl p-6 flex flex-col gap-3 ${
                i === REPORT_FEATURES.length - 1
                  ? "border-(--color-accent-border) bg-accent/5"
                  : "border-(--color-border)"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-accent">{feature.icon}</span>
                {i === REPORT_FEATURES.length - 1 && (
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    Professional tier
                  </span>
                )}
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-fg-muted">{feature.body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/order"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
          >
            Order your kit
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center border border-(--color-border) hover:border-(--color-border-emphasis) text-fg font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
          >
            Download sample report
          </Link>
        </div>
      </section>

      {/* ── Legal compliance mapping ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Legal alignment</p>
          <h2 className="text-3xl font-bold">Built around your obligations.</h2>
          <p className="text-fg-muted text-sm max-w-2xl">
            Every element of the Maple process maps to a specific legal requirement. The report is
            not a general survey — it is structured to answer the exact questions that arise under each statute.
          </p>
        </div>
        <div className="flex flex-col divide-y divide-(--color-border) bg-surface border border-(--color-border) rounded-xl overflow-hidden">
          {LEGAL_ROWS.map((row, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] gap-0">
              <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-(--color-border) flex items-start">
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">{row.law}</span>
              </div>
              <div className="px-6 py-4 md:border-r border-(--color-border)">
                <p className="text-sm text-fg-muted">{row.requirement}</p>
              </div>
              <div className="px-6 py-4 flex items-start gap-2">
                <IconCheck size={14} stroke={2.5} className="text-success shrink-0 mt-0.5" />
                <p className="text-sm text-fg">{row.maple}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline: who is it for ───────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Who uses Maple</p>
          <h2 className="text-3xl font-bold">The right kit for every situation.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              role: "Private landlord",
              scenario: "Tenant has reported damp. You need evidence before a solicitor gets involved.",
              action: "Order Starter kit",
              href: "/order?kit=starter",
            },
            {
              role: "Social landlord / HA",
              scenario: "Awaab's Law complaint received. 10-day investigation clock is running.",
              action: "Order Professional kit",
              href: "/order?kit=professional",
            },
            {
              role: "Letting agent",
              scenario: "Managing a disputed property. Client - social landlord - needs written findings within 3 days. Private landlord needs a clear, documented cause determination to resolve the complaint and avoid escalation to proceedings.",
              action: "Order Professional kit",
              href: "/order?kit=professional",
            },
            {
              role: "Surveyor",
              scenario: "Enhancing a damp survey with continuous data to make findings court-proof.",
              action: "Get practice licence",
              href: "/building-specialists",
            },
          ].map((item) => (
            <div
              key={item.role}
              className="bg-surface border border-(--color-border) rounded-xl p-5 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">{item.role}</p>
                <p className="text-sm text-fg-muted">{item.scenario}</p>
              </div>
              <Link
                href={item.href}
                className="mt-auto text-sm font-medium text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
              >
                {item.action} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Portfolio dashboard ───────────────────────────────────────────── */}
      <FeatureSplit />

      {/* ── Testimonial ──────────────────────────────────────────────────── */}
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
              "We had three simultaneous Ombudsman complaints. Maple Diagnostics gave us timestamped sensor data for every property. All three cases were closed in our favour within 6 weeks.",
            name: "Sarah Chen",
            role: "Operations Director · Midlands Letting Agency",
            stat: { value: "3/3", label: "Cases closed" },
          },
          {
            quote:
              "The opposing surveyor had a single moisture reading. We had 14 days of timestamped data showing humidity below the structural threshold. The judge found in our client's favour before we finished cross-examination.",
            name: "Richard Okafor MRICS",
            role: "Building Surveyor · London",
            stat: { value: "Day 1", label: "Case decided" },
          },
        ]}
      /> */}

      {/* ── FAQ teaser ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 w-full">
        <div className="bg-surface border border-(--color-border) rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-lg">Still have questions?</h3>
            <p className="text-sm text-fg-muted">
              Pricing, extensions, admissibility, Awaab&apos;s Law deadlines — it&apos;s all covered.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/pricing#faq"
              className="inline-flex items-center justify-center border border-(--color-border) hover:border-(--color-border-emphasis) text-fg font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
            >
              Read the FAQ
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
            >
              Ask us directly
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
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
