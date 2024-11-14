import Link from "next/link";
import mobileCategory from "../../data/category.json";

type Props = {
  className?:string
};

function MegaMenuList({className}: Props) {
  return (
    <div>
      <Link href={"/products"}>
        <h3 className="font-bold text-sm mb-2 border-r-2 pr-3 border-main-color">
          مشاهده همه
        </h3>
      </Link>
      <div className={`${className} pt-7 pb-10`}>
        {mobileCategory.category.brands.map((brand) => (
          <div
            key={brand.title}
            className="flex flex-col items-center justify-center gap-2"
          >
            <img
              src={brand.image}
              alt={brand.title}
              className="h-14 w-14 rounded-full border border-border-color p-1 cursor-pointer"
            />
            <p className="text-xs cursor-pointer">{brand.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MegaMenuList;
