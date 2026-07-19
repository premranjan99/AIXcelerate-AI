export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      features: [
        "AI Idea Validation",
        "Basic Market Research",
        "5 AI Requests / Day",
      ],
    },
    {
      name: "Pro",
      price: "₹999/mo",
      features: [
        "Unlimited AI Requests",
        "Business Plan Generator",
        "Competitor Analysis",
        "Pitch Deck Generator",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Dedicated AI Consultant",
        "Team Dashboard",
        "Priority Support",
        "Custom AI Solutions",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-8">
      <h2 className="text-5xl font-bold text-center">
        Pricing Plans
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Choose the plan that fits your startup journey.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition"
          >
            <h3 className="text-3xl font-bold">{plan.name}</h3>

            <p className="text-4xl text-blue-500 mt-4">
              {plan.price}
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}