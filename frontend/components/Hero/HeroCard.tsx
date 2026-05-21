import styles from "./Hero.module.css";

interface HeroCardProps {
  label: string;
  color: "blue" | "amber" | "green" | "purple";
}

const colorMap: Record<
  HeroCardProps["color"],
  { border: string; bg: string; glow: string; glowBg: string }
> = {
  blue:   { border: "border-blue-400",   bg: "var(--glow-blue)",   glow: "rgba(59,130,246,0.35)",  glowBg: "rgba(59,130,246,0.1)"  },
  amber:  { border: "border-amber-400",  bg: "var(--glow-amber)",  glow: "rgba(251,191,36,0.35)",  glowBg: "rgba(251,191,36,0.1)"  },
  green:  { border: "border-green-400",  bg: "var(--glow-green)",  glow: "rgba(74,222,128,0.35)",  glowBg: "rgba(74,222,128,0.1)"  },
  purple: { border: "border-purple-400", bg: "var(--glow-purple)", glow: "rgba(192,132,252,0.35)", glowBg: "rgba(192,132,252,0.1)" },
};

export default function HeroCard({ label, color }: HeroCardProps) {
  const { border, bg, glow, glowBg } = colorMap[color];
  return (
    <div
      className={`${styles.card} ${border}`}
      style={{
        "--card-bg": bg,
        "--card-glow": glow,
        "--card-glow-bg": glowBg,
      } as React.CSSProperties}
    >
      {label}
    </div>
  );
}
