export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-semibold">LMS Platform</h1>

      <div className="flex items-center gap-4">
        <button className="hover:text-blue-300">Profile</button>
        <button className="hover:text-blue-300">Logout</button>
      </div>
    </nav>
  );
}
