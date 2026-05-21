import styles from "./StatBlock.module.css";

interface Stat {
  value: string;
  label: string;
}

interface StatBlockProps {
  eyebrow: string;
  heading: string;
  body: string;
  stats: Stat[];
}

export default function StatBlock({ eyebrow, heading, body, stats }: StatBlockProps) {
  return (
    <section className={styles.statBlock}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-center">{heading}</h2>
      <p className="text-fg-muted max-w-xl text-center">{body}</p>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <span className="text-3xl font-bold text-accent">{stat.value}</span>
            <span className="text-sm text-fg-muted text-center">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
