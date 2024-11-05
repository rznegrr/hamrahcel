import React, { useState } from "react";

function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col md:flex-row mb-24 lg:mb-20 md:mt-48 justify-center items-center">
      <img src="/images/about-us.png" alt="About Us Image" className="h-72 w-full md:h-64 md:w-72 lg:w-full lg:h-80 2xl:w-96"/>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 px-5 mt-10">
          <p className="text-2xl lg:text-3xl font-black">درباره</p>
          <p className="text-main-color text-xl lg:text-2xl font-black">
            همراه سل
          </p>
        </div>

        <p
          className={`text-gray mt-5 px-3 md:px-10 leading-loose text-sm ${
            showMore ? "h-auto" : "h-20 overflow-hidden"
          } md:h-auto md:overflow-visible`}
        >
          «همراه‌سل» فعالیت خود را از سال 1399 بعنوان سامانه فروش سازمانی آغاز
          کرده است و پس از مدتی به عنوان سامانه فروش کالا به مصرف کننده نهایی
          حضور خود را در بازار تلفن همراه به ثبت رساند. همراه سل همواره در تلاش
          است تا کالای دیجیتال را با رقابتی ترین قیمت و بالاترین کیفیت به دست
          مصرف کننده نهایی برساند. این مجموعه با بهره گیری از دانش و تخصص و اتکا
          به تامین کنندگان اصلی بازار تلفن همراه و ابزارهای هوشمند ایران، سعی در
          ایجاد حس خوب در خریداران این دست از کالاها داشته و می‌کوشد تا نیازهای
          آنان را در لحظه برآورده کند. هدف همراه سل تبدیل شدن به یک همراه قابل
          اعتماد نزد مردم بزرگ ایران است.
        </p>

        <button
          className="text-main-color font-bold text-sm md:hidden mt-5"
          onClick={toggleShowMore}
        >
          {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
