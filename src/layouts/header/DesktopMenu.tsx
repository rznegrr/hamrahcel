import React, { useState } from "react";
import Link from "next/link";

function DesktopMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative px-10 hidden lg:flex z-20 ">
      <button
        onClick={toggleMenu}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="px-4 py-2 text-black flex text-md"
      >
        <i className="bi bi-list text-lg ml-1 text-gray"></i>
        مگا منو
      </button>

      <button className="px-4 py-2 text-black flex text-md">
        <i className="bi bi-tag text-lg ml-1 text-gray"></i>
        تخفیف ها و پیشنهادها
      </button>

      <button className="px-4 py-2 text-black flex text-md">
        <i className="bi bi-fire text-lg ml-1 text-gray"></i>
        پرفروش ترین ها
      </button>

      <button className="px-4 py-2 text-black flex text-md">
        <i className="bi bi-people text-lg ml-1 text-gray"></i>
        درباره ما
      </button>

      <button className="px-4 py-2 text-black flex text-md">
        <i className="bi bi-tablet text-lg ml-1 text-gray"></i>
        مگا منو
      </button>

      <button className=" text-black flex items-center text-md border-r h-5 my-auto px-4 py-2 mr-2">سوالی دارید؟</button>


      {isOpen && (
        <div
          className="absolute right-10 top-12 mt-2 w-[800px] bg-white shadow-lg rounded-xl"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="grid grid-cols-3 gap-10 p-6">
            <div>
              <h3 className="font-bold text-lg mb-2">موبایل</h3>
              <ul>
                <li>
                  <Link href="#">اپل</Link>
                </li>
                <li>
                  <Link href="#">ال جی</Link>
                </li>
                <li>
                  <Link href="#">شیائومی</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">ساعت هوشمند</h3>
              <ul>
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
              <h3 className="font-bold text-lg mb-2">نمایشگر</h3>
              <ul>
                <li>
                  <Link href="#">اپل</Link>
                </li>
                <li>
                  <Link href="#">ال جی</Link>
                </li>
                <li>
                  <Link href="#">سامسونگ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DesktopMenu;
