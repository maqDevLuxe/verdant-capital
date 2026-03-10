import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { city: "New York", x: 28, y: 35, value: "$1.2B" },
  { city: "London", x: 48, y: 28, value: "$890M" },
  { city: "Singapore", x: 76, y: 55, value: "$640M" },
  { city: "Dubai", x: 60, y: 42, value: "$420M" },
  { city: "Sydney", x: 84, y: 72, value: "$310M" },
  { city: "Frankfurt", x: 50, y: 30, value: "$280M" },
  { city: "Tokyo", x: 83, y: 35, value: "$440M" },
];

const GlobalReach = () => (
  <section className="bg-forest-dark section-padding overflow-hidden">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <div className="geometric-line mx-auto mb-4" />
        <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-4">Global Portfolio Reach</h2>
        <p className="font-body text-primary-foreground/60 max-w-2xl mx-auto">
          Strategic presence across twelve major markets with $4.2 billion in assets under management.
        </p>
      </div>

      {/* Map Visualization */}
      <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] border border-gold/10">
        {/* Grid lines */}
        {[...Array(8)].map((_, i) => (
          <div key={`h-${i}`} className="absolute w-full h-px bg-gold/5" style={{ top: `${(i + 1) * 11}%` }} />
        ))}
        {[...Array(10)].map((_, i) => (
          <div key={`v-${i}`} className="absolute h-full w-px bg-gold/5" style={{ left: `${(i + 1) * 9}%` }} />
        ))}

        {locations.map((loc, i) => (
          <motion.div
            key={loc.city}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring" }}
            className="absolute group cursor-pointer"
            style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className="relative">
              <div className="w-3 h-3 bg-gold rounded-full animate-pulse-dot" />
              <div className="absolute -inset-3 border border-gold/20 rounded-full" />
              <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-forest-dark border border-gold/20 px-3 py-2 whitespace-nowrap z-10">
                <p className="font-display text-sm text-gold">{loc.city}</p>
                <p className="font-body text-xs text-primary-foreground/50">{loc.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Location List */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-12">
        {locations.map((loc) => (
          <div key={loc.city} className="text-center py-3 border border-gold/10">
            <MapPin className="w-4 h-4 text-gold mx-auto mb-1" strokeWidth={1.5} />
            <p className="font-body text-xs text-primary-foreground/70">{loc.city}</p>
            <p className="font-display text-sm text-gold">{loc.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalReach;
