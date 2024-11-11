import React from "react";
import InputSearch from "@/ui/InputSearch";

function MobileHeader() {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="h-20 shadow-lg flex justify-between items-center px-4 bg-white mb-6">
        <img src="/hamrahcel.svg" className="h-20 w-28" alt="لوگو همراه سل" />
        <div className="w-[60%]">
          <InputSearch />
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
