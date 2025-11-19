import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>

      <ul className="space-y-2">
        <li>
          <Link href="/" className="block px-3 py-2 rounded hover:bg-gray-700">
            Home
          </Link>
        </li>

        <li>
          <Link href="/courses" className="block px-3 py-2 rounded hover:bg-gray-700">
            Courses
          </Link>
        </li>

        <li>
          <Link href="/profile" className="block px-3 py-2 rounded hover:bg-gray-700">
            Profile
          </Link>
        </li>
      </ul>
    </aside>
  );
}
