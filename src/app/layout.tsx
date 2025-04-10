import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";

import Header from "@/components/Header" 
import Footer  from "@/components/Footer";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Firdaus",
  description: "Personal portfolio website"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body className={`${inter.className} flex flex-col min-h-screen bg-white text-gray-900`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
