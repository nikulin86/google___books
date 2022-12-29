import React from 'react'
// import { IBook } from '../models/models'
import { Link } from 'react-router-dom';
import { ItemBooks } from '../Types';

interface BookCardProps {
  book: ItemBooks;
}


function BookCard(props: BookCardProps) {
  return (
    <Link to="/info" state={{props: props.book}}>
      <div className="flex justify-center flex-col	 border w-[300px]  h-[600px] rounded py-5 px-5 mx-5 my-5 shadow-xl">

      <div>{props.book.volumeInfo.categories}</div>
      <div className="w-full border rounded my-2 ">
        <img  className="w-full" src={props.book.volumeInfo.imageLinks?.thumbnail} alt="" />
      </div>
      
      <div className="my-3">{props.book.volumeInfo.title}</div>
      <div className="">Автор: {props.book.volumeInfo.authors}</div>
    </div>
    </Link>
  )
}

export default BookCard;