import styles from "./SituationCards.module.css";

export type ScenarioVariant = "danger" | "warning" | "success";

export interface ScenarioStat {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface ScenarioCard {
  variant: ScenarioVariant;
  badge: string;
  subtitle: string;
  heading: string;
  body: React.ReactNode;
  stats: ScenarioStat[];
  recommendation: {
    title: string;
    price: string;
    description: string;
  };
}

interface SituationCardsProps {
  eyebrow: string;
  heading: string;
  body: string;
  scenarios: ScenarioCard[];
}

const variantTokens: Record<ScenarioVariant, { border: string; badge: string; text: string }> = {
  danger:  { border: "var(--color-danger)",  badge: "var(--color-danger)",  text: "var(--color-danger-text)"  },
  warning: { border: "var(--color-warning)", badge: "var(--color-warning)", text: "var(--color-warning-text)" },
  success: { border: "var(--color-success)", badge: "var(--color-success)", text: "var(--color-success-text)" },
};

export default function SituationCards({ eyebrow, heading, body, scenarios }: SituationCardsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.body}>{body}</p>
      </div>

      <div className={styles.grid}>
        {scenarios.map((scenario) => {
          const tokens = variantTokens[scenario.variant];
          return (
            <div
              key={scenario.badge}
              className={styles.card}
              style={{
                "--card-border": tokens.border,
                "--card-text":   tokens.text,
              } as React.CSSProperties}
            >
              <span
                className={styles.badge}
                style={{ background: tokens.badge }}
              >
                {scenario.badge}
              </span>

              <div className={styles.cardBody}>
                <p className={styles.subtitle}>{scenario.subtitle}</p>
                <h3 className={styles.cardHeading}>{scenario.heading}</h3>
                <div className={styles.cardText}>{scenario.body}</div>
              </div>

              <dl className={styles.stats}>
                {scenario.stats.map((stat) => (
                  <div key={stat.label} className={styles.statRow}>
                    <dt className={styles.statLabel}>{stat.label}</dt>
                    <dd
                      className={styles.statValue}
                      style={stat.highlight ? { color: tokens.text } : undefined}
                    >
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className={styles.recommendation}>
                <p className={styles.recTitle}>{scenario.recommendation.title}</p>
                <p className={styles.recBody}>
                  <span className={styles.recPrice}>{scenario.recommendation.price}</span>
                  {" "}
                  {scenario.recommendation.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
