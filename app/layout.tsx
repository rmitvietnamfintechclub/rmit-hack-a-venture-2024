import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
	title: "RMIT Hack-A-Venture 2024",
	description: "This competition aims to bridge the gap between technical expertise and business strategy by having students leverage Artificial Intelligence, Blockchain and Cybersecurity, to create realistic and impactful solutions advancing UN SDGs in Vietnam.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<link rel="icon" href="/logo.png" />
				<title>RMIT Hack-A-Venture 2024</title>
				<meta name="description" content="This competition aims to bridge the gap between technical expertise and business strategy by having students leverage Artificial Intelligence, Blockchain and Cybersecurity, to create realistic and impactful solutions advancing UN SDGs in Vietnam." />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
			</Head>
			<body className="antialiased">
				{children}
			</body>
		</html>
	);
}
