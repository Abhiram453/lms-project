"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogout() {
  const router = useRouter();

  const logout = async () => {
    const t = toast.loading("Logging out...");

    try {
      await signOut({
        redirect: false, // IMPORTANT FOR APP ROUTER
      });

      toast.dismiss(t);
      toast.success("Logged out");

      router.push("/signin");
    } catch (err) {
      toast.dismiss(t);
      toast.error("Logout failed");
      console.error(err);
    }
  };

  return logout;
}
