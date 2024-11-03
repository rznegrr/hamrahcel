type productCardProps = {
  className: string;
};

function ProductCard({ className }: productCardProps) {
  return (
    <div className={`h-[290px] lg:h-[360px] py-6 px-5 max-w-48 lg:max-w-60 bg-sec-color rounded-md rounded-tr-3xl shadow-xl ${className}`}>
      <img src="/images/phone.webp" className="h-24 w-24 lg:h-40 lg:w-40 m-auto" alt=""/>
      <h3 className="text-xs lg:text-sm py-6 border-b border-border-color">
        سامسونگ گلکسی A35 رم 8 گیگابایت و ظرفیت 256 گیگابایت (پک ویتنام)
      </h3>
      <div className="flex flex-col pt-4">
        <p className="text-black text-sm lg:text-base">
          48,095,738 <span className="text-main-color pr-1">تومان</span>
        </p>
        <del className="text-gray text-left text-xs">50,095,738</del>
      </div>
    </div>
  );
}

export default ProductCard;
