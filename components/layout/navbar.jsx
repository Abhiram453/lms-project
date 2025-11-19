export default function Navbar() {
  return (
    <nav className="h-16 bg-white shadow-md flex justify-between items-center px-6">
      <h1 className="text-xl font-semibold text-gray-800 tracking-wide">LMS</h1>

      <div className="flex items-center gap-3">
        <span className="text-gray-600">Welcome, User</span>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </nav>
  );
}
