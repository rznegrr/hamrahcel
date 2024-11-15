import { useCartContext } from "@/context/CartContext";
import ShipmentInfo from "@/ui/ShipmentInfo";
import Link from "next/link";
import React from "react";

function ShopCartItem({ product }: any) {
  const { remove } = useCartContext();
  return (
    <>
      {/* shop cart item */}
      <div className="h-96 md:h-80 border border-border-color rounded-lg gap-x-5 p-4 mt-7 shadow-md relative">
        <div className="flex mt-2">
          <img src={product.image} className="h-32 md:w-32 rounded-xl" />
          <div className="mr-3 md:mr-8">
            <p className="text-sm md:text-base pt-3">{product.name}</p>

            <div className="flex gap-2 my-3 border border-border-color rounded-md rounded-tr-2xl p-2 w-28">
              <span className="h-5 w-5 bg-black text-black rounded-full">
                0
              </span>
              <p className="text-xs md:text-sm text-black">رنگ مشکی</p>
            </div>

            <ShipmentInfo className="gap-1" />
          </div>
        </div>

        <div className="flex justify-between items-center md:justify-start w-full gap-x-8 pt-5 px-5">
          {/* count and price */}
          <div className="flex items-center gap-x-4 border border-border-color px-2 py-1 rounded-md">
            <button className="text-base text-gray cursor-not-allowed font-black">
              <i className="bi bi-plus text-main-color"></i>
            </button>
            <p className="text-main-color">{product.quantity}</p>
            <button
              className="text-base text-gray cursor-pointer font-black"
              onClick={() => remove(product.id)}
            >
              <i className="bi bi-dash text-main-color"></i>
            </button>
          </div>

          <div>
            <p className="text-sm md:text-base text-info">
              {product.price}
              <span className="text-sm text-main-color pr-2">تومان</span>
            </p>
          </div>
        </div>

        <div className="absolute bottom-2 left-2 md:bottom-5 md:left-5">
          <Link
            href={`/products/${product.id}`}
            className="text-xs md:text-sm text-black hover:text-main-color transition-all ease-in-out duration-300"
          >
            مشاهده محصول <i className="bi bi-chevron-left text-xs"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShopCartItem;
