import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "@/ui/Button";

function EditProfile({ user }: any) {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: user ,
  });

  // const onSubmit: SubmitHandler = (data) => {
  //   console.log("Form Data:", data);
    // fetch('/api/submit', { method: 'POST', body: JSON.stringify(data) })
  // };

  return (
    <div className="p-5 flex flex-col items-start bg-white rounded-md w-100">
      <h2 className="text-xl font-bold mb-10">ویرایش اطلاعات</h2>
      <div className="w-[95%] lg:w-[60%] px-3">
        <form className="w-full">
          {/* user name */}

          {/* full name */}
          <div className="flex items-center mb-4 border-b border-border-color pb-3">
            <label className="text-gray text-xs md:text-sm mb-3 w-60">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              {...register("fullname")}
              className="border border-border-color p-2 mb-2 rounded w-96 text-sm"
            />
          </div>
          <div className="flex items-center mb-4 border-b border-border-color pb-3">
            <label className="text-gray text-xs md:text-sm mb-3 w-60">کد ملی</label>
              <input
                type="text"
                {...register("username", { required: "کد ملی الزامی است" })}
                className="border border-border-color p-2 mb-2 rounded w-96 text-sm"
              />
          </div>

          {/* email */}
          <div className="flex items-center mb-4 border-b border-border-color pb-3">
            <label className="text-gray text-xs md:text-sm mb-3 w-60">ایمیل</label>
            <input
              type="email"
              {...register("email", {})}
              className="border border-border-color p-2 mb-2 rounded w-96 text-sm"
            />
          </div>

          {/* phone number */}
          <div className="flex items-center mb-4">
            <label className="text-gray text-xs md:text-sm mb-3 w-60">شماره تماس</label>
            <input
              disabled
              type="tel"
              {...register("phone_number", {})}
              className="border border-border-color p-2 mb-2 rounded w-96 text-sm"
            />
          </div>

          <Button
            buttonName="ذخیره تغییرات"
            className="bg-main-color text-white mt-10"
          />
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
