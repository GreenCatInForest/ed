import styles from "./Hero.module.css";

import Pill from "../Pill/Pill";

export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className={styles.heroHomeMarketingWrapper}>
                <Pill />
                <h1 className="text-4xl md:text-5xl text-center md:text-left max-w-xl font-bold ">
                    Comply with Awaab&#39;s Law. <span className="text-accent">In 14 days.</span>
                </h1>
                <p className="text-base text-fg-muted max-w-lg text-center md:text-left">
                    Rent sensors. Monitor any property. Get an evidence of timestamped actions due to the official timeline. Generate court-ready reports. Protect yourself from Housing Ombudsman rulings — for £149, not £15,000.
                </p>
                <p className="text-base text-fg-muted max-w-lg text-center md:text-left">
                    Custom bespoke solution based on 3 scientific researches. Developed in collaboration with UK Property Care Association. Trusted by surveyors, landlords, letting agencies across the UK. 
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <a
                    href="/order"
                    className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                    Order your compliance kit
                    </a>
                    <button className="inline-flex items-center justify-center border border-(--color-border-strong) text-fg px-6 py-3 rounded-lg font-medium hover:bg-(--color-surface-hover) transition-colors">
                    Watch how it works (2 min)
                    </button>
                </div>
                <p className="text-sm text-fg-subtle text-center md:text-left">
                    From £149 — cheaper than one solicitor letter.{" "}
                    <a href="#" className="text-accent-light underline hover:text-accent transition-colors">
                    Download sample report →
                    </a>
                </p>
            </article>

            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
                <div className={`${styles.card} border-blue-400`} style={{ "--card-bg": "var(--glow-blue)", "--card-glow": "rgba(59,130,246,0.35)", "--card-glow-bg": "rgba(59,130,246,0.1)" } as React.CSSProperties}>Landlords</div>
                <div className={`${styles.card} border-amber-400`} style={{ "--card-bg": "var(--glow-amber)", "--card-glow": "rgba(251,191,36,0.35)", "--card-glow-bg": "rgba(251,191,36,0.1)" } as React.CSSProperties}>Housing Associations</div>
                <div className={`${styles.card} border-green-400`} style={{ "--card-bg": "var(--glow-green)", "--card-glow": "rgba(74,222,128,0.35)", "--card-glow-bg": "rgba(74,222,128,0.1)" } as React.CSSProperties}>Surveyours</div>
                <div className={`${styles.card} border-purple-400`} style={{ "--card-bg": "var(--glow-purple)", "--card-glow": "rgba(192,132,252,0.35)", "--card-glow-bg": "rgba(192,132,252,0.1)" } as React.CSSProperties}>Letting Agencies</div>
            </article>

        </div>
    </section>
  );
}
