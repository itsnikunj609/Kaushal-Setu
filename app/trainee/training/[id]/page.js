"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const page = () => {
    const [training, setTraining] = useState(null)
    const params = useParams();
    const id = params.id
    useEffect(() => {
        const getTraining = async () => {
            const response = await fetch(`/api3/training/${id}`)
            const result = await response.json()
            setTraining(result)
        }

        getTraining()
    }, [id])



    const handleenroll = async () => {
        const response = await fetch("/api3/enrollment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                trainingid: id
            })
        })
        const result = await response.json()
    }
    if (!training) {
        return <div>Loading.....</div>
    }

    return (
        <div className="p-8">

            <h1 className="text-3xl font-bold">
                {training.title}
            </h1>

            <p className="mt-4">
                {training.description}
            </p>

            <p className="mt-3">
                Category: {training.category}
            </p>

            <p>
                Duration: {training.duration}
            </p>

            <Link href={"/trainee/mytraining"}>
                <button
                    onClick={handleenroll}
                    className="mt-6 bg-blue-600 text-white px-5 py-2 rounded"
                >
                    Enroll
                </button>

            </Link>



        </div>
    );
}

export default page
