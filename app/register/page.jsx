"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "Registration failed");
      return;
    }

    setSuccess("Registration successful! Logging you in...");

    await new Promise((res) => setTimeout(res, 800));

    const login = await signIn("credentials", {
      redirect: false,
      email: form.email,
      password: form.password,
    });

    if (login?.ok) {
      if (form.role === "admin") router.push("/admin_dashboard");
      else router.push("/student_dashboard");
    } else {
      setError("Registration succeeded, but login failed. Please sign in.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-800 p-6">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left decorative panel */}
        <aside className="hidden md:flex flex-col justify-center items-start gap-6 rounded-2xl p-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl">
          <div className="w-full max-w-sm">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold shadow">
                L
              </div>
              <div>
                <h2 className="text-xl font-semibold">Welcome to LMS</h2>
                <p className="text-sm text-white/80 mt-1">
                  Create your account and start learning.
                </p>
              </div>
            </div>

            <p className="text-sm text-white/90 lead">
              Manage courses, track progress and join a community of learners. Sign
              up as a Student or Admin.
            </p>

            <div className="mt-6">
              <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-2 rounded-lg">
                <svg
                  className="w-5 h-5 text-white/90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l6.16-3.422A12 12 0 0112 21.5"
                  />
                </svg>
                <span className="text-sm">Get started in minutes</span>
              </div>
            </div>
          </div>

          <div className="mt-auto w-full">
            <svg
              viewBox="0 0 400 200"
              className="w-full h-36 opacity-90"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="rgba(255,255,255,0.12)" />
                  <stop offset="1" stopColor="rgba(255,255,255,0.06)" />
                </linearGradient>
              </defs>
              <rect width="400" height="200" fill="url(#g)" rx="12" />
              <g
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
              >
                <path d="M20 140 C120 80 180 160 300 100" />
                <path d="M10 100 C110 40 190 120 380 70" />
              </g>
            </svg>
          </div>
        </aside>

        {/* Right: form */}
        <section className="flex items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white/95 dark:bg-slate-900/85 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl"
            aria-labelledby="register-heading"
          >
            <h2
              id="register-heading"
              className="text-2xl font-semibold text-slate-900 dark:text-white mb-2"
            >
              Create your account
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Join LMS — learn, manage and grow
            </p>

            <div className="space-y-4">
              {error && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="text-sm text-rose-700 bg-rose-50 dark:bg-rose-900/30 border border-rose-100 dark:border-rose-800 p-3 rounded"
                >
                  {error}
                </div>
              )}
              {success && (
                <div
                  role="status"
                  aria-live="polite"
                  className="text-sm text-emerald-800 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 p-3 rounded"
                >
                  {success}
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Full name
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full pl-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Email
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12H8m8 0a4 4 0 10-8 0m8 0v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full pl-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11v2m0 4h.01M5 12V8a7 7 0 0114 0v4"
                      />
                    </svg>
                  </span>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Role
                </label>
                <select
                  className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="text-sm text-slate-500">
                By creating an account you agree to our terms.
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:from-indigo-700 hover:to-purple-700 transition"
              >
                Register
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 opacity-90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-indigo-600 dark:text-indigo-300 font-medium hover:underline"
              >
                Sign in
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
