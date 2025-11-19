import DashboardLayout from "@/components/layout/dashboard-layout";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Manage Users
          </h2>
          <p className="text-gray-500">View, edit, and remove user accounts</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Course Controls
          </h2>
          <p className="text-gray-500">
            Add new courses and modify existing course details
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            System Settings
          </h2>
          <p className="text-gray-500">Platform configuration settings</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Reports & Analytics
          </h2>
          <p className="text-gray-500">
            View progress reports, charts, and analytics
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Quick Actions
          </h2>
          <p className="text-gray-500">Important admin shortcuts</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
