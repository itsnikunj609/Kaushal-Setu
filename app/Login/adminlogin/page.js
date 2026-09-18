"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AdminLogin = () => {
  const router=useRouter()
  const [form, setForm] = useState({ email: "", password: "" })
  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("/api2/login/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
            body: JSON.stringify({
              email:form.email,
              password:form.password

       
      })

    });
    const result = await response.json();
    setForm({ email: "", password: "" })
    router.push("/admin");


  }
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navbar */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-xl font-bold text-blue-700">
              Kaushal Setu
            </h1>
            <p className="text-sm text-gray-500">
              Admin Portal
            </p>
          </div>

          <Link
            href="/Login"
            className="text-gray-600 hover:text-blue-700 font-medium"
          >
            Back to Login
          </Link>

        </div>
      </nav>

      {/* Login Section */}
      <main className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6">

        <div className="w-full max-w-md">

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Admin Login
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in to access the Kaushal Setu administration portal
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white border rounded-xl shadow-sm p-8">

            <form onSubmit={handlesubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Email
                </label>

                <input onChange={handlechange} name="email"
                  type="email"
                  value={form.email}
                  placeholder="Enter admin email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>

                <input onChange={handlechange}
                  type="password"
                  name="password"
                  value={form.password}
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition"
              >
                Admin Login
              </button>

            </form>

            {/* Security Note */}
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
              <p className="text-sm text-blue-800 text-center">
                This portal is restricted to authorized administrators.
              </p>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default AdminLogin;