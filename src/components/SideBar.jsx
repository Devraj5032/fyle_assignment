import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SubjectCard from "./SubjectCard";
import { useNavigate } from "react-router-dom";

const subjects = [
  "architecture",
  "autobiographies",
  "programming",
  "physics",
  "india",
];

const SideBar = ({ onCrossClick, onSubjectClick }) => {
  const [sub, setSub] = useState("");

  const navigate = useNavigate();

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
          onChange={(e) => setSub(e.target.value)}
        />
        <button
          className=" bg-teal-200 p-4 cursor-pointer rounded-lg "
          onClick={() => 
            {navigate("/" + sub); onSubjectClick();}
          }
        >
          Search
        </button>
      </div>
      {subjects.map((sub) => (
        <SubjectCard subject={sub} onSubjectClick={onSubjectClick} />
      ))}
    </div>
  );
};

export default SideBar;
