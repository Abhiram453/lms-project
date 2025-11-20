import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow NextAuth API routes
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const publicPaths = ["/", "/signin", "/signup"];
  const isPublic = publicPaths.includes(pathname);

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const role = token?.role;

  // Redirect logged-in users away from /signin
  if (token && pathname === "/signin") {
    const url = req.nextUrl.clone();
    url.pathname = role === "admin" ? "/admin_dashboard" : "/student_dashboard";
    return NextResponse.redirect(url);
  }

  // Allow public pages
  if (isPublic) return NextResponse.next();

  // Require login
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }

  // Role checks
  if (pathname.startsWith("/admin_dashboard") && role !== "admin") {
    const url = req.nextUrl.clone();
    url.pathname = "/student_dashboard";
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith("/student_dashboard") && role !== "student") {
    const url = req.nextUrl.clone();
    url.pathname = "/admin_dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin_dashboard/:path*",
    "/student_dashboard/:path*",
  ],
};
