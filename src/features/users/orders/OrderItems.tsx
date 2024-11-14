type OrdersItemProps = {
  date: string;
  title: string;
  images: string[];
  totalPrice: string;
};

function OrderItems({ date, title, images, totalPrice }: OrdersItemProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-4 border border-border-color rounded-md mb-4 bg-white shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center w-full overflow-hidden">
          <div className="mr-4">
            <h3 className="text-base xl:text-lg font-semibold">{title}</h3>
            <p className="text-gray text-sm">{date}</p>
            <p className="text-black mt-3 text-sm font-semibold">{totalPrice}</p>
          </div>
         
          <div className="flex gap-2 mt-5 md:mt-0 md:mr-8 overflow-x-auto overflow-y-hidden lg:w-[600px] lg:max-w-[700px] scrollbar-hide">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Order image ${index + 1}`}
                className="w-20 h-20 p-2 object-cover border border-border-color rounded flex-shrink-0"
              />
            ))}
          </div>
        </div>
        <button className="text-main-color text-xs md:text-sm font-semibold w-full md:w-32 flex items-center justify-end mt-5 md:mt-0">
          جزئیات سفارش<i className="bi bi-chevron-left text-xs mr-1"></i>
        </button>
      </div>
    </>
  );
}

export default OrderItems;
