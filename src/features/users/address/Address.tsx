// AddressList.tsx
import React, { useState } from "react";
import AddressFormModal from "./AddressFormModal";
import AddressItem from "./AddressItem";

type Address = {
  firstName: string;
  lastName: string;
  province: string;
  city: string;
  phoneNumber: string;
  postalCode: string;
  address: string;
};

const AddressList = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNewAddress = (newAddress: Address) => {
    setAddresses([...addresses, newAddress]);
  };

  return (
    <div className="p-5 bg-white h-full rounded-md">
      <h2 className="text-xl font-bold mb-10">آدرس‌ ها</h2>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-main-color text-white py-2 px-4 rounded mb-4"
      >
        افزودن آدرس جدید
      </button>
      <ul>
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
