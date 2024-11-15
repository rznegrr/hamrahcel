import MiniShopCartSummary from "@/features/shopCart/MiniShopCartSummary";
import AddressList from "@/features/users/address/AddressList";
import AppLayout from "@/layouts/AppLayout";
import HeadTitle from "@/ui/HeadTitle";

function Shipping() {
  return (
    <AppLayout>
      <HeadTitle
        title="همراه سل | اطلاعات ارسال"
        meta="اطلاعات ارسال همراه سل"
      />
      <div className="grid grid-cols-12">
        <div className="col-span-8 rounded-xl m-5 border border-border-color">
          <AddressList />
        </div>
        <MiniShopCartSummary href="/basket/payment" buttonTitle="انتخاب درگاه پرداخت"/>
      </div>
    </AppLayout>
  );
}

export default Shipping;
