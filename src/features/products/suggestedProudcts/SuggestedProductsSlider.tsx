import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import SuggestedProductItem from "./SuggestedProductItem";

export default function SuggestedProductsSlider() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        loop={true}
        effect={"fade"}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        className="w-100 h-[320px] lg:h-[450px] xl:h-[400px]"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          375: {
            slidesPerView: 2, // mobile
          },
          768: {
            slidesPerView: 3, // tablet
          },
          1440: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <SuggestedProductItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
