import Link from "next/link";

type productCardProps = {
  className: string;
  product: any
};

function ProductCard({ className , product }: productCardProps) {
  return (
    <Link href={`/products/${product.id}`} className={`py-6 px-5 w-full bg-sec-color rounded-md rounded-tr-3xl shadow-xl ${className}`}>
      <img src={product.images.at(0)?.image_url} className="h-24 w-24 lg:h-40 lg:w-40 m-auto" alt=""/>
      <p className="text-xs mt-8 lg:text-sm border-b border-border-color min-h-[50px]">
        {product.name}
      </p>
      <div className="flex flex-col pt-4">
        <p className="text-black text-sm lg:text-base">
          {product.price} <span className="text-main-color pr-1">تومان</span>
        </p>
        {/* <del className="text-gray text-left text-xs">50,095,738</del> */}
      </div>
    </Link>
  );
}

export default ProductCard;
