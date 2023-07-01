"use client";

import { User } from "@prisma/client";
import UserBox from "./UserBox";

interface UserListprops {
  items: User[];
}
const UserList: React.FC<UserListprops> = ({ items }) => {
  return (
    <aside className="fixed inset-y-0 left-0 block w-full pb-20 overflow-y-auto border-r border-gray-200 lg:pb-0 lg:left-20 lg:w-80 lg:block">
      <div className="px-5">
        <div className="flex-col">
          <div className="py-4 text-xl font-bold text-coklat">People</div>
        </div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
};
export default UserList;
