import MiniShopCartSummary from "@/features/shopCart/MiniShopCartSummary";
import ShopCartItem from "@/features/shopCart/ShopCartItem";
import AppLayout from "@/layouts/AppLayout";
import Breadcrumb from "@/ui/BreadCrumb";
import HeadTitle from "@/ui/HeadTitle";
import React from "react";

function BasketPage() {
  return (
    <AppLayout>
      <HeadTitle title="سبد خرید" meta="سبد خرید همراه سل" />
      <Breadcrumb />
      <div className="grid grid-cols-12 gap-x-5 mb-20">
        {/* shop cart items */}
        <div className="col-span-12 lg:col-span-8">
          <ShopCartItem />
          <ShopCartItem />
          <ShopCartItem />
        </div>

        {/* shop cart summary */}
        <MiniShopCartSummary />
      </div>
    </AppLayout>
  );
}

export default BasketPage;
