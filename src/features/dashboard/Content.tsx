import AddressList from "../users/address/AddressList";
import EditProfile from "../users/editProfile/EditProfile";
import Likes from "../users/likes/Likes";
import Orders from "../users/orders/Orders";
import { useProfile } from "../users/useProfile";

interface ContentProps {
  selectedContent: string;
}

const Content = ({ selectedContent }: ContentProps) => {
  const { user } = useProfile()
  return (
    <div className="col-span-12 lg:col-span-9 border border-border-color rounded-md">
      {selectedContent === "edit-account" && <EditProfile user={user}/>}
      {selectedContent === "orders" && <Orders/>}
      {selectedContent === "address" && <AddressList/>}
      {selectedContent === "likes" && <Likes/>}
    </div>
  );
};

export default Content;
