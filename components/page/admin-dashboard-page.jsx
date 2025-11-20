"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "../layout/main-layout";
import Navbar from "../layout/navbar";
import Sidebar from "../layout/sidebar";
import Card from "../global/card";

/**
 * Animated stat card component
 */
const StatCard = ({ title, target, icon, accent = "from-indigo-500 to-purple-500" }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Smooth counter animation from 0 -> target
    let start = 0;
    const duration = 900; // ms
    const stepTime = 30;
    const steps = Math.max(1, Math.round(duration / stepTime));
    const increment = (target - start) / steps;
    let current = start;
    let i = 0;

    const t = setInterval(() => {
      i++;
      current += increment;
      setValue(Math.round(current));
      if (i >= steps) {
        setValue(target);
        clearInterval(t);
      }
    }, stepTime);

    return () => clearInterval(t);
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.45 }}
      className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transform transition"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-sm`}>
            {icon}
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-700 dark:text-slate-200">{title}</h3>
            <p className="text-2xl font-semibold text-slate-900 dark:text-white mt-1">{value}</p>
          </div>
        </div>
        <div className="text-xs text-slate-500">+3.2%</div>
      </div>
      <div className="mt-4">
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-400 to-purple-400"
            style={{ width: `${Math.min(100, Math.round((value / Math.max(1, target)) * 100))}%`, transition: "width 700ms ease" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Page-level animation variants
 */
const containerVariant = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, when: "beforeChildren" } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const AdminDashboardPage = () => {
  const { data: session } = useSession();

  // Static demo numbers (no functional change) — replace with real API values if available.
  const TOTAL_USERS = 520;
  const ACTIVE_COURSES = 34;
  const PENDING_APPROVALS = 12;

  return (
    <MainLayout sidebar={<Sidebar role={session?.user?.role} />} navbar={<Navbar />}>
      <motion.div
        className="p-6 space-y-6"
        initial="hidden"
        animate="show"
        variants={containerVariant}
      >
        {/* Header */}
        <motion.header variants={itemVariant} className="rounded-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 shadow-lg">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">Admin Dashboard</h1>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Overview of platform activity and system metrics</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-xs text-slate-500">Signed in as</div>
              <div className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-800 dark:text-slate-200">
                {session?.user?.name ?? session?.user?.email ?? "Admin"}
              </div>
            </div>
          </div>
        </motion.header>

        {/* Stat cards */}
        <motion.section variants={itemVariant} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Total Users"
            target={TOTAL_USERS}
            accent="from-indigo-500 to-violet-500"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m6-4a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />

          <StatCard
            title="Active Courses"
            target={ACTIVE_COURSES}
            accent="from-emerald-400 to-teal-500"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12 12 0 0112 21.5 12 12 0 015.84 10.578L12 14z" />
              </svg>
            }
          />

          <StatCard
            title="Pending Approvals"
            target={PENDING_APPROVALS}
            accent="from-rose-400 to-pink-500"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              </svg>
            }
          />
        </motion.section>

        {/* Main content: recent activity & insights */}
        <motion.section variants={itemVariant} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-slate-800 dark:text-slate-200">Recent Activity</h2>
              <div className="text-sm text-slate-500">Today</div>
            </div>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
              className="mt-4 space-y-3"
            >
              <motion.li variants={itemVariant} className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-semibold">U</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-200">New user registered</div>
                  <div className="text-xs text-slate-500">2 hours ago</div>
                </div>
              </motion.li>

              <motion.li variants={itemVariant} className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-semibold">C</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-200">Course "React Basics" published</div>
                  <div className="text-xs text-slate-500">5 hours ago</div>
                </div>
              </motion.li>

              <motion.li variants={itemVariant} className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-semibold">S</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-200">System backup completed</div>
                  <div className="text-xs text-slate-500">8 hours ago</div>
                </div>
              </motion.li>
            </motion.ul>
          </Card>

          <Card>
            <h2 className="text-lg font-medium text-slate-800 dark:text-slate-200">Quick Insights</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600 dark:text-slate-300">Avg. Completion</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">72%</div>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "72%" }} transition={{ duration: 0.9 }} className="h-full bg-amber-400" />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600 dark:text-slate-300">Support Tickets</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">8 open</div>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "25%" }} transition={{ duration: 0.9 }} className="h-full bg-rose-400" />
              </div>
            </div>
          </Card>
        </motion.section>
      </motion.div>
    </MainLayout>
  );
};

export default AdminDashboardPage;
