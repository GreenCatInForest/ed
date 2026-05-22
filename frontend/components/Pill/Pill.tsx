import styles from "./Pill.module.css";

interface PillProps {
  text: string;
  type?: "live" | "warning" | "info" | "danger";
  className?: string;
}

const dotColor: Record<NonNullable<PillProps["type"]>, string> = {
  live: "bg-success",
  warning: "bg-amber-400",
  info: "bg-blue-400",
  danger: "bg-red-400",
};

export default function Pill({ text, type = "live", className }: PillProps) {
  return (
    <div className={`${styles.pillWrapper}${className ? ` ${className}` : ""}`}>
      <div className={styles.pill}>
        <p className={styles.pillText}>
          <span className={`${styles.pillDot} ${dotColor[type]}`}></span>{text}
        </p>
      </div>
    </div>
  );
}
