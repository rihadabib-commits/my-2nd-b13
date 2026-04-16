
"use client";

import React from "react";
import { IoMdHome } from "react-icons/io";
import { CiTimer } from "react-icons/ci";
import { FaStairs } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();

  const navItem = [
    { href: "/", label: "Home", icon: <IoMdHome /> },
    { href: "/timeline", label: "Timeline", icon: <CiTimer /> },
    { href: "/status", label: "Status", icon: <FaStairs /> },
  ];

  return (
    <div className="navbar bg-base-100 shadow-md px-4">

      
      <div className="flex-1">
        <a className="text-xl font-bold text-[#1f2937]">
          KeenKeeper
        </a>
      </div>

      
      <div className="flex-none lg:hidden dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost">
          <HiMenu size={22} />
        </label>

        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52"
        >
          {navItem.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 p-2 rounded ${
                  pathname === item.href
                    ? "bg-green-600 text-white"
                    : ""
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">

          {navItem.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 rounded ${
                  pathname === item.href
                    ? "bg-green-600 text-white font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}

        </ul>
      </div>

    </div>
  );
};

// export default Navbar;