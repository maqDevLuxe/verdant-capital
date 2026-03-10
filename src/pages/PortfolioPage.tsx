import CorporateNavbar from "@/components/CorporateNavbar";
import ProspectusCTA from "@/components/ProspectusCTA";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const portfolio = [
  { name: "One Manhattan West", type: "Class A Office", location: "New York, NY", size: "2.1M SF", year: "2019", image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&q=80" },
  { name: "Pacific Heights Residences", type: "Luxury Multifamily", location: "San Francisco, CA", size: "420 Units", year: "2020", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" },
  { name: "Meridian Logistics Hub", type: "Industrial", location: "Dallas, TX", size: "850K SF", year: "2021", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
  { name: "The Canary Wharf Collection", type: "Mixed-Use", location: "London, UK", size: "1.4M SF", year: "2018", image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80" },
  { name: "Marina Bay Tower", type: "Class A Office", location: "Singapore", size: "680K SF", year: "2022", image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=600&q=80" },
  { name: "Aspen Ridge Estates", type: "Luxury Residential", location: "Denver, CO", size: "210 Units", year: "2023", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" },
];

const stats = [
  { label: "Total AUM", value: "$4.2B" },
  { label: "Properties", value: "127" },
  { label: "Markets", value: "12" },
  { label: "Avg. Occupancy", value: "94.2%" },
];

const PortfolioPage = () => (
  <main>
    <CorporateNavbar />

    <section className="relative pt-32 pb-20 bg-forest-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl">
          <div className="geometric-line mb-4" />
          <h1 className="font-display text-4xl md:text-6xl text-primary-foreground mb-4">
            Our <span className="text-gold-gradient">Portfolio</span>
          </h1>
          <p className="font-body text-primary-foreground/60 text-lg">
            A curated collection of institutional-grade real estate assets across global gateway markets.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((s) => (
            <div key={s.label} className="border border-gold/10 p-5 text-center">
              <p className="font-display text-2xl text-gold">{s.value}</p>
              <p className="font-body text-xs text-primary-foreground/40 tracking-wider uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-background section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group border border-border hover:border-gold/30 transition-colors duration-300 cursor-pointer"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 right-3 bg-forest-dark/80 px-3 py-1">
                  <span className="font-body text-[10px] text-gold tracking-wider uppercase">{p.type}</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl text-foreground mb-2 group-hover:text-forest-light transition-colors">{p.name}</h4>
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin size={12} />
                  <span className="font-body text-sm">{p.location}</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border">
                  <span className="font-body text-xs text-muted-foreground">{p.size} · Acquired {p.year}</span>
                  <ArrowUpRight size={14} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <ProspectusCTA />
  </main>
);

export default PortfolioPage;
