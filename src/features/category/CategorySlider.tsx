import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import CategoryItem from "./CategoryItem";
import { Autoplay } from "swiper/modules";


export default function CategorySlider() {
  return (
    <>
      <Swiper
        loop={true}
        effect={"fade"}
        className="my-14 lg:my-18"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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
            slidesPerView: 8, // desktop
          },
          2560: {
            slidesPerView: 9, // desktop
          },
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <CategoryItem image="/images/category/phone.png" title="گوشی موبایل"/>
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem image="/images/category/adaptor.png" title="آداپتور و شارژر" />
        </SwiperSlide> 
        <SwiperSlide>
          <CategoryItem image="/images/category/cable.png" title="کابل شارژ" />
        </SwiperSlide> 
        <SwiperSlide>
          <CategoryItem image="/images/category/headphone.png" title="هدفن و هندزفری" />
        </SwiperSlide> 
        <SwiperSlide>
          <CategoryItem image="/images/category/powerbank.png" title="پاوربانک" />
        </SwiperSlide>     
        <SwiperSlide>
          <CategoryItem image="/images/category/speacker.png" title="اسپیکر" />
        </SwiperSlide> 
        <SwiperSlide>
          <CategoryItem image="/images/category/watch.png" title="ساعت هوشمند" />
        </SwiperSlide> 
        <SwiperSlide>
          <CategoryItem image="/images/category/gadget.png" title="ابزار همراه" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryItem image="/images/category/gameConsole.png" title="کنسول بازی" />
        </SwiperSlide>  
      </Swiper>
    </>
  );
}
