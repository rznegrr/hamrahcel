import OfferProductsSlider from "./OfferProductsSlider";
import Button from "@/ui/Button";

function OfferProducts() {
  return (
    <div className="h-[400px] bg-main-color grid grid-cols-12 rounded-md lg:mb-10 content-center lg:pr-5">
      <div className="col-span-12 lg:col-span-2 flex lg:flex-col justify-between items-center py-5 px-6">
        <div className="flex flex-row-reverse lg:flex-col items-center gap-1 lg:gap-10">
          <h1 className="text-white text-md lg:text-4xl text-center leading-normal">
            پیشنهاد های شگفت انگیز
          </h1>
          <i className="bi bi-tags text-xl lg:text-5xl text-white"></i>
          {/* <img src="/images/sale-price.gif" className="h-28 w-28"/> */}
        </div>
        <Button
          className="text-main-color bg-sec-color flex-row-reverse gap-2 text-xs lg:text-base"
          buttonName="مشاهده همه"
          buttonIcon="bi bi-chevron-left text-sm text-main-color pt-1"
        />
      </div>
      <div className="col-span-12 lg:col-span-10 flex justify-center">
        <OfferProductsSlider />
      </div>
    </div>
  );
}

export default OfferProducts;
