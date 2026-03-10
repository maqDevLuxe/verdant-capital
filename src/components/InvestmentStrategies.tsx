import { motion } from "framer-motion";
import { Building2, TrendingUp, Globe } from "lucide-react";

const strategies = [
  {
    icon: Building2,
    title: "Core Plus",
    subtitle: "Stabilized Assets",
    description: "Targeting high-quality, income-producing properties in prime metropolitan markets with value-add potential through strategic repositioning.",
    target: "8-12% Net IRR",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&q=80",
  },
  {
    icon: TrendingUp,
    title: "Value-Add",
    subtitle: "Opportunistic Growth",
    description: "Acquiring underperforming assets in high-growth corridors, implementing capital improvements to unlock substantial value appreciation.",
    target: "14-18% Net IRR",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=600&q=80",
  },
  {
    icon: Globe,
    title: "Development",
    subtitle: "Ground-Up Projects",
    description: "Partnering with premier developers on select ground-up opportunities in supply-constrained markets with favorable demographic trends.",
    target: "18-25% Net IRR",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
];

const InvestmentStrategies = () => (
  <section className="bg-background section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <div className="geometric-line mx-auto mb-4" />
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Investment Strategies</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Our disciplined approach spans the risk-return spectrum, offering institutional investors access to curated real estate opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {strategies.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group border border-border hover:border-gold/40 transition-all duration-500 overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <s.icon className="w-8 h-8 text-gold mb-4" strokeWidth={1} />
              <p className="font-body text-xs text-gold tracking-[0.2em] uppercase mb-1">{s.subtitle}</p>
              <h3 className="font-display text-2xl text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
              <div className="pt-4 border-t border-border">
                <span className="font-body text-xs text-muted-foreground tracking-wider uppercase">Target Return</span>
                <p className="font-display text-lg text-gold mt-1">{s.target}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InvestmentStrategies;
