import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
