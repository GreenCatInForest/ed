"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./PricingTiers.module.css";

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  href?: string;
  featured?: boolean;
}

interface PricingTiersProps {
  eyebrow: string;
  heading: string;
  tiers: PricingTier[];
  footnote: React.ReactNode;
}

export default function PricingTiers({ eyebrow, heading, tiers, footnote }: PricingTiersProps) {
  const defaultIndex = tiers.findIndex((t) => t.featured);
  const [activeIndex, setActiveIndex] = useState(defaultIndex >= 0 ? defaultIndex : null);

  function cardClass(i: number, featured?: boolean) {
    const isActive = activeIndex === i;
    if (featured) return `${styles.cardFeatured} ${isActive ? styles.cardActive : ""}`;
    return `${styles.card} ${isActive ? styles.cardActive : ""}`;
  }

  return (
    <section className={styles.section}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.grid}>
        {tiers.map((tier, i) => (
          <div
            key={tier.name}
            className={cardClass(i, tier.featured)}
            onClick={() => setActiveIndex((prev) => (prev === i ? null : i))}
          >
            {tier.featured && (
              <div className={styles.badge}>Most popular</div>
            )}
            <div className={styles.cardBody}>
              <p className={styles.tierName}>{tier.name}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>{tier.price}</span>
                {tier.period && <span className={styles.period}>{tier.period}</span>}
              </div>
              <p className={styles.description}>{tier.description}</p>
              <ul className={styles.features}>
                {tier.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {tier.href ? (
              <Link
                href={tier.href}
                className={`block text-center ${activeIndex === i ? styles.ctaFeatured : styles.cta}`}
              >
                {tier.ctaLabel}
              </Link>
            ) : (
              <button className={activeIndex === i ? styles.ctaFeatured : styles.cta}>
                {tier.ctaLabel}
              </button>
            )}
          </div>
        ))}
      </div>
      {footnote && <p className={styles.footnote}>{footnote}</p>}
    </section>
  );
}
