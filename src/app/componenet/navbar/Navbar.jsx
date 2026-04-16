
"use client";

import React from "react";
import { IoMdHome } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import { FaStairs } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold">
          <span className="text-[#1f2937]">KeenKeeper</span>
        </a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black flex gap-4">

          <li>
            <Link
              href="/"
              className={`flex items-center gap-1 ${
                pathname === "/" ? "bg-green-600 font-bold" : ""
              }`}
            >
              <IoMdHome /> Home
            </Link>
          </li>

          <li>
            <Link
              href="/timeline"
              className={`flex items-center gap-1 ${
                pathname === "/timeline" ? "bg-green-600 font-bold" : ""
              }`}
            >
              <CiTimer /> Timeline
            </Link>
          </li>

          <li>
            <Link
              href="/status"
              className={`flex items-center gap-1 ${
                pathname === "/status" ? "bg-green-600 font-bold" : ""
              }`}
            >
              <FaStairs /> Status
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;