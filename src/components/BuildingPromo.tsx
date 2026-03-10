import { motion } from "framer-motion";

const BuildingPromo = () => (
  <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1920&q=80"
      alt="Modern corporate building"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-forest-dark/60" />
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl px-4"
      >
        <div className="geometric-line mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-4">
          Building Legacies Through <span className="text-gold-gradient">Real Assets</span>
        </h2>
        <p className="font-body text-primary-foreground/60 text-lg">
          Every acquisition represents our commitment to creating enduring value for our investors and communities.
        </p>
      </motion.div>
    </div>
  </section>
);

export default BuildingPromo;
