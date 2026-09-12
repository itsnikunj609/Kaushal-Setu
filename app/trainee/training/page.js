"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Page = () => {
    const [training, setTraining] = useState([]);
    useEffect(() => {

        const gettrainings = async () => {
            const response = await fetch("/api3/training");

            console.log("API RESPONSE STATUS:", response.status);
            const result = await response.json();
            console.log("API RESULT:", result);
            setTraining(result)


        }
        gettrainings()
    }, [])


    return (
        <main className="min-h-screen bg-[#F5F7FA]">

            {/* Header */}
            <header className="bg-[#0B1F3A] text-white px-6 py-5">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold">
                        Find Training
                    </h1>

                    <p className="text-sm text-gray-300 mt-1">
                        Explore training programs and develop new skills
                    </p>
                </div>
            </header>


            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 py-8">

                {/* Search and Filter */}
                <div className="bg-white border rounded-lg p-5 shadow-sm mb-6">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <input
                            type="text"
                            placeholder="Search training..."
                            className="border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                        />

                        <select className="border border-gray-300 rounded-md px-4 py-3">
                            <option>All Categories</option>
                            <option>Technology</option>
                            <option>Data Science</option>
                            <option>Management</option>
                            <option>Communication</option>
                        </select>

                        <select className="border border-gray-300 rounded-md px-4 py-3">
                            <option>All Levels</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>

                    </div>

                </div>


                {/* Training Programs */}
                <div className="mb-6">

                    <h2 className="text-2xl font-bold text-[#0B1F3A]">
                        Available Training Programs
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Choose a training program that matches your goals.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Training Card */}
                    {training.map((trainings) => {
                        return <div key={trainings._id} className="bg-white border rounded-lg shadow-sm p-6">

                            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                {trainings.category}
                            </span>

                            <h3 className="text-xl font-bold text-[#0B1F3A] mt-4">
                                {trainings.title}
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                {trainings.level} • {trainings.duration}
                            </p>

                            <p className="text-gray-600 mt-4 text-sm">
                                {trainings.description}
                            </p>

                            <Link href={`/trainee/training/${trainings._id}`}>

                                <button className="bg-[#0B5ED7] hover:bg-[#094db1] text-white px-4 py-2 rounded-md font-semibold">
                                    View Details
                                </button>


                            </Link>







                        </div>
                    })}





                </div>

            </section>

        </main>
    )
}

export default Page
