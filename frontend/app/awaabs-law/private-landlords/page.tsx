import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import DownloadGate from "@/components/DownloadGate/DownloadGate";
import { SITE_URL, ORG_ID } from "@/lib/seo";
import { privateLandlordsGuide } from "@/content/private-landlords-guide";
import { references } from "@/content/references";
import type { ReferenceId } from "@/content/references";
import type { StatuteDuty, ReformCard } from "@/content/private-landlords-guide";

export const metadata: Metadata = {
  title: "Private Landlords: Damp & Mould Obligations — Maple Diagnostics",
  description:
    "What private landlords must do when a tenant complains about damp or mould. Section 11, Homes Act, HHSRS duties — and how the Renters' Rights Act 2025 raises the bar.",
  keywords: [
    "private landlord damp mould obligations",
    "section 11 landlord tenant act",
    "Renters Rights Act 2025 landlord",
    "homes fitness for human habitation",
    "HHSRS private rented sector",
  ],
  openGraph: {
    title: "Private Landlords: Damp & Mould Obligations — Maple Diagnostics",
    description:
      "Standing statutory duties under Section 11, the Homes Act, and HHSRS — plus the Renters' Rights Act reforms that are already in force.",
    url: "/awaabs-law/private-landlords",
  },
  twitter: {
    title: "Private Landlords: Damp & Mould Obligations — Maple Diagnostics",
    description:
      "What private landlords must do when a tenant complains about damp or mould — updated for the Renters' Rights Act 2025.",
  },
  alternates: { canonical: "/awaabs-law/private-landlords" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${SITE_URL}/awaabs-law/private-landlords#article`,
  headline:
    "A tenant has complained about damp or mould. What do you actually have to do?",
  description:
    "Standing statutory duties and the Renters' Rights Act 2025 reforms for private landlords dealing with damp and mould complaints.",
  publisher: { "@id": ORG_ID },
  dateModified: "2026-05-21",
  inLanguage: "en-GB",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/awaabs-law/private-landlords`,
  },
  keywords:
    "private landlord, damp mould, section 11, Renters Rights Act 2025, HHSRS",
};

const { meta, alerts, toc, download, sections } = privateLandlordsGuide;

function Refs({ ids }: { ids: readonly ReferenceId[] }) {
  return (
    <>
      {ids.map((id) => (
        <Link
          key={id}
          href={`/references#ref-${id}`}
          className="font-mono text-[10px] text-accent hover:text-accent-light transition-colors ml-0.5 no-underline"
          title={references[id].label}
        >
          <sup>[{id}]</sup>
        </Link>
      ))}
    </>
  );
}

function StatuteBox({ duty }: { duty: StatuteDuty }) {
  return (
    <div className="rounded-lg border border-(--color-border) bg-(--color-surface-2) p-5 flex flex-col gap-2">
      <p className="text-xs font-semibold text-fg uppercase tracking-wider">
        {duty.act}
      </p>
      <p className="text-sm text-fg-muted leading-relaxed">
        {duty.text}
        <Refs ids={duty.refs} />
      </p>
    </div>
  );
}

function LiveReformCard({ reform }: { reform: ReformCard }) {
  return (
    <div className="rounded-lg border border-(--color-border) bg-(--color-surface-2) overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-(--color-border)">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-success uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
          Live
        </span>
        <span className="text-xs font-mono text-fg-subtle uppercase tracking-wider">
          {reform.category}
        </span>
        <span className="ml-auto text-xs text-fg-faint">In force</span>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <p className="text-sm font-semibold text-fg">{reform.title}</p>
        <p className="text-sm text-fg-muted leading-relaxed">
          {reform.body}
          <Refs ids={reform.refs} />
        </p>
        {reform.emphasis && (
          <p className="text-sm text-fg leading-relaxed mt-1">
            <strong>This matters for damp cases</strong>{" "}
            {reform.emphasis.replace(/^This matters for damp cases\s*/i, "")}
          </p>
        )}
      </div>
    </div>
  );
}

function PendingReformCard({ reform }: { reform: ReformCard }) {
  return (
    <div className="rounded-lg border border-(--color-border) bg-(--color-surface-2) overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-(--color-border)">
        {reform.phase && (
          <span className="text-xs font-mono text-fg-subtle uppercase tracking-wider">
            {reform.phase}
          </span>
        )}
        <span className="flex items-center gap-1.5 text-xs font-semibold text-warning uppercase tracking-wider ml-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-warning inline-block" />
          Pending
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <p className="text-sm font-semibold text-fg">{reform.title}</p>
        <p className="text-sm text-fg-muted leading-relaxed">
          {reform.body}
          <Refs ids={reform.refs} />
        </p>
      </div>
    </div>
  );
}

