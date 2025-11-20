"use client";

import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { motion } from "framer-motion";

export default function DashboardLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-800"
    >
      {/* Animated Sidebar */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="shadow-xl shadow-indigo-500/5"
      >
        <Sidebar />
      </motion.div>

      <div className="flex-1 min-h-screen flex flex-col">
        {/* Animated Navbar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="shadow-md shadow-indigo-500/5"
        >
          <Navbar />
        </motion.div>

        {/* Main Content */}
        <main className="p-6 md:p-8 lg:p-10 flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="max-w-7xl mx-auto w-full"
          >
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white/75 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-2xl p-6 md:p-8 shadow-xl
              before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none 
              before:border before:border-white/20 before:dark:border-slate-700/20
              before:animate-pulse-slow"
            >
              {children}
            </motion.div>

            <div className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
              {/* subtle helper text for spacing continuity */}
            </div>
          </motion.div>
        </main>
      </div>
    </motion.div>
  );
}
