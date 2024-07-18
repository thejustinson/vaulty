import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaulty",
  description: "An exploration on how to integrate web3 on frontend apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${work_sans.className} bg-neutral-950 text-neutral-100`}>{children}</body>
    </html>
  );
}
