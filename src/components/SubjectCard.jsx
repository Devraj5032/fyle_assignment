import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubjectCard = ({ subject, onSubjectClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-slate-300 text-xl p-4 rounded-lg cursor-pointer"
      onClick={() => 
       { navigate("/" + subject);
        onSubjectClick();}
      }
    >
      <p>{subject}</p>
    </div>
  );
};

export default SubjectCard;
