
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const CardData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-5 pl-20">Your friend</h1>

      <div className="grid md:grid-cols-4 sm:grid-cols-1  gap-4 pl-20 pr-20">
        {data.map((item) => (
          
        
          <Link key={item.id} href={`/details/${item.id}`}>
            
            <div className="card bg-base-100 shadow-sm cursor-pointer hover:scale-105 transition">

              <figure className="px-5 pt-5">
                <Image
                  src={item.picture}
                  width={80}
                  height={80}
                  alt="picture"
                  className="rounded-full"
                />
              </figure>
      
    

              <div className="card-body items-center text-center">
                <h2 className="font-bold">{item.name}</h2>
                <p>{item.days_since_contact} days ago</p>

                <p className="bg-green-200 rounded-full text-black px-2">
                  {item.tags?.join(" ")}
                </p>

                <p
                  className={`px-2 py-1 rounded-full text-white
                    ${item.status === "overdue" ? "bg-red-500" : "bg-yellow-500"}
                  `}
                >
                  {item.status}
                </p>
              </div>

            </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardData;