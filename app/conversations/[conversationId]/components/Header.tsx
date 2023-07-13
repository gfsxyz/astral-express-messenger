"use client";
import Avatar from "@/components/Avatar";
import useOtherUser from "@/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "@/components/AvatarGroup";
import useActiveList from "@/hooks/useActiveList";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return isActive ? "Online" : "Offline";
  }, [conversation, isActive]);

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div className="flex items-center justify-between w-full px-4 py-3 border-t border-r shadow-sm rounded-tr-3xl border-white/40 bg-black/40 sm:px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <Link
            href={"/conversations"}
            className="block transition cursor-pointer lg:hidden text-coklat hover:opacity-80"
          >
            <HiChevronLeft />
          </Link>
          {conversation.isGroup ? (
            <AvatarGroup users={conversation.users} />
          ) : (
            <Avatar user={otherUser} />
          )}
          <div className="flex flex-col">
            <div className="text-white">
              {conversation.name || otherUser.name}
            </div>
            <div className="text-xs font-light text-neutral-300">
              {statusText}
            </div>
          </div>
        </div>
        <div className="transition bg-gray-100 rounded-full cursor-pointer text-coklat hover:opacity-80">
          <HiEllipsisHorizontal
            size={32}
            onClick={() => setDrawerOpen(true)}
            className="rounded-full ring-2 ring-white"
          />
        </div>
      </div>
    </>
  );
};
export default Header;
