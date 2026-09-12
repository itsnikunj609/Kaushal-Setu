"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateTraining = () => {
  const router=useRouter()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api3/trainer/trainings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        category: category,
        level: level,
        duration: duration,
        skills:  skills.split(",").map(skill => skill.trim())

      })
    })

    let result=await response.json()
    if(result){
      router.push("/trainer")
    }




  };

  return (
    <div className="min-h-screen bg-gray-100">


      {/* Main */}
      <div className="max-w-4xl mx-auto px-6 py-10">

        <div className="bg-white rounded-xl shadow-md p-8">

          <h2 className="text-3xl font-bold text-gray-800">
            Create Training
          </h2>

          <p className="text-gray-500 mt-2 mb-8">
            Add a new training program for trainees.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Title */}
            <div>
              <label className="block font-semibold mb-2">
                Training Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter training title"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-semibold mb-2">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the training"
                rows="4"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category + Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block font-semibold mb-2">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3"
                >
                  <option value="">Select Category</option>
                  <option value="Technology">Technology</option>
                  <option value="Development">Development</option>
                  <option value="Data & Analytics">
                    Data & Analytics
                  </option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Level
                </label>

                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3"
                >
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

            </div>

            {/* Duration */}
            <div>
              <label className="block font-semibold mb-2">
                Duration
              </label>

              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Example: 6 Weeks"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block font-semibold mb-2">
                Skills
              </label>

              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Example: Python, Pandas, NumPy"
                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <p className="text-sm text-gray-500 mt-1">
                Separate multiple skills with commas.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
            >
              Create Training
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default CreateTraining;