import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 bg-coklat/30">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/astral_msg_logo.png"
          alt="Astra Express Messenger Logo"
          width={64}
          height={64}
          className="w-auto mx-auto"
        />
        <h2 className="mt-6 text-2xl font-semibold tracking-wide text-center text-gray-100">
          Stay connected with us
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
