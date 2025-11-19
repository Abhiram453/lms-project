"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Student Home", path: "/student_dashboard" },
    { name: "Admin Home", path: "/admin_dashboard" },
    { name: "Sign In", path: "/signin" },
  ];

  return (
    <aside className="bg-[#0f172a] text-white w-64 min-h-screen p-6 shadow-xl">
      <h2 className="text-2xl font-semibold mb-10 tracking-wide">Dashboard</h2>

      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`block px-4 py-2 rounded-lg transition-all 
                ${
                  pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }
              `}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
