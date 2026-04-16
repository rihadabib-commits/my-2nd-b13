import React from "react";
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-4">
        <div>
          <h1 className="font-bold text-3xl pt-100px text-center justify-center">
            Friends to keep close in your life
          </h1>

          <p className="opacity-50">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <button className="btn btn-success"> <FaPlus />
 Add a friend</button>



<div className="flex  gap-3">
  <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 ">
  
  </figure>
  <div className="card-body items-center text-center font-bold text-2xl">
            10
            <p>Total friends</p>
  </div>
</div>
  <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10">
  
  </figure>
  <div className="card-body items-center text-center font-bold text-2xl">
            3
            <p>On tract</p>
  </div>
</div>
  <div className="card bg-base-100  shadow-sm">
  <figure className="px-10 ">
  
  </figure>
  <div className="card-body items-center text-center font-bold text-2xl">
            6
            <p>Need Attention</p>
  </div>
</div>
  <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 ">
  
  </figure>
  <div className="card-body items-center text-center font-bold text-2xl">
            12
            <p>Interactions This Month</p>
  </div>
</div>

      </div>
      </div>
 
    </div>
  );
};

export default Banner;
