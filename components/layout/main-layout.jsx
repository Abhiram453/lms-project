"use client";

import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { motion } from "framer-motion";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-rose-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Navbar />

          <main className="flex-1 p-6 md:p-8 lg:p-10">
            <div className="max-w-7xl mx-auto w-full space-y-6">

              {/* Animated main content container */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-shadow"
              >
                {children}
              </motion.div>

              {/* Footer (Desktop Only) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="hidden md:block"
              >
                <Footer />
              </motion.div>
            </div>
          </main>

          {/* Mobile Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="md:hidden"
          >
            <Footer />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
