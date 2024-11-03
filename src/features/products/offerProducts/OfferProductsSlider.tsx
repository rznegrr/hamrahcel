import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";

export default function OfferProductsSlider() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        loop={true}
        effect={"fade"}
        navigation
        className="w-100"
        breakpoints={{
          640: {
            slidesPerView: 1, // mobile
          },
          768: {
            slidesPerView: 3, // tablet
          },
          1024: {
            slidesPerView: 3, // desktop
          },
          1440: {
            slidesPerView: 4,
          },
          2560: {
            slidesPerView: 6, // desktop
          },
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
