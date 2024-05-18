import {Outfit } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/transition";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
       <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
