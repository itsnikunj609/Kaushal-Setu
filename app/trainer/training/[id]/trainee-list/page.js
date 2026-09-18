"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { useState } from "react";
const Trainees = () => {
    const params=useParams()
    const id=params.id
    const[trainees,setTrainees]=useState([])
    useEffect(()=>{
        const gettrainees=async()=>{
            const response=await fetch(`/api3/training/${id}/trainees`)
            const result=await response.json()
            setTrainees(result)
        }
        gettrainees()
    },[id])

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navbar */}
            <nav className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    Kaushal Setu
                </h1>

                <Link href="/trainer">
                    <button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold">
                        Dashboard
                    </button>
                </Link>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-8">

                <Link
                    href="/trainer"
                    className="text-blue-700 font-semibold hover:underline"
                >
                    ← Back to Dashboard
                </Link>

                <div className="mt-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Enrolled Trainees
                    </h2>

                    <p className="text-gray-600 mt-1">
                        Python for Data Analysis
                    </p>
                </div>

                {/* Trainee List */}
                <div className="bg-white rounded-xl shadow-md mt-6 overflow-hidden">

                    <div className="px-6 py-4 border-b">
                        <h3 className="text-xl font-bold text-gray-800">
                            Trainees
                        </h3>
                    </div>

                    {/* Temporary trainee */}

                    {trainees.map((trainees,index)=>{
                        return <>  <div key={index} className="px-6 py-5 flex justify-between items-center border-b">

                        <div >
                            <h4 className="font-semibold text-gray-800">
                              {trainees.username}
                            </h4>

                            <p className="text-gray-500 text-sm">
                               {trainees.email}
                            </p>
                        </div>
                     

                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                            Enrolled
                        </span>

                    </div>
</>
                    })}
               

                  
                </div>

            </main>

        </div>
    );
};

export default Trainees;