import React, { useState } from "react";
import Link from "next/link";
import MegaMenuList from "../megaMenu/MegaMenuList";

function DesktopNavigation() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const handleMouseEnterMegaMenu = () => {
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <div className="relative px-10 hidden lg:flex z-20 rounded-md">
      <Link href="/products">
        <button
          onMouseEnter={handleMouseEnterMegaMenu}
          className="px-4 py-2 text-black flex text-md"
        >
          <i className="bi bi-list text-lg ml-1 text-gray"></i>
          محصولات همراه سل
        </button>
      </Link>

      <button className="px-4 py-2 text-black flex text-md">
        <i className="bi bi-tag text-lg ml-1 text-gray"></i>
        تخفیف‌ها و پیشنهادها
      </button>

      <button className="px-4 py-2 text-black flex text-md">
        <i className="bi bi-fire text-lg ml-1 text-gray"></i>
        پرفروش‌ترین‌ها
      </button>

      {/* <Link href={"/articles"}>
        <button className="px-4 py-2 text-black flex text-md">
          <i className="bi bi-tablet text-lg ml-1 text-gray"></i>
          همراه مگ
        </button>
      </Link> */}

      <button className="text-black flex items-center text-md border-r h-5 my-auto px-4 py-2 mr-2">
        سوالی دارید؟
      </button>

      {isMegaMenuOpen && (
        <>
          {/* <div className="fixed top-[215px] bottom-0 right-0 left-0 bg-[#1c1c1ce1] opacity-50 "></div> */}

          <div
            className="absolute right-10 top-10 mt-2 w-[80vw] bg-white shadow-lg rounded-md overflow-hidden"
            onMouseLeave={handleMouseLeaveMegaMenu}
          >
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-3 flex flex-col bg-sec-color">
                <div className="text-main-color bg-white cursor-pointer text-base border-b border-white pr-3 py-3">
                  <i className="bi bi-phone text-lg font-semibold ml-1"></i>
                  موبایل
                </div>
              </div>
              <div className="col-span-9 gap-10 mt-3">
                <MegaMenuList className="grid grid-cols-6 gap-8"/>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DesktopNavigation;
