import { motion } from "framer-motion";

const partners = [
  "Goldman Sachs", "Morgan Stanley", "BlackRock", "JP Morgan",
  "Brookfield", "KKR", "Carlyle Group", "Apollo Global"
];

const InstitutionalPartners = () => (
  <section className="bg-cream section-padding">
    <div className="container mx-auto text-center">
      <p className="font-body text-sm text-muted-foreground tracking-[0.3em] uppercase mb-10">
        Trusted by Leading Institutional Investors
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {partners.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="py-4 px-6 text-center"
          >
            <span className="font-display text-lg text-foreground/30 tracking-wider">{name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InstitutionalPartners;
