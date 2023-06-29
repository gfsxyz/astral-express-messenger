import "./globals.css";
import ToasterProvider from "@/providers/ToasterProvider";
import { Poppins } from "next/font/google";

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
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
