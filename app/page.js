"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-rose-50 dark:from-[#050510] dark:via-[#071229] dark:to-[#071827] font-sans">
      <main className="w-full max-w-4xl mx-auto px-6 py-24 sm:py-32">

        {/* Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/95 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl backdrop-blur-md overflow-hidden"
        >
          <div className="p-10 sm:p-16">

            {/* Logo + Title */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-semibold text-xl">L</span>
              </motion.div>

              <div>
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  LMS Platform
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Learn. Manage. Grow.
                </p>
              </div>
            </motion.div>

            {/* Title + Buttons */}
            <div className="mt-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900 dark:text-white"
              >
                Build better learning experiences with LMS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300"
              >
                Manage courses, track learning progress and onboard students
                effortlessly using a modern, accessible interface.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="mt-6 flex flex-col sm:flex-row gap-3"
              >
                <a
                  className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
                  href="/signin"
                >
                  Sign In
                </a>

                <a
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-[1.02] transition-all"
                  href="/signup"
                >
                  Sign Up
                </a>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-6 text-sm text-slate-500 dark:text-slate-400 flex flex-wrap gap-3"
              >
                <span className="inline-flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-indigo-500"
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
                  </svg>
                  Templates
                </span>

                <a
                  className="text-indigo-600 dark:text-indigo-300 font-medium hover:underline text-sm"
                  href="/templates"
                >
                  Explore templates
                </a>

                <a
                  className="text-indigo-600 dark:text-indigo-300 font-medium hover:underline text-sm"
                  href="/learn"
                >
                  Learning center
                </a>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-8 grid grid-cols-3 gap-3"
            >
              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800"
              >
                <div className="text-xs text-slate-500 dark:text-slate-400">Courses</div>
                <div className="text-xl font-semibold text-slate-900 dark:text-white">34</div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-emerald-50 to-white dark:from-slate-800 dark:to-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800"
              >
                <div className="text-xs text-slate-500 dark:text-slate-400">Students</div>
                <div className="text-xl font-semibold text-slate-900 dark:text-white">520</div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-amber-50 to-white dark:from-slate-800 dark:to-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800"
              >
                <div className="text-xs text-slate-500 dark:text-slate-400">Active</div>
                <div className="text-xl font-semibold text-slate-900 dark:text-white">72%</div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400"
        >
          Built with ❤️ — Customize this LMS starter to match your goals.
        </motion.div>
      </main>
    </div>
  );
}
