// app/page.tsx
import Navbar from "../components/Navbar/Navbar";
import Pill from "../components/Pill/Pill";


export default function Home() {
  return (
    <main className="min-h-screen  bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 font-montserrat">
        <Navbar />
      </header>
        

      {/* Hero */}
      <Pill />
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Build something great
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          A short tagline that explains what your product does in one sentence.
        </p>
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700">
          Get started
        </button>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-xl mb-2">Fast</h3>
            <p className="text-slate-600">Sub-second response times.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Reliable</h3>
            <p className="text-slate-600">99.9% uptime guaranteed.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Secure</h3>
            <p className="text-slate-600">End-to-end encryption built in.</p>
          </div>
        </div>
      </section>
    </main>
  );
}