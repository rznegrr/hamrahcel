import MobileHeader from "@/layouts/header/MobileHeader";
import MegaMenuList from "@/layouts/megaMenu/MegaMenuList";
import MobileNavigation from "@/layouts/MobileNavigation";

function MobileCategory() {
  return (
    <>
      <div className="h-10 bg-main-color text-white text-center pt-1">
        همراه سل، همراه همیشگی شما...
      </div>
      <MobileHeader />
      <div className="grid grid-cols-12 gap-2 mb-5">
        <div className="col-span-3 bg-sec-color">
          <div className="text-main-color bg-white cursor-pointer text-base border-b border-white pr-3 py-3">
            <i className="bi bi-phone text-lg font-semibold ml-1"></i>
            موبایل
          </div>
        </div>
        <div className="col-span-9 py-5">
          <MegaMenuList className="grid grid-cols-3 gap-5" />
        </div>
      </div>
      <MobileNavigation/>
    </>
  );
}

export default MobileCategory;
