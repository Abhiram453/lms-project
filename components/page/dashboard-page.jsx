export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Student Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-black">Overview</h2>
          <p className="text-gray-500">Overview content (placeholder)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-black">Courses</h2>
          <p className="text-gray-500">Courses content (placeholder)</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-black">Notifications</h2>
          <p className="text-gray-500">Notifications content</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
          <h2 className="text-lg font-semibold mb-2 text-black">Recent Activity</h2>
          <p className="text-gray-500">Recent activity list placeholder</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-black">Quick Links</h2>
          <p className="text-gray-500">Links / actions</p>
        </div>
      </div>
    </div>
  );
}
