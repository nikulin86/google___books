import React from "react";
// import { IBook } from "../models/models";
import { useLocation } from "react-router-dom";
import { ItemBooks } from "../Types";

interface BookInfoProps {
  props: ItemBooks;
}

function BookInfo() {
  const location = useLocation();
  const { props } = location.state as BookInfoProps;
  
  console.log(props)
  return (
    < div className="">
      <div className="flex items-center ">
        <div className="max-w-[500px] p-10 bg-white absolute top-[200px] left-1/2 -translate-x-1/2 border-solid border-2 shadow-xl dark:text-white dark:bg-neutral-600">
          <img className=" border-2 border-zinc-900" src={props.volumeInfo.imageLinks.thumbnail} alt="" />
          <div className="mb-3">{props.volumeInfo.description}</div>
          <div className="mb-3">Издатель: {props.volumeInfo.publisher}</div>
          <div className="mb-3">Дата выхода: {props.volumeInfo.publishedDate}</div>
          <a href="/">Ссылка: {props.volumeInfo.infoLink}</a>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;


 