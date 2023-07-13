import "./globals.css";
import { Barlow } from "next/font/google";

import AuthProvider from "@/providers/AuthProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import ActiveStatus from "@/components/ActiveStatus";
import bg from "@/assets/hsr-bg-2.jpg";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata = {
  title: "Astral Express Messenger",
  description: "Star Rail Messenger App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-cover ${barlow.className})`}
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <AuthProvider>
          <ToasterProvider />
          <ActiveStatus />
          <div className="w-full h-full backdrop-blur-lg">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
