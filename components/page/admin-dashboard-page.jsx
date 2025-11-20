"use client";

import React from "react";
import { useSession } from "next-auth/react";
import MainLayout from "../layout/main-layout";
import Navbar from "../layout/navbar";
import Sidebar from "../layout/sidebar";
import Card from "../global/card";

const StatCard = ({ title, value, icon, accent = "from-indigo-500 to-purple-500" }) => (
  <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
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
      <div className="text-xs text-slate-500">+3.2% </div>
    </div>

    <div className="mt-4">
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
      </div>
    </div>
  </div>
);

const AdminDashboardPage = () => {
  const { data: session } = useSession();

  return (
    <MainLayout
      sidebar={<Sidebar role={session?.user?.role} />}
      navbar={<Navbar />}
    >
      <div className="p-6 space-y-6">
        <header className="rounded-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 shadow-lg">
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
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-0 bg-transparent shadow-none">
            <StatCard
              title="Total Users"
              value="520"
              accent="from-indigo-500 to-violet-500"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m6-4a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
          </Card>

          <Card className="p-0 bg-transparent shadow-none">
            <StatCard
              title="Active Courses"
              value="34"
              accent="from-emerald-400 to-teal-500"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12 12 0 0112 21.5 12 12 0 015.84 10.578L12 14z" />
                </svg>
              }
            />
          </Card>

          <Card className="p-0 bg-transparent shadow-none">
            <StatCard
              title="Pending Approvals"
              value="12"
              accent="from-rose-400 to-pink-500"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                </svg>
              }
            />
          </Card>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-slate-800 dark:text-slate-200">Recent Activity</h2>
              <div className="text-sm text-slate-500">Today</div>
            </div>

            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-semibold">U</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-200">New user registered</div>
                  <div className="text-xs text-slate-500">2 hours ago</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-semibold">C</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-200">Course "React Basics" published</div>
                  <div className="text-xs text-slate-500">5 hours ago</div>
                </div>
              </li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-lg font-medium text-slate-800 dark:text-slate-200">Quick Insights</h2>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600 dark:text-slate-300">Avg. Completion</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">72%</div>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-3/5 bg-amber-400"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600 dark:text-slate-300">Support Tickets</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">8 open</div>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-rose-400"></div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </MainLayout>
  );
};

export default AdminDashboardPage;
