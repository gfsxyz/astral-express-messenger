import { twMerge } from "tailwind-merge";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidht?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidht,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={twMerge(
        "flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        disabled && "opacity-50 cursor-default",
        fullWidht && "w-full",
        secondary ? "text-gray-900" : "text-coklat",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-primary hover:opacity-90 focus-visible:outline-primary"
      )}
    >
      {children}
    </button>
  );
};
export default Button;
