import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function StoreLocatorPage() {
  return (
    <div className="flex flex-col flex-1 pb-20">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto w-full px-4 pt-8 pb-6 md:px-8">
        <div className="text-[10px] font-bold text-brand-text/50 uppercase tracking-widest mb-2">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link> / Store Locator
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-primary font-heading">
          Visit Our Store
        </h1>
        <p className="text-sm text-brand-text/70 mt-2 max-w-xl">
          Come visit us at our showroom in Gwalior. We stock the full range of Sentini Flopipes and Johnson&apos;s Pedders products.
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left: Map */}
        <div className="flex-1 rounded-2xl overflow-hidden border border-brand-border/50 shadow-sm bg-white min-h-[400px] lg:min-h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d371.3723121338518!2d78.22375409293994!3d26.266931819122416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c77cbcb628c1%3A0x5d89e0ad2bd0301a!2sKhatu%20Shyam%20Trading%20Co.!5e0!3m2!1sen!2sin!4v1782753549477!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Khatu Shyam Trading Co. Location"
          />
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
              <p><span className="font-semibold text-brand-primary">Phone:</span> +91 98765 43210</p>
              <p><span className="font-semibold text-brand-primary">Email:</span> support@khatushyamtrading.com</p>
              <p><span className="font-semibold text-brand-primary">WhatsApp:</span> +91 98765 43210</p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-2xl border border-brand-border/50 p-6 shadow-sm">
            <h3 className="font-heading font-semibold text-brand-primary text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-accent" /> Store Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-brand-text/80">
                <span>Monday - Saturday</span>
                <span className="font-semibold text-brand-primary">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between text-brand-text/80">
                <span>Sunday</span>
                <span className="font-semibold text-red-500">Closed</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
