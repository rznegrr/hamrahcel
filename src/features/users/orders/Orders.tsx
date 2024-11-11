import Button from "@/ui/Button";
import Link from "next/link";
import OrderItems from "./OrderItems";

function Orders() {
  const orders = [
    { 
      id: 1,
      title: "HMC-3085500367",
      date: "9 تیر 1403",
      images: ["/images/phone2.png", "/images/phone3.png"],
      totalPrice: "20,389,000 تومان",
    },
    {
      id: 2,
      title: "HMC-3085500367",
      date: "9 تیر 1403",
      images: ["/images/phone2.png", "/images/phone3.png"],
      totalPrice: "20,389,000 تومان",
    },
    {
      id: 3,
      title: "HMC-3085500367",
      date: "9 تیر 1403",
      images: ["/images/phone2.png", "/images/phone3.png"],
      totalPrice: "20,389,000 تومان",
    },
  ];

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-5 bg-white rounded-md">
        <p className="mb-5">سفارشی برای نمایش وجود ندارد.🙁</p>
        <Link href={"/products"}>
          <Button
            buttonName="ثبت سفارش"
            className="bg-main-color text-white hover:text-main-color hover:bg-white transition ease-in duration-200"
          />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="h-fit overfrow-hidden p-5 bg-white rounded-md">
        <h2 className="text-xl font-bold mb-5">سفارش ها</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="mb-2">
              <OrderItems
                date={order.date}
                title={order.title}
                totalPrice={order.totalPrice}
                images={order.images}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Orders;
