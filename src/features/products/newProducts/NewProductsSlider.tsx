import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import SectionTitle from "@/ui/SectionTitle";
import NewProductItem from "./NewProductItem";

export default function NewProductsSlider() {
  return (
    <>
      <SectionTitle title="جدیدترین" category="محصولات"/>
      <Swiper
        spaceBetween={10}
        loop={true}
        effect={"fade"}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        className="w-100 h-[340px] lg:h-[420px]"
        breakpoints={{
          640: {
            slidesPerView: 1, // mobile
          },
          768: {
            slidesPerView: 2, // tablet
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
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <NewProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <NewProductItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
