export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Startup Founder",
      review:
        "AIXcelerate helped me validate my startup idea in just one day."
    },
    {
      name: "Priya Verma",
      role: "Tech Entrepreneur",
      review:
        "The AI-generated business plan saved me weeks of work."
    },
    {
      name: "Aman Gupta",
      role: "Product Builder",
      review:
        "Amazing platform for founders. Highly recommended!"
    }
  ];

  return (
    <section className="bg-gray-950 text-white py-24 px-8">
      <h2 className="text-5xl font-bold text-center">
        What Founders Say
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Trusted by ambitious founders building the future.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition"
          >
            <p className="text-gray-300 italic">
              "{item.review}"
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-gray-500">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}