import ProductInfoCard from "@/features/products/ProductInfoCard";
import AppLayout from "@/layouts/AppLayout";
import Breadcrumb from "@/ui/BreadCrumb";
import Button from "@/ui/Button";
import CommentsForm from "@/ui/CommentsForm";
import HeadTitle from "@/ui/HeadTitle";
import ShipmentInfo from "@/ui/ShipmentInfo";
import React, { useState } from "react";

function ProductDetail() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <AppLayout>
      <HeadTitle title=" همراه سل | محصولات" meta="محصولات همراه سل" />
      <>
        <div>
          <Breadcrumb />
          <div className="bg-white py-5 md:py-10 overflow-hidden mb-16">
            {/* product detail */}
            <div className="grid grid-cols-12 w-[90vw] bg-white m-auto">
              <div className="col-span-12 lg:col-span-3 flex flex-col xl:mr-3 relative">
                <div className="flex flex-col justify-center items-center absolute top-10 right-0 gap-5">
                  <button className="bg-[#fcf1f1] px-3 py-2 rounded-md icon-btn"><i className="bi bi-bookmark text-lg"></i></button>
                  <button className="bg-[#fcf1f1] px-3 py-2 rounded-md icon-btn"><i className="bi bi-chat-left-dots text-lg"></i></button>
                  <button className="bg-[#fcf1f1] px-3 py-2 rounded-md icon-btn"><i className="bi bi-share text-lg"></i></button>
                </div>
                {/* main image */}
                <img
                  src="/images/phone.webp"
                  className="w-80 md:w-80 lg:h-[340px] xl:w-80 m-auto p-3 object-cover"
                  alt="product"
                />
                {/* gallery images */}
                <ul className="flex justify-center gap-2 mt-3 overflow-x-scroll overflow-y-hidden scrollbar-hide m-auto md:mx-0">
                  <li>
                    <img
                      className="w-20 h-20 border border-border-color rounded-xl p-px cursor-pointer object-cover"
                      src="/images/phone.webp"
                      alt="product-gallery"
                    />
                  </li>
                  <li>
                    <img
                      className="w-20 h-20 border border-border-color rounded-xl p-px cursor-pointer object-cover"
                      src="/images/phone.webp"
                      alt="product-gallery"
                    />
                  </li>
                  <li>
                    <img
                      className="w-20 h-20 border border-border-color rounded-xl p-px cursor-pointer object-cover"
                      src="/images/phone.webp"
                      alt="product-gallery"
                    />
                  </li>
                  <li className="relative">
                    <img
                      className="w-20 h-20 border border-border-color rounded-xl p-px cursor-pointer blur-sm"
                      src="/images/phone.webp"
                      alt="product-gallery"
                    />
                    <span className="text-3xl absolute top-3 right-5 cursor-pointer">
                      ...
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-span-12 lg:col-span-6 mt-5 xl:mt-7 px-4">
                <p className="text-lg lg:text-xl font-bold text-black">
                  سامسونگ گلکسی A35 رم 8 گیگابایت و ظرفیت 256 گیگابایت (پک
                  ویتنام)
                </p>

                <p className="text-xs md:text-sm text-gray mt-2">
                  Xiaomi Redmi 13 4G 8GB 256GB
                </p>

                <div className="flex whitespace-nowrap scrollbar-hide gap-3 mt-3 overflow-y-hidden overflow-x-scroll">
                  <div className="flex gap-2 my-3 border border-border-color rounded-md rounded-tr-2xl p-2">
                    <span className="h-5 w-5 bg-black text-black rounded-full">
                      0
                    </span>
                    <p className="text-xs md:text-sm text-black">رنگ مشکی</p>
                  </div>
                  <div className="flex gap-2 my-3 border border-border-color rounded-md rounded-tr-2xl p-2">
                    <span className="h-5 w-5 bg-main-color text-main-color rounded-full">
                      0
                    </span>
                    <p className="text-xs md:text-sm text-black">رنگ قرمز</p>
                  </div>
                </div>

                <div className="my-6">
                  <p className="text-xl text-right text-black font-black border-t border-border-color py-5">
                    مشخصات پایه
                  </p>
                  <div className="grid grid-cols-2 gap-2 md:gap-5">
                    <ProductInfoCard
                      title="رم"
                      desc="8 گیگابایت"
                      icon="bi bi-memory px-1 xl:pr-5 xl:pl-3"
                      titleStyle="text-xs lg:text-sm"
                      descStyle="text-sm lg:text-lg"
                    />
                    <ProductInfoCard
                      title="حافظه داخلی"
                      desc="256 گیگابایت"
                      icon="bi bi-sd-card px-1 xl:pr-5 xl:pl-3"
                      titleStyle="text-xs lg:text-sm"
                      descStyle="text-sm lg:text-lg"
                    />
                      <ProductInfoCard
                        title="دوربین اصلی"
                        desc="100 مگاپیکسل"
                        icon="bi bi-camera2 px-1 xl:pr-5 xl:pl-3"
                        titleStyle="text-xs lg:text-sm"
                        descStyle="text-sm lg:text-lg"
                      />
                    <ProductInfoCard
                      title="دوربین جلو"
                      desc="40 مگاپیکسل"
                      icon="bi bi-camera px-1 xl:pr-5 xl:pl-3"
                      titleStyle="text-xs lg:text-sm"
                      descStyle="text-sm lg:text-lg"
                    />
                    <ProductInfoCard
                      title="صفحه نمایش"
                      desc="6.79 اینچ"
                      icon="bi bi-phone px-1 xl:pr-5 xl:pl-3"
                      titleStyle="text-xs lg:text-sm"
                      descStyle="text-sm lg:text-lg"
                    />
                    <ProductInfoCard
                      title="ظرفیت باتری"
                      desc="mA⋅h 5030"
                      icon="bi bi-battery-charging px-1 xl:pr-5 xl:pl-3"
                      titleStyle="text-xs lg:text-sm"
                      descStyle="text-sm lg:text-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-3 pt-0 p-4 bg-[#fcf1f1] rounded-md rounded-tl-2xl h-fit mt-4 md:mt-8">
                <img src="/hamrahcel.svg" className="h-20 w-28 m-auto" />
                <ShipmentInfo className="border-y border-[#ffffff] py-7 px-5 gap-3" />
                <p className="text-left py-4 text-black">
                  45,000,000 <span className="text-main-color mr-1">تومان</span>
                </p>
                <Button
                  buttonName="افزودن به سبد خرید"
                  className="bg-main-color w-full text-white m-auto justify-center my-3 gap-3 py-2 hover:bg-white hover:text-main-color transition-all ease-in-out duration-300"
                  buttonIcon="bi bi-cart"
                />
              </div>
            </div>

            {/* product description */}
            <div className="bg-white w-[90vw] m-auto xs:mt-32 sm:mt-0 pt-10">
              <div className="flex gap-5 md:gap-10 mt-1 border-y border-border-color px-5 py-4">
                <button
                  className={`tab-button text-sm lg:text-base pb-3 ${activeTab === 1 ? 'active' : ''}`}
                  onClick={() => handleTabClick(1)}
                >
                  اطلاعات کلی
                </button>
                <button
                  className={`tab-button text-sm lg:text-base pb-3 ${activeTab === 2 ? 'active' : ''}`}
                  onClick={() => handleTabClick(2)}
                >
                  مشخصات فنی
                </button>
                <button
                  className={`tab-button text-sm lg:text-base pb-3 ${activeTab === 3 ? 'active' : ''}`}
                  onClick={() => handleTabClick(3)}
                >
                  نظرات کاربران
                </button>
              </div>

              {activeTab === 1 && (
                <div className="m-10">
                  <p className="text-md leading-7">
                    گوشی موبایل Xiaomi Redmi 13 4G با حافظه 256 و رم 8 گیگابایت
                    دارای دوربین اصلی 108 مگاپیکسلی، جک 3.5 میلیمتری صدا و ظرفیت
                    باتری 5030 میلی آمپر ساعتی است.
                  </p>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <div className="mt-8 mx-5">
                    <p className="text-base text-main-color font-bold">طراحی</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mt-5">
                      <ProductInfoCard
                        title="دوربین"
                        desc="دوربین اصلی"
                        className="bg-[#fcf1f1]"
                        titleStyle="text-sm md:text-lg font-bold"
                        descStyle="text-xs md:text-sm"
                      />
                      <ProductInfoCard
                        title="دوربین"
                        desc="دوربین اصلی"
                        className="bg-[#fcf1f1]"
                        titleStyle="text-sm md:text-lg font-bold"
                        descStyle="text-xs md:text-sm"
                      />
                      <ProductInfoCard
                        title="دوربین"
                        desc="دوربین اصلی"
                        className="bg-[#fcf1f1]"
                        titleStyle="text-sm md:text-lg font-bold"
                        descStyle="text-xs md:text-sm"
                      />
                      <ProductInfoCard
                        title="دوربین"
                        desc="دوربین اصلی"
                        className="bg-[#fcf1f1]"
                        titleStyle="text-sm md:text-lg font-bold"
                        descStyle="text-xs md:text-sm"
                      />
                      <ProductInfoCard
                        title="دوربین"
                        desc="دوربین اصلی"
                        className="bg-[#fcf1f1]"
                        titleStyle="text-sm md:text-lg font-bold"
                        descStyle="text-xs md:text-sm"
                      />
                      <ProductInfoCard
                        title="دوربین"
                        desc="دوربین اصلی"
                        className="bg-[#fcf1f1]"
                        titleStyle="text-sm md:text-lg font-bold"
                        descStyle="text-xs md:text-sm"
                      />
                      <ProductInfoCard
                        title="دوربین"
                        desc="دوربین اصلی"
                        className="bg-[#fcf1f1]"
                        titleStyle="text-sm md:text-lg font-bold"
                        descStyle="text-xs md:text-sm"
                      />
                      <ProductInfoCard
                        title="دوربین"
                        desc="دوربین اصلی"
                        className="bg-[#fcf1f1]"
                        titleStyle="text-sm md:text-lg font-bold"
                        descStyle="text-xs md:text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="my-5">
                  <CommentsForm />
                </div>
              )}
            </div>
            {/* <div className="my-16 px-5">
            <OfferProducts/>
            </div> */}
          </div>
        </div>
      </>
    </AppLayout>
  );
}

export default ProductDetail;
