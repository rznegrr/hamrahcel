import { Switch } from "@mui/material";
import React, { useState } from "react";

type Category = string | [];

type FilteredProductSideBarProps = {
  onOpen: boolean;
  onClose: () => void;
};

function FilteredProductSideBar({
  onClose,
  onOpen,
}: FilteredProductSideBarProps) {
  const [openCategories, setOpenCategories] = useState<Category[]>([]);

  const toggleCategory = (category: Category) => {
    if (openCategories.includes(category)) {
      setOpenCategories(openCategories.filter((item) => item !== category));
    } else {
      setOpenCategories([...openCategories, category]);
    }
  };
  return (
    <div
      className={`col-span-3 bg-white border border-border-color rounded-md rounded-tl-2xl fixed top-[65px] right-0 w-full lg:sticky lg:block h-fit overflow-auto scrollbar-hide z-10 ${
        onOpen ? "block" : "hidden"
      }`}
    >
      {/* exit button */}
      <button
        className="absolute top-5 left-5 lg:hidden"
        onClick={onClose}
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
          محدوده قیمت{" "}
          <i
            className={`bi ${
              openCategories.includes("price-range-input")
                ? "bi-chevron-down"
                : "bi-chevron-left"
            }`}
          ></i>
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
          <i
            className={`bi ${
              openCategories.includes("categories")
                ? "bi-chevron-down"
                : "bi-chevron-left"
            }`}
          ></i>
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
              <label htmlFor="smart-watch" className="text-sm text-[#3b3b3b]">
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
          برند ها{" "}
          <i
            className={`bi ${
              openCategories.includes("brands")
                ? "bi-chevron-down"
                : "bi-chevron-left"
            }`}
          ></i>
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
          رم{" "}
          <i
            className={`bi ${
              openCategories.includes("ram")
                ? "bi-chevron-down"
                : "bi-chevron-left"
            }`}
          ></i>
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
  );
}

export default FilteredProductSideBar;
