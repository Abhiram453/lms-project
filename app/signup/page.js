"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import InputField from '../../components/global/input-field';
import Button from '../../components/global/button';

const SignupPage = () => {
  const [form, setForm] = useState({ 
    email: '', 
    password: '', 
    name: '', 
    role: 'student' 
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.name) {
      toast.error('All fields are required.');
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading('Creating your account...', { duration: Infinity });

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.dismiss(loadingToast);
        toast.error(data.error || 'Registration failed. Please try again.');
        return;
      }

      toast.dismiss(loadingToast);
      const loginToast = toast.loading('Registration successful! Logging you in...', {
        duration: Infinity,
      });

      const signInResponse = await signIn('credentials', {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (signInResponse?.ok) {
        toast.dismiss(loginToast);
        toast.success(`Welcome ${form.name}! Redirecting...`);
        router.push(form.role === 'admin' ? '/admin_dashboard' : '/student_dashboard');
      } else {
        toast.dismiss(loginToast);
        toast.error('Registration succeeded, but automatic login failed.');
      }

    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error('Unexpected error. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-rose-50 dark:from-slate-900 dark:via-slate-800 p-6">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left decorative info panel */}
        <aside className="hidden md:flex flex-col justify-between rounded-2xl p-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold shadow">
                L
              </div>
              <div>
                <h2 className="text-xl font-semibold">Welcome to LMS</h2>
                <p className="text-sm text-white/90 mt-1">Create your account and start learning.</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/12">✓</span>
                <span>Organize courses and materials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/12">✓</span>
                <span>Track student progress</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white/12">✓</span>
                <span>Collaborate with instructors</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 text-sm opacity-90">
            <div className="bg-white/10 p-3 rounded-lg">
              <strong className="block">Tip</strong>
              <div className="mt-1">Use a valid email to receive updates and reset password links.</div>
            </div>
          </div>
        </aside>

        {/* Right: sign up form */}
        <section className="flex items-center">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white/95 dark:bg-slate-900/85 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl"
            aria-labelledby="signup-heading"
          >
            <h2 id="signup-heading" className="text-2xl font-semibold text-slate-900 dark:text-white mb-1 text-center md:text-left">
              Create your account
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 text-center md:text-left">Join LMS — manage courses and track progress</p>

            <div className="space-y-4">
              <InputField
                label="Full Name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                disabled={isLoading}
                required
              />

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

              <InputField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter a secure password"
                disabled={isLoading}
                required
              />

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Role</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-slate-900 dark:text-slate-100 border rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  disabled={isLoading}
                  required
                >
                  <option value="student">Student</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-500">By creating an account you agree to our terms.</div>

              <Button type="submit" disabled={isLoading} className="inline-flex items-center gap-2 px-4 py-2">
                {isLoading ? 'Creating Account...' : 'Sign Up'}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </div>

            <div className="mt-4 text-center text-sm text-slate-600 dark:text-slate-400">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => router.push('/signin')}
                className="text-indigo-600 dark:text-indigo-300 font-medium hover:underline"
              >
                Sign In
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SignupPage;
