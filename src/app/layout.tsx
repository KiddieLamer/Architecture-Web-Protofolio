import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Preloader from "@/components/Preloader";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Architecture Web Portfolio - 3D Visualization Studio",
  description: "Professional architectural visualization studio specializing in 3D rendering, interior visualization, and Unreal Engine development.",
  keywords: "3D visualization, architectural rendering, interior design, Unreal Engine, 3D animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}