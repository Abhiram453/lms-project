import "./globals.css";
import Provider from "@/utils/provider";
import { Toaster } from "react-hot-toast";
import PageTransition from "@/components/pageTransition";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gradient-to-br from-indigo-50 via-white to-rose-50 dark:from-[#050510] dark:via-[#071229] dark:to-[#071827] min-h-screen antialiased selection:bg-indigo-600 selection:text-white">

        <Provider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "rgba(30, 30, 30, 0.95)",
                color: "#fff",
                borderRadius: "10px",
                backdropFilter: "blur(10px)",
              },
              success: { duration: 2500 },
              error: { duration: 3500 },
            }}
          />

          {/* Safe client-side animation wrapper */}
          <PageTransition>{children}</PageTransition>
        </Provider>

      </body>
    </html>
  );
}
