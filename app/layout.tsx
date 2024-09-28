import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hack-A-Venture",
  description: "Hack-A-Venture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Hack-A-Venture</title>
        <meta name="description" content="Hack-A-Venture" />
      </Head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
