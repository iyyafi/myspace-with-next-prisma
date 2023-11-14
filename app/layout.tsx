import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import NavMenu from "./NavMenu";

const myFont = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <div className="container">
          <NavMenu />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}