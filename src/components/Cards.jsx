import React from 'react'
import Card from './Card'

const books = [
    {
        title: "Java" ,
        author:"Dev" ,
        latestPub: 2013 ,
        firstPub: 2005 ,
    } ,
    {
        title: "Java" ,
        author:"Dev" ,
        latestPub: 2013 ,
        firstPub: 2005 ,
    } ,
    {
        title: "Java" ,
        author:"Dev" ,
        latestPub: 2013 ,
        firstPub: 2005 ,
    } ,
    {
        title: "Java" ,
        author:"Dev" ,
        latestPub: 2013 ,
        firstPub: 2005 ,
    } ,
    {
        title: "Java" ,
        author:"Dev" ,
        latestPub: 2013 ,
        firstPub: 2005 ,
    } ,
    {
        title: "Java" ,
        author:"Dev" ,
        latestPub: 2013 ,
        firstPub: 2005 ,
    } ,
    {
        title: "Java" ,
        author:"Dev" ,
        latestPub: 2013 ,
        firstPub: 2005 ,
    } ,
]

const Cards = () => {
  return (
    <>
    <div className='bg-red-300 min-h-[76vh] pt-10 justify-center px-4 flex flex-wrap py-4 '>
        {books.map(book => <Card title={book.title} author={book.author} latestPub={book.latestPub} firstPub={book.firstPub}/>)}
    </div>
    <footer className='bg-red-300 bottom-0 w-[100%] min-h-[10vh] p-6 flex justify-between '>
        <button className='bg-cyan-400 p-4 rounded-lg cursor-pointer'>Previous</button>
        <button className='bg-cyan-400 p-4 rounded-lg cursor-pointer'>Next</button>
    </footer>
    </>
  )
}

export default Cards