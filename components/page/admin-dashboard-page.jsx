"use client";

import React from "react";
import { useSession } from "next-auth/react";
import MainLayout from "../layout/main-layout";
import Navbar from "../layout/navbar";
import Sidebar from "../layout/sidebar";
import Card from "../global/card";

const AdminDashboardPage = () => {
  const { data: session } = useSession();

  return (
    <MainLayout
      sidebar={<Sidebar role={session?.user?.role} />}
      navbar={<Navbar />}
    >
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-semibold text-black">Admin Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <h2 className="text-xl font-medium text-black">Total Users</h2>
            <p className="text-gray-600 mt-2">520</p>
          </Card>

          <Card>
            <h2 className="text-xl font-medium text-black">Active Courses</h2>
            <p className="text-gray-600 mt-2">34</p>
          </Card>

          <Card>
            <h2 className="text-xl font-medium text-black">Pending Approvals</h2>
            <p className="text-gray-600 mt-2">12</p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminDashboardPage;
