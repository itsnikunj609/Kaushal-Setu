"use client";

import React from "react";

const MyTrainings = () => {

    const trainings = [
        {
            title: "Python for Data Analysis",
            duration: "6 Weeks",
            status: "Enrolled"
        },
        {
            title: "Web Development Fundamentals",
            duration: "8 Weeks",
            status: "Enrolled"
        }
    ];

    return (
        <div className="p-8">

            <h1 className="text-3xl font-bold mb-6">
                My Trainings
            </h1>

            {trainings.map((training, index) => (
                <div
                    key={index}
                    className="border p-5 rounded-lg mb-4"
                >
                    <h2 className="text-xl font-bold">
                        {training.title}
                    </h2>

                    <p className="mt-2">
                        {training.duration}
                    </p>

                    <p className="mt-2 text-green-600">
                        Status: {training.status}
                    </p>

                    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                        Continue Training
                    </button>
                </div>
            ))}

        </div>
    );
};

export default MyTrainings;