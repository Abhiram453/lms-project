"use client";

import { useLogout } from "@/utils/useLogout";

export default function Navbar() {
  const logout = useLogout();

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white px-6 py-3 flex items-center justify-between shadow-lg backdrop-blur-sm rounded-b-lg">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold shadow-sm">
          L
        </div>
        <div className="hidden sm:block">
          <h1 className="text-lg font-semibold tracking-wide">LMS Platform</h1>
          <div className="text-xs text-indigo-100/80">Learn. Manage. Grow.</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm bg-white/10 hover:bg-white/20 transition"
          aria-label="Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"
            />
          </svg>
          <span className="hidden sm:inline">Profile</span>
        </button>

        <button
          onClick={logout}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm bg-white/10 hover:bg-white/25 transition"
          aria-label="Logout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-rose-200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 8v8"
            />
          </svg>
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </nav>
  );
}
