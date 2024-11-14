import React from "react";

import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import DesktopMenu from "./DesktopNavigation";

function Header() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
      <div className="hidden lg:block sticky top-0 z-20">
        <div className="h-16 bg-sec-color flex items-center rounded-xl rounded-tl-none rounded-tr-none w-[95%] m-auto">
          <DesktopMenu />
        </div>
      </div>
      <div className="block lg:hidden">
        <MobileHeader />
      </div>
    </>
  );
}

export default Header;
