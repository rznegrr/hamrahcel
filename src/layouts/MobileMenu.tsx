function MobileMenu() {
  return (
    <div className="grid grid-cols-12 h-16 bg-white shadow-2xl lg:hidden 
      border-t border-border-color fixed bottom-0 left-0 w-full z-50 ">
      <div className="col-span-3 flex flex-col justify-center items-center">
        <button>
          <i className="bi bi-house text-lg"></i>
        </button>
        <p className="text-xs">خانه</p>
      </div>
      <div className="col-span-3 flex flex-col justify-center items-center">
        <button>
          <i className="bi bi-grid text-lg"></i>
        </button>
        <p className="text-xs">دسته بندی</p>
      </div>
      <div className="col-span-3 flex flex-col justify-center items-center">
        <button>
          <i className="bi bi-cart text-lg"></i>
        </button>
        <p className="text-xs">سبد خرید</p>
      </div>
      <div className="col-span-3 flex flex-col justify-center items-center">
        <button>
          <i className="bi bi-person text-lg"></i>
        </button>
        <p className="text-xs">حساب کاربری</p>
      </div>
    </div>
  );
}

export default MobileMenu;
