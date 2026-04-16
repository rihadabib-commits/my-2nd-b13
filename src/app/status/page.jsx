"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Status = () => {
  const data = {
    labels: ["Text", "Call", "Video"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: [
          "#7C3AED", 
          "#064E3B", 
          "#22C55E", 
        ],
        borderWidth: 6,
        borderColor: "#fff",
        cutout: "70%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-xl shadow p-6 w-full max-w-3xl mx-auto">
        <h2 className="text-green-700 font-semibold mb-4">
          By Interaction Type
        </h2>

        <div className="flex flex-col items-center justify-center">
        
          <div className="w-64 h-64">
            <Doughnut data={data} options={options} />
          </div>

          
          <div className="flex gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-600"></span>
              Text
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-900"></span>
              Call
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Video
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;