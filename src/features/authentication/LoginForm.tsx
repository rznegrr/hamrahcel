import React from "react";
import { useAuth } from "@/context/authContext";

import Button from "@/ui/Button";

function LoginForm() {
  const { formIsOpen, setFormIsOpen } = useAuth();
  return (
    <>
      {formIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-[#1c1c1ce1] opacity-50"></div>

          <div className="relative bg-white p-10 rounded-lg shadow-lg w-96 h-96 z-10">
            <h2 className="text-xl font-bold py-5 text-center">
              ورود یا ثبت نام
            </h2>
            <label className="block py-2">شماره همراه خود را وارد کنید :</label>
            <div className="flex flex-col justify-center items-center">
              <input
                type="text"
                placeholder="- - - - - - - 0912"
                className="w-64 my-4 p-2 bg-[#f9efeee9] border border-[#f9efeee9] rounded-md rounded-tr-2xl focus:outline-none focus:border-none placeholder:text-sm placeholder:text-left focus:text-left"
              />
              <button className="bg-main-color text-white m-auto w-64 py-2 rounded-md rounded-tr-2xl ">
                ارسال کد
              </button>
            </div>

            <p className="text-xs py-3 text-gray text-center border-t mt-6 border-gray">
              با ورود و یا ثبت نام در فروشگاه اینترنتی همراه سل، شما
              <span className="text-main-color">شرایط و قوانین</span> استفاده از
              تمام سرویس های سایت و قوانین حریم خصوصی آن را می‌پذیرید.
            </p>

            {/* close pop up button */}
            <button
              className="absolute top-5 left-5 text-gray-500 hover:text-gray-700"
              onClick={() => setFormIsOpen(false)}
            >
              <i className="bi bi-x-lg text-sm font-black"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginForm;
