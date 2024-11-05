type CategoryItemProps = {
  image: string;
  title: string;
};

function CategoryItem({image, title}: CategoryItemProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={image}
        className="h-24 w-24 lg:h-28 lg:w-28 p-[3px] bg-gradient-to-r from-main-color via-[#f18334] to-[#e2b33c] rounded-full object-cover"
        alt={title}
      />
      <h4 className="mt-3 text-sm">{title}</h4>
    </div>
  );
}

export default CategoryItem;
