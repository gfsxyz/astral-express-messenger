import "./globals.css";
import { Poppins } from "next/font/google";

import AuthProvider from "@/providers/AuthProvider";
import ToasterProvider from "@/providers/ToasterProvider";

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
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
