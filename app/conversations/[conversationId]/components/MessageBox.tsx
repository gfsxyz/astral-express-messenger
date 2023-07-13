"use client";

import Avatar from "@/components/Avatar";
import { FullMessageType } from "@/types";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ImageModal from "./ImageModal";

interface MessageBoxProps {
  isLast?: boolean;
  data: FullMessageType;
}
const MessageBox: React.FC<MessageBoxProps> = ({ isLast, data }) => {
  const session = useSession();
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const isOwn = session?.data?.user?.email === data?.sender?.email;
  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const container = twMerge("flex gap-3 p-4", isOwn && "justify-end");

  const avatar = twMerge(isOwn && "order-2");

  const body = twMerge("flex flex-col gap-2", isOwn && "items-end");

  const message = twMerge(
    "text-sm w-fit overflow-hidden",
    isOwn
      ? "bg-primary rounded-xl rounded-se-none"
      : "bg-gray-100 rounded-xl rounded-ss-none",
    data.image ? "rounded-md p-0" : "py-2 px-3 font-semibold text-gray-800"
  );

  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data.sender} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm font-semibold text-neutral-100">
            {data.sender.name}
          </div>
          <div className="text-xs font-light text-gray-200">
            {format(new Date(data.createdAt), "p")}
          </div>
        </div>
        <div className={message}>
          <ImageModal
            src={data.image}
            isOpen={imageModalOpen}
            onClose={() => setImageModalOpen(false)}
          />
          {data.image ? (
            <Image
              onClick={() => setImageModalOpen(true)}
              alt="image"
              height={288}
              width={288}
              src={data.image}
              className="object-cover transition cursor-pointer hover:scale-110 translate"
            />
          ) : (
            <div>{data.body}</div>
          )}
        </div>
        {isLast && isOwn && seenList.length > 0 && (
          <div className="text-xs font-light text-gray-500">{`Seen By ${seenList}`}</div>
        )}
      </div>
    </div>
  );
};
export default MessageBox;
