import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-[#f1f5f9] min-h-screen">
        <Navbar />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
