import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      
      {/* Hero Section */}
      <section 
        className="relative w-full overflow-hidden pt-24 pb-32 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80')" }}
      >
        {/* Dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-brand-background/80 md:bg-brand-background/60 backdrop-blur-[2px]" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary font-heading mb-6 max-w-4xl leading-tight">
            Premium Plumbing & Sanitary Solutions for Retail and Shop
          </h1>
          <p className="text-lg text-brand-text/90 font-medium mb-10 max-w-2xl bg-white/50 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/60">
            Authorized distributor for Sentini Flopipes and Johnson's Pedders in the Gwalior & Chambal region. 
          </p>
          
          {/* Glass Search Banner Overlay */}
          <div className="glass-panel w-full max-w-3xl rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center shadow-lg">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="flex-1 w-full px-4 py-3 bg-white/70 border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/50 text-brand-text font-medium"
            />
            <Button variant="accent" size="lg" className="w-full md:w-auto font-bold text-base">
              Search Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-brand-primary font-heading">Popular in Shop</h2>
          <Link href="/category/all-products">
            <Button variant="ghost" size="sm">View All &rarr;</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            id="1"
            title="Sentini CPVC Pipe SDR 11"
            brand="Sentini Flopipes"
            category="Pipes & Fittings"
            imageUrl=""
            unitPrice={269}
            bulkPrice={230}
            bulkMinQty={50}
            inStock={true}
            specs="1/2 inch, 3Mtr Length"
            isTradeUser={true}
          />
          <ProductCard
            id="2"
            title="Sentini UPVC SCH 40 Plain Pipe"
            brand="Sentini Flopipes"
            category="Pipes & Fittings"
            imageUrl=""
            unitPrice={4158}
            bulkPrice={3800}
            bulkMinQty={10}
            inStock={true}
            specs="2.5 inch, 3Mtr Length"
            isTradeUser={true}
          />
          <ProductCard
            id="3"
            title="Sentini SWR Pipe Double Socket"
            brand="Sentini Flopipes"
            category="Drainage System"
            imageUrl=""
            unitPrice={666}
            bulkPrice={580}
            bulkMinQty={20}
            inStock={true}
            specs="75mm, Ring Fit Type A"
            isTradeUser={true}
          />
          <ProductCard
            id="4"
            title="Johnson's Pedders Ceramic Wash Basin"
            brand="Johnson's Pedders"
            category="Sanitary Ware"
            imageUrl=""
            unitPrice={1250}
            bulkPrice={1050}
            bulkMinQty={10}
            inStock={true}
            specs="White, 18x12 inch"
            isTradeUser={true}
          />
        </div>
      </section>
    </div>
  );
}
