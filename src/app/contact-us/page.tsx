import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col flex-1 pb-20">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto w-full px-4 pt-8 pb-6 md:px-8">
        <div className="text-[10px] font-bold text-brand-text/50 uppercase tracking-widest mb-2">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link> / Contact Us
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary font-heading">
          Contact Us
        </h1>
        <p className="text-sm text-brand-text/70 mt-2 max-w-xl">
          Get in touch with us for inquiries, support, or to visit our showroom in Gwalior.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col lg:flex-row gap-8">

        {/* Left: Form & Map */}
        <div className="flex-1 flex flex-col gap-8">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-brand-border/50 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-primary mb-6 font-heading">Send us a Message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-brand-text">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2.5 bg-gray-50 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 text-sm transition-all" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-brand-text">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2.5 bg-gray-50 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 text-sm transition-all" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-brand-text">Phone (Optional)</label>
                <input type="tel" id="phone" className="w-full px-4 py-2.5 bg-gray-50 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 text-sm transition-all" placeholder="Your Phone Number" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-brand-text">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2.5 bg-gray-50 border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 text-sm transition-all resize-y" placeholder="How can we help you?"></textarea>
              </div>
              <Button type="button" variant="primary" className="w-full md:w-auto">Send Message</Button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-brand-border/50 shadow-sm bg-white min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3287.0145320883375!2d78.22335264366733!3d26.26678713027006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c77cbcb628c1%3A0x5d89e0ad2bd0301a!2sKhatu%20Shyam%20Trading%20Co.!5e0!3m2!1sen!2sin!4v1782819374303!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Khatu Shyam Trading Co. Location"
          />
          </div>
        </div>

        {/* Right: Store Details */}
        <div className="w-full lg:w-96 shrink-0 flex flex-col gap-6">

          {/* Address Card */}
          <div className="bg-white rounded-2xl border border-brand-border/50 p-6 shadow-sm">
            <h3 className="font-heading font-semibold text-brand-primary text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-accent" /> Our Address
            </h3>
            <p className="text-sm text-brand-text/80 leading-relaxed mb-4">
              Radhapuram, near Amity University, Vaibhav Enclave, Maharajpura, Gwalior, Madhya Pradesh, 474005, India
            </p>
            <a
              href="https://maps.app.goo.gl/HMytKeSHLpnLAgAp7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="accent" size="sm" icon={<Navigation className="w-4 h-4" />} className="w-full">
                Get Directions
              </Button>
            </a>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl border border-brand-border/50 p-6 shadow-sm">
            <h3 className="font-heading font-semibold text-brand-primary text-lg mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-brand-accent" /> Contact
            </h3>
            <div className="space-y-3 text-sm text-brand-text/80">
              <p><span className="font-semibold text-brand-primary">Phone:</span> <a href="tel:9340486840">+91 93404 86840</a></p>
              <p><span className="font-semibold text-brand-primary">Alternate Phone:</span> <a href="tel:9074912742">+91 90749 12742</a></p>
              <p><span className="font-semibold text-brand-primary">Email:</span> <a href="mailto:kstradingco88@gmail.com">kstradingco88@gmail.com</a></p>
              <p><span className="font-semibold text-brand-primary"><a href="https://wa.me/919340486840">WhatsApp: +91 93404 86840</a></span></p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-2xl border border-brand-border/50 p-6 shadow-sm">
            <h3 className="font-heading font-semibold text-brand-primary text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-accent" /> Store Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-brand-text/80">
                <span>Monday - Sunday</span>
                <span className="font-semibold text-brand-primary">10:00 AM - 05:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
