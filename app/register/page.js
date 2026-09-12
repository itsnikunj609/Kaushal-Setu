"use client";

import React, { useState } from "react";

const RegisterPage = () => {
    const [form, setForm] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        role: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");



        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(form),
            redirect: "follow"
        };
        console.log("Sending data:", form);

        fetch("/api1/register", requestOptions)
            .then((response) => {
                console.log("API RESPONSE STATUS:", response.status);
                return response.json();
            })
            .then((result) => {
                setForm({ fullname: "", username: "", email: "", password: "", confirmpass: "" })
                console.log("API RESULT:", result);
                alert(result.message);
            })
            .catch((error) => {
                console.error("FETCH ERROR:", error);
            });


    };

    return (
        <main className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#0B1F3A]">
                        Create Your Account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Join Capacity Connect and start your learning journey
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullname"
                            value={form.fullname}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            placeholder="Choose a username"
                            className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmpassword"
                            value={form.confirmpassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className="w-full border border-gray-300 rounded-md px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Register As
                        </label>

                        <div className="flex gap-6">

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="trainee"
                                    checked={form.role === "trainee"}
                                    onChange={handleChange}
                                />

                                <span className="text-gray-700">
                                    Trainee
                                </span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="trainer"
                                    checked={form.role === "trainer"}
                                    onChange={handleChange}
                                />

                                <span className="text-gray-700">
                                    Trainer
                                </span>
                            </label>

                        </div>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#0B5ED7] hover:bg-[#094db1] text-white font-semibold py-3 rounded-md transition"
                    >
                        Register
                    </button>

                </form>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <a
                        href="/Login"
                        className="text-[#0B5ED7] font-semibold hover:underline"
                    >
                        Login
                    </a>
                </p>

            </div>
        </main>
    );
};

export default RegisterPage;