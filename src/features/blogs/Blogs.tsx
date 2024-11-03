import React from "react";
import BlogItem from "./BlogItem";
import SectionTitle from "@/ui/SectionTitle";

function Blogs() {
  return (
    <>
    <SectionTitle title="آخرین" category="مقالات"/>
      <ul className="grid grid-cols-12 place-items-center gap-x-2 gap-y-24 mb-28">
        <li className="col-span-12 md:col-span-6 xl:col-span-3 relative">
          <BlogItem
            image="/images/blogs/blog-1.jpg"
            date="25 , خرداد , 1401"
            title="راهنمای خرید موبایل آبان ۱۴۰۴"
          />
        </li>
        <li className="col-span-12 md:col-span-6 xl:col-span-3 relative">
          <BlogItem
            image="/images/blogs/blog-3.jpg"
            date="25 , خرداد , 1401"
            title="راهنمای خرید موبایل آبان ۱۴۰۴"
          />
        </li>
        <li className="col-span-12 md:col-span-6 xl:col-span-3 relative">
          <BlogItem
            image="/images/blogs/blog-5.jpg"
            date="25 , خرداد , 1401"
            title="راهنمای خرید موبایل آبان ۱۴۰۴"
          />
        </li>
        <li className="col-span-12 md:col-span-6 xl:col-span-3 relative">
          <BlogItem
            image="/images/blogs/blog-1.jpg"
            date="25 , خرداد , 1401"
            title="راهنمای خرید موبایل آبان ۱۴۰۴"
          />
        </li>
      </ul>
    </>
  );
}

export default Blogs;
