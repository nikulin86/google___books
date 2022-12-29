import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { ItemBooks } from "../Types";
import { useAppSelector } from "../hooks/redux";
import { Link } from 'react-router-dom';

function BannerSlider() {
  const { bannerSliderBooks, bannerimgLink } = useAppSelector(
    (state) => state.booksReducer
  );


  return (
    <div
      className="flex justify-between mt-[150px]justify-center items-center">
      <div className="flex justify-center items-center max-w-[950px] h-[400px]">
        <Swiper
          loop={true}
          modules={[Autoplay, Scrollbar, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={{ clickable: true }}
          className="my-[30px]"
        >
          <div className="swiper-wrapper">


            {bannerSliderBooks && bannerSliderBooks.map((bannerSliderBook) =>
              <SwiperSlide>
                <Link to="/info" state={{ props: bannerSliderBook }}>
                <div className="flex justify-center flex-col	 border w-full  h-[350px] rounded py-5 px-5 mx-25 my-5 border-current">
                  <div className="flex items-center justify-center ">
                    <img
                      className="w-[250px]  h-[200px]"
                      src={bannerSliderBook.volumeInfo.imageLinks?.thumbnail}
                      alt=""
                    />
                  </div>
                  <div>{bannerSliderBook.volumeInfo.categories}</div>

                  <div className="my-1">{bannerSliderBook.volumeInfo.title}</div>
                  <div className="">Автор: {bannerSliderBook.volumeInfo.authors}</div>
                </div>
                </Link>
              </SwiperSlide>)}

          </div>
          <div className="swiper-pagination flex items-center justify-center">
            ...
          </div>
        </Swiper>
      </div>
      <div className="max-w-[450px]">
        <Link to="/info" state={{ props: bannerimgLink[2] }}>
          <div className="mb-[10px] border-2 border-zinc-900">
            <img className='w-[350px]  h-[180px]' src={bannerimgLink[2]?.volumeInfo?.imageLinks?.thumbnail} alt="" />
          </div>
        </Link>
        <Link to="/info" state={{ props: bannerimgLink[5] }}>
          <div className="border-2 border-zinc-900">
            <img className='w-[350px]  h-[180px]' src={bannerimgLink[5]?.volumeInfo?.imageLinks?.thumbnail} alt="" />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BannerSlider