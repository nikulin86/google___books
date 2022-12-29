import React from "react";
// import { IBook } from "../models/models";
import BookCard from "./BookCard";
import { useLocation } from "react-router-dom";
import { ItemBooks } from "../Types";
import { useAppSelector } from "../hooks/redux";


// interface BooksCardsProps {
//   books: ItemBooks[];
// }

function BooksCards() {
  // const location = useLocation();
  // const {books} = location.state as BooksCardsProps;
  const { searchBooks } = useAppSelector((state) => state.booksReducer);

  return (
    <div className=" mx-auto  mt-[30px]">
      <div className=" flex justify-between flex-wrap">
        {searchBooks &&
          searchBooks.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
      {/* {books && books.map((b) => <BookCard key={b.id} b={b}/>)} */}
    </div>
  );
}

export default BooksCards;
