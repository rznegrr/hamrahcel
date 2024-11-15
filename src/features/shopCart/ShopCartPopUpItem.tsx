function ShopCartPopUpItem({product}: any) {
  return (
    <>
      <div className="flex gap-x-3 items-start px-5 py-3">
        <img src={product.image} className="h-24 w-24" />
        <div className="flex flex-col pr-2 pt-2">
          <p className="text-sm text-gray">
           {product.name}
          </p>
          <div className="flex gap-2 my-3 border border-border-color rounded-md rounded-tr-2xl p-2 w-28">
            <span className="h-5 w-5 bg-black text-black rounded-full">0</span>
            <p className="text-xs md:text-sm text-black">رنگ مشکی</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-5 my-5">
        <div className="flex items-center gap-x-4 border border-border-color px-2 py-1 rounded-md">
          <button className="text-base text-gray cursor-not-allowed font-black">
            <i className="bi bi-plus text-main-color"></i>
          </button>
          <p className="text-main-color">{product.quantity}</p>
          <button className="text-base text-gray cursor-pointer font-black">
            <i className="bi bi-dash text-main-color"></i>
          </button>
        </div>
        <p className="text-sm md:text-base text-info">
          {product.price}
          <span className="text-sm text-main-color pr-2">تومان</span>
        </p>
      </div>
    </>
  );
}

export default ShopCartPopUpItem;
