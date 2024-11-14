function MiniShopCartSummary() {
  return (
      <div className="col-span-12 lg:col-span-4 border border-border-color p-4 md:p-8 h-80 rounded-lg flex flex-col mt-7 shadow-md lg:sticky lg:top-20 mb-10 bg-white">
        {/* <p className="text-black py-4 text-lg md:text-xl">جمع کل سبد خرید</p> */}
        <div className="flex justify-between py-4">
          <p>قیمت کالا</p>
          <p className="text-main-color">
            48,095,738 <span className="text-sm mr-1">تومان</span>
          </p>
        </div>
        <div className="flex justify-between border-b border-border-color py-5">
          <p>حمل و نقل</p>
          <p className="text-gray">محاسبه حمل و نقل</p>
        </div>
        <div className="flex justify-between py-5">
          <p>مجموع</p>
          <p className="text-gray-700 text-lg">
            48,095,738
            <span className="text-sm mr-1">تومان</span>
          </p>
        </div>
        <button className="mt-5 mb-5 py-2 rounded-md rounded-tr-2xl text-white bg-main-color text-sm md:text-base w-60 md:w-80 lg:w-60 m-auto">
          ادامه جهت تسویه حساب
        </button>
      </div>
  );
}

export default MiniShopCartSummary;
