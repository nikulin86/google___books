import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// import { axios } from "axios";
import { useState } from "react";
import { useSearchBooks } from "../../hooks/usesearchbooks";
import { ItemBooks } from "../../Types";
import { getBooksIntroAction } from "../actions/booksIntroAction";
import { getSliderBooks } from "../actions/introSliderAction";
import { getBannerSliderBooks } from "../actions/bannerSliderAction";
import { searchBooks } from "../actions/booksSearchActions";
import { getBannerImg } from "../actions/bannerImgLink";
// import { searchBooks } from "../../hooks/usesearchbooks";

// import { useEffect, useState } from "react";



interface BooksStatets  {
  loaded: boolean;
  error: string,
  inputBook: string,
  books: ItemBooks[],
  searchBooks: ItemBooks[],
  slideBooks: ItemBooks[],
  bannerSliderBooks: ItemBooks[],
  bannerimgLink: ItemBooks[],
} 


const initialState: BooksStatets = {
  loaded: false,
  error: '',
  inputBook: '',
  books: [],
  searchBooks: [],
  slideBooks: [],
  bannerSliderBooks: [],
  bannerimgLink: [],
};



export const booksSlice = createSlice({
  name: 'booksApp',
  initialState,
  reducers: {
    changeSearchBooks: (state, action: PayloadAction<string>) => {
      state.inputBook = action.payload;
    },
    clearInput: (state) => {
      state.inputBook = ''
    }
    // clearSearcBooks: (state) => {
    //   state.inputBook = "";
    // },
    // fetch(state) {
    //   state.loaded = true
    // },
    // fetchSucces(state, action: PayloadAction<IBook[]>) {
    //   state.loaded = false
    //   state.books = action.payload
    // },
    // fetchError(state, action: PayloadAction<Error>) {
    //   state.loaded = false
    //   state.error = action.payload.message
    // }
  },
  extraReducers:(builder) => {
    builder.addCase(getBooksIntroAction.fulfilled, (state, action) => {
      state.books = action.payload;
    });
    builder.addCase(getSliderBooks.fulfilled, (state, action) => {
      state.slideBooks = action.payload;
    });
    builder.addCase(getBannerSliderBooks.fulfilled, (state, action) => {
      state.bannerSliderBooks = action.payload;
    });
    builder.addCase(getBannerImg.fulfilled, (state, action) => {
      state.bannerimgLink = action.payload;
    });
    builder.addCase(searchBooks.fulfilled, (state, action) => {
      state.searchBooks = action.payload;
    });
  },
})


export const { changeSearchBooks, clearInput } = booksSlice.actions;


export default booksSlice.reducer;
