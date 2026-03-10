import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const DataNodes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-gold/30 animate-pulse-dot"
        style={{
          left: `${10 + (i * 7.5) % 85}%`,
          top: `${15 + (i * 13) % 70}%`,
          animationDelay: `${i * 0.4}s`,
        }}
      />
    ))}
    {[...Array(6)].map((_, i) => (
      <div
        key={`line-${i}`}
        className="absolute h-px bg-gold/10"
        style={{
          left: `${5 + i * 15}%`,
          top: `${20 + i * 12}%`,
          width: `${60 + i * 10}px`,
          transform: `rotate(${-30 + i * 15}deg)`,
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-forest-dark overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <DataNodes />

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="geometric-line" />
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase">
              Institutional Real Estate
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6"
          >
            Strategic Capital.{" "}
            <span className="text-gold-gradient">Enduring Value.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-primary-foreground/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Vertex Capital Group delivers institutional-grade real estate investment
            strategies across global markets, targeting superior risk-adjusted returns
            for qualified investors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/strategy"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-forest-dark font-body text-sm tracking-wider uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Our Strategy <ArrowRight size={16} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-colors duration-300"
            >
              View Portfolio <TrendingUp size={16} />
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md"
          >
            {[
              { value: "$4.2B", label: "AUM" },
              { value: "18.7%", label: "Avg. IRR" },
              { value: "12", label: "Global Markets" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl md:text-3xl text-gold">{stat.value}</div>
                <div className="font-body text-xs text-primary-foreground/40 tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
