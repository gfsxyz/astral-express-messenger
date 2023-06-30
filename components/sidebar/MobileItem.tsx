"use client";

import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface MobileItemProps {
  href: string;
  icon: IconType;
  onClick?: () => void;
  active?: boolean;
}
const MobileItem: React.FC<MobileItemProps> = ({
  href,
  icon: Icon,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={twMerge(
        "group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-abu hover:text-coklat hover:bg-gray-100",
        active && "bg-gray-100 text-coklat"
      )}
    >
      <Icon className="w-6 h-6" />
    </Link>
  );
};
export default MobileItem;
