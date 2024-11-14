// AddressList.tsx
import React, { useState } from "react";
import AddressFormModal from "./AddressFormModal";
import AddressItem from "./AddressItem";

type Address = {
  firstName: string;
  lastName: string;
  province: string;
  city: string;
  email: string;
  postalCode: string;
  address: string;
  phoneNumber: string;
};

const AddressList = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNewAddress = (newAddress: Address) => {
    setAddresses([...addresses, newAddress]);
  };

  return (
    <div className="p-5 bg-white h-full rounded-md">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-xl font-bold">آدرس‌ ها</h2>
        <button onClick={() => setIsModalOpen(true)} className="text-sm text-main-color hover:text-black transition ease-out duration-150"><i className="bi bi-plus-circle ml-1"></i>ثبت آدرس جدید</button>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {addresses.map((address, index) => (
          <li>
            <AddressItem
              key={index}
              firstName={address.firstName}
              lastName={address.lastName}
              province={address.province}
              city={address.city}
              postalCode={address.postalCode}
              address={address.address}
              phoneNumber={address.phoneNumber}
            />
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <AddressFormModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={addNewAddress}
        />
      )}
    </div>
  );
};

export default AddressList;
