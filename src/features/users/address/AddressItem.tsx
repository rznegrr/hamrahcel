// components/AddressItem.tsx

type AddressItemProps = {
  firstName: string;
  lastName: string;
  province: string;
  city: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
};

function AddressItem({
  firstName,
  lastName,
  province,
  city,
  postalCode,
  address,
  phoneNumber,
}: AddressItemProps) {
  return (
    <div className="border border-border-color p-3 rounded-md">
      <p className="text-sm">
        {province} , {city}
      </p>
      <p className="text-sm text-justify mt-2 leading-7">{address}</p>
      <div className="flex flex-col gap-1 mt-2">
        <p className="text-sm text-gray">
          <span className="ml-1 text-gray">
            <i className="text-lg bi bi-person"></i>
          </span>
          {firstName} {lastName}
        </p>
        <p className="text-sm text-gray">
          <span className="ml-1 text-gray">
            <i className="text-lg bi bi-mailbox"></i>
          </span>
          {postalCode}
        </p>
        <p className="text-sm text-gray">
          <span className="ml-1 text-gray">
            <i className="text-lg bi bi-telephone"></i>
          </span>
          {phoneNumber}
        </p>
      </div>

      <div className="flex justify-end gap-3">
        <button className="text-sm text-[#2e2e2e]">
          <i className="bi bi-pencil ml-1 font-semibold text-base"></i>ویرایش
        </button>
        <button className="text-sm text-main-color">
          <i className="bi bi-trash ml-1 font-semibold text-base"></i>حذف
        </button>
      </div>
    </div>
  );
}

export default AddressItem;
