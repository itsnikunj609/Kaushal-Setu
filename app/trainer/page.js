"use client";

import React from "react";
import { useEffect,useState } from "react";
import Link from "next/link";

const TrainerDashboard = () => {
   const[totaltrainings,setTotaltrainings]=useState(0)
   const[totaltrainees,setTotaltrainees]=useState(0)
    useEffect(()=>{
        const getstats=async()=>{
            const response=await fetch("/api4/stats");
            const result=await response.json();
            console.log(result)
            setTotaltrainings(result.totaltrainings)
            setTotaltrainees(result.totaltrainees)
        }
        getstats()
    },[])

    const[trainings,setTrainings]=useState([])

    useEffect(()=>{
        const gettrainings= async()=>{
            let response=await fetch("/api3/trainer/trainings")
            let result=await response.json()
          
            setTrainings(result)
        }
        gettrainings()

    },[])

  

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Navbar */}
            <nav className="bg-white border-b px-8 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-700">
                    Kaushal Setu
                </h1>

                <h1  className="text-2xl font-bold text-blue-700"></h1>

                
            </nav>


            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-8 py-10">

                {/* Welcome */}
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Welcome back, Trainer 👋
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Manage your training programs and trainees.
                    </p>
                </div>


                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

                    <div className="bg-white border rounded-xl p-6">
                        <p className="text-gray-500">
                            My Trainings
                        </p>

                        <h3 className="text-4xl font-bold text-gray-800 mt-3">
                          {totaltrainings}
                        </h3>
                    </div>


                    <div className="bg-white border rounded-xl p-6">
                        <p className="text-gray-500">
                            Total Trainees
                        </p>

                        <h3 className="text-4xl font-bold text-gray-800 mt-3">
                           {totaltrainees}
                        </h3>
                    </div>

                </div>


                {/* Trainings Header */}
                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold text-gray-800">
                        My Trainings
                    </h2>

                    <Link href={"/trainer/create_training"}><button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700">
                        + Create Training
                    </button></Link>


                    

                </div>


                {/* Training List */}
                <div className="space-y-5">

                    {trainings.map((training, index) => (

                        <div
                            key={index}
                            className="bg-white border rounded-xl p-6 flex justify-between items-center"
                        >

                            {/* Training Information */}
                            <div>

                                <h3 className="text-xl font-bold text-gray-800">
                                    {training.title}
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    {training.category}
                                    <span className="mx-2">•</span>
                                    {training.duration}
                                </p>

                                <p className="text-gray-600 mt-3">
                                    {training.trainees} trainees
                                </p>

                            </div>


                            {/* Manage Button */}
                            <Link href={`/trainer/training/${training._id}`}>
                              <button className="text-blue-600 font-semibold hover:text-blue-800">
                                Manage →
                            </button></Link>
                        

                        </div>

                    ))}

                </div>

            </main>

        </div>
    );
};

export default TrainerDashboard;