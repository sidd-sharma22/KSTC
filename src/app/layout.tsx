import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khatu Shyam Trading Co. - Authorized Distributor",
  description: "B2B & Retail E-commerce for Sentini Flopipes, Johnson's Pedders, and more in Gwalior & Chambal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-brand-text bg-brand-background relative">
        <CartProvider>
          {/* Background Gradient Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-[50vh] -z-10" />
          
          <Header />
          
          <main className="flex-1 flex flex-col">
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
