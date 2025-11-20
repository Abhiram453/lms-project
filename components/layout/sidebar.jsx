"use client";

import React from "react";
import Link from "next/link";
import { useLogout } from "@/utils/useLogout";

const Sidebar = ({ role, children }) => {
  const logout = useLogout();

  let links;

  if (role === "admin") {
    links = (
      <>
        <Link href="/admin_dashboard" className="block text-blue-600 hover:text-blue-800">
          Admin Dashboard
        </Link>

        <Link href="/edit_lesson" className="block text-blue-600 hover:text-blue-800">
          Edit Lessons
        </Link>

        <Link href="/manage_students" className="block text-blue-600 hover:text-blue-800">
          Manage Users
        </Link>

        <button
          onClick={logout}
          className="text-left text-blue-600 hover:text-blue-800"
        >
          Logout
        </button>
      </>
    );
  }

  if (role === "student") {
    links = (
      <>
        <Link href="/student_dashboard" className="block text-green-600 hover:text-green-800">
          Student Dashboard
        </Link>

        <Link href="/courses" className="block text-green-600 hover:text-green-800">
          My Courses
        </Link>

        <Link href="/grades" className="block text-green-600 hover:text-green-800">
          Grades
        </Link>

        <Link href="/profile" className="block text-green-600 hover:text-green-800">
          Profile
        </Link>

        <button
          onClick={logout}
          className="text-left text-blue-600 hover:text-blue-800"
        >
          Logout
        </button>
      </>
    );
  }

  if (!links) return null;

  return (
    <aside className="w-64 bg-gray-100 h-full p-4 hidden md:block border-r">
      <nav className="flex flex-col gap-4">{links}</nav>
      {children}
    </aside>
  );
};

export default Sidebar;
