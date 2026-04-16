
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
import CallProvider from "@/app/context/CallProvider";


export default function Page() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => String(item.id) === String(id));
        setSingleData(found || null);
      });
  }, [id]);

  if (!singleData) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="bg-[#f5f7f9] min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-5">
          <div className="w-[260] space-y-3">
            {/* PROFILE */}
            <div className="bg-white shadow rounded-lg p-5 text-center">
              <Image
                src={singleData.picture}
                width={64}
                height={64}
                alt="profile"
                className="rounded-full mx-auto"
              />

              <h2 className="text-sm font-semibold mt-2">{singleData.name}</h2>

              <div className="flex justify-center gap-1 mt-1">
                <span className="bg-red-500 text-white text-[10px] px-2 py-[2] rounded-full">
                  Overdue
                </span>
                <span className="bg-green-100 text-[10px] px-2 py-[2] rounded-full">
                  Family
                </span>
              </div>

              <p className="text-[11px] text-gray-500 italic mt-2">
                “Former colleague, great mentor”
              </p>

              <p className="text-[10px] text-gray-400 mt-1">Preferred: email</p>
            </div>

            {/* BUTTONS */}

            <div>
              <div className="bg-white shadow rounded-lg p-2 space-y-2">
                <button className="w-full text-left text-xs px-3 py-2 shadow rounded">
                  {" "}
                  <HiOutlineBellSnooze />
                  Snooze 2 Weeks
                </button>

                <button className="w-full text-left text-xs px-3 py-2 shadow rounded">
                  {" "}
                  <BsArchiveFill />
                  Archive
                </button>

                <button className="w-full text-left text-xs px-3 py-2 shadow rounded text-red-500">
                  {" "}
                  <MdOutlineDelete />
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex-1 space-y-4">
            {/* STATS */}
            <div className="flex gap-4">
              <div className="bg-white shadow rounded-lg p-5 w-[150] text-center">
                <p className="text-xl font-bold text-[#244d3f]">
                  {singleData.days_since_contact}
                </p>
                <p className="text-[11px] text-gray-500 font-bold">
                  Days Since Contact
                </p>
              </div>

              <div className="bg-white shadow rounded-lg p-5 w-[150] text-center">
                <p className="text-xl font-bold text-[#244d3f]">
                  {singleData.goal}
                </p>
                <p className="text-[11px] text-gray-500 font-bold">
                  Goal (Days)
                </p>
              </div>

              <div className="bg-white shadow rounded-lg p-5 w-[200] text-center">
                <p className="text-sm font-bold text-[#244d3f]">
                  {singleData.next_due_date}
                </p>
                <p className="text-[11px] text-xl text-gray-500 font-bold">
                  Next Due
                </p>
              </div>
            </div>

            {/* RELATIONSHIP */}
            <div className="bg-white shadow rounded-lg p-5 flex justify-between items-center">
              <div>
                <p className=" font-bold text-xl">Relationship Goal</p>
                <p className="text-[12px] text-xl text-gray-500">
                  Connect every{" "}
                  <span className="font-bold text-xl">{singleData.goal}</span>{" "}
                  days
                </p>
              </div>

              <button className="text-xl shadow px-3 py-1 rounded">Edit</button>
            </div>

            {/* QUICK CHECK-IN */}
            <div className="bg-white shadow rounded-lg p-5">
              <p className="text-sm font-medium">Quick Check-In</p>

              <div className="flex gap-4 mt-4">
                <button
                  className="flex-1 shadow rounded p-3 text-center text-xl font-semibold bg-[#f8fafc]"
                >
                  <IoCallSharp /> Call
                </button>

                <button className="flex-1 shadow rounded p-3 text-center text-xl font-semibold bg-[#f8fafc]">
                  {" "}
                  <IoMdText />
                  Text
                </button>

                <button className="flex-1 shadow rounded p-3 text-center  font font-semibold text-xl bg-[#f8fafc]">
                  {" "}
                  <IoVideocam />
                  Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation"; // 👈 router add
// import Image from "next/image";
// import { BsArchiveFill } from "react-icons/bs";
// import { MdOutlineDelete } from "react-icons/md";
// import { HiOutlineBellSnooze } from "react-icons/hi2";
// import { IoCallSharp } from "react-icons/io5";
// import { IoMdText } from "react-icons/io";
// import { IoVideocam } from "react-icons/io5";

// export default function Page() {
//   const { id } = useParams();
//   const router = useRouter(); // 👈 add
//   const [singleData, setSingleData] = useState(null);

//   // 👇 navigate function
//   const handleNavigate = (type) => {
//     router.push(`/timeline?id=${singleData.id}&type=${type}`);
//   };

//   useEffect(() => {
//     if (!id) return;

//     fetch("/app.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((item) => String(item.id) === String(id));
//         setSingleData(found || null);
//       });
//   }, [id]);

//   if (!singleData) {
//     return <p className="text-center mt-10">Loading...</p>;
//   }

//   return (
//     <div className="bg-[#f5f7f9] min-h-screen p-6">
//       <div className="max-w-6xl mx-auto">

//         <div className="flex gap-5">

//           {/* LEFT PANEL */}
//           <div className="w-[260px] space-y-3">

//             <div className="bg-white shadow rounded-lg p-5 text-center">
//               <Image
//                 src={singleData.picture}
//                 width={64}
//                 height={64}
//                 alt="profile"
//                 className="rounded-full mx-auto"
//               />

//               <h2 className="text-sm font-semibold mt-2">
//                 {singleData.name}
//               </h2>

//               <div className="flex justify-center gap-1 mt-1">
//                 <span className="bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full">
//                   Overdue
//                 </span>
//                 <span className="bg-green-100 text-[10px] px-2 py-[2px] rounded-full">
//                   Family
//                 </span>
//               </div>
//             </div>

//             <div className="bg-white shadow rounded-lg p-2 space-y-2">
//               <button className="w-full text-left text-xs px-3 py-2 shadow rounded">
//                 <HiOutlineBellSnooze /> Snooze 2 Weeks
//               </button>

//               <button className="w-full text-left text-xs px-3 py-2 shadow rounded">
//                 <BsArchiveFill /> Archive
//               </button>

//               <button className="w-full text-left text-xs px-3 py-2 shadow rounded text-red-500">
//                 <MdOutlineDelete /> Delete
//               </button>
//             </div>
//           </div>

//           {/* RIGHT PANEL */}
//           <div className="flex-1 space-y-4">

//             {/* QUICK CHECK-IN */}
//             <div className="bg-white shadow rounded-lg p-5">

//               <p className="text-sm font-medium">
//                 Quick Check-In
//               </p>

//               <div className="flex gap-4 mt-4">

//                 {/* 👇 UPDATED BUTTONS */}
//                 <button
//                   onClick={() => handleNavigate("call")}
//                   className="flex-1 shadow rounded p-3 text-center text-xl font-semibold bg-[#f8fafc]"
//                 >
//                   <IoCallSharp /> Call
//                 </button>

//                 <button
//                   onClick={() => handleNavigate("text")}
//                   className="flex-1 shadow rounded p-3 text-center text-xl font-semibold bg-[#f8fafc]"
//                 >
//                   <IoMdText /> Text
//                 </button>

//                 <button
//                   onClick={() => handleNavigate("video")}
//                   className="flex-1 shadow rounded p-3 text-center text-xl font-semibold bg-[#f8fafc]"
//                 >
//                   <IoVideocam /> Video
//                 </button>

//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }