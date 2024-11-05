import ShopCartItem from "@/features/shopCart/ShopCartItem";
import Applayout from "@/layouts/Applayout";
import Breadcrumb from "@/ui/BreadCrumb";
import HeadTitle from "@/ui/HeadTitle";
import React from "react";

function ShopCartPage() {
  return (
    <Applayout>
      <HeadTitle title="سبد خرید" meta="سبد خرید همراه سل" />
      <Breadcrumb/>
      {/* <ProgressIndicator/> */}

      <div className="grid grid-cols-12 gap-x-5 mb-20">

        {/* shop cart item */}
        <div className="col-span-12 lg:col-span-7">
          <ShopCartItem/>          
          <ShopCartItem/>          
          <ShopCartItem/>          
        </div>

        {/* shop cart summary */}
        <div className="col-span-12 lg:col-span-5 border border-border-color p-4 md:p-8 h-80 rounded-lg flex flex-col mt-7 shadow-md lg:sticky lg:top-20 mb-10">
          {/* <p className="text-black py-4 text-lg md:text-xl">جمع کل سبد خرید</p> */}
          <div className="flex justify-between py-4">
            <p>قیمت کالا</p>
            <p className="text-main-color">
              48,095,738 <span className="text-sm mr-1">تومان</span>
            </p>
          </div>
          <div className="flex justify-between border-b border-border-color py-5">
            <p>حمل و نقل</p>
            <p className="text-gray">محاسبه حمل و نقل</p>
          </div>
          <div className="flex justify-between py-5">
            <p>مجموع</p>
            <p className="text-gray-700 text-lg">
              48,095,738
              <span className="text-sm mr-1">تومان</span>
            </p>
          </div>
          <button className="mt-5 mb-5 py-2 rounded-md rounded-tr-2xl text-white bg-main-color text-sm md:text-base w-60 md:w-80 lg:w-60 m-auto">
            ادامه جهت تسویه حساب
          </button>
        </div>
      </div>
    </Applayout>
  );
}

export default ShopCartPage;
