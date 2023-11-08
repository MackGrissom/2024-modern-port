import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import AnimatedCursor from "react-animated-cursor";
import { AnimatePresence } from "framer-motion";

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
    <html lang="en" className="bottom-0 fixed">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-hidden overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <AnimatedCursor
      innerSize={20}
      outerSize={8}
      color='	106, 13, 173'
      outerAlpha={0.3}
      innerScale={0.3}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      </body>
    </html>
  );
}
