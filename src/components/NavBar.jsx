import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const NavBar = ({ onBarClick, sideBar }) => {
  return (
    <>
      {!sideBar && (
        <nav className="  w-[100%] h-[10vh] flex justify-center items-center bg-red-400">
          <Bars3Icon className="w-8 cursor-pointer" onClick={onBarClick} />
          <form className=" space-x-4 w-[80%] flex items-center justify-center">
            <input
              className="border p-4 w-[60%] rounded-lg"
              type="search"
              placeholder="Search book by Title or Author"
            />
            <button className=" bg-teal-200 p-4 cursor-pointer rounded-lg ">
              Search
            </button>
          </form>
        </nav>
      )}
    </>
  );
};

export default NavBar;
