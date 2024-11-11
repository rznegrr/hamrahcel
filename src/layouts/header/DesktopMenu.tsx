import React, { useState } from "react";
import Link from "next/link";

type Category = "mobile" | "accessories" | "smartwatch" | null;

function DesktopMenu() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<Category>("mobile");

  const handleMouseEnterMegaMenu = () => {
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveMegaMenu = () => {
    setIsMegaMenuOpen(false);
    setOpenCategory("mobile");
  };

  const handleCategoryHover = (category: Category) => {
    setOpenCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  return (
    <div className="relative px-10 hidden lg:flex z-20 rounded-md">
      <button
        onMouseEnter={handleMouseEnterMegaMenu}
        className="px-4 py-2 text-black flex text-md"
      >
        <i className="bi bi-list text-lg ml-1 text-gray"></i>
        مگا منو
      </button>

      <button className="px-4 py-2 text-black flex text-md">
        <i className="bi bi-tag text-lg ml-1 text-gray"></i>
        تخفیف‌ها و پیشنهادها
      </button>

      <button className="px-4 py-2 text-black flex text-md">
        <i className="bi bi-fire text-lg ml-1 text-gray"></i>
        پرفروش‌ترین‌ها
      </button>

      <button className="px-4 py-2 text-black flex text-md">
        <i className="bi bi-people text-lg ml-1 text-gray"></i>
        درباره ما
      </button>

      <Link href={"/articles"}>
        <button className="px-4 py-2 text-black flex text-md">
          <i className="bi bi-tablet text-lg ml-1 text-gray"></i>
          همراه مگ
        </button>
      </Link>

      <button className="text-black flex items-center text-md border-r h-5 my-auto px-4 py-2 mr-2">
        سوالی دارید؟
      </button>

      {isMegaMenuOpen && (
        <div
          className="absolute right-10 top-12 mt-2 w-[800px] bg-white shadow-lg rounded-md"
          onMouseLeave={handleMouseLeaveMegaMenu}
        >
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3 flex flex-col bg-sec-color">
              <div
                onMouseEnter={() => handleCategoryHover("mobile")}
                className={`cursor-pointer text-sm border-b border-white pr-3 py-3 ${
                  openCategory === "mobile" ? "text-main-color bg-white" : ""
                }`}
              >
                <i className="bi bi-phone text-base ml-1"></i>
                موبایل
              </div>
              <div
                onMouseEnter={() => handleCategoryHover("accessories")}
                className={`cursor-pointer text-sm border-b border-white pr-3 py-3 ${
                  openCategory === "accessories"
                    ? "text-main-color bg-white"
                    : ""
                }`}
              >
                <i className="bi bi-plug text-base ml-1"></i>
                لوازم جانبی
              </div>
              <div
                onMouseEnter={() => handleCategoryHover("smartwatch")}
                className={`cursor-pointer text-sm border-b border-white pr-3 py-3 ${
                  openCategory === "smartwatch"
                    ? "text-main-color bg-white"
                    : ""
                }`}
              >
                <i className="bi bi-watch text-base ml-1"></i>
                ساعت هوشمند
              </div>
            </div>

            {openCategory === "mobile" && (
              <div className="col-span-9 grid grid-cols-3 gap-10 mt-3">
                <div>
                  <h3 className="font-bold text-sm mb-2 border-r-2 pr-3 border-main-color">
                    موبایل
                  </h3>
                  <ul className="text-sm flex flex-col gap-2 subsets">
                    <li>
                      <Link href="#">اپل</Link>
                    </li>
                    <li>
                      <Link href="#">سامسونگ</Link>
                    </li>
                    <li>
                      <Link href="#">شیائومی</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {openCategory === "accessories" && (
              <div className="col-span-9 grid grid-cols-3 gap-10 mt-3">
                <div>
                  <h3 className="font-bold text-sm mb-2 border-r-2 pr-3 border-main-color">
                    لوازم جانبی
                  </h3>
                  <ul className="text-sm flex flex-col gap-2 subsets">
                    <li>
                      <Link href="#">کابل</Link>
                    </li>
                    <li>
                      <Link href="#">سیم شارژر</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {openCategory === "smartwatch" && (
              <div className="col-span-9 grid grid-cols-4 gap-10 my-3">
                <div>
                  <h3 className="font-bold text-sm mb-2 border-r-2 pr-3 border-main-color">
                    ساعت هوشمند
                  </h3>
                  <ul className="text-sm flex flex-col gap-2 subsets">
                    <li>
                      <Link href="#">اپل</Link>
                    </li>
                    <li>
                      <Link href="#">شیائومی</Link>
                    </li>
                    <li>
                      <Link href="#">سامسونگ</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2 border-r-2 pr-3 border-main-color">
                    ساعت هوشمند
                  </h3>
                  <ul className="text-sm flex flex-col gap-2 subsets">
                    <li>
                      <Link href="#">اپل</Link>
                    </li>
                    <li>
                      <Link href="#">شیائومی</Link>
                    </li>
                    <li>
                      <Link href="#">سامسونگ</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2 border-r-2 pr-3 border-main-color">
                    ساعت هوشمند
                  </h3>
                  <ul className="text-sm flex flex-col gap-2 subsets">
                    <li>
                      <Link href="#">اپل</Link>
                    </li>
                    <li>
                      <Link href="#">شیائومی</Link>
                    </li>
                    <li>
                      <Link href="#">سامسونگ</Link>
                    </li>
                    <li>
                      <Link href="#">سامسونگ</Link>
                    </li>
                    <li>
                      <Link href="#">سامسونگ</Link>
                    </li>
                    <li>
                      <Link href="#">سامسونگ</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DesktopMenu;
