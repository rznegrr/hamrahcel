import React from "react";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import DesktopMenu from "./DesktopMenu";

function Header() {
  return (
    <>
      <div className="hidden lg:block">
        <HeaderDesktop />
      </div>
      <div className="hidden lg:block sticky top-0 z-20">
        <div className="h-16 bg-sec-color flex items-center rounded-xl rounded-tl-none rounded-tr-none w-[95%] m-auto">
          <DesktopMenu />
        </div>
      </div>
      <div className="block lg:hidden">
        <HeaderMobile />
      </div>
    </>
  );
}

export default Header;
