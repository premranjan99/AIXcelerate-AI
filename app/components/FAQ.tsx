export default function FAQ() {
  const faqs = [
    {
      question: "What is AIXcelerate?",
      answer:
        "AIXcelerate is an AI-powered platform that helps founders validate ideas, research markets, and build startups faster.",
    },
    {
      question: "Do I need technical knowledge?",
      answer:
        "No. Anyone with a startup idea can use AIXcelerate.",
    },
    {
      question: "Can AI generate a business plan?",
      answer:
        "Yes. Our AI can generate business plans, pitch decks, and startup roadmaps.",
    },
    {
      question: "Is there a free plan?",
      answer:
        "Yes. You can start with our free plan and upgrade anytime.",
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-24 px-8">
      <h2 className="text-5xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto mt-16 space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="bg-black border border-gray-800 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold">
              {faq.question}
            </h3>

            <p className="text-gray-400 mt-3">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}