import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// types
import type { Metadata } from "next";

// components
import Header from "@/components/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simulador Ahorro",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  bg-zinc-800 max-w-364 justify-self-center pt-20`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
