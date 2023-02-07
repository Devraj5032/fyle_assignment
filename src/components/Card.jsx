import React from "react";

const Card = ({ title, author, latestPub, firstPub }) => {
 

  return (
    <div className="bg-white min-h-[10%] space-y-2 p-2 rounded-lg shadow-md m-2 w-[500px]">
      <h2>Title of the book : {title}</h2>
      <strong>Author: {author}</strong>
      <p>Latest publish year: {latestPub}</p>
      <p>First publish yesr: {firstPub}</p>
      <button className="bg-cyan-400 p-2 rounded-lg">Read More</button>
    </div>
  );
};

export default Card;
