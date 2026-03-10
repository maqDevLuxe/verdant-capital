import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const useCounter = (end: number, duration: number, inView: boolean, decimals = 0) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(decimals)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration, decimals]);
  return count;
};

const counters = [
  { value: 4.2, suffix: "B", prefix: "$", label: "Assets Under Management", decimals: 1 },
  { value: 18.7, suffix: "%", prefix: "", label: "Average Annual ROI", decimals: 1 },
  { value: 127, suffix: "", prefix: "", label: "Global Assets Managed", decimals: 0 },
  { value: 12, suffix: "", prefix: "", label: "International Markets", decimals: 0 },
];

const AnimatedCounters = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-forest-dark section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((c, i) => {
            const count = useCounter(c.value, 2000 + i * 200, inView, c.decimals);
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="text-center py-6 border border-gold/10"
              >
                <div className="font-display text-4xl md:text-5xl text-gold mb-2">
                  {c.prefix}{count}{c.suffix}
                </div>
                <div className="font-body text-xs text-primary-foreground/50 tracking-wider uppercase">
                  {c.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounters;
