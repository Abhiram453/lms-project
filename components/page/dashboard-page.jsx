"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    // If user is not logged in OR not a student → redirect
    if (!session || session.user?.role !== "student") {
      router.replace("/signin");
    }
  }, [session, status, router]);

  console.log("STUDENT SESSION:", session?.user); // required screenshot

  // Show loader while checking session
  if (status === "loading" || !session || session.user?.role !== "student") {
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg flex items-center gap-4">
          <svg className="w-8 h-8 text-indigo-600 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <div className="text-left">
            <div className="text-sm text-slate-500">Verifying session…</div>
            <div className="text-base font-medium text-slate-900 dark:text-white">Loading dashboard</div>
          </div>
        </div>
      </div>
    );
  }

  // Your original dashboard content (enhanced visuals only)
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between gap-4 bg-gradient-to-r from-indigo-50 to-white dark:from-slate-900 dark:to-slate-800 p-6 rounded-xl shadow-sm">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Student Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Welcome back — here's what's happening with your learning.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-slate-500">Signed in as</div>
            <div className="mt-1 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-sm font-medium text-slate-800 dark:text-slate-200 shadow-sm">
              {session?.user?.name ?? session?.user?.email ?? "Student"}
            </div>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold shadow-md">
            {session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "S"}
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Enrolled Courses</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">8</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12 12 0 0112 21.5 12 12 0 015.84 10.578L12 14z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 text-xs text-slate-500">2 new this week</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Progress</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">72%</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-br from-amber-400 to-yellow-500 text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.176 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.047 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-3/5 bg-amber-400"></div>
            </div>
            <div className="mt-2 text-xs text-slate-500">Keep up the momentum!</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Notifications</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">3</p>
            </div>
            <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
          </div>
          <div className="mt-4 text-xs text-slate-500">2 unread messages</div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-slate-800 dark:text-slate-200">Recent Activity</h2>
            <div className="text-sm text-slate-500">Today</div>
          </div>

          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 font-semibold">U</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">New user registered</div>
                <div className="text-xs text-slate-500">2 hours ago</div>
              </div>
              <div className="text-xs text-emerald-600 font-semibold">+1</div>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 font-semibold">C</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-800 dark:text-slate-200">Course "React Basics" published</div>
                <div className="text-xs text-slate-500">5 hours ago</div>
              </div>
              <div className="text-xs text-slate-500">View</div>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow">
          <h2 className="text-lg font-medium text-slate-800 dark:text-slate-200">Quick Links</h2>
          <div className="mt-4 space-y-3">
            <button className="w-full text-left px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-800 transition flex items-center justify-between">
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-200">Browse Courses</span>
              <span className="text-xs text-slate-500">→</span>
            </button>
            <button className="w-full text-left px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Account Settings</span>
              <span className="text-xs text-slate-500">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
