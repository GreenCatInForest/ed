import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForms from "@/components/ContactForms/ContactForms";
import { ORG_ID, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Download our compliance guide, apply for the Maple Social Program, or send us a general enquiry.",
  keywords: ["contact Maple Diagnostics", "damp evidence guide download", "Maple Social Program"],
  openGraph: {
    title: "Contact — Maple Diagnostics",
    description:
      "Download our compliance guide, apply for the Maple Social Program, or send us a general enquiry.",
    url: "/contact",
  },
  twitter: {
    title: "Contact — Maple Diagnostics",
    description: "Download our compliance guide or send us a general enquiry.",
  },
  alternates: { canonical: "/contact" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact`,
  name: "Contact Maple Diagnostics",
  description:
    "Download the compliance guide, apply for the Maple Social Program, or send a general enquiry to Maple Diagnostics.",
  provider: { "@id": ORG_ID },
  url: `${SITE_URL}/contact`,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>

      <section className="max-w-4xl mx-auto px-6 w-full flex flex-col gap-8 pt-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">Get in touch</p>
          <h1 className="text-3xl md:text-4xl font-bold">How can we help?</h1>
          <p className="text-fg-muted text-base max-w-xl">
            Download a compliance guide, apply for the Maple Social Program, or send us a general enquiry.
          </p>
        </div>
        <ContactForms />
      </section>

      <Footer />
    </main>
  );
}
