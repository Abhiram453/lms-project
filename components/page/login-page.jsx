"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import InputField from "../global/input-field";
import Button from "../global/button";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("Email and password are required.");
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading("Signing you in...", {
      duration: Infinity,
    });

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (res?.error) {
        toast.dismiss(loadingToast);
        toast.error("Invalid credentials.");
        setIsLoading(false);
        return;
      }

      if (res?.ok) {
        toast.dismiss(loadingToast);
        toast.success("Login successful!");

        setTimeout(async () => {
          const sessionRes = await fetch("/api/auth/session");
          const session = await sessionRes.json();
          const role = session?.user?.role;

          if (role === "admin") router.push("/admin_dashboard");
          else router.push("/student_dashboard");
        }, 100);
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Unexpected error.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4">

      {/* 🔵 Animated Background Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/30 dark:bg-indigo-700/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/30 dark:bg-purple-800/20 rounded-full blur-3xl"
        animate={{ x: [0, -25, 20, 0], y: [0, 15, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: "spring" }}
          className="mb-6 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring" }}
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              L
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-wide">
                LMS
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                Learn. Manage. Grow.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/20 dark:border-slate-700 rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Welcome Back
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Sign in to continue
            </p>
          </div>

          <div className="space-y-4">
            {/* EMAIL */}
            <motion.div whileFocusWithin={{ scale: 1.01 }} className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                📧
              </span>
              <div className="pl-10">
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  disabled={isLoading}
                  required
                />
              </div>
            </motion.div>

            {/* PASSWORD */}
            <motion.div whileFocusWithin={{ scale: 1.01 }} className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                🔐
              </span>
              <div className="pl-10">
                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  disabled={isLoading}
                  required
                />
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              onClick={() => router.push("/forgot-password")}
              className="text-indigo-600 dark:text-indigo-300 text-sm hover:underline"
            >
              Forgot password?
            </button>
            <div className="text-xs text-slate-500">Secure sign-in</div>
          </div>

          <motion.div className="mt-6" whileTap={{ scale: 0.98 }}>
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400"
          >
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="text-indigo-600 dark:text-indigo-300 hover:underline font-medium"
            >
              Create one
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
