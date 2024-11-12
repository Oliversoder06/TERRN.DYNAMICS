import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "TERRN.DYNAMICS",
  description: "A Project Called TERRN.DYNAMICS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <div className="max-w-[1440px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
