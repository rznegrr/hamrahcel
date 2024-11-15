import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";
import { useProduct } from "../useProduct";
import { useProducts } from "../useProducts";

export default function BrandProductSlider() {
  const { isLoading, products } = useProducts(1);

  if (isLoading) return null

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
          <ProductCard className="mx-auto" product={products.results[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" product={products.results[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" product={products.results[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" product={products.results[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" product={products.results[4]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" product={products.results[5]} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard className="mx-auto" product={products.results[6]} />
        </SwiperSlide>
        <></>
      </Swiper>
    </>
  );
}
