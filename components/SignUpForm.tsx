"use client";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useRouter } from "next/navigation"; // For app router compatibility
import Navbar from "@/components/Navbar";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  async function signUpNewUser(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      if (!data.user) {
        setErrorMessage("Sign-up failed. Please try again.");
        return;
      }

      const { error: userError } = await supabase.from("UserData").insert([
        {
          user_id: data.user.id,
          first_name: firstName,
          last_name: lastName,
          email,
        },
      ]);

      if (userError) {
        setErrorMessage(userError.message);
      } else {
        router.push("/");
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      console.error("Sign-up error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <form
        onSubmit={signUpNewUser}
        className="w-full max-w-md space-y-4 p-4 bg-white shadow-md rounded"
      >
        <h1 className="text-xl font-bold">Sign Up</h1>

        {errorMessage && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}

        <input
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 mt-4 text-white bg-blue-500 rounded ${
            loading ? "opacity-50" : "hover:bg-blue-600"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      </div>
  );
}
