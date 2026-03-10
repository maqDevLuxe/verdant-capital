import { motion } from "framer-motion";
import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

const protocols = [
  { icon: Shield, title: "Portfolio Diversification", desc: "Geographic, sector, and tenant diversification to mitigate concentration risk across all investment strategies." },
  { icon: Lock, title: "Capital Preservation", desc: "Conservative leverage ratios and comprehensive hedging strategies to protect downside in adverse market conditions." },
  { icon: Eye, title: "Continuous Monitoring", desc: "Real-time portfolio surveillance with quarterly stress testing and scenario analysis against historical market disruptions." },
  { icon: CheckCircle, title: "Regulatory Compliance", desc: "Full adherence to SEC, FINRA, and international regulatory frameworks with independent third-party auditing." },
];

const RiskManagement = () => (
  <section className="bg-cream section-padding">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="geometric-line mb-4" />
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Risk Management Protocol
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
            Our institutional risk management framework is designed to protect investor capital while pursuing attractive risk-adjusted returns.
          </p>
          <img
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&q=80"
            alt="Risk management"
            className="w-full h-64 object-cover border border-border"
          />
        </div>

        <div className="space-y-6">
          {protocols.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 border border-border bg-background hover:border-gold/30 transition-colors"
            >
              <p.icon className="w-8 h-8 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h4 className="font-display text-lg text-foreground mb-1">{p.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RiskManagement;
