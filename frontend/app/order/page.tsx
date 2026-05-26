import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import OrderForm from "@/components/OrderForm/OrderForm";

export const metadata = {
  title: "Order your kit — Maple Diagnostics",
  description:
    "Order your 14-day diagnostic kit or start portfolio monitoring. Same-day dispatch for orders placed before 2 pm.",
};

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ kit?: string }>;
}) {
  const { kit } = await searchParams;
  return (
    <main className="min-h-screen flex flex-col gap-8 md:gap-12">
      <header className="border-b border-(--color-border)">
        <Navbar />
      </header>

      <section className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8 pt-4">
        <div className="flex flex-col gap-2 max-w-xl">
          <p className="text-xs uppercase tracking-widest text-fg-subtle font-medium">
            Order your kit
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Court-ready evidence.{" "}
            <span className="text-accent">In 14 days.</span>
          </h1>
          <p className="text-fg-muted text-base">
            Select your kit, fill in your details, and we&apos;ll dispatch the sensors same day.
            No installation required.
          </p>
        </div>

        <OrderForm defaultKit={kit} />
      </section>

      <Footer />
    </main>
  );
}
