import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Vertex Capital has consistently delivered institutional-quality returns. Their disciplined approach to underwriting and asset management is unmatched in the industry.",
    name: "Richard H. Sterling",
    title: "CIO, Meridian Pension Fund",
  },
  {
    quote: "The transparency and reporting standards at Vertex exceed our expectations. Their quarterly updates provide the level of detail our board requires.",
    name: "Catherine M. Whitfield",
    title: "Managing Director, Pacific Family Office",
  },
  {
    quote: "We've partnered with Vertex across three fund vintages. Their ability to source and execute complex transactions is a genuine competitive advantage.",
    name: "James K. Thornton III",
    title: "Partner, Atlas Endowment Group",
  },
];

const Testimonials = () => (
  <section className="bg-forest-dark section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <div className="geometric-line mx-auto mb-4" />
        <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-4">Investor Testimonials</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-8 border border-gold/10"
          >
            <Quote className="w-8 h-8 text-gold/40 mb-4" />
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed mb-8 italic">
              "{t.quote}"
            </p>
            <div className="pt-4 border-t border-gold/10">
              <p className="font-display text-gold text-sm">{t.name}</p>
              <p className="font-body text-primary-foreground/40 text-xs mt-1">{t.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
