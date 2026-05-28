import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import DownloadCard from "@/components/DownloadCard/DownloadCard";
import GuideContents from "@/components/GuideContents/GuideContents";
import GuideBlocks from "@/components/GuideBlocks/GuideBlocks";
import { SITE_URL, ORG_ID } from "@/lib/seo";
import { awaabsLawGuide } from "@/content/awaabs-law-guide";

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
    dateModified: "2026-05-21",
    inLanguage: "en-GB",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/awaabs-law` },
    keywords:
      "Awaab's Law, social housing, damp mould, housing ombudsman, 10-day investigation",
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
          text: "From the moment a tenant makes a complaint about damp or mould, the social landlord has 10 working days to complete a formal investigation. Missing this deadline is evidence of maladministration in front of the Housing Ombudsman, regardless of whether a repair was eventually completed.",
        },
      },
      {
        "@type": "Question",
        name: "What must written findings include under Awaab's Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Within 3 working days of completing the investigation, landlords must issue written findings to the tenant. This must include the hazard identified, the proposed action, and a target timeframe for completion. A verbal update or informal email is not sufficient.",
        },
      },
      {
        "@type": "Question",
        name: "What is the reasonable lessor test under Awaab's Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 'significant risk of harm' is assessed by reference to what a reasonable lessor with the relevant knowledge would do. This is an objective standard: what a reasonable social landlord should have concluded on the evidence, not what the individual landlord subjectively believed.",
        },
      },
      {
        "@type": "Question",
        name: "What counts as objective evidence in damp and mould cases?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evidence that supports compliance and features in Housing Ombudsman case outcomes includes: continuous environmental measurement (humidity, temperature, surface temperature) over a meaningful period, an outdoor baseline comparison, photographic evidence paired with sensor readings, documented consideration of resident vulnerability, and an append-only audit trail timestamped at each step.",
        },
      },
    ],
  },
];

const { meta, sections } = awaabsLawGuide;

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
          <div className="eyebrow text-left">{meta.eyebrow}</div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Awaab&apos;s Law explained:{" "}
            <span className="text-accent">what does it mean for you?</span>
          </h1>
          <p className="text-fg-muted text-base max-w-2xl">{meta.intro}</p>
          <p className="text-xs text-fg-faint">
            Last reviewed: {meta.lastReviewed}
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
        sections={sections.map((section) => ({
          title: section.title,
          content: <GuideBlocks blocks={section.body} />,
        }))}
      />

      <CtaBanner
        heading="Day Zero is the day the landlord becomes aware."
        body="Day 1 — the start of the 10 working-day countdown — is the next working day after the landlord becomes aware of the complaint. Start the investigation today — sensors dispatched same day."
        primaryCta={{ label: "Order kit — £249", href: "/order" }}
        secondaryCta={{ label: "Download sample report", href: "#" }}
      />

      <Footer />
    </main>
  );
}
