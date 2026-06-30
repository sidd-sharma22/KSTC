import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { MessageCircle } from "lucide-react";

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

          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/919340486840"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
            title="Chat with us on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute right-16 bg-white text-brand-text text-sm font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-brand-border/50">
              Need help? Chat with us
            </span>
          </a>
        </CartProvider>
      </body>
    </html>
  );
}
