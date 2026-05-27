export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://maplediagnostics.co.uk";

export const SITE_NAME = "Maple Diagnostics";

export const ORG_ID = `${SITE_URL}/#org`;

export const defaultOgImage = {
  url: "/og/default.jpg",
  width: 1200,
  height: 630,
  alt: "Maple Diagnostics — Court-Ready Damp & Mould Evidence",
};

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  description:
    "UK damp and mould diagnostic sensor kit provider. 14-day court-ready evidence for landlords, housing associations, letting agents, and surveyors.",
  address: { "@type": "PostalAddress", addressCountry: "GB" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "maple-diagnostics@cambridgelogic.com",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-GB",
};
