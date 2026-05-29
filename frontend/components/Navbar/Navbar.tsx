"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const links: NavLink[] = [
  { href: "/awaabs-law", label: "Awaab's Law - Free Guide", 
    children: [
      {
        href: "/awaabs-law/awaabs-law",
        label: "For housing associations",
      },
      {
        href: "/awaabs-law/private-landlords",
        label: "For private landlords",
      },
    ],
   },
  { href: "/housing-associations", label: "Social Housing" },
  { href: "/landlords", label: "Landlords" },
  { href: "/agents", label: "Agencies" },
  { href: "/building-specialists", label: "Surveyors" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
];

interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>Maple Diagnostics</Link>
        <div className="hidden md:flex items-center gap-6 text-fg-muted text-sm">
          {links.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                href={link.href}
                className="hover:text-fg transition-colors inline-flex items-start gap-1"
              >
                {link.label}
                {link.children && <span className="text-xs">▾</span>}
              </Link>

              {link.children && (
                <div className="absolute md:left-[-30px] top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <div className="min-w-56 rounded-xl border border-(--color-border) bg-surface shadow-lg p-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="before:content-['▹'] before:text-accent before:absolute before:-translate-x-4 block text-center rounded-lg px-3 py-2 text-sm text-fg-muted hover:text-fg hover:bg-surface-2 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          href="/order"
          className="hidden md:inline-flex items-center bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shrink-0"
        >
          Order kit — £249
        </Link>
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 translate-y-[-7px]" : ""}`} />
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-t border-(--color-border) shadow-lg z-50">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm text-fg-muted">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-fg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/order"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-medium px-4 py-2 rounded-lg transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Order kit — from £249
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
