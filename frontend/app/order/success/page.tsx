import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { IconCircleCheck } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Order confirmed — Maple Diagnostics",
  robots: { index: false, follow: false },
};

export default function OrderSuccessPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center px-4 py-24">
        <div className="max-w-md w-full text-center">
          <IconCircleCheck className="mx-auto mb-6 text-accent" size={48} stroke={1.5} />
          <h1 className="text-2xl font-bold text-fg mb-3">Order confirmed</h1>
          <p className="text-fg-muted mb-2">
            Payment received. We&apos;ll confirm your order by email within 1 hour and dispatch
            your kit same day for orders placed before 2&nbsp;pm.
          </p>
          <p className="text-sm text-fg-subtle mb-8">
            Questions? Reply to your confirmation email or contact{" "}
            <a href="mailto:maple@cambridgelogic.com" className="text-accent underline">
              maple@cambridgelogic.com
            </a>
          </p>
          <Link
            href="/"
            className="inline-block bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
