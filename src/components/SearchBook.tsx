import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useInput } from "../hooks/input";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useSearchBooks } from "../hooks/usesearchbooks";
import { searchBooks } from "../store/actions/booksSearchActions";
// import { IBook, Root } from "../models/models";
// import { useAppDispatch } from "../store/hook/hook";
import { useDebounce } from "./../hooks/debounce";
import BooksCards from "./BooksCards";
import {  useLocation, useNavigate } from "react-router-dom";
import { changeSearchBooks, clearInput } from "../store/slices/booksSlice";

function SearchBook() {
  const { input, books } = useSearchBooks();
  // const { setValue } = useInput();


  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  console.log(books);

  // const handeLOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  //   if(event.key === "Enter") {
  //     searchBooks()
  //   }
  // }

  // const searhBooks = useAppSelector((state) => state.booksReducer.searchBooks);

  const  inputBook = useAppSelector((state) => state.booksReducer.inputBook)
  console.log(inputBook)



  

  // const onClick = () => {
  //   searchBooks();
  //     setValue("");
  // }

  // useEffect



  const [value, setValue] = useState('');
  console.log(value)

  const handleSearch = () => {
    // if (location.pathname !== "/search") navigate("/search");
    // else {
      // dispatch(clearVideos());
      dispatch(searchBooks(value));
      setValue('');
      // dispatch(clearInput());
    // }
  };


  const handelOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log(event.key)
    if (event.key === "Enter") {
      event.preventDefault();
      navigate("/books")
      handleSearch();
      setValue("");
    }
  };


  const handlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <>
      <div className='flex'>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            // handleSearch();
            // handeLOnKeyPress();
          }}
        >
          <input
            className="w-[500px] py-[5px] px-[5px] mr-[10px]"
            type="text"
            placeholder="Книги, автор, жанр"
            value={value}
            onKeyUp={handelOnKeyPress} 
            onChange={handlerChange}
            // {...input}
            // value={inputBook}
            // onChange={(e) => dispatch(changeSearchBooks(e.target.value))}
            // onKeyDown={handeLOnKeyPress}
          />
        </form>

        <Link to="/books" state={{ books }}>
          <button
            onClick={() =>  handleSearch()}
            className="bg-stone-500 py-[5px] px-[5px] bold  rounded text-white"
            type="submit"
          >
            поиск
          </button>
        </Link>
      </div>
    </>
  );
}

export default SearchBook;
