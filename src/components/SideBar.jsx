import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SubjectCard from "./SubjectCard";

const subjects = [
  "Architecture",
  "Autobiographies",
  "Programming",
  "Physics",
  "India",
];

const SideBar = ({ onCrossClick }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-700  items-center justify-center space-y-5 relative">
      <XMarkIcon
        className="cursor-pointer w-10 right-10 absolute top-10 fill-white"
        onClick={onCrossClick}
      />
      <div className="flex justify-center items-center space-x-4 w-[100%]">
        <input
          className="border p-4 w-[60%] rounded-lg"
          type="search"
          placeholder="Search book by Subject"
        />
        <button className=" bg-teal-200 p-4 cursor-pointer rounded-lg ">
          Search
        </button>
      </div>
      {subjects.map((sub) => (
        <SubjectCard subject={sub} />
      ))}
    </div>
  );
};

export default SideBar;
