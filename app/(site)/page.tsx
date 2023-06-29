import AppLogo from "@/components/AppLogo";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8 bg-abu">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <AppLogo />
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-center text-gray-900">
          Stay connected through your messenger
        </h2>
      </div>
      {/* TODO: Auth Form */}
    </div>
  );
}
