export default function Services() {
  const services = [
    "AI Startup Validation",
    "Business Plan Generator",
    "Competitor Analysis",
    "AI Automation",
    "Pitch Deck Generator",
    "AI Chat Assistant",
  ];

  return (
    <section className="bg-gray-950 text-white py-20 px-8">
      <h2 className="text-5xl font-bold text-center">
        Our AI Services
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Everything you need to build and grow your startup.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {services.map((service) => (
          <div
            key={service}
            className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-blue-500 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-semibold">
              {service}
            </h3>

            <p className="mt-4 text-gray-400">
              AI-powered tools to help founders make smarter decisions.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}