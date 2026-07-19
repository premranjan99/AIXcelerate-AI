export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Describe Your Startup",
      description: "Tell AIXcelerate about your startup idea."
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI analyzes your idea, market and competitors."
    },
    {
      number: "03",
      title: "Launch Faster",
      description: "Get business plans, roadmap and AI recommendations."
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-8">
      <h2 className="text-5xl font-bold text-center">
        How It Works
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Launch your startup in three simple steps.
      </p>

      <div className="grid md:grid-cols-3 gap-10 mt-20">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-blue-500 transition"
          >
            <div className="text-5xl font-bold text-blue-500">
              {step.number}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {step.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}