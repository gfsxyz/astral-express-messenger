"use client";
import Avatar from "@/components/Avatar";
import useOtherUser from "@/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return "Online";
  }, [conversation]);

  return (
    <div className="flex items-center justify-between w-full px-4 py-3 bg-white border-b shadow-sm sm:px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <Link
          href={"/conversations"}
          className="block transition cursor-pointer lg:hidden text-coklat hover:opacity-80"
        >
          <HiChevronLeft />
        </Link>
        <Avatar user={otherUser} />
        <div className="flex flex-col">
          <div>{conversation.name || otherUser.name}</div>
          <div className="text-xs font-light text-neutral-500">
            {statusText}
          </div>
        </div>
      </div>
      <HiEllipsisHorizontal
        size={32}
        onClick={() => {}}
        className="transition cursor-pointer text-coklat hover:opacity-80"
      />
    </div>
  );
};
export default Header;
