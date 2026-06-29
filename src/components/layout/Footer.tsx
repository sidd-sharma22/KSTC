import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-background pt-16 pb-8 border-t border-brand-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden p-1">
                <Image src="/kstc-logo.png" alt="KSTC Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-brand-primary leading-tight text-lg">Khatu Shyam</span>
                <span className="text-[10px] text-brand-text/60 uppercase tracking-widest font-semibold">Trading Co.</span>
              </div>
            </Link>
            <p className="text-sm text-brand-text/70 leading-relaxed max-w-xs mt-4">
              Authorized distributor for Sentini Flopipes and Johnson's Pedders serving retail and trade customers in the Gwalior & Chambal region.
            </p>
            <div className="flex gap-3 pt-2">
              <SocialIcon href="#" label="Facebook" />
              <SocialIcon href="#" label="Instagram" />
              <SocialIcon href="#" label="Twitter" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-brand-primary mb-6">Shop</h4>
            <ul className="space-y-3">
              <FooterLink href="/category/bathroom-ware">Bathroom Ware</FooterLink>
              <FooterLink href="/category/sanitary-ware">Sanitary Ware</FooterLink>
              <FooterLink href="/category/pipes-fittings">Pipes & Fittings</FooterLink>
              <FooterLink href="/brands">All Brands</FooterLink>
            </ul>
          </div>

          {/* Trade & Support */}
          <div>
            <h4 className="font-heading font-semibold text-brand-primary mb-6">Shop & Support</h4>
            <ul className="space-y-3">
              <FooterLink href="/shop">Shop Accounts</FooterLink>
              <FooterLink href="/bulk-orders">Bulk Orders</FooterLink>
              <FooterLink href="/support">Help Center</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-brand-primary mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-brand-text/70">
                <MapPin className="w-6 h-6 text-brand-accent shrink-0" />
                <a href="https://maps.app.goo.gl/HMytKeSHLpnLAgAp7" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary hover:underline transition-colors">
                  Radhapuram, near Amity University, Vaibhav Enclave, Maharajpura, Gwalior, Madhya Pradesh, 474005, India
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-text/70">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <a href="tel:+919876543210" className="hover:text-brand-primary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-text/70">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <a href="mailto:support@khatushyamtrading.com" className="hover:text-brand-primary transition-colors">support@khatushyamtrading.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter (Glass Chip Accent) */}
        <div className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="font-heading font-semibold text-lg text-brand-primary mb-1">Subscribe to our Newsletter</h3>
            <p className="text-sm text-brand-text/70">Get the latest product updates and exclusive trade offers.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full md:w-64 px-4 py-2.5 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 text-sm"
            />
            <button className="px-6 py-2.5 bg-brand-primary text-white font-medium rounded-xl hover:bg-brand-primary/90 transition-colors whitespace-nowrap text-sm shadow-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-text/60">
            © {new Date().getFullYear()} Khatu Shyam Trading Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-brand-text/60 hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-brand-text/60 hover:text-brand-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="w-8 h-8 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-text/60 hover:text-brand-primary hover:border-brand-primary/30 hover:shadow-sm transition-all text-xs font-bold" title={label}>
      {label.charAt(0)}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-brand-text/70 hover:text-brand-primary transition-colors">
        {children}
      </Link>
    </li>
  );
}
