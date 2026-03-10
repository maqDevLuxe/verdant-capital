import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const assets = [
  {
    name: "One Manhattan West",
    type: "Class A Office",
    location: "New York, NY",
    size: "2.1M SF",
    status: "Active",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&q=80",
  },
  {
    name: "Pacific Heights Residences",
    type: "Luxury Multifamily",
    location: "San Francisco, CA",
    size: "420 Units",
    status: "Active",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
  },
  {
    name: "Meridian Logistics Hub",
    type: "Industrial / Logistics",
    location: "Dallas, TX",
    size: "850K SF",
    status: "Pre-Offering",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    name: "The Canary Wharf Collection",
    type: "Mixed-Use",
    location: "London, UK",
    size: "1.4M SF",
    status: "Active",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80",
  },
];

const AssetOfferings = () => (
  <section className="bg-cream section-padding">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
        <div>
          <div className="geometric-line mb-4" />
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Current Asset Offerings</h2>
          <p className="font-body text-muted-foreground max-w-lg">
            Select investment opportunities currently available to qualified institutional investors.
          </p>
        </div>
        <a href="#" className="font-body text-sm text-gold tracking-wider uppercase mt-4 md:mt-0 inline-flex items-center gap-1 hover:text-gold-dark transition-colors">
          View All Assets <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {assets.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col sm:flex-row border border-border bg-background overflow-hidden hover:border-gold/30 transition-colors duration-300"
          >
            <div className="sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
              <img src={a.image} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-body tracking-wider uppercase ${a.status === 'Active' ? 'bg-forest text-primary-foreground' : 'bg-gold/20 text-gold-dark'}`}>
                    {a.status}
                  </span>
                  <span className="font-body text-xs text-muted-foreground">{a.type}</span>
                </div>
                <h4 className="font-display text-xl text-foreground mb-1">{a.name}</h4>
                <p className="font-body text-sm text-muted-foreground">{a.location}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-border flex justify-between items-center">
                <span className="font-body text-xs text-muted-foreground">{a.size}</span>
                <ArrowUpRight size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AssetOfferings;
