import styles from "./ProcessSteps.module.css";


interface Step {
  num: number;
  icon: React.ReactNode;
  title: string;
  body: string;
}

interface ProcessStepsProps {
  eyebrow: string;
  heading: string;
  steps: Step[];
}

export default function ProcessSteps({ eyebrow, heading, steps }: ProcessStepsProps) {
  return (
    <section className={styles.processSteps}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl text-center font-bold">{heading}</h2>
      <div className={styles.grid}>
        {steps.map((step) => (
          <div key={step.num} className={styles.stepCard}>
            <div className="flex flex-col justify-center items-center gap-2">
            <div className={styles.numBadge}>
              <div className={styles.numBadgeInner}>0{step.num}</div>
            </div>
            
            <div className={styles.icon}>{step.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-left">{step.title}</h3>
            <p className="text-fg-muted text-left text-sm">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
