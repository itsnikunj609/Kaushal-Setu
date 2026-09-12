"use client";

import { redirect } from "next/dist/server/api-utils";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router=useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
      const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");



        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(form),
            redirect: "follow"
        };

const response = await fetch("/api2/login", requestOptions);

console.log("API RESPONSE STATUS:", response.status);

const result = await response.json();

console.log("API RESULT:", result);

setForm({
    email: "",
    password: ""
});

alert(result.message);

if (result.success) {

    if (result.role === "trainee") {
        router.push("/trainee");
    }

    if (result.role === "trainer") {
        router.push("/trainer");
    }
}



   
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA]">

      
      {/* Login Section */}
      <section className="min-h-[calc(100vh-73px)] flex items-center justify-center px-4">

        <div className="w-full max-w-md bg-white border border-gray-200 shadow-md rounded-lg p-8">

          <div className="text-center mb-7">
            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in to access Capacity Connect
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#0B5ED7] hover:bg-[#094db1] text-white font-semibold py-3 rounded-md transition"
            >
              Login
            </button>

          </form>

          <div className="text-center mt-6 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="text-[#0B5ED7] font-semibold hover:underline"
            >
              Register
            </a>
          </div>

        </div>

      </section>

    </main>
  );
};

export default LoginPage;