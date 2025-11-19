"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Welcome Back 👋
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 
              focus:ring-blue-500 focus:outline-none text-black placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 
              focus:ring-blue-500 focus:outline-none text-black placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg 
            rounded-xl shadow-md transition-all"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
