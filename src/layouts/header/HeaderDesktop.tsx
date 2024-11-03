import React from "react";

import Button from "@/ui/Button";
import InputSearch from "@/ui/InputSearch";
import DesktopMenu from "./DesktopMenu";
import { useAuth } from "@/context/authContext";
import LoginForm from "@/features/authentication/LoginForm";
function HeaderDesktop() {
  const { setFormIsOpen } = useAuth()

  return (
    <>
      <div className="h-20 lg:h-28 xl:shadow-none">
        <div className="flex justify-between items-center w-[94%] m-auto">
          <img src="/hamrahcel.svg" className="h-28 w-36" alt="لوگو همراه سل" />
          <div className="w-[50%] xl:w-[60%]">
            <InputSearch />
          </div>
          <div className="flex gap-5">
            <button className="border text-sm rounded-md rounded-tr-xl border-border-color bg-main-color text-white flex justify-between px-6 py-1 shadow-md items-center">
              <i className="bi bi-basket-fill text-white text-md pl-2"></i>سبد
              خرید
              <span className="bg-white text-sm text-main-color mr-2 px-[5px] rounded-full">
                0
              </span>
            </button>
            <Button
              buttonName="ورود / ثبتنام"
              buttonIcon={"bi bi-person-fill text-main-color pl-2"}
              className="border border-border-color"
              onClick={()=>setFormIsOpen(true)}
            />
          </div>
        </div>
      </div>
      <LoginForm/>
    </>
  );
}

export default HeaderDesktop;
