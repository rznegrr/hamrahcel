import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";

export default function BrandProductSlider() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation
        loop={true}
        effect={"fade"}
        className="w-100"
        breakpoints={{
          375: {
            slidesPerView: 2, // mobile
          },
          768: {
            slidesPerView: 3, // tablet
          },
          1024: {
            slidesPerView: 4, // desktop
          },
          1440: {
            slidesPerView: 5,
          },
          2560: {
            slidesPerView: 6, // desktop
          },
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <ProductCard className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" />
        </SwiperSlide>
        <></>
      </Swiper>
    </>
  );
}
