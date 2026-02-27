import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default:
      "PrimeReception — AI Receptionist for Small Businesses | Never Miss a Call",
    template: "%s | PrimeReception",
  },
  description:
    "PrimeReception answers every call 24/7 with natural AI so you never miss a lead. Done-for-you AI receptionist for dental offices, med spas, auto body shops & more.",
  keywords: [
    "AI receptionist",
    "AI phone answering service",
    "virtual receptionist",
    "24/7 answering service",
    "dental office receptionist",
    "med spa receptionist",
    "auto body shop answering service",
    "law office answering service",
    "small business phone answering",
    "AI call answering",
  ],
  authors: [{ name: "PrimeReception" }],
  creator: "PrimeReception",
  metadataBase: new URL("https://primereception.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PrimeReception",
    title:
      "PrimeReception — AI Receptionist for Small Businesses | Never Miss a Call",
    description:
      "PrimeReception answers every call 24/7 with natural AI so you never miss a lead. Done-for-you setup. Plans from $249/month.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeReception — AI Receptionist for Small Businesses",
    description:
      "Stop losing customers to missed calls. PrimeReception answers every call 24/7 with natural AI. Plans from $249/month.",
  },
  icons: {
    icon: "/icon-final.png",
    apple: "/icon-final.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          async
          type="text/javascript"
        />
      </body>
    </html>
  );
}
