

"use client";
import { useContext, useEffect, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { CallContext } from "../context/CallContextProvider";
import { MdOutlineTextsms } from "react-icons/md";
import { FaVideo } from "react-icons/fa";

const Page = () => {
  const { call = [] } = useContext(CallContext);

  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  
  const filteredData =
    filter === "All"
      ? call
      : call.filter((item) => item.type === filter);

  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-2">
        <span className="loading loading-ring loading-lg"></span>
        <p className="text-sm text-gray-500">Loading timeline...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] py-20">
      <div className="container mx-auto">

        
        <h1 className="font-bold text-5xl text-[#1f2937]">Timeline</h1>

        
        <div className="mt-6">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="w-full md:w-[300] p-3 rounded-lg border border-gray-300 bg-white text-[#64748b] focus:outline-none"
          >
            <option value="All">Filter timeline</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

        
        <div className="mt-6 space-y-4">
          {filteredData.length === 0 ? (
            <p className="text-gray-500">No data found</p>
          ) : (
            filteredData.map((data) => (
              <div
                key={data.id}
                className="p-4 bg-white rounded-lg flex gap-4 items-center shadow-lg"
              >
                <div>
                  {data.type === "call" && (
                    <FiPhoneCall className="text-2xl text-blue-500" />
                  )}
                  {data.type === "text" && (
                    <MdOutlineTextsms className="text-2xl text-purple-500" />
                  )}
                  {data.type === "video" && (
                    <FaVideo className="text-2xl text-green-500" />
                  )}
                </div>

                <div>
                  <h1 className="text-[#244d3f] font-bold text-xl">
                    {data.type}{" "}
                    <span className="text-[#64748b] text-sm">
                      with {data.name}
                    </span>
                  </h1>

                  <p className="text-[#64748b] text-sm mt-1">
                    {data.date || "No date"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    {/* </div>
  );
};

export default Page; */}