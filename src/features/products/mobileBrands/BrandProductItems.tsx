import Link from "next/link";
import BrandingProductSlider from "./BrandProductSlider";

function BrandProductItems() {
  return (
    <div className="my-10 md:my-14">
      {/* section title */}
      <div className="flex flex-col justify-between mb-10 lg:mb-6 mx-5">
        <div className="flex items-center gap-2 justify-center mb-5">
          <p className="text-2xl lg:text-3xl font-black">خرید بر اساس</p>
          <p className="text-main-color text-xl lg:text-3xl font-black">برند</p>
        </div>
        <div className="flex gap-10 mt-2 justify-start items-center overflow-x-scroll overflow-y-hidden scrollbar-hide">
          <Link className="text-main-color hover:underline active:underline" href={''}>سامسونگ</Link>
          <Link href={''}>اپل</Link>
          <Link href={''}>شیائومی</Link>
          <Link href={''}>نوکیا</Link>
          <Link href={''}>هوآوی</Link>
          <Link href={''}>سونی</Link>
          <Link href={''}>ایسوس</Link>
          <Link href={''}>لنوو</Link>
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
