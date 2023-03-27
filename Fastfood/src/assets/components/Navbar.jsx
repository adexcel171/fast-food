import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function Navbar({ navIcon, handleNav }) {
  return (
    <div className="font-gilroy pt-10 max-w-6xl mx-auto ">
      {/* mobile render */}

      <div className="flex justify-between items-center px-4 md:hidden mb-16">
        <h2 className="font-gilroy text-xl font-bold text-[#00A000] border-b border-[#00A000] block">
          FastFood
        </h2>

        <div
          className={`w-8 h-8  relative ${navIcon ? "" : "top-2"} `}
          onClick={handleNav}
        >
          <span
            className={`w-full bg-[#2c2c38] h-1 rounded-md block absolute transition duration-500 ${
              navIcon ? "top-[60%]" : "top-0"
            } ${navIcon ? "-rotate-45" : ""} `}
          ></span>
          <span
            className={` bg-[#2c2c38] h-1 rounded-md block absolute top-[30%] transition duration-500 ${
              navIcon ? "w-0" : "w-[50%]"
            }`}
          ></span>
          <span
            className={`w-full bg-[#2c2c38] h-1 rounded-md block absolute transition duration-500 ${
              navIcon ? "rotate-45" : ""
            } top-[60%] `}
          ></span>
        </div>
      </div>
      <div
        className={`h-full bg-white w-[80%] px-8 absolute top-0 left-0 py-20 z-10   ${
          navIcon ? "block" : "hidden"
        } `}
      >
        <nav className="nav flex flex-col gap-12 text-lg">
          <NavLink to="/">Home</NavLink>
          <Link>Products</Link>
          <Link>Contact us</Link>
          <Link>About</Link>
        </nav>
      </div>
      {/* mobile render */}

      <div className=" hidden md:flex items-center justify-between px-5 xl:px-0 pb-28">
        <Link to="/">
          <h2 className="font-gilroy text-xl font-bold text-[#00A000] border-b border-[#00A000] inline-block">
            FastFood
          </h2>
        </Link>
        <nav className="flex gap-10 xl:gap-12">
          <NavLink to="/">Home</NavLink>
          <Link >Products</Link>
          <Link>Contact us</Link>
          <Link>About</Link>
        </nav>
        <div className="flex items-center gap-4 ">
          <CiSearch className="text-2xl " />
          <CiShoppingCart className="text-2xl " />
          <button className="py-2 px-5 border border-[#00A000]  rounded-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
