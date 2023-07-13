"use client";

import useActiveList from "@/hooks/useActiveList";
import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  const { members } = useActiveList();
  const isActive = members.indexOf(user?.email!) !== -1;

  const userImage = user?.image || "/images/default-pfp.png";

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-full h-9 w-9 md:h-11 md:w-11">
        <Image
          src={userImage}
          alt="profile picture"
          fill
          sizes="(max-width: 2.75rem) 100vw"
        />
      </div>
      {isActive && (
        <span className="absolute block w-1 h-1 bg-green-500 rounded-full top-[3px] right-[2px] ring-1 ring-white md:h-2 md:w-2" />
      )}
    </div>
  );
};
export default Avatar;
