import type { Metadata } from "next";
import "./globals.css";


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
        <div className="max-w-[1440px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
