function SuggestedProductItem() {
  return (
    <div
      className={`h-[290px] lg:h-[400px] flex flex-col justify-between w-52 m-auto lg:w-full border border-border-color bg-white rounded-sm relative`}
    >
      <span className="absolute bg-offerSale text-white px-3 py-1 rounded-tr-sm rounded-bl-xl">10%</span>
      <img
        src="/images/phone.webp"
        className="h-24 w-24 lg:h-40 lg:w-40 m-auto"
        alt=""
      />
      <div className="bg-main-bg-color px-10 pt-8 pb-12">
        <h3 className="text-xs lg:text-sm pb-6">
          سامسونگ گلکسی A35 رم 8 گیگابایت و ظرفیت 256 گیگابایت (پک ویتنام)
        </h3>
          <p className="text-black text-sm lg:text-base text-center">
            48,095,738 <span className="text-main-color pr-1">تومان</span>
          </p>
      </div>
    </div>
  );
}

export default SuggestedProductItem;
