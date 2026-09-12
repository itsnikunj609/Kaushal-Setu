import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import jwt from "jsonwebtoken";
import clientPromise from '@/lib/mongo';
import { ObjectId } from 'mongodb';
import Link from 'next/link';

const Trainee = async () => {

    const cookiestore = await cookies()
    const token = cookiestore.get("accesstoken")



    if (!token) {
        redirect("/Login")
    }

    const decoded = jwt.verify(token.value, process.env.ACCESS_TOKEN_SECRET)
    console.log(decoded)
    if (!decoded) {
        return Response.json({ message: "Access denied" })
    }
    const client = await clientPromise;
    const db = await client.db("capusers");
    const collection = await db.collection("info")
    const id = new ObjectId(decoded.sub)
    const user = await collection.findOne({ _id: id })

    if (!(user.role === "trainee")) {
        return Response.json({ message: "please login to your respective section" })
    }






    return (
        <main className="min-h-screen bg-[#F5F7FA]">

            {/* Header */}
            <header className="bg-[#0B1F3A] text-white px-6 py-5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    <div>
                        <h1 className="text-2xl font-bold">
                          kaushal Setu
                        </h1>
                        <p className="text-sm text-gray-300">
                            Trainee Portal
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="font-semibold">
                            {user.fullname}
                        </p>
                        <p className="text-sm text-gray-300">
                            Trainee
                        </p>
                    </div>

                </div>
            </header>


            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-6 py-8">

                {/* Welcome */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[#0B1F3A]">
                        Welcome back, {user.fullname} 👋
                    </h2>

                    <p className="text-gray-600 mt-2">
                        Continue your learning journey and build your skills.
                    </p>
                </div>


                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                        <p className="text-gray-500">
                            Enrolled Trainings
                        </p>
                        <h3 className="text-3xl font-bold text-[#0B5ED7] mt-2">
                            3
                        </h3>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                        <p className="text-gray-500">
                            Completed Trainings
                        </p>
                        <h3 className="text-3xl font-bold text-green-600 mt-2">
                            1
                        </h3>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                        <p className="text-gray-500">
                            Overall Progress
                        </p>
                        <h3 className="text-3xl font-bold text-purple-600 mt-2">
                            68%
                        </h3>
                    </div>

                </div>


                {/* Training + Progress */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Recommended Training */}
                    <div className="lg:col-span-2 bg-white border rounded-lg shadow-sm p-6">

                        <h3 className="text-xl font-bold text-[#0B1F3A]">
                            Recommended Training
                        </h3>

                        <p className="text-gray-500 text-sm mt-1 mb-5">
                            Training programs recommended for you
                        </p>


                        {/* Training 1 */}
                        <div className="border rounded-lg p-5 mb-4">

                            <div className="flex justify-between">

                                <div>
                                    <h4 className="font-bold text-lg text-[#0B1F3A]">
                                        Python for Data Analysis
                                    </h4>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Beginner • 6 Weeks
                                    </p>
                                </div>

                                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs h-fit">
                                    Recommended
                                </span>

                            </div>

                            <p className="text-gray-600 text-sm mt-4">
                                Learn Python, data analysis, visualization and
                                basic analytics.
                            </p>

                          <Link href={"/trainee/training"}>

                                <button className="mt-4 bg-[#0B5ED7] text-white px-4 py-2 rounded-md font-semibold">
                                    View Training
                                </button>
                            </Link>


                        </div>


                        {/* Training 2 */}
                        <div className="border rounded-lg p-5">

                            <h4 className="font-bold text-lg text-[#0B1F3A]">
                                Web Development Fundamentals
                            </h4>

                            <p className="text-sm text-gray-500 mt-1">
                                Beginner • 8 Weeks
                            </p>

                            <p className="text-gray-600 text-sm mt-4">
                                Learn HTML, CSS, JavaScript and modern web
                                development fundamentals.
                            </p>
                            <Link href={"/trainee/training"}>

                                <button className="mt-4 bg-[#0B5ED7] text-white px-4 py-2 rounded-md font-semibold">
                                    View Training
                                </button>
                            </Link>


                        </div>

                    </div>


                    {/* Progress */}
                    <div className="bg-white border rounded-lg shadow-sm p-6">

                        <h3 className="text-xl font-bold text-[#0B1F3A]">
                            My Progress
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Track your learning progress
                        </p>


                        <div className="mt-6">

                            <div className="flex justify-between mb-2 text-sm">
                                <span>Overall Progress</span>
                                <span className="font-bold">68%</span>
                            </div>

                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-[#0B5ED7] h-3 rounded-full"
                                    style={{ width: "68%" }}
                                ></div>
                            </div>

                        </div>


                        {/* Skills */}
                        <div className="mt-8">

                            <h4 className="font-semibold text-[#0B1F3A]">
                                My Skills
                            </h4>

                            <div className="flex flex-wrap gap-2 mt-3">

                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                    Python
                                </span>

                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                    JavaScript
                                </span>

                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                    SQL
                                </span>

                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                    React
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Quick Actions */}
                <div className="bg-white border rounded-lg shadow-sm p-6 mt-6">

                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-5">
                        Quick Actions
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <button className="border rounded-md p-4 text-left hover:bg-gray-50">
                            <p className="font-semibold text-[#0B1F3A]">
                                Find Training
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Explore available training programs
                            </p>
                        </button>

                        <button className="border rounded-md p-4 text-left hover:bg-gray-50">
                            <p className="font-semibold text-[#0B1F3A]">
                                Update Skills
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Manage your current skills
                            </p>
                        </button>

                        <button className="border rounded-md p-4 text-left hover:bg-gray-50">
                            <p className="font-semibold text-[#0B1F3A]">
                                View Progress
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Track your learning progress
                            </p>
                        </button>

                    </div>

                </div>

            </section>

        </main>
    )
}

export default Trainee
