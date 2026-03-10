import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const reports = [
  {
    category: "Market Report",
    title: "Q4 2025 Commercial Real Estate Outlook: Navigating the Rate Environment",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    category: "White Paper",
    title: "The Institutional Case for Multifamily in Secondary Markets",
    date: "Nov 28, 2025",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
  },
  {
    category: "Research",
    title: "Industrial Logistics: Supply Chain Evolution and Real Estate Implications",
    date: "Oct 10, 2025",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168d4c?w=600&q=80",
  },
];

const MarketInsights = () => (
  <section className="bg-background section-padding">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
        <div>
          <div className="geometric-line mb-4" />
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Market Insights & Reports</h2>
          <p className="font-body text-muted-foreground max-w-lg">
            Proprietary research and analysis from our investment team.
          </p>
        </div>
        <a href="#" className="font-body text-sm text-gold tracking-wider uppercase mt-4 md:mt-0 inline-flex items-center gap-1">
          View All Reports <ArrowUpRight size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reports.map((r, i) => (
          <motion.article
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group border border-border hover:border-gold/30 transition-colors duration-300 cursor-pointer"
          >
            <div className="h-48 overflow-hidden">
              <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <span className="font-body text-[10px] text-gold tracking-[0.2em] uppercase">{r.category}</span>
              <h4 className="font-display text-lg text-foreground mt-2 mb-4 leading-snug group-hover:text-forest-light transition-colors">
                {r.title}
              </h4>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={12} />
                <span className="font-body text-xs">{r.date}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default MarketInsights;
