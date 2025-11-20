"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLogout } from "@/utils/useLogout";

const Icon = ({ children }) => (
  <span className="w-6 h-6 inline-flex items-center justify-center text-sm opacity-90">
    {children}
  </span>
);

const NavLink = ({
  href,
  children,
  colorClass = "text-slate-700",
  hoverBg = "hover:bg-white/60",
}) => (
  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.15 }}>
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${colorClass} ${hoverBg} backdrop-blur-sm hover:shadow-md dark:hover:shadow-slate-900/40`}
    >
      {children}
    </Link>
  </motion.div>
);

const Sidebar = ({ role, children }) => {
  const logout = useLogout();
  let links;

  const sectionFade = {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0 },
  };

  if (role === "admin") {
    links = (
      <>
        <NavLink
          href="/admin_dashboard"
          colorClass="text-indigo-700 dark:text-indigo-300"
          hoverBg="hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
        >
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a1 1 0 001 1h16a1 1 0 001-1V7" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 7V4a2 2 0 012-2h6a2 2 0 012 2v3" />
            </svg>
          </Icon>
          <span className="text-sm font-medium">Admin Dashboard</span>
        </NavLink>

        <NavLink
          href="/edit_lesson"
          colorClass="text-sky-600 dark:text-sky-300"
          hoverBg="hover:bg-sky-50 dark:hover:bg-sky-900/30"
        >
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"
              />
            </svg>
          </Icon>
          <span className="text-sm font-medium">Edit Lessons</span>
        </NavLink>

        <NavLink
          href="/manage_students"
          colorClass="text-rose-600 dark:text-rose-300"
          hoverBg="hover:bg-rose-50 dark:hover:bg-rose-900/30"
        >
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a4 4 0 10-6 0" />
            </svg>
          </Icon>
          <span className="text-sm font-medium">Manage Users</span>
        </NavLink>

        <motion.button
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.15 }}
          onClick={logout}
          className="w-full text-left mt-2 flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all"
        >
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8v8" />
            </svg>
          </Icon>
          <span className="text-sm font-medium">Logout</span>
        </motion.button>
      </>
    );
  }

  if (role === "student") {
    links = (
      <>
        <NavLink
          href="/student_dashboard"
          colorClass="text-emerald-700 dark:text-emerald-300"
          hoverBg="hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
        >
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12 12 0 0112 21.5 12 12 0 015.84 10.578L12 14z" />
            </svg>
          </Icon>
          <span className="text-sm font-medium">Student Dashboard</span>
        </NavLink>

        <NavLink
          href="/courses"
          colorClass="text-emerald-600 dark:text-emerald-300"
          hoverBg="hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
        >
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12 12 0 0112 21.5" />
            </svg>
          </Icon>
          <span className="text-sm font-medium">My Courses</span>
        </NavLink>

        <NavLink
          href="/grades"
          colorClass="text-amber-700 dark:text-amber-300"
          hoverBg="hover:bg-amber-50 dark:hover:bg-amber-900/30"
        >
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m0 0l3-3m-3 3l-3-3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Icon>
          <span className="text-sm font-medium">Grades</span>
        </NavLink>

        <NavLink
          href="/profile"
          colorClass="text-slate-700 dark:text-slate-200"
          hoverBg="hover:bg-white/60 dark:hover:bg-slate-800/30"
        >
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
            </svg>
          </Icon>
          <span className="text-sm font-medium">Profile</span>
        </NavLink>

        <motion.button
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.15 }}
          onClick={logout}
          className="w-full text-left mt-2 flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all"
        >
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8v8" />
            </svg>
          </Icon>
          <span className="text-sm font-medium">Logout</span>
        </motion.button>
      </>
    );
  }

  if (!links) return null;

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="w-64 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl p-4 hidden md:block border-r border-slate-200 dark:border-slate-800 shadow-lg rounded-r-xl"
    >
      <div className="mb-6 px-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow">
            L
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">LMS</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Learn. Manage. Grow.</div>
          </div>
        </motion.div>
      </div>

      <nav className="flex flex-col gap-2 px-2">{links}</nav>

      {children && <div className="mt-6 px-2">{children}</div>}
    </motion.aside>
  );
};

export default Sidebar;
