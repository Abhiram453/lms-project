"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session || session.user?.role !== "student") {
      router.replace("/signin");
    }
  }, [session, status, router]);

  // Loading animation
  if (status === "loading" || !session || session.user?.role !== "student") {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-white/40 dark:border-slate-700/40"
        >
          <svg
            className="w-10 h-10 text-indigo-600 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>

          <div>
            <p className="text-sm text-slate-500">Verifying session…</p>
            <p className="text-base font-semibold text-slate-900 dark:text-white">
              Loading dashboard
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl shadow-md border border-white/40 dark:border-slate-700/40"
      >
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Student Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Welcome back — here’s your learning overview.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3"
        >
          <div className="text-right">
            <div className="text-xs text-slate-500">Signed in as</div>
            <div className="mt-1 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-800 dark:text-slate-200 shadow">
              {session?.user?.name ?? session?.user?.email ?? "Student"}
            </div>
          </div>

          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-lg font-semibold shadow">
            {session?.user?.name
              ? session.user.name[0].toUpperCase()
              : "S"}
          </div>
        </motion.div>
      </motion.header>

      {/* STATS CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Enrolled Courses",
            value: "8",
            sub: "2 new this week",
            iconColor: "from-emerald-400 to-teal-500",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422A12 12 0 0112 21.5 12 12 0 015.84 10.578L12 14z" />
              </svg>
            ),
          },
          {
            title: "Progress",
            value: "72%",
            sub: "Keep up the momentum!",
            iconColor: "from-amber-400 to-yellow-500",
            bar: "w-[72%]",
            icon: (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.047 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            ),
          },
          {
            title: "Notifications",
            value: "3",
            sub: "2 unread messages",
            iconColor: "from-indigo-500 to-violet-500",
            icon: (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            ),
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-md hover:shadow-xl border border-white/40 dark:border-slate-700/40 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {card.title}
                </p>
                <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
                  {card.value}
                </p>
              </div>

              <div
                className={`p-3 rounded-lg bg-gradient-to-br ${card.iconColor} text-white shadow`}
              >
                {card.icon}
              </div>
            </div>

            <div className="mt-4 text-xs text-slate-500">
              {card.sub}
            </div>

            {card.bar && (
              <div className="mt-2 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full bg-amber-400 ${card.bar}`}></div>
              </div>
            )}
          </motion.div>
        ))}
      </section>

      {/* RECENT ACTIVITY + QUICK LINKS */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* RECENT ACTIVITY */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md border border-white/40 dark:border-slate-700/40 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-200">
              Recent Activity
            </h2>
            <span className="text-sm text-slate-500">Today</span>
          </div>

          <ul className="mt-5 space-y-4">
            {[
              {
                badge: "U",
                title: "New user registered",
                time: "2 hours ago",
                label: "+1",
                color: "indigo",
              },
              {
                badge: "C",
                title: 'Course "React Basics" published',
                time: "5 hours ago",
                label: "View",
                color: "emerald",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4"
              >
                <div
                  className={`w-10 h-10 rounded-full bg-${item.color}-50 dark:bg-${item.color}-900/30 flex items-center justify-center text-${item.color}-600 font-semibold`}
                >
                  {item.badge}
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500">{item.time}</p>
                </div>

                <p className="text-xs text-emerald-600 font-semibold cursor-pointer">
                  {item.label}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md border border-white/40 dark:border-slate-700/40 backdrop-blur-xl"
        >
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-200">
            Quick Links
          </h2>

          <div className="mt-4 space-y-3">
            {[
              {
                label: "Browse Courses",
                color: "indigo",
              },
              {
                label: "Account Settings",
                color: "slate",
              },
            ].map((btn, i) => (
              <motion.button
                key={i}
                whileHover={{ x: 4 }}
                className={`w-full text-left px-4 py-2 bg-${btn.color}-50 dark:bg-${btn.color}-900/30 rounded-lg hover:bg-${btn.color}-100 dark:hover:bg-${btn.color}-800 transition flex items-center justify-between`}
              >
                <span className={`text-sm font-medium text-${btn.color}-700 dark:text-${btn.color}-200`}>
                  {btn.label}
                </span>
                <span className="text-xs text-slate-500">→</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
