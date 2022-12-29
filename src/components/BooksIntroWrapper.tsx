import React, { useEffect } from "react";
// import { IBook } from "../models/models";
import BooksIntro from "./BooksIntro";
import { useBooks } from "./../hooks/books";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getBooksIntroAction } from "../store/actions/booksIntroAction";
import { getSliderBooks } from "../store/actions/introSliderAction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import SwiperSliderTypescript from "./SwiperSliderTypescript";
import BannerSlider from "./BannerSlider";
import { getBannerSliderBooks } from "../store/actions/bannerSliderAction";
import { getBannerImg } from "../store/actions/bannerImgLink";
import Loader from 'react-ts-loaders'
// import { fetchSearchBooks } from "../store/actions/booksIntroAction";

function BooksIntroWrapper() {
  const dispatch = useAppDispatch();
  // const { books, error, loaded } = useAppSelector((state) => state.searchbooks);
  const { books, loaded, error, slideBooks,  } = useAppSelector(
    (state) => state.booksReducer
  );

console.log(slideBooks)

  const navigate = useNavigate();
  const clickSlider = () => {
    navigate("/info");
  };

  useEffect(() => {
    dispatch(getBooksIntroAction());
    dispatch(getSliderBooks());
    dispatch(getBannerSliderBooks());
    dispatch(getBannerImg());
  }, []);

  return (
    <div className="dark:text-white">
      {loaded && <p className="text-center text-lg">Loading...</p>}
      {error && <p className="text-center text-lg text-red-600">Error...</p>}

      <BannerSlider/>
      <SwiperSliderTypescript />

      <div className="flex flex-wrap justify-between">
        {books && books.map((b) => <BooksIntro key={b.id} b={b} />)}
      </div>
    </div>
  );
}

export default BooksIntroWrapper;
