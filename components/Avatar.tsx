"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
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
      <span className="absolute top-0 right-0 block w-2 h-2 bg-green-500 rounded-full ring-2 ring-white md:h-3 md:w-3" />
    </div>
  );
};
export default Avatar;
