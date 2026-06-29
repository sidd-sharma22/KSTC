"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Store, User, ShoppingCart, Menu, X, Home as HomeIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 md:px-8">
      {/* Floating Glass Container */}
      <div className="mx-auto max-w-7xl glass-panel rounded-2xl px-4 py-3 flex items-center justify-between transition-all duration-300">
        
        {/* Left: Logo & Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden p-1">
              <Image src="/kstc-logo.png" alt="KSTC Logo" fill className="object-contain" />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-heading font-bold text-brand-primary leading-tight text-lg">Khatu Shyam</span>
              <span className="text-[10px] text-brand-text/60 uppercase tracking-widest font-semibold">Trading Co.</span>
            </div>
          </Link>
          <div className="hidden xl:flex items-center gap-2 ml-4 px-3 py-1 bg-white/40 rounded-full border border-white/50 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-[11px] font-semibold text-brand-primary">Authorized Distributor</span>
          </div>
        </div>

        {/* Center: Search Bar (Glass) */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8 relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-brand-text/40 group-focus-within:text-brand-accent transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search products, brands, or SKUs..." 
            className="w-full pl-11 pr-4 py-2.5 bg-white/50 backdrop-blur-md border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/40 focus:bg-white/70 transition-all placeholder:text-brand-text/50 text-sm shadow-sm"
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium text-brand-text/50 bg-white/50 rounded-md border border-brand-border">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>

        {/* Right: Icons & Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Desktop Nav Icons */}
          <div className="hidden lg:flex items-center gap-1">
            <NavIcon href="/" icon={<HomeIcon className="w-4 h-4" />} label="Home" />
            <NavIcon href="/locator" icon={<MapPin className="w-4 h-4" />} label="Store" />
            <NavIcon href="/category/all-products" icon={<Store className="w-4 h-4" />} label="Shop" />
            <NavIcon href="/account" icon={<User className="w-4 h-4" />} label="Account" />
          </div>
          
          {/* Cart Icon */}
          <Link href="/cart" className="relative p-2.5 bg-white shadow-sm rounded-xl hover:shadow-md transition-all group flex items-center justify-center border border-brand-border ml-1">
            <ShoppingCart className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-bounce">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2.5 bg-white/50 rounded-xl border border-white/60 shadow-sm ml-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-brand-primary" /> : <Menu className="w-5 h-5 text-brand-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Animated) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 glass-panel rounded-2xl p-4 lg:hidden shadow-lg border border-white/60"
          >
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-brand-text/50" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full pl-10 pr-4 py-2 bg-white/60 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 text-sm"
              />
            </div>
            
            {/* Mobile Links */}
            <div className="flex flex-col gap-2">
              <MobileNavLink href="/" icon={<HomeIcon className="w-4 h-4" />} label="Home" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/locator" icon={<MapPin className="w-4 h-4" />} label="Store Locator" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/category/all-products" icon={<Store className="w-4 h-4" />} label="Shop" onClick={() => setIsMobileMenuOpen(false)} />
              <MobileNavLink href="/account" icon={<User className="w-4 h-4" />} label="My Account" onClick={() => setIsMobileMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center w-[60px] h-[52px] rounded-xl hover:bg-white/60 transition-colors group">
      <div className="text-brand-text/60 group-hover:text-brand-primary transition-colors mb-1">
        {icon}
      </div>
      <span className="text-[10px] font-medium text-brand-text/60 group-hover:text-brand-primary transition-colors">
        {label}
      </span>
    </Link>
  );
}

function MobileNavLink({ href, icon, label, onClick }: { href: string; icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/60 transition-colors">
      <div className="text-brand-primary p-2 bg-white rounded-lg shadow-sm">
        {icon}
      </div>
      <span className="text-sm font-medium text-brand-text">{label}</span>
    </Link>
  );
}
