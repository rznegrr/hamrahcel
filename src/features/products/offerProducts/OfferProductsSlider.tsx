import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";
import { useProducts } from "../useProducts";

export default function OfferProductsSlider() {
  const { isLoading, products } = useProducts(1)

  if (isLoading) return null

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
          <ProductCard className="bg-white mx-auto" product={products.results[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" product={products.results[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" product={products.results[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" product={products.results[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" product={products.results[4]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" product={products.results[5]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="bg-white mx-auto" product={products.results[6]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
