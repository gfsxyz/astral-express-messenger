import "./globals.css";
import { Poppins } from "next/font/google";

import AuthProvider from "@/providers/AuthProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import ActiveStatus from "@/components/ActiveStatus";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

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
      <body className={poppins.className}>
        <AuthProvider>
          <ToasterProvider />
          <ActiveStatus />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
