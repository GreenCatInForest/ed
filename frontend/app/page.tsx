// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { SITE_URL, ORG_ID } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Court-Ready Damp & Mould Evidence",
  description:
    "14-day sensor kits that turn damp and mould complaints into court-ready evidence. Protect yourself from Housing Ombudsman rulings and disrepair claims. Proactive monitoring and one-off diagnostics for first complaint compliance with Awaab's Law.",
  keywords: [
    "Awaab's Law evidence",
    "damp mould sensor kit",
    "court-ready evidence landlord",
    "housing ombudsman defence",
    "damp evidence 10 days",
  ],
  openGraph: {
    title: "Court-Ready Damp & Mould Evidence — Maple Diagnostics",
    description:
      "14-day sensor kits that turn damp and mould complaints into court-ready evidence. For landlords, housing associations, letting agents, and surveyors.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Court-Ready Damp & Mould Evidence — Maple Diagnostics",
    description:
      "14-day sensor kits that turn damp and mould complaints into court-ready evidence. For landlords, HAs, letting agents, and surveyors.",
  },
  alternates: { canonical: "/" },
};
import Hero from "@/components/Hero/Hero";
import HeroCard from "@/components/Hero/HeroCard";
import TrustBar from "@/components/TrustBar/TrustBar";
import StatBlock from "@/components/StatBlock/StatBlock";
import FeatureSplit from "@/components/FeatureSplit/FeatureSplit";
import ProcessSteps from "@/components/ProcessSteps/ProcessSteps";
import Testimonial from "@/components/Testimonial/Testimonial";
import PricingTiers from "@/components/PricingTiers/PricingTiers";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import { IconPackage, IconActivity, IconFileCheck } from "@tabler/icons-react";
import Footer from "@/components/Footer/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "Damp & Mould Diagnostic Kit",
  provider: { "@id": ORG_ID },
  description:
    "14-day sensor kit rental for court-ready damp and mould evidence. Covers humidity, temperature, surface temperature with automated Building Moisture Index and dew-point analysis.",
  // offers: [
  //   { "@type": "Offer", name: "Starter Report", price: "149", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
  //   { "@type": "Offer", name: "Professional Report", price: "249", priceCurrency: "GBP", availability: "https://schema.org/InStock" },
  //   // {
  //   //   "@type": "Offer",
  //   //   name: "Portfolio Monitoring",
  //   //   priceCurrency: "GBP",
  //   //   priceSpecification: {
  //   //     "@type": "UnitPriceSpecification",
  //   //     price: "49",
  //   //     priceCurrency: "GBP",
  //   //     unitText: "MON",
  //   //   },
  //   // },
  // ],
  areaServed: { "@type": "Country", name: "United Kingdom" },
  serviceType: "Property Diagnostics",
  audience: {
    "@type": "Audience",
    audienceType: "Landlords, Housing Associations, Letting Agents, Surveyors",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>
      <Hero
          badge={{ text: "Awaab's Law Phase 1 — live since Oct 2025", type: "live" }}
          headline={<>Awaab&apos;s Law evidence. <span className="text-accent">In 10 days.</span></>}
          body={<>
            {/* <p>For social landlords meeting the 10-working-day investigation window. For private landlords gathering the same standard of evidence before the regime extends to the PRS. Calibrated sensors, continuous monitoring, defensible PDF report.</p> */}
            <p>Rent sensors. Monitor any property. Record timestamped evidence for each action in the official compliance timeline. Generate court-ready reports. Protect yourself from Housing Ombudsman rulings — for £249, not £32000.</p>
            <p>Custom bespoke solution developed based on published academic research on damp and moisture detection. Citations available to enterprise customers under NDA. Developed in collaboration with UK Property Care Association. Built around the Housing Ombudsman&apos;s 26 Spotlight recommendations. Aligned with MHCLG 2025 statutory guidance.</p>
          </>}
          primaryCta={{ label: "Order your kit", href: "/order" }}
          secondaryCta={{ label: "Watch how it works (2 min)" }}
          helperText={<>From £249 — cheaper than one solicitor letter.{" "}<Link href="#" className="text-accent-light underline hover:text-accent transition-colors">Download sample report →</Link></>}
          visual={
            <div className="grid grid-cols-2 gap-4 m-4 w-full">
              <HeroCard label="Landlords" color="blue" href="/landlords" />
              <HeroCard label="Housing Associations" color="amber" href="/housing-associations" />
              <HeroCard label="Surveyors" color="green" href="/building-specialists" />
              <HeroCard label="Letting Agencies" color="purple" href="/agents" />
            </div>
          }
        />
      <TrustBar />
      <StatBlock
          eyebrow="The clock starts the moment a landlord becomes aware of a complaint"
          heading="10 working days. That's all a landlord has."
          body="Awaab's Law gives every social landlord a hard deadline to investigate damp and mould complaints. No data means losing in front of the Housing Ombudsman - by default."
          stats={[
            { value: "10", label: "working days to investigate" },
            { value: "3", label: "working days for written findings" },
            { value: "£25k+", label: "Ombudsman ruling exposure" },
          ]}
        />
      <FeatureSplit />
      <ProcessSteps
          eyebrow="How it works"
          heading="Three steps. Evidence trail. One report."
          steps={[
            {
              num: 1,
              icon: <IconPackage size={28} stroke={1.5} />,
              title: "Rent the kit",
              body: "Sensors dispatched same day. Place sensors in the affected room. No WiFi setup required.",
            },
            {
              num: 2,
              icon: <IconActivity size={28} stroke={1.5} />,
              title: "Monitor for 14 days",
              body: "Continuous humidity, temperature, and surface-temperature logging. Automated Building Moisture Index and dew point analysis due to the metodology developed with UK Property Care Association.",
            },
            {
              num: 3,
              icon: <IconFileCheck size={28} stroke={1.5} />,
              title: "Get the report",
              body: "Formatted for the Pre-Action Protocol disclosure requirements PDF: structural failure vs. condensation, with timestamped evidence.",
            },
          ]}
        />
      {/* <Testimonial
        items={[
          {
            quote: "Tenant claimed structural damp. Our md_app report showed condensationissues across all three rooms. The Shelter referral was withdrawn. We avoided an £8,000 disrepair claim.",
            name: "James Marshall",
            role: "Property Compliance Lead · Cambridgeshire HA",
            stat: { value: "£8,000", label: "Claim avoided" },
          },
          {
            quote: "We had three simultaneous Ombudsman complaints. md_app gave us timestamped sensor data for every property. All three cases were closed in our favour within 6 weeks.",
            name: "Sarah Chen",
            role: "Operations Director · Midlands Letting Agency",
            stat: { value: "3/3", label: "Cases closed" },
          },
          {
            quote: "As a private landlord with six properties I can't afford a solicitor for every dispute. The 14-day kit costs less than a single hour of legal advice and the report does the heavy lifting.",
            name: "David Okafor",
            role: "Private Landlord · Greater Manchester",
            stat: { value: "6", label: "Properties protected" },
          },
        ]}
      /> */}
      {/* <PricingTiers
        eyebrow="Transparent pricing"
        heading="Pay per property. Or monitor your whole portfolio."
        tiers={
          [
            {
              name: "Emergency kit",
              price: "£249",
              description: "For private landlords with a single mould dispute to resolve. Registered providers with an active complaint. Protect your rights from day 1.",
              features: [
                "14-day equipment rental",
                "1-property diagnostic report",
                "Court-ready PDF",
                "Trail of timestamped evidences",
                "Documented all the actions taken within the legal timeline",
              ],
              ctaLabel: "Order kit",
              href: "/order?kit=diagnostic",
            },
            {
              name: "Proactive Monitoring",
              price: "£49/month",
              period: "per property",
              description: "For proactive landlords and HAs. Ongoing compliance with continuous sensor data and monthly graphs.",
              features: [
                "Always-on sensors",
                "Monthly graphs showing the actual readings + alerts",
                "Protective setup for any future complaints",
              ],
              ctaLabel: "Start monitoring",
              href: "/order?kit=monitoring",
            },

            {
              name: "Free Emergency Kit",
              price: "£0",
              description: "For landlords with an active complaint. Protect your rights from the 1 day.",
              features: [
                "14-day equipment rental",
                "1-property diagnostic report",
                "Court-ready PDF",
                "Trail of timestamped evidences",
                "Documented all the actions taken within the legal timeline",
              ],
              ctaLabel: "Order kit",
              href: "/order?kit=diagnostic",
            },
            
          ]
        }
        // tiers={[
        //   {
        //     name: "Starter Report",
        //     price: "£249",
        //     description: "For private landlords with a single mould dispute to resolve.",
        //     features: [
        //       "14-day equipment rental",
        //       "1-property diagnostic report",
        //       "Court-ready PDF",
        //     ],
        //     ctaLabel: "Order kit",
        //     href: "/order?kit=starter",
        //   },
        //   {
        //     name: "Professional Report",
        //     price: "£249",
        //     description: "For letting agents and HA property managers handling multiple rooms.",
        //     features: [
        //       "14-day equipment rental",
        //       "3-room diagnostic report",
        //       "Written findings summary",
        //       "Ombudsman template",
        //     ],
        //     ctaLabel: "Order kit",
        //     href: "/order?kit=professional",
        //     featured: true,
        //   },
        //   {
        //     name: "Portfolio Monitoring",
        //     price: "£49",
        //     period: "/month per property",
        //     description: "Continuous monitoring for multi-property landlords and HAs.",
        //     features: [
        //       "Always-on sensors",
        //       "Monthly reports + alerts",
        //       "Portfolio dashboard",
        //     ],
        //     ctaLabel: "Start monitoring",
        //     href: "/order?kit=portfolio",
        //   },
        // ]}
        footnote={
          <>
            Need 50+ properties?{" "}
            <Link href="#" className="text-fg underline hover:text-accent-light transition-colors">
              Enterprise pricing →
            </Link>
            {" · "}
            RICS surveyor?{" "}
            <Link href="#" className="text-fg underline hover:text-accent-light transition-colors">
              Practice licence at £79/mo →
            </Link>
          </>
        }
      /> */}
       <CtaBanner
        heading="The landlord who gets a complaint today needs evidence by Friday."
        body="Order your kit now. Sensors dispatched same day."
        primaryCta={{ label: "Order kit — £249", href: "/order" }}
        secondaryCta={{ label: "Download sample report", href: "#" }}
      />
      <Footer />
    </main>
  );
}