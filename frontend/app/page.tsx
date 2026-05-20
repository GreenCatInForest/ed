// app/page.tsx
import Navbar from "../components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import TrustBar from "@/components/TrustBar/TrustBar";
import RiskStats from "@/components/RiskStats/RiskStats";
import FeatureSplit from "@/components/FeatureSplit/FeatureSplit";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-24">
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>
      <Hero />
      <TrustBar />
      <RiskStats />
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