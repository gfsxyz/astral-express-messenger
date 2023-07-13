import Avatar from "@/components/Avatar";
import LoadingModal from "@/components/LoadingModal";
import useActiveList from "@/hooks/useActiveList";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

const UserBox = ({ data }: { data: User }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { members } = useActiveList();

  const isActive = members.indexOf(data?.email!) !== -1;

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        userId: data.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);
  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        onClick={handleClick}
        className="relative flex items-center w-full p-3 space-x-3 transition cursor-pointer group hover:bg-neutral-100"
      >
        <Avatar user={data} />
        <div className="flex-1 min-w-0 border-b border-gray-600/20">
          <div className="focus:outline-none">
            <div className="flex flex-col justify-between mb-1">
              <p className="text-sm font-semibold text-white group-hover:text-coklat">
                {data.name}
              </p>
              <p
                className={twMerge(
                  "text-sm text-gray-300/70 group-hover:text-gray-400",
                  isActive && "text-green-500"
                )}
              >
                {isActive ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserBox;
