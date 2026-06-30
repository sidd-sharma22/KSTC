"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, User, Briefcase, ChevronRight, AlertCircle, Eye, EyeOff } from "lucide-react";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isTrade, setIsTrade] = useState(false);

  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 relative w-full overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white/70 backdrop-blur-md rounded-3xl border border-white/60 shadow-2xl overflow-hidden relative z-10">
        
        {/* Left Side: Branding / Info Panel */}
        <div className="hidden md:flex flex-col md:w-5/12 bg-gray-900 p-10 text-white justify-between relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          
          <div className="relative z-10 flex flex-col gap-6 mt-8">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg p-2 mb-4">
              <Image src="/kstc-logo.png" alt="KSTC Logo" width={50} height={50} className="object-contain" />
            </div>
            <h2 className="text-3xl font-heading font-bold leading-tight">
              {isLogin ? "Welcome Back to KSTC" : "Join Khatu Shyam Trading Co."}
            </h2>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              {isLogin 
                ? "Sign in to access your saved carts, order history, and exclusive trade pricing." 
                : "Create an account to track orders, save shipping addresses, and unlock B2B pricing for your shop."}
            </p>
          </div>
          
          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-4 text-white/70 text-sm">
              <div className="w-10 h-[1px] bg-white/30" />
              <span>Authorized Distributor</span>
            </div>
            <div className="flex gap-4 mt-4">
              <span className="font-semibold">Sentini</span>
              <span className="font-semibold text-white/50">•</span>
              <span className="font-semibold">Johnson's Pedders</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col">
          
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary mb-2">
              {isLogin ? "Sign In" : "Create Account"}
            </h1>
            <p className="text-brand-text/60 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="text-brand-accent font-semibold hover:underline focus:outline-none transition-all"
              >
                {isLogin ? "Sign up here" : "Sign in here"}
              </button>
            </p>
          </div>

          <form className="flex flex-col gap-5 flex-1" onSubmit={(e) => e.preventDefault()}>
            
            {!isLogin && (
              <div className="flex flex-col gap-5">
                {/* Account Type Toggle */}
                <div className="flex p-1 bg-gray-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setIsTrade(false)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${!isTrade ? 'bg-white text-brand-primary shadow-sm' : 'text-brand-text/60 hover:text-brand-text'}`}
                  >
                    Retail Customer
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsTrade(true)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${isTrade ? 'bg-white text-brand-primary shadow-sm' : 'text-brand-text/60 hover:text-brand-text'}`}
                  >
                    Trade/Shop Owner
                  </button>
                </div>

                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text/40 group-focus-within:text-brand-accent transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:bg-white transition-all text-sm shadow-sm"
                    required
                  />
                </div>

                {isTrade && (
                  <div className="relative group">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text/40 group-focus-within:text-brand-accent transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Shop/Business Name" 
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:bg-white transition-all text-sm shadow-sm"
                      required
                    />
                  </div>
                )}
              </div>
            )}

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text/40 group-focus-within:text-brand-accent transition-colors" />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:bg-white transition-all text-sm shadow-sm"
                required
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text/40 group-focus-within:text-brand-accent transition-colors" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:bg-white transition-all text-sm shadow-sm"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-text/40 hover:text-brand-primary transition-colors focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <Link href="#" className="text-xs font-semibold text-brand-accent hover:underline">
                  Forgot Password?
                </Link>
              </div>
            )}

            {!isLogin && isTrade && (
              <div className="flex items-start gap-3 p-3 bg-brand-primary/5 border border-brand-primary/10 rounded-xl mt-2">
                <AlertCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-xs text-brand-text/70 leading-relaxed">
                  Trade accounts require manual verification. Once registered, our team will review your business details to unlock wholesale pricing and Pay Later options.
                </p>
              </div>
            )}

            <Button type="submit" variant="accent" size="lg" className="w-full mt-4 group">
              {isLogin ? "Sign In" : "Create Account"}
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </form>

          {/* Social Login Separator */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-brand-border" />
            <span className="text-xs font-semibold text-brand-text/40 uppercase tracking-wider">or continue with</span>
            <div className="flex-1 h-[1px] bg-brand-border" />
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-brand-border rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30 text-sm font-semibold text-brand-text/80">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                <path fill="none" d="M1 1h22v22H1z" />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-brand-border rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/30 text-sm font-semibold text-brand-text/80">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
