import React from "react";
import { useAuth } from "@/context/authContext";

import Button from "@/ui/Button";

function LoginForm() {
  const { formIsOpen, setFormIsOpen } = useAuth();
  return (
    <>
      {formIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-90"></div>

          <div className="relative bg-white p-10 rounded-lg shadow-lg w-96 h-80 z-10">
            <h2 className="text-xl font-bold py-5 text-center">ورود به حساب کاربری</h2>
            <label className="block py-2">شماره تماس:</label>
            <input
              type="text"
              placeholder="09123456789"
              className="w-full p-2 border border-border-color rounded mb-4 focus:outline-none focus:border-main-color"
            />
            <Button
              className="bg-main-color text-white m-auto"
              buttonName="ارسال کد"
            />
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
