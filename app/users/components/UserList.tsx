"use client";

import { User } from "@prisma/client";
import UserBox from "./UserBox";
import { PiUsersDuotone } from "react-icons/pi";

interface UserListprops {
  items: User[];
}
const UserList: React.FC<UserListprops> = ({ items }) => {
  return (
    <aside className="fixed inset-y-0 left-0 block w-full pb-20 overflow-y-auto border-r border-gray-500/50 lg:pb-0 lg:left-20 lg:w-80 lg:block bg-black/30">
      <div className="px-5">
        <div className="flex items-center gap-x-3">
          <PiUsersDuotone size={28} className="text-terang" />
          <div className="py-4 font-semibold text-white">People</div>
        </div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
};
export default UserList;
