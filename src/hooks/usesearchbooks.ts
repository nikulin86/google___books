import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";
import { searchBooks } from "../store/actions/booksSearchActions";
import { ItemBooks, Root } from "../Types";
// import { IBook, Root } from "../models/models";
import { useDebounce } from "./debounce";
import { useInput } from "./input";
// import { IProduct } from "../models";

export function useSearchBooks() {
  const [books, setBooks] = useState<ItemBooks[]>([]);
  // const { value , setValue } = useInput();
  const input = useInput();


  const debounce = useDebounce<string>(input.value);


  // async function searchBooks() {
  //   const res = await axios.get<Root>(
  //     `https://www.googleapis.com/books/v1/volumes?q=${debounce}&key=AIzaSyChMZBHPGjz6xsJvQw7Mwca_FqXQ-5_uNE`
  //   );
  //   setBooks(res.data.items);
  //   input.value = ''
  // }

  const searchBooks = createAsyncThunk(
    "booksApp/searchBooks",
    async() => {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${debounce}&key=AIzaSyChMZBHPGjz6xsJvQw7Mwca_FqXQ-5_uNE`
      )
      setBooks(data.items);
      input.value = ''
    }
  ) 

  // const searchBooks = searchBooks()

  useEffect(() => {
    if (debounce.length > 3) {
      searchBooks();
    } 
  }, [debounce]);


  return {

    // searchBooks,
    input,
    setBooks,
    books
  }
}
