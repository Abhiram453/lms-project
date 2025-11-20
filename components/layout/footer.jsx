export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-slate-800 to-indigo-900 text-white py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white font-semibold shadow-sm">
            L
          </div>
          <div>
            <p className="text-sm font-medium">© 2025 LMS Platform</p>
            <p className="text-xs text-slate-300">All rights reserved.</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="flex gap-3">
            <a href="/terms" className="text-xs text-slate-200 hover:underline">Terms</a>
            <a href="/privacy" className="text-xs text-slate-200 hover:underline">Privacy</a>
            <a href="/contact" className="text-xs text-slate-200 hover:underline">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://twitter.com" aria-label="Twitter" className="text-slate-200 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M19.633 7.997c.013.178.013.356.013.534 0 5.438-4.138 11.71-11.71 11.71-2.33 0-4.497-.682-6.316-1.854.33.038.657.051.999.051 1.925 0 3.695-.657 5.107-1.76-1.793-.038-3.305-1.216-3.827-2.84.25.038.5.064.764.064.371 0 .742-.05 1.084-.144-1.876-.379-3.29-2.035-3.29-4.02v-.051c.551.308 1.183.49 1.855.51-1.1-.737-1.83-1.988-1.83-3.407 0-.751.202-1.452.555-2.058 2.026 2.481 5.054 4.112 8.462 4.283-.064-.305-.101-.628-.101-.951 0-2.29 1.856-4.147 4.147-4.147 1.193 0 2.27.5 3.027 1.299.94-.188 1.823-.529 2.617-.999-.308.963-.963 1.774-1.822 2.284.835-.101 1.63-.32 2.369-.648-.552.827-1.253 1.553-2.06 2.128z" />
              </svg>
            </a>

            <a href="https://github.com" aria-label="GitHub" className="text-slate-200 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.65.5.5 5.64.5 12.01c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.39.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.21 1.18.93-.26 1.92-.39 2.91-.39.99 0 1.98.13 2.91.39 2.23-1.5 3.21-1.18 3.21-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.68 5.42-5.24 5.7.42.36.8 1.07.8 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.52 11.52 0 0023.5 12.01C23.5 5.64 18.35.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
