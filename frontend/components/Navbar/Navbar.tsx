import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
      <nav className={styles.nav}>
          <span className={styles.logo}>Maple Diagnostics</span>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-emerald-600">Awaab&#39;s Law</a>
            <a href="#about" className="hover:text-emerald-600">Social Housing</a>
            <a href="/login" className="hover:text-emerald-600">Landlords</a>
            <a href="/login" className="hover:text-emerald-600">Agents</a>
            <a href="/login" className="hover:text-emerald-600">Surveyours</a>
            <a href="/login" className="hover:text-emerald-600">How it works</a>
            <a href="/login" className="hover:text-emerald-600">Pricing</a>
            <a href="/login" className="hover:text-emerald-600">Get for free</a> 
          </div>
    </nav>
  );
}