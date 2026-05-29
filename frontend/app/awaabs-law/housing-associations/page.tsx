import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import DownloadGate from "@/components/DownloadGate/DownloadGate";
import GuideContents from "@/components/GuideContents/GuideContents";
import GuideBlocks from "@/components/GuideBlocks/GuideBlocks";
import { SITE_URL, ORG_ID } from "@/lib/seo";
import { awaabsLawGuide } from "@/content/awaabs-law-guide";

export const metadata: Metadata = {
  title: "Awaab's Law Guide for Housing Associations — Maple Diagnostics",
  description:
    "Awaab's Law for housing associations and social landlords: 10-day investigation deadline, written findings, the reasonable lessor test, and evidence requirements.",
  keywords: [
    "Awaab's Law housing associations",
    "social landlord damp mould compliance",
    "10 day investigation deadline",
    "housing ombudsman written findings",
    "Hazards in Social Housing Regulations 2025",
  ],
  openGraph: {
    title: "Awaab's Law Guide for Housing Associations — Maple Diagnostics",
    description:
      "A regulation-by-regulation walkthrough of Awaab's Law for social landlords: deadlines, evidence requirements, and what happens when landlords miss them.",
    url: "/awaabs-law/housing-associations",
  },
  twitter: {
    title: "Awaab's Law Guide for Housing Associations — Maple Diagnostics",
    description:
      "10-day investigation deadline, written findings, and evidence requirements for social landlords — explained.",
  },
  alternates: { canonical: "/awaabs-law/housing-associations" },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/awaabs-law/housing-associations#article`,
    headline: "Awaab's Law explained: what does it mean for housing associations?",
    description:
      "A practical, regulation-by-regulation walkthrough of Awaab's Law for social landlords — investigation deadlines, written findings requirements, and evidence standards.",
    publisher: { "@id": ORG_ID },
    dateModified: "2026-05-21",
    inLanguage: "en-GB",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/awaabs-law/housing-associations`,
    },
    keywords:
      "Awaab's Law, housing associations, social housing, damp mould, 10-day investigation",
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
          text: "Awaab's Law came into force on 27 October 2025 under the Hazards in Social Housing (Prescribed Requirements) (England) Regulations 2025, enabled by the Social Housing (Regulation) Act 2023. It creates legally enforceable timeframes for social landlords to investigate, communicate, and remediate damp and mould hazards. It applies to registered social housing providers in England.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 10-day investigation deadline under Awaab's Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From the moment a social landlord becomes aware of a potential damp or mould issue, they have 10 working days to complete a formal investigation. The clock starts ticking on the next working day after awareness (Day 1).",
        },
      },
      {
        "@type": "Question",
        name: "What must written findings include under Awaab's Law?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Within 3 working days of completing the investigation, landlords must issue written findings to the tenant covering: the hazard identified, the proposed action, and a target timeframe for completion.",
        },
      },
    ],
  },
];

const { meta, sections } = awaabsLawGuide;

export default function HousingAssociationsGuidePage() {
  return (
    <main className="min-h-screen flex flex-col gap-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>

      <section className="max-w-6xl mx-auto px-6 w-full pt-8 md:pt-16 flex flex-col gap-6">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="eyebrow text-left">{meta.eyebrow}</div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Awaab&apos;s Law explained:{" "}
            <span className="text-accent">what does it mean for you?</span>
          </h1>
          <p className="text-fg-muted text-base max-w-2xl">{meta.intro}</p>
          <p className="text-xs text-fg-faint">Last reviewed: {meta.lastReviewed}</p>
        </div>
      </section>

      <GuideContents
        aside={
          <DownloadGate
            title="10-Day Investigation Checklist"
            description="The exact actions to take on day 1, 3, 5, 10 — printable for your compliance team."
            guideName="10-Day Investigation Checklist"
            ctaLabel="Download PDF"
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
