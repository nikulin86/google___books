import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BookCard from "./components/BookCard";
import BooksCards from "./components/BooksCards";
import BooksIntro from "./components/BooksIntro";
import BooksIntroWrapper from "./components/BooksIntroWrapper";
import Header from "./components/Header";
import { useBooks } from "./hooks/books";
import { useDebounce } from "./hooks/debounce";
import { useSearchBooks } from "./hooks/usesearchbooks";
// import { IBook } from "./models/models";
import BookInfo from "./pages/BookInfo";




function App() {


  return (
    <div className="bg-white dark:bg-neutral-600">
      <Header />
      <div className="container mx-auto min-w-[1400px] pt-20 ">

        <Routes>
          <Route path="/google___books" element={<BooksIntroWrapper />} />
          <Route path="/info" element={<BookInfo />} />
  
        
          <Route path="/books" element={<BooksCards />} />
        </Routes>
    
      </div>
      {/* <BooksCards books={books}/> */}
    </div>
  );
}

export default App;
