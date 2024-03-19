import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";

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
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
       <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            <Navbar/>
          </header>
          <main>{children}</main>
       </AuthContext>
      </body>
    </html>
  );
}
