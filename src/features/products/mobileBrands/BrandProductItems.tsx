import BrandingProductSlider from "./BrandProductSlider";

function BrandProductItems() {
  return (
    <div className="my-10 md:my-14">
      {/* section title */}
      <div className="flex flex-col lg:flex-row justify-between mb-10 lg:mb-6">
        <div className="flex items-center gap-2 justify-center mb-5">
          <p className="text-2xl lg:text-3xl font-black">خرید بر اساس</p>
          <p className="text-main-color text-xl lg:text-3xl font-black">برند</p>
        </div>
        <div className="flex gap-10 justify-start items-center overflow-x-scroll overflow-y-hidden scrollbar-hide">
          <a className="text-main-color">سامسونگ</a>
          <a>اپل</a>
          <a>شیائومی</a>
          <a>نوکیا</a>
          <a>هوآوی</a>
          <a>سونی</a>
          <a>ایسوس</a>
          <a>لنوو</a>
        </div>
      </div>

      {/* section slider */}
      <div className="mx-auto">
       <BrandingProductSlider/>
      </div>
    </div>
  );
}

export default BrandProductItems;
