"use client"

import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

import Header from "./Header";

function Layout({ children } : { children: React.ReactNode }) {

  return (
    <body className={poppins.className}>
      <main className="max-w-[400px] mx-auto p-4">
        <Header/>
        {children}
      </main>
    </body>
  );
}

export default Layout;
