import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-rose-50 dark:from-[#050510] dark:via-[#071229] dark:to-[#071827] font-sans">
      <main className="w-full max-w-4xl mx-auto px-6 py-24 sm:py-32">
        <div className="bg-white/95 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl backdrop-blur-md overflow-hidden">
          <div className="p-10 sm:p-16">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-semibold">L</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  LMS Platform
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Learn. Manage. Grow.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900 dark:text-white">
                Build better learning experiences with LMS
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                A simple, clean starting point for your learning platform. Manage
                courses, track progress and onboard learners quickly — with an
                accessible, modern UI.
              </p>

              {/* ✔ SIGN IN + SIGN UP BUTTONS ADDED HERE */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  className="inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg hover:scale-[1.02] transition-transform"
                  href="/signin"
                >
                  Sign In
                </a>

                <a
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  href="/signup"
                >
                  Sign Up
                </a>
              </div>

              <div className="mt-6 text-sm text-slate-500 dark:text-slate-400 flex flex-wrap gap-3">
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
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">Courses</div>
                <div className="text-xl font-semibold text-slate-900 dark:text-white">34</div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-slate-800 dark:to-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">Students</div>
                <div className="text-xl font-semibold text-slate-900 dark:text-white">520</div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-white dark:from-slate-800 dark:to-slate-900 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="text-xs text-slate-500 dark:text-slate-400">Active</div>
                <div className="text-xl font-semibold text-slate-900 dark:text-white">72%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Built with ❤️ — customize this starter to match your project's needs.
        </div>
      </main>
    </div>
  );
}
