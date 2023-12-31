"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Input from "@/components/inputs/Input";
import Select from "@/components/inputs/Select";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  users: User[];
}
const GroupChatModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      members: [],
    },
  });

  const members = watch("members");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        ...data,
        isGroup: true,
      })
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch((error: any) =>
        toast.error(`${error?.response?.data} : ${error?.code}`)
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="pb-12 border-b border-coklat/10">
            <h2 className="text-base font-semibold leading-7 text-coklat">
              Create a group chat
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Create a chat with your friends
            </p>
            <div className="flex flex-col mt-10 gap-y-8">
              <Input
                register={register}
                label="Group Name"
                id="name"
                disabled={isLoading}
                required
                errors={errors}
                labelColor="text-coklat"
              />
              <Select
                disabled={isLoading}
                label="Members"
                options={users.map((user) => ({
                  value: user.id,
                  label: user.name,
                }))}
                onChange={(value) =>
                  setValue("members", value, {
                    shouldValidate: true,
                  })
                }
                value={members}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-6 gap-x-6">
          <Button
            disabled={isLoading}
            onClick={onClose}
            secondary
            type="button"
          >
            Cancel
          </Button>
          <Button disabled={isLoading} type="submit">
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default GroupChatModal;
