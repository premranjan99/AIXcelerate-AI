export default function Contact() {
  return (
    <section className="bg-black text-white py-24 px-8">
      <h2 className="text-5xl font-bold text-center">
        Contact Us
      </h2>

      <p className="text-center text-gray-400 mt-4">
        We'd love to hear about your startup.
      </p>

      <form className="max-w-2xl mx-auto mt-12 space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
        />

        <textarea
          rows={5}
          placeholder="Tell us about your startup..."
          className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold">
          Send Message
        </button>
      </form>
    </section>
  );
}