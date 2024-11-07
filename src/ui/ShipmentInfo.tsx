type ClassNameProps = {
  className?: string;
}

function ShipmentInfo({ className }: ClassNameProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <button className="flex items-center gap-2 text-sm text-black">
        <i className="bi bi-shield-check text-lg text-black"></i>
        گارانتی ۱۸ ماهه
      </button>
      <button className="flex items-center gap-2 text-sm text-black">
        <i className="bi bi-shop-window text-lg text-black"></i>
        موجود در انبار
      </button>
      <button className="flex items-center gap-2 text-sm text-black">
        <i className="bi bi-truck text-lg text-black"></i>
        ارسال با ماهکس
      </button>
    </div>
  );
}

export default ShipmentInfo;
