"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful 🎉");

      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 p-10 rounded-3xl w-[400px]">

        <h1 className="text-4xl font-bold text-white text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-8 w-full p-4 rounded-xl bg-gray-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4 w-full p-4 rounded-xl bg-gray-800 text-white"
        />

        <button
          onClick={handleLogin}
          className="mt-6 w-full bg-blue-600 py-4 rounded-xl text-white font-bold"
        >
          Login
        </button>

      </div>
    </main>
  );
}