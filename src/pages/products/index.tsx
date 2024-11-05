import React, { useState } from "react";

import { Switch } from "@mui/material";

import ProductCard from "@/features/products/ProductCard";
import Applayout from "@/layouts/Applayout";
import HeadTitle from "@/ui/HeadTitle";
import Breadcrumb from "@/ui/BreadCrumb";

type Category = string | [];

function ProductPage() {
  const [openCategories, setOpenCategories] = useState<Category[]>([]);
  const [isMenuFilterOpen, setIsMenuFilterOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // const toggleCategory = (category: Category) => {
  //   if (openCategories.includes(category) {
  //     setopenCategories(null);
  //   } else {
  //     setopenCategories(category);
  //   }
  // };
  const toggleCategory = (category: Category) => {
    if (openCategories.includes(category)) {
      setOpenCategories(openCategories.filter((item) => item !== category));
    } else {
      setOpenCategories([...openCategories, category]);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Applayout>
      <HeadTitle title="محصولات" meta="محصولات همراه سل" />
      <Breadcrumb/>
      <div className="grid grid-cols-12 mb-20">
        {isMenuFilterOpen && (
          <div className="fixed inset-0 bg-[#1c1c1ce1] opacity-50 lg:hidden"></div>
        )}
        {/* filter side bar */}
        <div
          className={`col-span-3 bg-white border border-border-color rounded-md rounded-tl-2xl fixed top-[70px] right-0 w-full lg:sticky lg:block h-fit overflow-auto scrollbar-hide z-10 ${
            isMenuFilterOpen ? "block" : "hidden"
          }`}
        >
          <button
            className="absolute top-5 left-5 lg:hidden"
            onClick={() => setIsMenuFilterOpen(false)}
          >
            <i className="bi bi-x text-3xl"></i>
          </button>
          <div className="flex items-center p-4">
            <i className="bi bi-filter-right text-3xl"></i>
            <p className="text-lg pr-2 font-bold">فیلتر محصولات</p>
          </div>

          <div className="mt-5 h-96 overflow-auto lg:h-full lg:overflow-none">
            <div className="flex justify-between items-center">
              <button className="w-full text-right p-3 text-sm text-[#3b3b3b] mb-2">
                فقط کالاهای موجود
              </button>
              <Switch />
            </div>

            <div className="flex justify-between items-center">
              <button className="w-full text-right p-3 text-sm text-[#3b3b3b] mb-2">
                فروش ویژه
              </button>
              <Switch />
              {/* <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-sec-color peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-main-color rounded-full peer peer-checked:after:-translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-main-color"></div>
              </label> */}
            </div>
            <div className="flex justify-between items-center">
              <button className="w-full text-right p-3 text-sm text-[#3b3b3b] mb-2">
                پشتیبانی از 5G
              </button>
              <Switch />
            </div>
            <button
              onClick={() => toggleCategory("price-range-input")}
              className="w-full text-right p-3 text-sm text-black mb-2 flex justify-between border-t border-border-color"
            >
              محدوده قیمت <i className="bi bi-chevron-left"></i>
            </button>

            {openCategories.includes("price-range-input") && (
              <div className="flex flex-col px-5 py-4">
                <label
                  htmlFor="price-range-input"
                  className="text-sm text-[#3b3b3b] mb-5"
                >
                  15,000,000 <span className="text-main-color">تومان</span>
                </label>
                <input
                  id="price-range-input"
                  type="range"
                  // value=""
                  min="0"
                  max="15000"
                  className="w-full h-2 bg-sec-color rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}

            <button
              onClick={() => toggleCategory("categories")}
              className="w-full text-right p-3 text-sm text-black mb-2 flex justify-between border-t border-border-color"
            >
              دسته بندی ها
              <i className="bi bi-chevron-left"></i>
            </button>
            {openCategories.includes("categories") && (
              <>
                <div className="flex justify-between items-center px-5 py-4">
                  <label htmlFor="phone" className="text-sm text-[#3b3b3b]">
                    گوشی موبایل
                  </label>
                  <input
                    type="checkbox"
                    id="phone"
                    className="cursor-pointer transition"
                  />
                </div>
                <div className="flex justify-between items-center px-5 py-4">
                  <label
                    htmlFor="smart-watch"
                    className="text-sm text-[#3b3b3b]"
                  >
                    ساعت هوشمند
                  </label>
                  <input type="checkbox" id="smart-watch" className="peer " />
                </div>
              </>
            )}
            <button
              onClick={() => toggleCategory("brands")}
              className="w-full text-right p-3 text-sm text-black mb-2 flex justify-between border-t border-border-color"
            >
              برند ها <i className="bi bi-chevron-left"></i>
            </button>
            {openCategories.includes("brands") && (
              <>
                <div className="flex justify-between items-center px-5 py-4">
                  <label htmlFor="apple" className="text-sm text-[#3b3b3b]">
                    اپل
                  </label>
                  <input
                    type="checkbox"
                    id="apple"
                    className="cursor-pointer transition"
                  />
                </div>
                <div className="flex justify-between items-center px-5 py-4">
                  <label htmlFor="samsung" className="text-sm text-[#3b3b3b]">
                    سامسونگ
                  </label>
                  <input type="checkbox" id="samsung" className="peer " />
                </div>
              </>
            )}
            <button
              onClick={() => toggleCategory("ram")}
              className="w-full text-right p-3 text-sm text-black mb-2 flex justify-between border-t border-border-color"
            >
              رم <i className="bi bi-chevron-left"></i>
            </button>
            {openCategories.includes("ram") && (
              <>
                <div className="flex justify-between items-center px-5 py-4">
                  <label htmlFor="8GB" className="text-sm text-[#3b3b3b]">
                    4GB
                  </label>
                  <input
                    type="checkbox"
                    id="8GB"
                    className="cursor-pointer transition"
                  />
                </div>
                <div className="flex justify-between items-center px-5 py-4">
                  <label htmlFor="16GB" className="text-sm text-[#3b3b3b]">
                    8GB
                  </label>
                  <input type="checkbox" id="16GB" className="peer " />
                </div>
              </>
            )}
          </div>
        </div>

        {/* product list */}
        <div className="col-span-12 lg:col-span-9 grid lg:px-5">
          <div className="col-span-12 bg-sec-color p-5 text-sm mb-5 rounded-md relative">
            <div className="flex gap-4">
              <button
                onClick={() => setIsMenuFilterOpen(true)}
                className="lg:hidden"
              >
                <i className="bi bi-filter-right text-xl"></i>فیلتر محصولات
              </button>
              <button
                // className={`${isMenuFilterOpen ? "" : ""}`}
                onClick={toggleMenu}
                onMouseEnter={() => setIsOpen(true)}
              >
                <i className="bi bi-card-checklist pl-1"></i> ترتیب بر اساس :
              </button>
              <button className="text-main-color text-xs lg:text-sm lg:hidden">
                پرفروش ترین
              </button>

              <div className="hidden lg:flex gap-5">
                <button className="text-main-color text-xs lg:text-sm">
                  پرفروش ترین
                </button>
                <button className="text-xs lg:text-sm">جدید ترین</button>
                <button className="text-xs lg:text-sm">ارزان ترین</button>
                <button className="text-xs lg:text-sm">گران ترین</button>
                <button className="text-xs lg:text-sm">
                  بیشترین امتیاز همراه سل
                </button>
              </div>
              {isOpen && (
                <div className="bg-[#f7f7f7] h-44 w-44 absolute top-14 right-36 lg:hidden rounded-md p-5">
                  <div className="flex flex-col items-start gap-3">
                    <button className="text-main-color text-xs lg:text-sm">
                      پرفروش ترین
                    </button>
                    <button className="text-xs lg:text-sm">جدید ترین</button>
                    <button className="text-xs lg:text-sm">ارزان ترین</button>
                    <button className="text-xs lg:text-sm">گران ترین</button>
                    <button className="text-xs lg:text-sm">
                      بیشترین امتیاز همراه سل
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 col-span-12 place-items-center">
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
            <ProductCard className="bg-white" />
          </div>
        </div>
      </div>
    </Applayout>
  );
}

export default ProductPage;