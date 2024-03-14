import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Providers } from "./Providers";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ts Cuber",
  description: "The best place to cubing xD",
  openGraph: {
    title: "Ts Cuber",
    description: "The best place to cubing xD",
    type: "website",
    url: "https://tscuber.vercel.app",
    siteName: "Ts Cuber",
    images: {
        url: "/character.png",
        width: 1200,
        height: 630,
        alt: "Ts Cuber",
    },
  },
  icons: {
    icon: "/character.png",
  },
  
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
