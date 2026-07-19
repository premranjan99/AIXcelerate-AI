import Footer from "./components/Footer";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Features from "./components/Features";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-6xl font-bold text-center">
          Build Smarter Startups with AI
        </h1>

        <p className="mt-6 max-w-3xl text-center text-xl text-gray-300">
          Validate startup ideas, analyze competitors, generate business
          plans, and launch faster with AIXcelerate AI.
        </p>

        <div className="mt-10 flex gap-5">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold">
            Get Started
          </button>

          <button className="border border-gray-600 hover:border-white px-8 py-4 rounded-xl text-lg">
            Watch Demo
          </button>
        </div>
      </main>
      <section className="w-full py-16 bg-gray-950">
  <h2 className="text-center text-gray-400 uppercase tracking-widest">
    Trusted by Future Founders
  </h2>

  <div className="mt-10 flex justify-center gap-16 text-2xl font-bold text-gray-500">
    <span>OpenAI</span>
    <span>Google</span>
    <span>Microsoft</span>
    <span>Anthropic</span>
    <span>Meta</span>
  </div>
</section>
<Features />
<Services />
<HowItWorks />
<Testimonials />
<Pricing />
<FAQ />
<Contact />
<Footer />
    </>
  );
}