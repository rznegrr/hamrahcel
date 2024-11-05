import React from "react";

function SuggestedBlogItem() {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-12 mx-5">
      <div className="flex justify-between items-center h-24 my-4">
        <img
          src="/images/blogs/blog-1.jpg"
          className="h-20 w-24 rounded-md object-cover"
        />
        <p className="align-middle text-black leading-7 pr-3 line-clamp-3 text-sm">
          راهنمای انتخاب بهترین قهوه ساز خانگی برای خانه های مدرن و دارای سیستم
          آنلاین
        </p>
      </div>
    </div>
  );
}

export default SuggestedBlogItem;
