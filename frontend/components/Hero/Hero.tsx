import styles from "./Hero.module.css";
import Pill from "../Pill/Pill";

interface BadgeProps {
  text: string;
  type?: "live" | "warning" | "info";
}

interface CtaProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface HeroProps {
  badge?: BadgeProps;
  headline: React.ReactNode;
  body: React.ReactNode;
  primaryCta: CtaProps;
  secondaryCta?: CtaProps;
  helperText?: React.ReactNode;
  visual?: React.ReactNode;
}

export default function Hero({
  badge,
  headline,
  body,
  primaryCta,
  secondaryCta,
  helperText,
  visual,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        <article className={styles.content}>
          {badge && <Pill text={badge.text} type={badge.type} />}

          <h1 className="text-4xl md:text-5xl text-center md:text-left max-w-xl font-bold">
            {headline}
          </h1>

          <div className="text-base text-fg-muted max-w-lg text-center md:text-left flex flex-col gap-4">
            {body}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {primaryCta.href ? (
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white text-center px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {primaryCta.label}
              </a>
            ) : (
              <button
                onClick={primaryCta.onClick}
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white text-center px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {primaryCta.label}
              </button>
            )}

            {secondaryCta && (
              <div className={styles.spinBorderWrapper}>
                {secondaryCta.href ? (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center bg-(--color-bg) border-0 text-fg px-6 py-3 rounded-[calc(0.5rem-1px)] font-medium w-full"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <button
                    onClick={secondaryCta.onClick}
                    className="inline-flex items-center justify-center bg-(--color-bg) border-0 text-fg px-6 py-3 rounded-[calc(0.5rem-1px)] font-medium w-full"
                  >
                    {secondaryCta.label}
                  </button>
                )}
              </div>
            )}
          </div>

          {helperText && (
            <p className="text-sm text-fg-subtle text-center md:text-left">
              {helperText}
            </p>
          )}
        </article>

        {visual}
      </div>
    </section>
  );
}
