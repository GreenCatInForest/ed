import styles from "./CtaBanner.module.css";

interface CtaButton {
  label: string;
  href?: string;
}

interface CtaBannerProps {
  heading: React.ReactNode;
  body: string;
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
}

export default function CtaBanner({ heading, body, primaryCta, secondaryCta }: CtaBannerProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.body}>{body}</p>
      <div className={styles.actions}>
        <a href={primaryCta.href ?? "#"} className={styles.primary}>{primaryCta.label}</a>
        <a href={secondaryCta.href ?? "#"} className={styles.secondary}>{secondaryCta.label}</a>
      </div>
    </section>
  );
}
