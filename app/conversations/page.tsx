"use client";

import { twMerge } from "tailwind-merge";

import useConversation from "@/hooks/useConversation";
import EmptyState from "@/components/EmptyState";

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div
      className={twMerge(
        "lg:pl-80 h-full lg:block",
        isOpen ? "block" : "hidden"
      )}
    >
      <EmptyState />
    </div>
  );
};

export default Home;
