"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account Created Successfully 🎉");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 p-10 rounded-3xl w-[400px]">

        <h1 className="text-4xl font-bold text-white text-center">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-8 w-full p-4 rounded-xl bg-gray-800 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-4 w-full p-4 rounded-xl bg-gray-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 w-full p-4 rounded-xl bg-gray-800 text-white"
        />

        <button
          onClick={handleSignup}
          className="mt-6 w-full bg-blue-600 py-4 rounded-xl text-white font-bold"
        >
          Create Account
        </button>

      </div>
    </main>
  );
}