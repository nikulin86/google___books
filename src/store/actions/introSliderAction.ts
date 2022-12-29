import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
// import { IBook, Root } from "../../models/models"
// import { booksSearchSlice } from "../slices/bookSearchSlice"


export const getSliderBooks = createAsyncThunk(
    "booksApp/getSliderBooks",
    async() => {
      const { data } = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=typescript&key=AIzaSyChMZBHPGjz6xsJvQw7Mwca_FqXQ-5_uNE"
      )
      console.log(data.items) 
      return data.items;
    }
  )  