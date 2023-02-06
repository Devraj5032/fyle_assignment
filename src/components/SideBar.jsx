import React from 'react'
import { XMarkIcon } from "@heroicons/react/24/solid";
import SubjectCard from './SubjectCard';

const subjects = ["Architecture" , "Autobiographies" , "Programming" , "Physics" , "India"]

const SideBar = () => {
  return (
    <div className='flex flex-col h-[100vh] bg-slate-700  items-center justify-center space-y-5 relative'>
      <XMarkIcon  className='w-10 right-10 absolute top-10 fill-white'/>
      <div className='flex justify-center items-center space-x-4 w-[100%]'>
      <input
          className="border p-4 w-[60%] rounded-lg"
          type="search"
          placeholder="Search book by Subject"
        />
        <button className=" bg-teal-200 p-4 cursor-pointer rounded-lg ">
          Search
        </button>
        </div>
        {subjects.map(sub => <SubjectCard subject={sub}/>)}
    </div>
  )
}

export default SideBar