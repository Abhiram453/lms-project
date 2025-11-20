import "./globals.css";
import Provider from "@/utils/provider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* Global Toast Notifications */}
          <Toaster 
  position="top-right"
  toastOptions={{
    duration: 4000,
    style: {
      background: '#363636',
      color: '#fff',
    },
    success: {
      duration: 3000,
    },
    error: {
      duration: 4000,
    },
  }}
/>


          {children}
        </Provider>
      </body>
    </html>
  );
}
