import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrimeReception — AI Receptionist for Small Businesses | Never Miss a Call",
  description:
    "PrimeReception answers every call 24/7 with natural AI so you never miss a lead. Done-for-you AI receptionist for dental offices, med spas, auto body shops & more.",
  keywords:
    "AI receptionist, AI phone answering service, virtual receptionist, 24/7 answering service, dental office receptionist, med spa receptionist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
