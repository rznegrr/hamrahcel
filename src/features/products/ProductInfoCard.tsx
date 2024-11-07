type ProductInfoProps = {
  title: string;
  titleStyle?: string;
  desc: string;
  descStyle?: string;
  className?: string;
  icon?: string;
};

function ProductInfoCard({ title, desc, className, icon, titleStyle, descStyle }: ProductInfoProps) {
  return (
    <div
      className={`p-3 bg-[#F5F5F5] rounded-md rounded-tl-2xl flex items-center gap-3 w-full ${className}`}
    >
      <div>
        <i className={`text-lg md:text-2xl ${icon}`}></i>
      </div>
      <div className="flex flex-col">
        <h3 className={`text-[#454545] ${titleStyle}`}>{title}</h3>
        <p className={`text-black font-bold ${descStyle}`}>{desc} </p>
      </div>
    </div>
  );
}

export default ProductInfoCard;
