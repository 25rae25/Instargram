import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instargram",
  description: "Instargram입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={openSans.className}>
      <body>
        <header>
          <Navbar/>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
