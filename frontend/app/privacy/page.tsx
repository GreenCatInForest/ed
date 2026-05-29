import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SITE_URL, ORG_ID } from "@/lib/seo";
import { privacyNotice } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Privacy Notice — Maple Diagnostics",
  description:
    "How Maple Diagnostics collects, uses, and protects your personal data. UK GDPR Articles 13/14 notice covering our download forms and enquiry handling.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/privacy`,
  name: "Privacy Notice",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-GB",
  dateModified: privacyNotice.meta.lastReviewed.replace(/ /g, "-"),
};

const { controller, sections, meta } = privacyNotice;

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>

      <section className="max-w-3xl mx-auto px-6 w-full pt-12 pb-4 flex flex-col gap-3">
        <div className="eyebrow text-left">Legal</div>
        <h1 className="text-3xl md:text-4xl font-bold">
          Privacy <span className="text-accent">notice</span>
        </h1>
        <div className="flex flex-col gap-0.5 text-xs text-fg-faint font-mono">
          <p>Last reviewed: {meta.lastReviewed}</p>
          <p>Effective from: {meta.effectiveFrom}</p>
          <p>
            Controller: {controller.legalEntity} · Companies House {controller.companiesHouse}
          </p>
        </div>
      </section>

      {/* <div className="max-w-3xl mx-auto px-6 w-full pb-20 flex flex-col gap-10">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="flex flex-col gap-4">
            <h2 className="text-base font-semibold text-fg border-b border-(--color-border) pb-3">
              {section.title}
            </h2>

            {"body" in section && section.body && (
              <p className="text-sm text-fg-muted leading-relaxed">{section.body}</p>
            )}

            {"items" in section && Array.isArray(section.items) && (
              <ul className="flex flex-col gap-4">
                {(section.items as Array<Record<string, string>>).map((item, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-fg">
                      {item.basis ?? item.name ?? item.right}
                    </p>
                    <p className="text-sm text-fg-muted leading-relaxed">
                      {item.purpose ?? item.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {"note" in section && section.note && (
              <p className="text-sm text-fg-muted leading-relaxed italic">{section.note}</p>
            )}

            {"howToExercise" in section && section.howToExercise && (
              <div className="rounded-lg border border-(--color-border) bg-(--color-surface-2) p-4">
                <p className="text-sm text-fg-muted leading-relaxed">{section.howToExercise}</p>
              </div>
            )}
          </section>
        ))} */}

        {/* Contact block */}
        {/* <section className="rounded-xl border border-(--color-border) bg-(--color-surface-2) p-6 flex flex-col gap-2">
          <p className="text-xs font-semibold text-fg-subtle uppercase tracking-wider">Contact us</p>
          <p className="text-sm text-fg-muted leading-relaxed">
            Data controller:{" "}
            <strong className="text-fg">{controller.legalEntity}</strong> trading as{" "}
            <strong className="text-fg">{controller.tradingAs}</strong>
          </p>
          <p className="text-sm text-fg-muted">
            General:{" "}
            <a
              href={`mailto:${controller.contactEmail}`}
              className="text-accent hover:text-accent-light transition-colors"
            >
              {controller.contactEmail}
            </a>
          </p>
          <p className="text-sm text-fg-muted">
            Privacy / DPO:{" "}
            <a
              href={`mailto:${controller.dpoEmail}`}
              className="text-accent hover:text-accent-light transition-colors"
            >
              {controller.dpoEmail}
            </a>
          </p>
        </section>
      </div> */}

      <Footer />
    </main>
  );
}
