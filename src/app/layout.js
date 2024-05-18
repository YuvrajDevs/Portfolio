import {Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        <div className="w-screen h-screen bg-gradient-to-b from-white to-blue-50">
        <div className="h-24 ">
        <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">
        {children}
        </div>
        </div>
        </body>
    </html>
  );
}
