import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-800">
      <Sidebar />

      <div className="flex-1 min-h-screen flex flex-col">
        <Navbar />

        <main className="p-6 md:p-8 lg:p-10 flex-1">
          <div className="max-w-7xl mx-auto w-full">
            <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-100 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg">
              {children}
            </div>
            <div className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
              {/* subtle helper text for spacing continuity */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
