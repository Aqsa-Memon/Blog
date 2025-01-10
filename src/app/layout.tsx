
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BLOG",
  description: "Welcome to our web development and AI blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-light dark:bg-dark `}
  >
          <Header />
          {children}
          <Footer />
      
      </body>
    </html>
  );}