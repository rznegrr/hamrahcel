import Button from "@/ui/Button";
import React from "react";

type BlogItemProps = {
  image : string
  date: string
  title: string
}

function BlogItem({image, date, title}: BlogItemProps) {  
  return (
    <>
      <div>
        <img
          src={image}
          className="h-48 w-60 md:w-72 md:h-56 rounded-2xl shadow-xl"
          alt="blogs"
        />
      </div>
      <div className="absolute top-24 right-6 md:top-32 xl:top-32 bg-white shadow-md w-48 md:w-60 md:h-46 p-3 md:p-5 rounded-xl overflow-hidden transform transition-transform duration-300 ease-in-out translate-y-0 hover:-translate-y-16">
        <div className="flex flex-col">
          <p className="text-2xs text-gray pb-2 text-xs">{date}</p>
          <p className="text-xs md:text-[13px] truncate text-main-color">{title}</p>
          <p className="text-black text-sm line-clamp-1 md:line-clamp-2 pt-4 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ut nisi vel ullam, molestiae animi mollitia exercitationem laboriosam nemo amet ad, magnam, ipsam doloribus quo debitis alias corporis hic. Ducimus?</p>
          <Button buttonName="بیشتر بخوانیم" buttonIcon="bi bi-chevron-left text-sm text-main-color" className="flex-row-reverse border border-main-color w-32"/>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
