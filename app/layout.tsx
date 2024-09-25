import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { PropsWithChildren } from "react";
// import Navbar from "./components/navigation/navbar";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HYC Singapore",
  description: "HYC Singapore",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="min-w-[320px]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {<Navbar/>} */}
        {children}
      </body>
    </html>
  );
}
