import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

function Hero() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        className="lg:my-10"
        centeredSlides={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <img
            src="/images/slider/slider1.png"
            alt="ساعت های هوشمند"
            className="rounded-2xl m-auto h-[150px] md:h-[250px] lg:h-[350px] xl:h-[450px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slider/slider2.png"
            alt="ساعت های هوشمند"
            className="rounded-2xl m-auto h-[150px] md:h-[250px] lg:h-[350px] xl:h-[450px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slider/slider3.png"
            alt="گوشی های موبایل برند سامسونگ"
            className="rounded-2xl m-auto h-[150px] md:h-[250px] lg:h-[350px] xl:h-[450px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slider/slider4.png"
            alt="کنسول بازی "
            className="rounded-2xl m-auto h-[150px] md:h-[250px] lg:h-[350px] xl:h-[450px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Hero;