export default function PrivateLandlordsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-(--color-border)">
        <Navbar />
        {/* Context bar */}
        <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between py-2">
          <span className="text-xs font-mono text-fg-subtle uppercase tracking-widest">
            Private Landlords — corrected for {meta.currentAs}
          </span>
          <Link
            href="/landlords"
            className="text-xs text-fg-subtle hover:text-fg transition-colors"
          >
            ↗ /landlords
          </Link>
        </div>
      </header>

      {/* Alert banners */}
      <div className="border-b border-(--color-border) bg-(--color-surface-2)">
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-(--color-border)">
          {alerts.map((alert, i) => (
            <div key={i} className="flex items-start gap-3 py-3 md:px-4 first:md:pl-0 last:md:pr-0 flex-1 min-w-0">
              <span
                className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider shrink-0 mt-0.5 ${
                  alert.status === "live" ? "text-success" : "text-warning"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full inline-block ${
                    alert.status === "live" ? "bg-success" : "bg-warning"
                  }`}
                />
                {alert.label}
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="text-xs font-semibold text-fg">{alert.title}</p>
                <p className="text-xs text-fg-muted leading-relaxed">
                  {alert.text}
                  <Refs ids={alert.refs ?? []} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 w-full pt-10 pb-8 flex flex-col gap-4">
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="eyebrow text-left">
            {meta.eyebrow} · current as of {meta.currentAs}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            {meta.heading.split("What do you actually have to do?")[0]}
            <span className="text-accent">
              What do you actually have to do?
            </span>
          </h1>
          <p className="text-sm text-fg-muted leading-relaxed max-w-2xl">
            {meta.intro}
          </p>
          <p className="text-xs text-fg-faint">Last reviewed: {meta.lastReviewed}</p>
        </div>
      </section>

      {/* Two-column layout: sticky sidebar + scrollable content */}
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row gap-10 pb-20">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0">
          <div className="sticky top-6 flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium mb-3">
                On this page
              </p>
              <ol className="flex flex-col">
                {toc.map((item) => (
                  <li key={item.anchor}>
                    <a
                      href={`#${item.anchor}`}
                      className="flex items-baseline gap-3 py-3 border-b border-(--color-border) text-fg-muted hover:text-fg transition-colors group"
                    >
                      <span className="text-xs font-mono text-accent shrink-0">
                        {item.num}
                      </span>
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <DownloadGate
              label="Free download"
              title={download.title}
              description={download.description}
              guideName={download.title}
              ctaLabel={download.cta.label}
            />
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0 flex flex-col gap-14">

          {/* R1 — STATUTORY DUTIES */}
          <section id="statutory-duties" className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                R1 — Your statutory duties today
              </span>
              <h2 className="text-xl font-bold text-fg">
                {sections.statutoryDuties.lead}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {sections.statutoryDuties.duties.map((duty, i) => (
                <StatuteBox key={i} duty={duty} />
              ))}
            </div>
          </section>

          {/* R2 — ALREADY CHANGED */}
          <section id="already-changed" className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                R2 — What&apos;s already changed
              </span>
              <h2 className="text-xl font-bold text-fg">
                {sections.alreadyChanged.lead}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {sections.alreadyChanged.reforms.map((reform, i) => (
                <LiveReformCard key={i} reform={reform} />
              ))}
            </div>
          </section>

          {/* R3 — STILL PENDING */}
          <section id="still-pending" className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                R3 — What&apos;s still pending
              </span>
              <h2 className="text-xl font-bold text-fg">
                {sections.stillPending.lead}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {sections.stillPending.reforms.map((reform, i) => (
                <PendingReformCard key={i} reform={reform} />
              ))}
            </div>
            {/* Practical implication */}
            <div className="rounded-lg border border-(--color-border) bg-(--color-surface-2) p-5 flex flex-col gap-2">
              <p className="text-xs font-semibold text-fg-subtle uppercase tracking-wider">
                Practical implication
              </p>
              <p className="text-sm text-fg-muted leading-relaxed">
                {sections.stillPending.implication}
              </p>
            </div>
          </section>

          {/* R4 — WHERE MAPLE DIAGNOSTICS FITS */}
          <section id="maple-diagnostics" className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                R4 — Where Maple Diagnostics fits
              </span>
              <h2 className="text-xl font-bold text-fg">
                {sections.mapleDiagnostics.lead}
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {sections.mapleDiagnostics.paras.map((para, i) => (
                <p key={i} className="text-sm text-fg-muted leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </section>

        </div>
      </div>

      <CtaBanner
        heading="Evidence before the complaint escalates."
        body="A 14-day sensor deployment produces court-ready environmental data under Section 11, the Homes Act, and HHSRS — and will satisfy the PRS Ombudsman once it is in force."
        primaryCta={{ label: "Order kit — £249", href: "/order" }}
        secondaryCta={{ label: "Download sample report", href: "#" }}
      />

      <Footer />
    </main>
  );
}
