"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-gradient-to-r from-slate-900/95 to-indigo-900/95 text-white py-6 mt-auto
                 backdrop-blur-xl border-t border-white/10 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center 
                       text-white font-bold shadow-md"
          >
            L
          </motion.div>

          <div>
            <p className="text-sm font-semibold tracking-wide">© 2025 LMS Platform</p>
            <p className="text-xs text-slate-300">All rights reserved.</p>
          </div>
        </div>

        {/* Navigation + Social Icons */}
        <div className="flex items-center gap-6">

          {/* Links */}
          <nav className="flex gap-4">
            {["Terms", "Privacy", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase()}`}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-xs text-slate-200 hover:text-white transition-all duration-200 hover:underline"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://twitter.com"
              aria-label="Twitter"
              whileHover={{ scale: 1.2 }}
              className="text-slate-300 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.633 7.997c.013..." />
              </svg>
            </motion.a>

            <motion.a
              href="https://github.com"
              aria-label="GitHub"
              whileHover={{ scale: 1.2 }}
              className="text-slate-300 hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.65..." />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
