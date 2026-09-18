"use client";

import React from "react";
import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-xl font-bold text-blue-700">
              Prithvi Setu
            </h1>
            <p className="text-sm text-gray-500">
              Admin Portal
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/admin"
              className="text-blue-700 font-medium"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/profile"
              className="text-gray-600 hover:text-blue-700"
            >
              Profile
            </Link>
          </div>

        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-8 py-10">

        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h2>

          <p className="text-gray-600 mt-2">
            Manage users, trainings and platform activities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          {/* Total Users */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Users
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mt-2">
              25
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Registered users
            </p>
          </div>

          {/* Trainees */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Trainees
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mt-2">
              17
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Registered trainees
            </p>
          </div>

          {/* Trainers */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Trainers
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mt-2">
              8
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Registered trainers
            </p>
          </div>

          {/* Trainings */}
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Trainings
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mt-2">
              12
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Available programs
            </p>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800">
            Quick Actions
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            Manage the Kaushal Setu platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Manage Users */}
          <Link href="/admin/users">
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition cursor-pointer">

              <h4 className="text-lg font-semibold text-gray-800">
                Manage Users
              </h4>

              <p className="text-gray-500 mt-2">
                View and manage registered trainees and trainers.
              </p>

              <div className="mt-5 text-blue-700 font-medium">
                View Users →
              </div>

            </div>
          </Link>

          {/* Manage Trainings */}
          <Link href="/admin/trainings">
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition cursor-pointer">

              <h4 className="text-lg font-semibold text-gray-800">
                Manage Trainings
              </h4>

              <p className="text-gray-500 mt-2">
                View and manage training programs available on the platform.
              </p>

              <div className="mt-5 text-blue-700 font-medium">
                View Trainings →
              </div>

            </div>
          </Link>

        </div>

        {/* Platform Overview */}
        <div className="mt-10 bg-white border rounded-xl p-6 shadow-sm">

          <h3 className="text-lg font-bold text-gray-800">
            Platform Overview
          </h3>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div>
              <p className="text-sm text-gray-500">
                Active Trainings
              </p>
              <p className="text-2xl font-bold text-gray-800 mt-1">
                10
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Total Enrollments
              </p>
              <p className="text-2xl font-bold text-gray-800 mt-1">
                42
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Platform Status
              </p>
              <p className="text-2xl font-bold text-green-600 mt-1">
                Active
              </p>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
};

export default AdminDashboard;