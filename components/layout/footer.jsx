export default function Footer() {
  return (
    <footer className="w-full bg-white border-t p-4 text-sm text-gray-600 text-center">
      © {new Date().getFullYear()} LMS — Built for the UI assignment
    </footer>
  );
}
