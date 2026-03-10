import CorporateNavbar from "@/components/CorporateNavbar";
import ProspectusCTA from "@/components/ProspectusCTA";
import { motion } from "framer-motion";
import { Target, TrendingUp, BarChart3, Shield, CheckCircle, ArrowRight } from "lucide-react";

const strategies = [
  {
    title: "Core Plus",
    icon: Target,
    target: "8–12% Net IRR",
    horizon: "5–7 Years",
    minInvestment: "$5M",
    description: "Stabilized, income-producing assets in primary markets with selective value-add enhancements.",
    points: ["Class A office and multifamily", "95%+ occupancy at acquisition", "Strategic capital improvements", "Stable cash yield with modest appreciation"],
  },
  {
    title: "Value-Add",
    icon: TrendingUp,
    target: "14–18% Net IRR",
    horizon: "3–5 Years",
    minInvestment: "$2.5M",
    description: "Underperforming assets in high-growth corridors repositioned through active management.",
    points: ["Below-market rents with upside", "Physical renovation programs", "Operational efficiency gains", "Exit to core buyers"],
  },
  {
    title: "Opportunistic Development",
    icon: BarChart3,
    target: "18–25% Net IRR",
    horizon: "3–4 Years",
    minInvestment: "$10M",
    description: "Select ground-up development in supply-constrained markets with strong demographic tailwinds.",
    points: ["Pre-leased or pre-sold projects", "Experienced development partners", "Phased capital deployment", "Maximum value creation"],
  },
];

const StrategyPage = () => (
  <main>
    <CorporateNavbar />

    {/* Hero */}
    <section className="relative pt-32 pb-20 bg-forest-dark">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl">
          <div className="geometric-line mb-4" />
          <h1 className="font-display text-4xl md:text-6xl text-primary-foreground mb-4">
            Investment <span className="text-gold-gradient">Strategy</span>
          </h1>
          <p className="font-body text-primary-foreground/60 text-lg">
            A disciplined, research-driven framework spanning the risk-return spectrum to deliver consistent, institutional-quality performance.
          </p>
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="bg-background section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="geometric-line mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Our Investment Philosophy</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Vertex Capital Group employs a fundamentals-first approach rooted in deep market intelligence, proprietary analytics, and decades of operational expertise. Every investment decision is filtered through our rigorous underwriting framework.
            </p>
            <div className="space-y-4">
              {["Macro-informed asset selection", "Conservative leverage discipline", "Active asset management", "Alignment of interests with investors"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-gold flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
            alt="Strategy meeting"
            className="w-full h-80 object-cover border border-border"
          />
        </div>
      </div>
    </section>

    {/* Strategy Cards */}
    <section className="bg-cream section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Our Three Pillars</h2>
        </div>
        <div className="space-y-12">
          {strategies.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid lg:grid-cols-3 gap-8 p-8 border border-border bg-background"
            >
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                </div>
                <p className="font-body text-muted-foreground mb-6">{s.description}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <ArrowRight size={12} className="text-gold" />
                      <span className="font-body text-sm text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4 border-l border-border pl-8">
                <div>
                  <p className="font-body text-xs text-muted-foreground tracking-wider uppercase">Target Return</p>
                  <p className="font-display text-xl text-gold">{s.target}</p>
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground tracking-wider uppercase">Investment Horizon</p>
                  <p className="font-display text-lg text-foreground">{s.horizon}</p>
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground tracking-wider uppercase">Minimum Investment</p>
                  <p className="font-display text-lg text-foreground">{s.minInvestment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Risk */}
    <section className="bg-forest-dark section-padding">
      <div className="container mx-auto text-center max-w-2xl">
        <Shield className="w-12 h-12 text-gold mx-auto mb-6" strokeWidth={1} />
        <h2 className="font-display text-3xl text-primary-foreground mb-4">Risk-Adjusted Focus</h2>
        <p className="font-body text-primary-foreground/60 leading-relaxed">
          We believe superior long-term returns are generated through disciplined risk management, not excessive risk-taking. Every allocation decision is stress-tested against multiple economic scenarios.
        </p>
      </div>
    </section>

    <ProspectusCTA />
  </main>
);

export default StrategyPage;
