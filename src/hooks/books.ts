import axios from "axios";
import { useEffect, useState } from "react";
import { ItemBooks, Root } from "../Types";
// import { IBook, Root } from "../models/models";
// import { IProduct } from "../models";

export function useBooks() {
  const [book, setBook] = useState<ItemBooks[]>([]);

  async function boooksIntro() {
    const res = await axios.get<Root>(
      // eslint-disable-next-line no-useless-concat
      "https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyChMZBHPGjz6xsJvQw7Mwca_FqXQ-5_uNE" +
        "&maxResuts"
    );
    setBook(res.data.items);
  }

  useEffect(() => {
    boooksIntro();
  }, []);

  return {
    setBook,
    book,
  };
}
