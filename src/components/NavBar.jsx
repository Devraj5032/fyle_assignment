import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import SideBar from "./SideBar";


const NavBar = () => {
  const [sideBar , setSideBar] = useState(false)

  const onBarClick = () => {
    setSideBar(true)
  }

  return (
    <nav className="  w-[100%] h-[10vh] flex justify-center items-center bg-red-400">
      <Bars3Icon className="w-8 " onClick={onBarClick}/>
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
  );
};

export default NavBar;
