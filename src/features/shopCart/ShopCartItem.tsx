import React from "react";

function ShopCartItem() {
  return (
    <>
      {/* shop cart item */}
      <div className="h-96 md:h-80 border border-border-color rounded-lg gap-x-5 p-4 mt-7 shadow-md relative">
        <div className="flex mt-2">
          <img src="/images/phone.webp" className="h-32 md:w-32 rounded-xl" />
          <div className="mr-3 md:mr-8">
            <p className="text-sm md:text-base pt-3">
              سامسونگ گلکسی A35 رم 8 گیگابایت و ظرفیت 256 گیگابایت (پک ویتنام)
            </p>

            <div className="flex gap-2 my-3 border border-border-color rounded-md rounded-tr-2xl p-2 w-28">
              <span className="h-5 w-5 bg-black text-black rounded-full">
                0
              </span>
              <p className="text-xs md:text-sm text-black">رنگ مشکی</p>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button className="flex gap-2 text-sm text-gray">
                <i className="bi bi-shield-check"></i>
                گارانتی سلامت فیزیکی کالا
              </button>
              <button className="flex gap-2 text-sm text-gray">
                <i className="bi bi-shop-window"></i>
                فروشگاه همراه سل
              </button>
              <button className="flex gap-2 text-sm text-gray">
                <i className="bi bi-truck"></i>
                ارسال کالا ۵ روز کاری
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center md:justify-start w-full gap-x-8 pt-5 px-5">
          {/* count and price */}
          <div className="flex items-center gap-x-4 border border-border-color px-2 py-1 rounded-md">
            <button className="text-base text-gray cursor-pointer font-black">
              <i className="bi bi-plus text-main-color"></i>
            </button>
            <p className="text-main-color">0</p>
            <button className="text-base text-gray cursor-pointer font-black">
              <i className="bi bi-dash text-main-color"></i>
            </button>
          </div>

          <div>
            <p className="text-sm md:text-base text-info">
              48,095,738
              <span className="text-sm text-main-color pr-2">تومان</span>
            </p>
          </div>
        </div>

        <div className="absolute bottom-2 left-2 md:bottom-5 md:left-5">
          <button className="text-xs md:text-sm text-black hover:text-main-color transition-all ease-in-out duration-300">
            مشاهده محصول <i className="bi bi-chevron-left text-xs"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default ShopCartItem;