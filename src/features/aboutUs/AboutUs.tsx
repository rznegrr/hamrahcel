import React, { useState } from "react";

function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col lg:flex-row mb-24 lg:mb-0 md:mt-48">
      <img src="/images/about-us.png" alt="About Us Image" />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <p className="text-2xl lg:text-3xl font-black">درباره</p>
          <p className="text-main-color text-xl lg:text-2xl font-black">
            همراه سل
          </p>
        </div>
        
        {!showMore && (
          <p className="text-gray mt-5 leading-loose block lg:hidden">
            با بیش از سی سال سابقه خدمت به مشتریان در زمینه فروش ابزارآلات صنعتی و
            کارگاهی را دارا می باشد...
          </p>
        )}
        
        
        <p className={`text-gray mt-5 leading-loose ${showMore ? "block" : "hidden"} lg:block`}>
          با بیش از سی سال سابقه خدمت به مشتریان در زمینه فروش ابزارآلات صنعتی و
          کارگاهی را دارا می باشد و با گردهم آوردن متخصصان این عرصه بالغ بر ده
          سال است که برند را به صورت تخصصی در زمینه ابزار آلات عرضه کرده است.
          همچنین برای ارائه هرچه تمام تر فعالیت خود از سال فروشگاه اینترنتی
          ابزار را راه اندازی نموده است. به مدیریت محمدرضا شروع به فعالیت کرده و
          همچنان با سرعت هرچه تمام تر در حال به روز رسانی فعالیت های خود و ارائه
          انواع خدمات به مشتریان گرامی در سراسر ایران به صورت حضوری و آنلاین می
          باشد را به صورت تخصصی در زمینه ابزار آلات عرضه کرده است. همچنین برای
          ارائه هرچه تمام تر فعالیت خود از سال فروشگاه اینترنتی ابزار را راه
          اندازی نموده است. ابزار محسن به مدیریت محمدرضا شروع به فعالیت کرده و
          همچنان با سرعت هرچه تمام تر در حال به روز رسانی فعالیت های خود و ارائه
          انواع خدمات به مشتریان گرامی در سراسر ایران به صورت حضوری و آنلاین می
          باشد.
        </p>
        

        <button
          className="mt-3 text-main-color font-bold lg:hidden"
          onClick={toggleShowMore}
        >
          {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
