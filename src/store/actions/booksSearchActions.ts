import { useEffect, useState } from "react";
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
// import { useState } from "react";
import { Root } from "../../Types"
// import { Root } from "../../models/models"
import { AppDispatch } from "../slices"
import { useDebounce } from "../../hooks/debounce";
import { useInput } from "../../hooks/input";


// const [books, setBooks] = useState<ItemBooks[]>([]);

// const debounce = useDebounce<string>(input.value);

 export const searchBooks = createAsyncThunk(
    "booksApp/searchBooks",
    async(value: string) => {
        // const input = useInput();
        // const debounce = useDebounce<string>(input.value);

      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyChMZBHPGjz6xsJvQw7Mwca_FqXQ-5_uNE`
      )
      console.log(data)
      return data.items
    //   setBooks(data.items);
    //   input.value = ''
    }
  ) 


