'use client' 
import { Inter } from "next/font/google"; 
import AuthProvider from "@/context/AuthProvier"; 
import React, { useState } from "react"; 
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClosed, setIsClosed] = useState(false);
  console.log(setIsClosed);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {/* <Navbar /> */}
          {/* <Sidebar setIsClosed={setIsClosed} /> */}
          <div className={`${isClosed ? "ml-[224px]" : "ml-[80px]"}`}>
            {children}
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}