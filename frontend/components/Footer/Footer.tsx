import styles from "./Footer.module.css";

const links = [
  { href: "#features", label: "Awaab's Law" },
  { href: "#social-housing", label: "Social Housing" },
  { href: "/landlords", label: "Landlords" },
  { href: "/agents", label: "Agents" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>Maple Diagnostics</span>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-fg-muted hover:text-fg transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-fg-subtle shrink-0">© {new Date().getFullYear()} Maple Diagnostics</p>
      </div>
    </footer>
  );
}
