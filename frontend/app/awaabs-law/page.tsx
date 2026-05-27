import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import DownloadCard from "@/components/DownloadCard/DownloadCard";
import GuideContents from "@/components/GuideContents/GuideContents";
import { SITE_URL, ORG_ID } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Awaab's Law Guide",
  description:
    "Understand Awaab's Law: mandatory damp and mould response deadlines for social landlords in England. The 10-day investigation clock, written findings, and evidence requirements.",
  keywords: [
    "Awaab's Law explained",
    "social housing damp mould compliance",
    "10 day investigation deadline",
    "housing ombudsman written findings",
    "Awaab Ishak law social landlords",
  ],
  openGraph: {
    title: "Awaab's Law Guide — Maple Diagnostics",
    description:
      "A regulation-by-regulation walkthrough of Awaab's Law: deadlines, evidence requirements, and what happens when landlords miss them.",
    url: "/awaabs-law",
  },
  twitter: {
    title: "Awaab's Law Guide — Maple Diagnostics",
    description:
      "10-day investigation deadline, written findings, and evidence requirements for social landlords — explained.",
  },
  alternates: { canonical: "/awaabs-law" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/awaabs-law#article`,
    headline: "Awaab's Law explained: what does it mean for you?",
    description:
      "A practical, regulation-by-regulation walkthrough of Awaab's Law, the Social Housing Regulation Act Phase 1 — with investigation deadlines, written findings requirements, and evidence standards.",
    publisher: { "@id": ORG_ID },
    dateModified: "2026-01-01",
    inLanguage: "en-GB",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/awaabs-law` },
    keywords: "Awaab's Law, social housing, damp mould, housing ombudsman, 10-day investigation",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Awaab's Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Awaab's Law (Social Housing Regulation Act, Phase 1) came into force in October 2025. It creates legally enforceable timeframes for social landlords to investigate, communicate, and remediate damp and mould hazards. It applies to registered social housing providers in England.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 10-day investigation deadline under Awaab's Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From the moment a tenant makes a complaint about damp or mould, the social landlord has 10 working days to begin a formal investigation. Missing this deadline is evidence of maladministration in front of the Housing Ombudsman, regardless of whether a repair was eventually completed.",
        },
      },
      {
        "@type": "Question",
        name: "What must written findings include under Awaab's Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Within 3 working days of completing the investigation, landlords must issue written findings to the tenant. This must include the cause identified, the proposed action, and a timescale for completion. A verbal update or informal email is not sufficient.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Precautionary Principle in Awaab's Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Where there is uncertainty about cause, Awaab's Law applies the precautionary principle: landlords must act as if the hazard is structural until evidence demonstrates otherwise. You can no longer assume lifestyle cause without data to support it.",
        },
      },
      {
        "@type": "Question",
        name: "What counts as objective evidence in damp and mould cases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evidence that supports compliance and features in Housing Ombudsman case outcomes includes: timestamped sensor readings (humidity, temperature, surface temperature), continuous data logs covering the complaint period, BMI and dew point analysis, photographic evidence with EXIF timestamps, and written inspection reports from qualified surveyors.",
        },
      },
    ],
  },
];

export default function AwaabsLawPage() {
  return (
    <main className="min-h-screen flex flex-col gap-16">
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
          <div className="eyebrow text-left">The complete guide · updated for 2026</div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Awaab&apos;s Law explained: {" "}
            <span className="text-accent">what does it mean for you?</span>
          </h1>
          <p className="text-fg-muted text-base max-w-2xl">
            A practical, regulation-by-regulation walkthrough of Awaab&apos;s Law, Renters&apos; Rights Act, and Housing Ombudsman expectations — with the evidence requirements that decide cases.
          </p>
        </div>
      </section>
     
      <GuideContents
        aside={
          <DownloadCard
            title="10-Day Investigation Checklist"
            description="The exact actions to take on day 1, 3, 5, 10 — printable for your compliance team."
            cta={{ label: "Download PDF", href: "#" }}
          />
        }
        sections={[
          {
            title: "What is Awaab's Law?",
            content: (
              <p>
                Awaab&apos;s Law (Social Housing Regulation Act, Phase 1) came into force in October 2025.
                It creates legally enforceable timeframes for social landlords to investigate, communicate,
                and remediate damp and mould hazards. It is named after Awaab Ishak, a two-year-old who
                died in 2020 from prolonged exposure to black mould in a Rochdale housing association flat.
              </p>
            ),
          },
          {
            title: "The 10-day investigation deadline",
            content: (
              <p>
                From the moment a tenant makes a complaint about damp or mould, the landlord has 10 working
                days to begin a formal investigation. This is not a soft target — missing it is evidence of
                maladministration in front of the Housing Ombudsman, regardless of whether a repair was
                eventually completed.
              </p>
            ),
          },
          {
            title: "Written findings: format & deadline",
            content: (
              <p>
                Within 3 working days of completing the investigation, landlords must issue written findings
                to the tenant. This must include the cause identified, the proposed action, and a timescale
                for completion. A verbal update or informal email is not sufficient — the Ombudsman expects
                a documented, dated record.
              </p>
            ),
          },
          {
            title: "The Precautionary Principle",
            content: (
              <p>
                Where there is uncertainty about cause, Awaab&apos;s Law applies the precautionary principle:
                landlords must act as if the hazard is structural until evidence demonstrates otherwise.
                This reverses the previous default — you can no longer assume lifestyle cause without data
                to support it.
              </p>
            ),
          },
          {
            title: "What counts as objective evidence",
            content: (
              <>
                <p className="mb-3">
                  The following types of evidence support compliance and feature in case outcomes:
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Timestamped sensor readings (humidity, temperature, surface temperature)",
                    "Continuous data logs covering the complaint period",
                    "BMI and dew point analysis",
                    "Photographic evidence with EXIF timestamps",
                    "Written inspection reports from qualified surveyors",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-success shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "Structural vs lifestyle: legal test",
            content: (
              <p>
                The legal distinction matters for liability. Structural damp (rising damp, penetrating damp,
                failed building fabric) is the landlord&apos;s responsibility. Lifestyle-driven condensation
                (inadequate ventilation, drying laundry indoors, overcooking) reduces landlord liability —
                but only if evidenced. A 14-day sensor record showing consistently high humidity in all
                rooms regardless of behaviour is structural. Spikes correlated with occupancy are lifestyle.
                Without data, the Ombudsman defaults to structural.
              </p>
            ),
          },
          {
            title: "Housing Ombudsman case law",
            content: (
              <>
                <p className="mb-3">
                  The Housing Ombudsman publishes determinations publicly. Key patterns from recent cases:
                </p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Maladministration found where investigation was delayed beyond 10 days even when repair was completed",
                    "Written findings missing an action timescale treated as non-compliant",
                    "Landlord assertions of lifestyle cause without sensor data rejected in full",
                    "Compensation orders range from £200 (minor failing) to £25,000+ (serious or repeated)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-fg-subtle shrink-0">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "Compliance checklist (PDF)",
            content: (
              <>
                <p className="mb-4">
                  Download the 10-day investigation checklist — the exact actions required on each milestone
                  day, drawn from the published statutory guidance and Ombudsman case outcomes.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm self-start"
                >
                  Download PDF checklist
                </a>
              </>
            ),
          },
        ]}
      />

      <CtaBanner
        heading="The 10-day clock starts the moment your tenant complains."
        body="Don't start collecting evidence after the deadline. Order today — sensors dispatched same day."
        primaryCta={{ label: "Order kit — £149", href: "/order" }}
        secondaryCta={{ label: "Download sample report", href: "#" }}
      />

      <Footer />
    </main>
  );
}
