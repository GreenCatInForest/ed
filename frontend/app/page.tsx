// app/page.tsx
import Navbar from "../components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import HeroCard from "@/components/Hero/HeroCard";
import TrustBar from "@/components/TrustBar/TrustBar";
import StatBlock from "@/components/StatBlock/StatBlock";
import FeatureSplit from "@/components/FeatureSplit/FeatureSplit";
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
          helperText={<>From £149 — cheaper than one solicitor letter.{" "}<a href="#" className="text-accent-light underline hover:text-accent transition-colors">Download sample report →</a></>}
          visual={
            <div className="grid grid-cols-2 gap-4 m-4 w-full">
              <HeroCard label="Landlords" color="blue" />
              <HeroCard label="Housing Associations" color="amber" />
              <HeroCard label="Surveyors" color="green" />
              <HeroCard label="Letting Agencies" color="purple" />
            </div>
          }
        />
      <TrustBar />
      <StatBlock
          eyebrow="The clock starts the moment a tenant complains"
          heading="10 working days. That's all a landlord has."
          body="Awaab's Law gives every social landlord a hard deadline to investigate damp and mould complaints. No data means losing in front of the Housing Ombudsman — by default."
          stats={[
            { value: "10", label: "working days to investigate" },
            { value: "3", label: "days for written findings" },
            { value: "£25k+", label: "Ombudsman ruling exposure" },
          ]}
        />
      <FeatureSplit />
      {/* Features */}
      <section id="features" className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-xl mb-2">Fast</h3>
            <p className="text-fg-muted">Sub-second response times.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Reliable</h3>
            <p className="text-fg-muted">99.9% uptime guaranteed.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Secure</h3>
            <p className="text-fg-muted">End-to-end encryption built in.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}