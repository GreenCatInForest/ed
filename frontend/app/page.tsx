// app/page.tsx
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
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

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-16">
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>
      <Hero
          badge={{ text: "Awaab's Law Phase 1 — live since Oct 2025", type: "live" }}
          headline={<>Comply with Awaab&apos;s Law. <span className="text-accent">In 14 days.</span></>}
          body={<>
            <p>Rent sensors. Monitor any property. Get an evidence of timestamped actions due to the official timeline. Generate court-ready reports. Protect yourself from Housing Ombudsman rulings — for £149, not £15,000.</p>
            <p>Custom bespoke solution based on 3 scientific researches. Developed in collaboration with UK Property Care Association. Trusted by surveyors, landlords, letting agencies across the UK.</p>
          </>}
          primaryCta={{ label: "Order your compliance kit", href: "/order" }}
          secondaryCta={{ label: "Watch how it works (2 min)" }}
          helperText={<>From £149 — cheaper than one solicitor letter.{" "}<Link href="#" className="text-accent-light underline hover:text-accent transition-colors">Download sample report →</Link></>}
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
          eyebrow="The clock starts the moment a tenant complains"
          heading="10 working days. That's all a landlord has."
          body="Awaab's Law gives every social landlord a hard deadline to investigate damp and mould complaints. No data means losing in front of the Housing Ombudsman - by default."
          stats={[
            { value: "10", label: "working days to investigate" },
            { value: "3", label: "days for written findings" },
            { value: "£25k+", label: "Ombudsman ruling exposure" },
          ]}
        />
      <FeatureSplit />
      <ProcessSteps
          eyebrow="How md_app works"
          heading="Three steps. Evidence trail. One court-ready report."
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
              body: "Continuous humidity, temperature, and surface-temperature logging. Automated BMI and dew point analysis due to the metodology developed with UK Property Care Association.",
            },
            {
              num: 3,
              icon: <IconFileCheck size={28} stroke={1.5} />,
              title: "Get the report",
              body: "Court-ready PDF: structural failure vs. lifestyle, with timestamped evidence.",
            },
          ]}
        />
      <Testimonial
        items={[
          {
            quote: "Tenant claimed structural damp. Our md_app report showed lifestyle ventilation issues across all three rooms. The Shelter referral was withdrawn. We avoided an £8,000 disrepair claim.",
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
      />
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
        //     price: "£149",
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
        primaryCta={{ label: "Order kit — £149", href: "/order" }}
        secondaryCta={{ label: "Download sample report", href: "#" }}
      />
      <Footer />
    </main>
  );
}