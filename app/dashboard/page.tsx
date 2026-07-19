"use client";

import { useState } from "react";

export default function StartupValidator() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function validateIdea() {
    console.log("Button clicked");

    if (!idea.trim()) {
      alert("Please enter your startup idea.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idea }),
      });

      const data = await res.json();

      if (data.result) {
        setResult(data.result);
      } else {
        setResult(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResult("Unable to connect to AI.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-black">
        🚀 Startup Idea Validator
      </h1>

      <p className="mt-3 text-lg text-gray-700">
        Enter your startup idea and get AI feedback.
      </p>

      <textarea
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Example: AI-powered farming assistant for Indian farmers..."
        className="mt-8 w-full h-48 rounded-xl border border-gray-300 bg-white p-4 text-lg text-black placeholder:text-gray-500 shadow"
      />

      <button
        onClick={validateIdea}
        disabled={loading}
        className="mt-6 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white hover:bg-blue-700"
      >
        {loading ? "Analyzing..." : "🚀 Validate Idea"}
      </button>

      {result && (
        <div className="mt-10 rounded-xl border bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-black">
            🤖 AI Feedback
          </h2>

          <pre className="whitespace-pre-wrap text-base leading-7 text-black">
            {result}
          </pre>
        </div>
      )}
    </main>
  );
}