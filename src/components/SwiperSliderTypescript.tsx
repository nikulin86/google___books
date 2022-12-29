import React from "react";
// import { IBook } from '../models/models'
import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { ItemBooks } from "../Types";
import { useAppSelector } from "../hooks/redux";



function SwiperSliderTypescript () {
  const navigate = useNavigate();

  const { slideBooks } = useAppSelector(
  (state) => state.booksReducer
);


// const sliderSlideClick = () => {
//   navigate("/books")
// }

  return (
<div className="">
  <div className="ml-[50px]">TypeScript</div>
    <Swiper
    loop={true}
    modules={[Autoplay, Scrollbar, Navigation]}
    autoplay={{
      delay: 1500,
      disableOnInteraction: false,
    }}
    spaceBetween={50}
    slidesPerView={4}
    navigation={{
      prevEl: ".prev",
      nextEl: ".next",
    }}
    pagination={{ clickable: true }}
    className="my-[30px]"
  >
    <div className="swiper-wrapper flex justify-between">


      {slideBooks && slideBooks.map((slideBook) =>
        <SwiperSlide >
          <Link to="/info" state={{ props: slideBook }}>
            <div  className="flex justify-center flex-col cursor-pointer	 border w-[250px]  h-[350px] rounded py-5 px-5 mx-5 my-5 shadow-xl">
              <div className="flex items-center justify-center ">
                <img
                  className="w-[150px]  h-[150px]"
                  src={slideBook.volumeInfo.imageLinks?.thumbnail}
                  alt=""
                />
              </div>
              <div>{slideBook.volumeInfo.categories}</div>

              <div className="my-1">{slideBook.volumeInfo.title}</div>
              <div className="">Автор: {slideBook.volumeInfo.authors}</div>
            </div>
          </Link>
        </SwiperSlide> )}
   
    </div>
    <div className="swiper-pagination flex items-center justify-center">
      ...
    </div>
  </Swiper>
</div>


  );
}

export default SwiperSliderTypescript;

// onClick={() => clickSlider()}
