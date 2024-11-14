import React from "react";
import LikeItem from "./LikeItem";
import Link from "next/link";
import Button from "@/ui/Button";

function Likes() {
  const likes = [
    {
      id: 1,
      title: "سامسونگ گلکسی A35 رم 8 گیگابایت و ظرفیت 256 گیگابایت (پک ویتنام)",
      image: "/images/phone2.png",
      totalPrice: "20,389,000 تومان",
    },
    {
      id: 2,
      title: "سامسونگ گلکسی A35 رم 8 گیگابایت و ظرفیت 256 گیگابایت (پک ویتنام)",
      image: "/images/phone2.png",
      totalPrice: "20,389,000 تومان",
    },
    {
      id: 3,
      title: "سامسونگ گلکسی A35 رم 8 گیگابایت و ظرفیت 256  (پک ویتنام)",
      image: "/images/phone2.png",
      totalPrice: "20,389,000 تومان",
    },
    {
      id: 4,
      title: "سامسونگ گلکسی A35 رم 8 گیگابایت و ظرفیت 256  (پک ویتنام)",
      image: "/images/phone2.png",
      totalPrice: "20,389,000 تومان",
    },
    {
      id: 5,
      title: "سامسونگ گلکسی A35 رم 8 گیگابایت و ظرفیت 256  (پک ویتنام)",
      image: "/images/phone2.png",
      totalPrice: "20,389,000 تومان",
    },
  ];

  if (likes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-5 bg-white rounded-md">
      <p className="mb-5">محصولی در علاقه مندی های شما نیست.🙁</p>
      <Link href={"/products"}>
        <Button
          buttonName="مشاهده محصولات"
          className="bg-main-color text-white hover:text-main-color hover:bg-white transition ease-in duration-200"
        />
      </Link>
    </div>
    );
  } else {
    return (
      <div className="p-5 bg-white h-full rounded-md">
        <h2 className="text-xl font-bold mb-5">علاقه مندی ها</h2>
        <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {likes.map((like) => (
            <li>
              <LikeItem
                key={like.id}
                title={like.title}
                image={like.image}
                totalPrice={like.totalPrice}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Likes;
