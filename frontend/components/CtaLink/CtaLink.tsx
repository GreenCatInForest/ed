import Link from "next/link";
import styles from "./CtaLink.module.css";

interface CtaLinkProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function CtaLink({
  href = "#",
  children,
  variant = "primary",
}: CtaLinkProps) {
  return (
    <div className={styles.spinBorderWrapper}>
      <Link
        href={href}
        className={variant === "primary" ? styles.primary : styles.secondary}
      >
        {children}
      </Link>
    </div>
  );
}