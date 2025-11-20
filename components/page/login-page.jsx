"use client";
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import InputField from '../global/input-field';
import Button from '../global/button';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error('Email and password are required.');
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading('Signing you in...', { duration: Infinity });

    try {
      const res = await signIn("credentials", { 
        redirect: false, 
        email: form.email,
        password: form.password
      });

      if (res?.error) {
        toast.dismiss(loadingToast);
        toast.error("Invalid credentials. Please check your email and password.");
        setIsLoading(false);
        return;
      }

      if (res?.ok) {
        toast.dismiss(loadingToast);
        toast.success('Login successful! Redirecting...');

        setTimeout(async () => {
          const sessionRes = await fetch('/api/auth/session');
          const session = await sessionRes.json();
          const role = session?.user?.role;

          if (role === 'admin') router.push('/admin_dashboard');
          else router.push('/student_dashboard');
        }, 100);
      }

    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
              L
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">LMS</h3>
              <p className="text-xs text-slate-500 dark:text-slate-300">Learn. Manage. Grow.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-100 dark:border-slate-800 rounded-2xl p-8 shadow-xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Sign in to your account</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Enter your credentials to continue</p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0m8 0v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4" />
                </svg>
              </span>
              <div className="pl-10">
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4s-3 1.567-3 3.5S10.343 11 12 11z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 18.5A6.5 6.5 0 0112 14a6.5 6.5 0 016.5 4.5" />
                </svg>
              </span>
              <div className="pl-10">
                <InputField
                  label="Password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm">
              <button
                type="button"
                onClick={() => router.push('/forgot-password')}
                className="text-indigo-600 dark:text-indigo-300 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div className="text-sm text-slate-500">Secure sign in</div>
          </div>

          <div className="mt-6">
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </div>

          <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => router.push('/signup')}
              className="text-indigo-600 dark:text-indigo-300 font-medium hover:underline"
            >
              Create one
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-xs text-slate-400">
          By signing in you agree to the terms of service.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
