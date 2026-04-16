// import React from "react";
// import { FaPlus } from "react-icons/fa6";

// const Banner = () => {
//   return (
//     <div>
//       <div className="flex flex-col justify-center items-center space-y-4">
//         <div>
//           <h1 className="font-bold text-3xl pt-100px text-center justify-center">
//             Friends to keep close in your life
//           </h1>

//           <p className="opacity-50">
//             Your personal shelf of meaningful connections. Browse, tend, and
//             nurture the relationships that matter most.
//           </p>
//         </div>
//         <button className="btn btn-success"> <FaPlus />
//  Add a friend</button>



// <div className="flex  gap-3">
//   <div className="card bg-base-100 w-96 shadow-sm">
//   <figure className="px-10 ">
  
//   </figure>
//   <div className="card-body items-center text-center font-bold text-2xl">
//             10
//             <p>Total friends</p>
//   </div>
// </div>
//   <div className="card bg-base-100 w-96 shadow-sm">
//   <figure className="px-10">
  
//   </figure>
//   <div className="card-body items-center text-center font-bold text-2xl">
//             3
//             <p>On tract</p>
//   </div>
// </div>
//   <div className="card bg-base-100  shadow-sm">
//   <figure className="px-10 ">
  
//   </figure>
//   <div className="card-body items-center text-center font-bold text-2xl">
//             6
//             <p>Need Attention</p>
//   </div>
// </div>
//   <div className="card bg-base-100 w-96 shadow-sm">
//   <figure className="px-10 ">
  
//   </figure>
//   <div className="card-body items-center text-center font-bold text-2xl">
//             12
//             <p>Interactions This Month</p>
//   </div>
// </div>

//       </div>
//       </div>
 
//     </div>
//   );
// };

// export default Banner;

"use client";

import React from "react";
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-4 py-10">

      {/* TEXT */}
      <div className="flex flex-col justify-center items-center text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl">
          Friends to keep close in your life
        </h1>

        <p className="opacity-60 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="btn btn-success flex items-center gap-2">
          <FaPlus />
          Add a friend
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">10</h2>
            <p className="text-sm text-gray-500">Total friends</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">3</h2>
            <p className="text-sm text-gray-500">On track</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">6</h2>
            <p className="text-sm text-gray-500">Need Attention</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="text-2xl font-bold">12</h2>
            <p className="text-sm text-gray-500">
              Interactions This Month
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
