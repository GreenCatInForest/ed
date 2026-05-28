import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SITE_URL, ORG_ID } from "@/lib/seo";
import { references } from "@/content/references";

export const metadata: Metadata = {
  title: "References & Citations",
  description:
    "Primary sources behind every claim on this site: legislation, MHCLG statutory guidance, and Housing Ombudsman publications on Awaab's Law and damp and mould compliance.",
  keywords: [
    "Awaab's Law references",
    "MHCLG guidance citations",
    "housing ombudsman primary sources",
    "social housing legislation",
  ],
  openGraph: {
    title: "References & Citations — Maple Diagnostics",
    description:
      "Every claim on this site is sourced to primary legislation, regulator guidance, or Housing Ombudsman publications. No secondary commentary.",
    url: "/references",
  },
  twitter: {
    title: "References & Citations — Maple Diagnostics",
    description:
      "Primary sources behind every Awaab's Law claim: legislation, MHCLG guidance, Housing Ombudsman.",
  },
  alternates: { canonical: "/references" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/references`,
  name: "References & Citations",
  description:
    "Primary sources for all claims on the Maple Diagnostics site, covering Awaab's Law, MHCLG statutory guidance, and Housing Ombudsman publications.",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-GB",
};

const groups: { label: string; ids: (keyof typeof references)[] }[] = [
  {
    label: "Legislation & statutory instruments",
    ids: [1, 3, 5, 6, 8, 10, 13, 17],
  },
  {
    label: "MHCLG statutory guidance",
    ids: [2, 7, 9, 11, 15, 16, 18, 19, 20],
  },
  {
    label: "Impact assessments",
    ids: [4],
  },
  {
    label: "Housing Ombudsman",
    ids: [12, 14],
  },
];

export default function ReferencesPage() {
  return (
    <main className="min-h-screen flex flex-col gap-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>

      <section className="max-w-6xl mx-auto px-6 w-full pt-8 md:pt-16 flex flex-col gap-4 max-w-3xl">
        <div className="eyebrow text-left">Primary sources only</div>
        <h1 className="text-4xl md:text-5xl font-bold">
          References &amp; <span className="text-accent">citations</span>
        </h1>
        <p className="text-fg-muted text-base max-w-2xl">
          Every factual claim on this site traces back to one of the sources
          below. All are primary: legislation, MHCLG statutory guidance, or
          Housing Ombudsman publications. No secondary commentary or trade press.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 w-full pb-16 flex flex-col gap-14">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col gap-4">
            <h2 className="text-xs uppercase tracking-widest text-fg-subtle font-medium border-b border-(--color-border) pb-3">
              {group.label}
            </h2>
            <ol className="flex flex-col gap-0">
              {group.ids.map((id) => {
                const ref = references[id];
                return (
                  <li
                    key={id}
                    id={`ref-${id}`}
                    className="flex gap-5 py-4 border-b border-(--color-border) group"
                  >
                    <span className="font-mono text-xs text-fg-faint shrink-0 w-5 pt-0.5">
                      [{id}]
                    </span>
                    <div className="flex flex-col gap-1 min-w-0">
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg group-hover:text-accent transition-colors leading-snug"
                      >
                        {ref.label}
                      </a>
                      <p className="text-xs text-fg-subtle leading-relaxed">
                        {ref.note}
                      </p>
                      <span className="text-xs font-mono text-fg-faint truncate mt-0.5">
                        {ref.url}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
