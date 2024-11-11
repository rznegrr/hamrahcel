// components/AddressItem.tsx

type AddressItemProps = {
  firstName: string;
  lastName: string;
  province: string;
  city: string;
  postalCode: string;
  address: string;
};

function AddressItem({
  firstName,
  lastName,
  province,
  city,
  postalCode,
  address,
}: AddressItemProps) {
  return (
    <div className="border p-3 rounded mb-3">
      <p><strong>نام:</strong> {firstName} {lastName}</p>
      <p><strong>استان:</strong> {province}</p>
      <p><strong>شهر:</strong> {city}</p>
      <p><strong>کد پستی:</strong> {postalCode}</p>
      <p><strong>آدرس:</strong> {address}</p>
    </div>
  );
}

export default AddressItem;
