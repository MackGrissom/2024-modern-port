import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Providers } from "@/components/providers";
import CollapsibleSidebar from "@/components/sub/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mack Grissom",
  description:
    "A freelance web developers professional portfolio - pushing your ideas, your dreams and your business objectives into reality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
