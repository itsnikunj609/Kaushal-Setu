"use client";

import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

const SkillsPage = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        const getskills = async () => {
            const response=await fetch("/api4/traineestats/skills")
            const result=await response.json()
            


        }
        getskills()
    }, [])
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Navbar */}
            <nav className="bg-white border-b px-8 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold text-[#0B1F3A]">
                        Kaushal Setu
                    </h1>
                    <p className="text-xs text-gray-500">
                        Trainee Portal
                    </p>
                </div>

                <Link href="/trainee">
                    <button className="border border-gray-300 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100">
                        Back to Dashboard
                    </button>
                </Link>
            </nav>

            {/* Main */}
            <main className="max-w-4xl mx-auto px-6 py-10">

                {/* Heading */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[#0B1F3A]">
                        My Skills
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Manage your skills and keep your profile updated.
                    </p>
                </div>

                {/* Skills Card */}
                <div className="bg-white border rounded-xl p-6">

                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-4">
                        Your Skills
                    </h3>

                    {/* Current Skills */}
                    <div className="flex flex-wrap gap-3 mb-8">

                        <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            Python
                        </span>

                        <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            JavaScript
                        </span>

                        <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            SQL
                        </span>

                        <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            React
                        </span>

                    </div>

                    {/* Add Skill */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Add a New Skill
                        </label>

                        <div className="flex gap-3">

                            <input
                                type="text"
                                placeholder="e.g. Machine Learning"
                                className="flex-1 border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button className="bg-[#0B5ED7] text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700">
                                Add Skill
                            </button>

                        </div>
                    </div>

                    {/* Save */}
                    <div className="mt-8 pt-6 border-t flex justify-end">

                        <button className="bg-[#0B1F3A] text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800">
                            Save Skills
                        </button>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default SkillsPage;