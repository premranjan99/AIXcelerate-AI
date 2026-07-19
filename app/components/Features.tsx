export default function Features() {
  const features = [
    {
      title: "AI Startup Validation",
      description: "Validate your startup idea with AI-driven insights."
    },
    {
      title: "Market Research",
      description: "Analyze competitors and discover market opportunities."
    },
    {
      title: "Business Plan",
      description: "Generate professional business plans in minutes."
    },
    {
      title: "Pitch Deck",
      description: "Create investor-ready pitch decks with AI."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-8">
      <h2 className="text-5xl font-bold text-center">
        Powerful AI Features
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Everything founders need to launch faster.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-semibold">
              {feature.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}