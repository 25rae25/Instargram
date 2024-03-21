import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";
import SWRConfigContext from "@/context/SWRConfigContex";

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
			<body className="w-full bg-neutral-50 overflow-auto">
			 <AuthContext>
					<header className="sticky top-0 bg-white z-10 border-b">
						<div className="max-w-screen-xl mx-auto">
							<Navbar/>
						</div>
					</header>
					<main className="w-full flex justify-center">
						<SWRConfigContext>{children}</SWRConfigContext>
					</main>
			 </AuthContext>
			 <div id='portal' />
			</body>
		</html>
	);
}
