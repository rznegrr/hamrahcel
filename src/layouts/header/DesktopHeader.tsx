import React, { useState } from "react";

import Button from "@/ui/Button";
import InputSearch from "@/ui/InputSearch";
import LoginForm from "@/features/authentication/LoginForm";

import { useAuth } from "@/context/AuthContext";
import ShopCartPopUpItem from "@/features/shopCart/ShopCartPopUpItem";
import Link from "next/link";
import { useCartContext } from "@/context/CartContext";

function DesktopHeader() {
  const { cart } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);
  const { setFormIsOpen } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const totalPrice = cart?.reduce(
    (total: any, product: any) => total + product.price * product.quantity,
    0
  );

  const isCartEmpty = cart?.length === 0;

  return (
    <>
      <div className="h-20 lg:h-28 xl:shadow-none relative">
        <div className="flex justify-between items-center w-[94%] m-auto">
          <img src="/hamrahcel.svg" className="h-28 w-36" alt="لوگو همراه سل" />
          <div className="w-[50%] xl:w-[60%]">
            <InputSearch />
          </div>
          <div className="flex gap-5">
            <button
              className="border text-sm rounded-md rounded-tr-xl border-border-color bg-main-color text-white flex justify-between px-6 py-1 shadow-md items-center"
              onClick={toggleMenu}
              onMouseEnter={() => setIsOpen(true)}
            >
              <i className="bi bi-basket-fill text-white text-md pl-2"></i>سبد
              خرید
              <span className="bg-white text-sm text-main-color mr-2 px-[5px] rounded-full">
                {cart?.length}
              </span>
            </button>
            <Button
              buttonName="ورود / ثبتنام"
              buttonIcon={"bi bi-person-fill text-main-color pl-2"}
              className="border border-border-color"
              onClick={() => setFormIsOpen(true)}
            />
          </div>
        </div>
      </div>
      <LoginForm />
      {isOpen && (
        <div
          className="absolute left-10 top-28 z-50 mt-2 w-96 bg-white shadow-lg rounded-md rounded-tr-2xl"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {isCartEmpty && (
            <div className="py-10 px-10">
              <p>سبد خرید شما خالی است.</p>
            </div>
          )}

          {!isCartEmpty && (
            <>
              <div className="overflow-y-auto max-h-72">
                {cart.map((product: any, index: number) => (
                  <ShopCartPopUpItem product={product} key={index} />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between p-5 border-t border-border-color">
                  <p>جمع کل سفارش :</p>
                  <p>
                    {totalPrice} <span className="text-sm mr-1">تومان</span>
                  </p>
                </div>
                <Link href={"/basket"}>
                  <Button
                    buttonName="ادامه فرایند خرید"
                    className="flex-row-reverse justify-between hover:bg-main-color hover:text-white transition-all ease-out duration-200 w-72 border border-main-color text-main-color m-auto mb-10"
                    buttonIcon="bi bi-arrow-left"
                  />
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default DesktopHeader;
