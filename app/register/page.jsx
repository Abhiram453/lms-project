"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-slate-900 dark:via-slate-800 p-6"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        
        {/* Left section with animations */}
        <motion.aside
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex flex-col justify-between rounded-3xl p-10 bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-xl relative overflow-hidden"
        >
          {/* Floating glowing orb */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute w-40 h-40 bg-white/20 rounded-full blur-3xl -top-10 -right-10"
          />

          <div className="space-y-5 relative z-10">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center font-bold text-xl backdrop-blur"
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              >
                L
              </motion.div>
              <div>
                <h2 className="text-2xl font-semibold">Welcome to LMS</h2>
                <p className="text-white/80 text-sm">
                  Create your account and start learning.
                </p>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed">
              Manage courses, track progress and join a community of learners. 
              Sign up as a Student or Admin.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-lg backdrop-blur-md"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
              </svg>
              <span className="text-sm">Get started in minutes</span>
            </motion.div>
          </div>
        </motion.aside>

        {/* Right form panel */}
        <motion.section
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex items-center"
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white/95 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-slate-700 rounded-3xl p-8 shadow-2xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-slate-900 dark:text-white mb-2"
            >
              Create your account
            </motion.h2>

            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Join LMS — learn, manage and grow
            </p>

            <div className="space-y-4">
              {/* Animated alerts */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-rose-700 bg-rose-50 dark:bg-rose-900/30 p-3 rounded border border-rose-200 dark:border-rose-800"
                >
                  {error}
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-emerald-700 bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded border border-emerald-200 dark:border-emerald-800"
                >
                  {success}
                </motion.div>
              )}

              {/* Form Fields */}
              {[
                {
                  label: "Full name",
                  type: "text",
                  value: form.name,
                  key: "name",
                  placeholder: "Jane Doe",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11z"
                    />
                  ),
                },
                {
                  label: "Email",
                  type: "email",
                  value: form.email,
                  key: "email",
                  placeholder: "you@company.com",
                },
                {
                  label: "Password",
                  type: "password",
                  value: form.password,
                  key: "password",
                  placeholder: "••••••••",
                },
              ].map((f, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                    {f.label}
                  </label>
                  <div className="relative">
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-400 transition"
                      value={f.value}
                      onChange={(e) =>
                        setForm({ ...form, [f.key]: e.target.value })
                      }
                      required
                    />
                  </div>
                </motion.div>
              ))}

              {/* Role Select */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
                  Role
                </label>
                <select
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-medium shadow-lg"
            >
              Register
            </motion.button>

            {/* Sign in link */}
            <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-indigo-600 dark:text-indigo-300 font-semibold hover:underline"
              >
                Sign in
              </a>
            </div>
          </motion.form>
        </motion.section>
      </div>
    </motion.div>
  );
}
