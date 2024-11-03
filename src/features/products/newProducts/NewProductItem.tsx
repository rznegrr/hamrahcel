import ProductCard from "../ProductCard";

function NewProductItem() {
  return (
    <div className="flex gap-1 justify-center">
    <ProductCard className="bg-sec-color"/>

      {/* side product */}
      <div className="flex flex-col h-[290px] lg:h-[360px] gap-y-1">
        <div className="h-[320px] pt-10 px-4 w-16 bg-sec-color rounded-md shadow-xl">
          <div className="flex flex-col m-auto gap-y-3">
            <span className="h-7 w-7 bg-white text-white rounded-full">0</span>
            <span className="h-7 w-7 bg-white text-white rounded-full">0</span>
            <span className="h-7 w-7 bg-white text-white rounded-full">0</span>
          </div>
        </div>
        <button className="bg-main-color h-[56px] rounded-md shadow-xl">
          <i className="bi bi-basket-fill text-xl text-white"></i>
        </button>
      </div>
    </div>
  );
}

export default NewProductItem;
