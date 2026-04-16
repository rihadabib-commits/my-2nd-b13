
"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { BsArchiveFill } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoCallSharp } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { CallContext } from "@/app/context/CallContextProvider";
import { toast } from "react-toastify";

export default function Page() {
  const { id } = useParams();

  const [singleData, setSingleData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { call = [], setCall } = useContext(CallContext);

  
  const handleCall = (type) => {
    if (!singleData) return;

    if (call.find((c) => c.id === singleData.id)) {
      toast.error("Already added");
      return;
    }

    setCall([
      ...call,
      {
        id: singleData.id,
        name: singleData.name,
        type,
        date: singleData.next_due_date,
      },
    ]);

    toast.success(`${type} added`);
  };

  
  useEffect(() => {
    if (!id) return;

    

    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (item) => String(item.id) === String(id)
        );

        setTimeout(() => {
          setSingleData(found || null);
          setLoading(false);
        }, 800);
      });
  }, [id]);

  
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-2">
        <span className="loading loading-ring loading-lg"></span>
        <p className="text-sm text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!singleData) {
    return <p className="text-center mt-10">No Data Found</p>;
  }

  return (
    <div className="bg-[#f5f7f9] min-h-screen p-4 md:p-6">

      <div className="max-w-6xl mx-auto">

        
        <div className="flex flex-col lg:flex-row gap-5">

          
          <div className="w-full lg:w-[260] space-y-3">

          
            <div className="bg-white shadow rounded-lg p-5 text-center">
              <Image
                src={singleData.picture}
                width={70}
                height={70}
                alt="profile"
                className="rounded-full mx-auto"
              />

              <h2 className="text-sm font-semibold mt-2">
                {singleData.name}
              </h2>

              <div className="flex justify-center gap-1 mt-1 flex-wrap">
                <span className="bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">
                  Overdue
                </span>
                <span className="bg-green-100 text-[10px] px-2 py-1 rounded-full">
                  Family
                </span>
              </div>

              <p className="text-[11px] text-gray-500 italic mt-2">
                “Former colleague, great mentor”
              </p>

              <p className="text-[10px] text-gray-400 mt-1">
                Preferred: email
              </p>
            </div>

          
            <div className="bg-white shadow rounded-lg p-2 space-y-2">
              <button className="w-full flex items-center gap-2 text-xs px-3 py-2 shadow rounded">
                <HiOutlineBellSnooze /> Snooze 2 Weeks
              </button>

              <button className="w-full flex items-center gap-2 text-xs px-3 py-2 shadow rounded">
                <BsArchiveFill /> Archive
              </button>

              <button className="w-full flex items-center gap-2 text-xs px-3 py-2 shadow rounded text-red-500">
                <MdOutlineDelete /> Delete
              </button>
            </div>

          </div>

        
          <div className="flex-1 space-y-4">

            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

              <div className="bg-white shadow rounded-lg p-4 text-center">
                <p className="text-xl font-bold text-[#244d3f]">
                  {singleData.days_since_contact}
                </p>
                <p className="text-[11px] text-gray-500 font-bold">
                  Days Since Contact
                </p>
              </div>

              <div className="bg-white shadow rounded-lg p-4 text-center">
                <p className="text-xl font-bold text-[#244d3f]">
                  {singleData.goal}
                </p>
                <p className="text-[11px] text-gray-500 font-bold">
                  Goal (Days)
                </p>
              </div>

              <div className="bg-white shadow rounded-lg p-4 text-center">
                <p className="text-sm font-bold text-[#244d3f] ">
                  {singleData.next_due_date}
                </p>
                <p className="text-[11px] text-gray-500 font-bold">
                  Next Due
                </p>
              </div>

            </div>

          
            <div className="bg-white shadow rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">

              <div>
                <p className="font-bold text-xl">Relationship Goal</p>
                <p className="text-[12px] text-gray-500">
                  Connect every{" "}
                  <span className="font-bold">{singleData.goal}</span> days
                </p>
              </div>

              <button className="text-sm shadow px-3 py-1 rounded">
                Edit
              </button>
            </div>

            
            <div className="bg-white shadow rounded-lg p-5">

              <p className="text-sm font-medium">Quick Check-In</p>

              <div className="grid grid-cols-3 gap-3 mt-4">

                <button
                  onClick={() => handleCall("call")}
                  className="flex flex-col items-center justify-center gap-1 shadow rounded p-3 text-sm bg-[#f8fafc]"
                >
                  <IoCallSharp /> Call
                </button>

                <button
                  onClick={() => handleCall("text")}
                  className="flex flex-col items-center justify-center gap-1 shadow rounded p-3 text-sm bg-[#f8fafc]"
                >
                  <IoMdText /> Text
                </button>

                <button
                  onClick={() => handleCall("video")}
                  className="flex flex-col items-center justify-center gap-1 shadow rounded p-3 text-sm bg-[#f8fafc]"
                >
                  <IoVideocam /> Video
                </button>

              </div>

            </div>

          </div>
        {/* </div>

      </div>
    </div>
  );
} */}