import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
  disabled?: boolean;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
  disabled,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        "inline-flex justify-center w-full px-4 py-2 text-gray-500 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0",
        disabled && "cursor-default opacity-50"
      )}
      disabled={disabled}
    >
      <Icon />
    </button>
  );
};
export default AuthSocialButton;
