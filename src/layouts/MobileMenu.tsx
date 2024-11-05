import { useAuth } from "@/context/authContext";
import LoginForm from "@/features/authentication/LoginForm";
import Link from "next/link";

function MobileMenu() {
  const { setFormIsOpen } = useAuth();

  return (
    <>
      <div
        className="grid grid-cols-12 h-16 bg-white shadow-2xl lg:hidden 
      border-t border-border-color fixed bottom-0 left-0 w-full z-50 place-items-center"
      >
        <div className="col-span-3">
          <Link
            className="text-xs flex flex-col justify-center items-center"
            href={"/"}
          >
            <button>
              <i className="bi bi-house text-lg"></i>
            </button>
            خانه
          </Link>
        </div>
        <div className="col-span-3">
          <Link
            className="text-xs flex flex-col justify-center items-center"
            href={""}
          >
            <button>
              <i className="bi bi-grid text-lg"></i>
            </button>
            دسته بندی
          </Link>
        </div>
        <div className="col-span-3">
          <Link
            className="text-xs flex flex-col justify-center items-center"
            href={"/shopcart"}
          >
            <button>
              <i className="bi bi-cart text-lg"></i>
            </button>
            سبد خرید
          </Link>
        </div>
        <div className="col-span-3 flex flex-col justify-center items-center">
          <button onClick={() => setFormIsOpen(true)}>
            <i className="bi bi-person text-lg"></i>
          </button>
          <p className="text-xs">
            حساب کاربری
          </p>
        </div>
      </div>
      <LoginForm />
    </>
  );
}

export default MobileMenu;
