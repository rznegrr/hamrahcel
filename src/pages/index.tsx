import React from "react";

import HeadTitle from "../ui/HeadTitle";
import Hero from "@/features/hero/Hero";
import Applayout from "@/layouts/Applayout";
import CategorySlider from "@/features/category/CategorySlider";
import NewProductsSlider from "@/features/products/newProducts/NewProductsSlider";
import OfferProducts from "@/features/products/offerProducts/OfferProducts";
import BrandingProductItems from "@/features/products/mobileBrands/BrandProductItems";
import AdvertBanner from "@/ui/AdvertBanner";
import Blogs from "@/features/blogs/Blogs";
import AboutUs from "@/ui/AboutUs";
import Brands from "@/ui/Brands";

function HomePage() {
  return (
    <>
      <HeadTitle title="صفحه اصلی" meta="صفحه اصلی همراه سل" />
      <Applayout>
        <Hero />
        <CategorySlider />
        <OfferProducts />
        <Brands/>
        <NewProductsSlider />
        <AdvertBanner/>
        <BrandingProductItems/>
        <Blogs/>
        <AboutUs/>
      </Applayout>
    </>
  );
}

export default HomePage;
