type SidebarProps = {
  onButtonClick: (content: string) => void;
}

const SideBar = ({onButtonClick} : SidebarProps) => {
  return (
    <>
      <div className="col-span-3 h-fit w-full border border-border-color gap-6 rounded-md">
        <div className="flex flex-col items-start border-b border-border-color w-full p-6 account-bg rounded-tr-md rounded-tl-md">
          <p className="text-sm text-gray">سلام، خوش آمدید </p>
          <p className="text-base pt-1 text-main-color">نام کاربر</p>
        </div>
        <div className="flex flex-col items-start border-b border-border-color w-full py-5 gap-5 bg-white">
          <button
            className="flex items-center w-full text-right text-sm hover:text-main-color hover:border-r-4 pr-5 transition-all ease-in-out duration-200"
            onClick={() => onButtonClick("edit-account")}
          >
            <i className="bi bi-pencil-square ml-2 text-lg"></i>
            ویرایش اطلاعات
          </button>
          <button
            className="flex items-center w-full text-right text-sm hover:text-main-color hover:border-r-4 pr-5 transition-all ease-in-out duration-200"
            onClick={() => onButtonClick("orders")}
          >
            <i className="bi bi-clipboard2-check ml-2 text-lg"></i>
            سفارش ها
          </button>
          <button
            className="flex items-center w-full text-right text-sm hover:text-main-color hover:border-r-4 pr-5 transition-all ease-in-out duration-200"
            onClick={() => onButtonClick("address")}
          >
            <i className="bi bi-pin-map ml-2 text-lg"></i>آدرس ها
          </button>
          <button
            className="flex items-center w-full text-right text-sm hover:text-main-color hover:border-r-4 pr-5 transition-all ease-in-out duration-200"
            onClick={() => onButtonClick("likes")}
          >
            <i className="bi bi-heart ml-2 text-lg"></i>علاقه مندی ها
          </button>
          <div className="border-t border-border-color w-full pt-5">
            <button
              className="flex items-center w-full text-right text-sm hover:text-main-color hover:border-r-4 pr-5 transition-all ease-in-out duration-200"
              onClick={() => onButtonClick("exit")}
            >
              <i className="bi bi-box-arrow-right ml-2 text-lg"></i>
              خروج
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar