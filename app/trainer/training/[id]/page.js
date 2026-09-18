"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import Link from 'next/link'

const Page = () => {
    const params=useParams()
    const id=params.id


  return (
   <>{/* Training Header Card */}
<div className="bg-white rounded-xl shadow-md p-6 mb-6">

    <div className="flex justify-between items-start">

        <div>
            <h1 className="text-2xl font-bold text-gray-800">
                Python for Data Analysis
            </h1>

            <div className="flex gap-3 mt-3 text-sm">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    Technology
                </span>

                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    Beginner
                </span>

                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    6 Weeks
                </span>
            </div>
        </div>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            ● Active
        </span>

    </div>

</div>


{/* Training Overview */}
<div className="bg-white rounded-xl shadow-md p-6 mb-6">

    <h3 className="text-xl font-bold text-gray-800 mb-4">
        Training Overview
    </h3>

    <h4 className="font-semibold text-gray-700 mb-2">
        Description
    </h4>

    <p className="text-gray-600 leading-relaxed">
        Learn Python programming, data analysis, data visualization
        and practical data handling.
    </p>

    <h4 className="font-semibold text-gray-700 mt-6 mb-3">
        Skills Covered
    </h4>

    <div className="flex flex-wrap gap-2">
        <span className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg">
            Python
        </span>

        <span className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg">
            Pandas
        </span>

        <span className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg">
            NumPy
        </span>

        <span className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg">
            Data Visualization
        </span>
    </div>

</div>


{/* Statistics */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

    <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-gray-500">
            👥 Total Trainees
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-2">
            15
        </h2>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-gray-500">
            ⏱ Duration
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-2">
            6 Weeks
        </h2>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6">
        <p className="text-gray-500">
            📌 Status
        </p>

        <h2 className="text-3xl font-bold text-green-600 mt-2">
            Active
        </h2>
    </div>

</div>


{/* Trainer Actions */}
<div className="bg-white rounded-xl shadow-md p-6">

    <h3 className="text-xl font-bold text-gray-800 mb-5">
        Trainer Actions
    </h3>

    <div className="flex flex-wrap gap-4">

      <Link href={`/trainer/training/${id}/trainee-list`}>  <button className="bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-800">
            👥 View Trainees
        </button>
</Link>

      
        <button className="bg-yellow-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-yellow-600">
            ✏️ Edit Training
        </button>

        <button className="bg-red-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-red-700">
            ⛔ Deactivate Training
        </button>

    </div>

</div></>
  )
}

export default Page
