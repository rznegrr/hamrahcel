// AddressFormModal.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type AddressFormInputs = {
  firstName: string;
  lastName: string;
  province: string;
  city: string;
  email?: string;
  postalCode?: string;
  address: string;
  phoneNumber: string;
};

type AddressFormModalProps = {
  onClose: () => void;
  onSubmit: (data: AddressFormInputs) => void;
};

function AddressFormModal({ onClose, onSubmit }: AddressFormModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormInputs>();

  const submitHandler: SubmitHandler<AddressFormInputs> = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#1c1c1ce1] opacity-50 z-40"></div>
      <div className="fixed inset-0 z-50 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-md w-[60%] overflow-y-scroll h-[90vh]">
          <h2 className="text-lg font-semibold mb-4">افزودن آدرس جدید</h2>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="grid grid-cols-2 gap-5"
          >
            {/* first name */}
            <div className="mb-3">
              <label className="text-sm text-black">نام</label>
              <input
                {...register("firstName", {
                  required: "وارد کردن نام الزامی است",
                })}
                className="w-full p-2 border border-border-color rounded mt-2 "
              />
              {errors.firstName && (
                <p className="text-main-color text-xs">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* last name */}
            <div className="mb-3">
              <label className="text-sm text-black">نام خانوادگی</label>
              <input
                {...register("lastName", {
                  required: "وارد کردن نام خانوادگی الزامی است",
                })}
                className="w-full p-2 border border-border-color rounded mt-2 "
              />
              {errors.lastName && (
                <p className="text-main-color text-xs">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* province */}
            <div className="mb-3">
              <label className="text-sm text-black">استان</label>
              <input
                {...register("province", {
                  required: "وارد کردن استان الزامی است",
                })}
                className="w-full p-2 border border-border-color rounded mt-2 "
              />
              {errors.province && (
                <p className="text-main-color text-xs">
                  {errors.province.message}
                </p>
              )}
            </div>

            {/* city */}
            <div className="mb-3">
              <label className="text-sm text-black">شهر</label>
              <input
                {...register("city", { required: "وارد کردن شهر الزامی است" })}
                className="w-full p-2 border border-border-color rounded mt-2"
              />
              {errors.city && (
                <p className="text-main-color text-xs">{errors.city.message}</p>
              )}
            </div>

            {/* email */}
            <div className="mb-3">
              <label className="text-sm text-black">ایمیل</label>
              <input
                type="email"
                {...register("email")}
                className="w-full p-2 border border-border-color rounded mt-2"
              />
            </div>

            {/* phone number */}
            <div className="mb-3">
              <label className="text-sm text-black">شماره تماس</label>
              <input
                type="phoneNumber"
                {...register("phoneNumber", {
                  required: "وارد کردن شماره تماس الزامی است",
                })}
                className="w-full p-2 border border-border-color rounded mt-2"
              />
              {errors.phoneNumber && (
                <p className="text-main-color text-xs">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* postal code */}
            <div className="mb-3">
              <label className="text-sm text-black">کد پستی</label>
              <input
                {...register("postalCode")}
                className="w-full p-2 border border-border-color rounded mt-2 "
              />
            </div>

            {/* address */}
            <div className="mb-3 col-span-2">
              <label className="text-sm text-black">آدرس کامل</label>
              <textarea
                {...register("address", {
                  required: "وارد کردن آدرس الزامی است",
                })}
                className="w-full p-2 border border-border-color rounded mt-2 resize-none h-28"
              />
              {errors.address && (
                <p className="text-main-color text-xs">{errors.address.message}</p>
              )}
            </div>

            <div className="flex gap-5">
              <button type="submit" className="bg-main-color text-white px-7 py-2 rounded-md text-sm">ثبت آدرس</button>
              
              <button
                type="button"
                onClick={onClose}
                className="text-black border border-main-color px-7 py-2 rounded ml-3 text-sm"
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddressFormModal;
