import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Types
import type { Metadata } from "next";

// Components
import Header from "@/components/header/header";

/**
 * Google fonts configuration.
 * Fonts are loaded using Next.js built-in optimization
 * to improve performance and avoid layout shifts.
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Global metadata configuration.
 * Used for SEO and browser context.
 */
export const metadata: Metadata = {
  title: "Simulador Ahorro",
  description:
    "Aplicación para simular productos de ahorro y proyecciones financieras.",
};

/**
 * RootLayout
 *
 * Global layout applied to all pages in the application.
 * It includes:
 * - Global fonts
 * - Global styles
 * - Application header
 * - Shared layout structure
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-800 max-w-364 justify-self-center pt-20`}
      >
        {/**
         * Shared header component.
         * Provides navigation across the main application pages.
         */}
        <Header />

        {/**
         * Page-specific content rendered here.
         */}
        {children}
      </body>
    </html>
  );
}
