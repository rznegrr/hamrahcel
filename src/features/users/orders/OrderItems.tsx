type OrdersItemProps = {
  date: string;
  title: string;
  images: string[];
  totalPrice: string;
};

function OrderItems({ date, title, images, totalPrice }: OrdersItemProps) {
  return (
    <>
      <div className="flex justify-between p-4 border border-border-color rounded-md mb-4 bg-white shadow-sm">
        <div className="flex items-center w-full overflow-hidden">
          <div className="mr-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray text-sm">{date}</p>
            <p className="text-black mt-3 text-sm font-semibold">{totalPrice}</p>
          </div>
         
          <div className="flex gap-2 mr-8 overflow-x-auto overflow-y-hidden w-[600px] max-w-[700px] scrollbar-hide">
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
        <button className="text-main-color text-sm font-semibold w-32">
          جزئیات سفارش<i className="bi bi-chevron-left text-xs mr-1"></i>
        </button>
      </div>
    </>
  );
}

export default OrderItems;
