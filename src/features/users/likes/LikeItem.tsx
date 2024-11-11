type LikeItemProps = {
  title: string;
  image: string;
  totalPrice: string;
};

function LikeItem({ title, image, totalPrice }: LikeItemProps) {
  return (
    <div className="flex flex-col border border-border-color rounded-md p-2 h-32 w-full relative">
      <button className="absolute top-2 left-2"><i className="bi bi-heart-fill text-lg text-main-color"></i></button>
      <div className="flex overflow-hidden items-start mt-3">
        <img src={image} className="w-20 h-20 p-2 object-cover flex-shrink-0" />
        <p className="text-xs font-semibold line-clamp-3 pr-2">{title}</p>
      </div>
      <p className="text-left text-sm">{totalPrice}</p>
    </div>
  );
}

export default LikeItem;
