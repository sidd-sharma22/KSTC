import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

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
                  Radhapuram, Vaibhav Enclave, Maharajpura, Gwalior-474005, Madhya Pradesh, India
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-text/70">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <a href="tel:+919340486840" className="hover:text-brand-primary transition-colors">+91 93404 86840</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-text/70">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <a href="mailto:kstradingco88@gmail.com" className="hover:text-brand-primary transition-colors">kstradingco88@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-text/70">
                <div className="flex gap-5 items-center mt-1">
                  <SocialIcon href="https://wa.me/919340486840?text=Hello!%20I'm%20interested%20in%20your%20products.%20I've%20got%20you%20from%20your%20website.%20Let's%20have%20a%20good%20deal." icon={<WhatsApp className="w-5 h-5" />} label="WhatsApp" />
                  <SocialIcon href="#" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
                  <SocialIcon href="https://www.instagram.com/khatushyamtradingco" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
                </div>
              </li>
            </ul>
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
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-text/50 hover:text-brand-primary transition-colors" title={label}>
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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
  );
}

function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
  );
}

function WhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  );
}
