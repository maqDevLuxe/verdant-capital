import { motion } from "framer-motion";
import { BarChart3, LineChart, PieChart, Activity } from "lucide-react";

const pillars = [
  { icon: BarChart3, title: "Macroeconomic Analysis", desc: "Comprehensive evaluation of GDP growth, interest rate trajectories, and employment dynamics across target markets." },
  { icon: LineChart, title: "Supply-Demand Modeling", desc: "Proprietary models forecasting absorption rates, vacancy trends, and rent growth with institutional precision." },
  { icon: PieChart, title: "Capital Markets Research", desc: "Deep analysis of debt markets, cap rate movements, and transaction volume across all major property sectors." },
  { icon: Activity, title: "Risk Quantification", desc: "Advanced stress-testing and scenario analysis frameworks to quantify downside exposure and optimize portfolio allocation." },
];

const MarketAnalysis = () => (
  <section className="bg-forest-dark section-padding relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 right-0 w-96 h-96 border border-gold/20 rotate-45 translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border border-gold/20 rotate-12 -translate-x-32 translate-y-32" />
    </div>

    <div className="container mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="geometric-line mb-4" />
          <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-6">
            Market Analysis <span className="text-gold-gradient">Approach</span>
          </h2>
          <p className="font-body text-primary-foreground/60 text-lg leading-relaxed mb-8">
            Our investment committee leverages a multi-layered analytical framework, combining quantitative rigor with on-the-ground intelligence to identify asymmetric opportunities.
          </p>
          <div className="flex items-center gap-4 text-gold">
            <div className="w-12 h-px bg-gold" />
            <span className="font-body text-sm tracking-wider uppercase">Data-Driven Decisions</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-gold/10 hover:border-gold/30 transition-colors duration-300"
            >
              <p.icon className="w-6 h-6 text-gold mb-4" strokeWidth={1.5} />
              <h4 className="font-display text-lg text-primary-foreground mb-2">{p.title}</h4>
              <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MarketAnalysis;
