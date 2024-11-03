import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import CategoryItem from "./CategoryItem";

export default function CategorySlider() {
  return (
    <>
      <Swiper
        loop={true}
        effect={"fade"}
        className="my-14 lg:my-18"
        breakpoints={{
          375: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3, // mobile
          },
          768: {
            slidesPerView: 5, // tablet
          },
          1024: {
            slidesPerView: 7, // desktop
          },
          2560: {
            slidesPerView: 9, // desktop
          },
        }}
      >
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide> 
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide> 
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide> 
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide>     
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide> 
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide> 
        <SwiperSlide>
          <CategoryItem />
        </SwiperSlide> 
      </Swiper>
    </>
  );
}
