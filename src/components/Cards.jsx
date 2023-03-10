import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import loadingGIF from "../Images/loadingGIF.gif";
import { useLocation, useParams } from "react-router-dom";

const Cards = () => {
  let { subject } = useParams();
  let { book } = useParams();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [sub, setSub] = useState(subject);
  const [searchBar, setSearchBar] = useState(book);
  const [prev, setPrev] = useState(0);
  const [last, setLast] = useState(9);

  const location = useLocation();

  const datafun = useCallback(async () => {
    if (location.pathname.includes("search")) {
      setLoading(true);
      const data = await fetch(
        `https://openlibrary.org/search.json?q=${searchBar
          .split(" ")
          .join("+")}`
      );
      let data1 = await data.json();
      // console.log(data1.docs);
      const data2 = data1.docs;
      setBooks(data2);
      // console.log(data2)
      setLoading(false);
    } else {
      setLoading(true);
      const data = await fetch(
        `https://openlibrary.org/subjects/${sub}.json?details=true`
      );
      let data1 = await data.json();
      const data2 = data1.works;
      setBooks(data2);
      setLoading(false);
    }
  } , [books]);

  useEffect(() => {
    datafun();
  }, []);

  return (
    <div>
      {loading && (
        <div className="bg-red-300 min-h-[76vh] flex items-center justify-center ">
          <img src={loadingGIF} alt="loading..." className="w-7" />
        </div>
      )}
      {!loading && (
        <div className="bg-red-300 min-h-[76vh] pt-20 justify-center px-4 flex flex-wrap py-4 ">
          {books
            .filter((e, i) => {
              if (i <= last && i >= prev) return e;
            })
            .map((book) => (
              <Card
                key={book.key}
                title={book.title}
                // author={location.pathname.includes("search") ===true ? book.author_name.map((author) => author.name + ",") : book.authors.map((author) => author.name + ",")}
                // author= {book.author_name.map(author => author)}
                firstPub={book.first_publish_year}
              />
            ))}
        </div>
      )}
      <footer className="bg-red-300 bottom-0 w-[100%] min-h-[10vh] p-6 flex justify-between ">
        <button
          onClick={() => {
            if (prev > 0) {
              setPrev(prev - 10);
              setLast(last - 10);
            }
          }}
          disabled={prev <= 0}
          className={
            prev <= 0
              ? "bg-slate-400 p-4 rounded-lg cursor-pointer"
              : "bg-cyan-400 p-4 rounded-lg cursor-pointer"
          }
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (true) {
              setPrev(prev + 10);
              setLast(last + 10);
            }
          }}
          disabled={last >= books.length - 1}
          className={
            last >= books.length - 1
              ? "bg-slate-400 p-4 rounded-lg cursor-pointer"
              : "bg-cyan-400 p-4 rounded-lg cursor-pointer"
          }
        >
          Next
        </button>
      </footer>
    </div>
  );
};

export default Cards;
