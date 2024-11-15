import { useCartContext } from "@/context/CartContext";
import MiniShopCartSummary from "@/features/shopCart/MiniShopCartSummary";
import ShopCartItem from "@/features/shopCart/ShopCartItem";
import AppLayout from "@/layouts/AppLayout";
import Breadcrumb from "@/ui/BreadCrumb";
import HeadTitle from "@/ui/HeadTitle";
import React from "react";

function BasketPage() {
  const { cart } = useCartContext();

  const isCartEmpty = cart?.length === 0

  return (
    <AppLayout>
      <HeadTitle title="سبد خرید" meta="سبد خرید همراه سل" />
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-x-5 mb-20">
        {isCartEmpty && (
          <div className="col-span-12 min-h-44">
            <p className="pt-10">سبد خرید شما خالی است.</p>
          </div>
        )}
        {/* shop cart items */}
        {!isCartEmpty && (
          <>
            <div className="col-span-12 lg:col-span-8">
              {cart?.map((product) => (
                <ShopCartItem product={product} />
              ))}
            </div>

            <MiniShopCartSummary
              href="/basket/shipping"
              buttonTitle="ادامه فرآیند خرید"
            />
          </>
        )}
      </div>
    </AppLayout>
  );
}

export default BasketPage;
