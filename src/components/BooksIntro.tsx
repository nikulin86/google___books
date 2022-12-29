import React from "react";
import { Link } from "react-router-dom";
// import { IBook } from "../models/models";
import { ItemBooks } from "../Types";

interface BooksIntroProps {
  b: ItemBooks;
}

function BooksIntro(props: BooksIntroProps) {

  return (
    <Link to="/info" state={{props: props.b}}>
      <div className="flex justify-center flex-col	 border  rounded py-5 px-5 mx-5 my-5 w-[300px] h-[600px] shadow-xl dark:text-white">
      <div>{props.b.volumeInfo.categories}</div>
      <div className="w-full border rounded my-2">
        <img
          className="w-full"
          src={props.b.volumeInfo.imageLinks.thumbnail}
          alt=""
        />
      </div>
      <div className="my-3">{props.b.volumeInfo.title}</div>
      <div className="">Автор: {props.b.volumeInfo.authors}</div>
    </div>
    </Link>
  
  );
}

export default BooksIntro;
