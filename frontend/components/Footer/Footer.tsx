import styles from "./Footer.module.css";

const columns = [
  {
    heading: "Product",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/sample-report", label: "Sample report" },
      { href: "/sensor-specs", label: "Sensor specs" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { href: "/social-housing", label: "Social housing" },
      { href: "/landlords", label: "Private landlords" },
      { href: "/agents", label: "Letting agents" },
      { href: "/surveyors", label: "Surveyors" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/awaabs-law-guide", label: "Awaab's Law guide" },
      { href: "/compliance-checklist", label: "Compliance checklist" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Maple Diagnostics</span>
          <p className={styles.tagline}>
            Awaab&apos;s Law compliance through objective environmental data.
          </p>
          <p className={styles.location}>Huntingdon · Cambridgeshire</p>
          <div className={styles.pills}>
            <span className={styles.pill}>RICS aligned</span>
            <span className={styles.pill}>Ombudsman ready</span>
            <span className={styles.pill}>Co. No. 12345678</span>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.heading} className={styles.column}>
            <p className={styles.heading}>{col.heading}</p>
            <ul className={styles.list}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
