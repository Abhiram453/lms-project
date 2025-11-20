import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Navbar />

          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto w-full space-y-6">
              <div className="bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-lg">
                {children}
              </div>

              <div className="hidden md:block">
                <Footer />
              </div>
            </div>
          </main>

          {/* Mobile footer for small screens */}
          <div className="md:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
