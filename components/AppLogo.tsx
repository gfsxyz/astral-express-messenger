import Image from "next/image";

interface AppLogoProps {
  size?: number;
}

const AppLogo: React.FC<AppLogoProps> = ({ size = 48 }) => {
  return (
    <Image
      src="/images/messenger-icon.png"
      alt="Mesenger logo"
      width={size}
      height={size}
      className="w-auto mx-auto p-1.5 bg-primary rounded-3xl"
    />
  );
};
export default AppLogo;
