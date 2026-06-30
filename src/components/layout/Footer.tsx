import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-background pt-16 pb-8 border-t border-brand-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-brand-primary mb-6">Categories</h4>
            <ul className="space-y-3">
              <FooterLink href="/category/bathroom-ware">Bathroom Ware</FooterLink>
              <FooterLink href="/category/sanitary-ware">Sanitary Ware</FooterLink>
              <FooterLink href="/category/pipes-fittings">Pipes & Fittings</FooterLink>
              <FooterLink href="/brands">All Brands</FooterLink>
            </ul>
          </div>

          {/* Trade & Support */}
          <div>
            <h4 className="font-heading font-semibold text-brand-primary mb-6">Support Center</h4>
            <ul className="space-y-3">
              <FooterLink href="/shop">Shop Accounts</FooterLink>
              <FooterLink href="/faqs">FAQs</FooterLink>
              <FooterLink href="/support">Help Center</FooterLink>
              <FooterLink href="/contact-us">Contact Us</FooterLink>
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

          {/* Keep in Touch */}
          <div>
            <h4 className="font-heading font-semibold text-brand-primary mb-6">Keep in Touch</h4>
            <div className="flex gap-3">
              <SocialIcon href="#" icon={<Facebook className="w-4 h-4" />} label="Facebook" />
              <SocialIcon href="#" icon={<Instagram className="w-4 h-4" />} label="Instagram" />
              <SocialIcon href="#" icon={<Twitter className="w-4 h-4" />} label="Twitter" />
              <SocialIcon href="#" icon={<Youtube className="w-4 h-4" />} label="YouTube" />
            </div>
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

function SocialIcon({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) {
  return (
    <a href={href} className="w-8 h-8 rounded-full bg-white border border-brand-border flex items-center justify-center text-brand-text/60 hover:text-brand-primary hover:border-brand-primary/30 hover:shadow-sm transition-all text-xs font-bold" title={label}>
      {icon ? icon : label.charAt(0)}
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

function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  );
}

function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  );
}

function Twitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  );
}

function Youtube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.5 7.1C2.3 8.3 2 10.1 2 12s.3 3.7.5 4.9c.3 1.5 1.5 2.7 3 2.9 2 .2 6.5.2 6.5.2s4.5 0 6.5-.2c1.5-.2 2.7-1.4 3-2.9.2-1.2.5-3 .5-4.9s-.3-3.7-.5-4.9c-.3-1.5-1.5-2.7-3-2.9-2-.2-6.5-.2-6.5-.2s-4.5 0-6.5.2c-1.5.2-2.7 1.4-3 2.9z"/><path d="m10 15 5-3-5-3z"/></svg>
  );
}
