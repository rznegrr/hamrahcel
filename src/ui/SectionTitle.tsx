import React from "react";
import Button from "./Button";

type SectionTitleProps = {
  title: string;
  category: string;
};

function SectionTitle({ title, category }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-between gap-2 py-10 px-5">
      <div className="flex items-center gap-2">
        <p className="text-2xl lg:text-3xl font-black">{title}</p>
        <p className="text-main-color text-xl lg:text-2xl font-black">
          {category}
        </p>
      </div>
      <Button
        className="text-main-color shadow-none border flex-row-reverse gap-2"
        buttonName="مشاهده همه"
        buttonIcon="bi bi-chevron-left text-sm text-main-color pt-1"
      />
    </div>
  );
}

export default SectionTitle;
