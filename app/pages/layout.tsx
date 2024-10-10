import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "../components/navigation/navbar";
import Header from "../components/navigation/header";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {<Header/>}
        {<Navbar/>}
        {children}
        {<Footer/>}
      </body>
  );
}
