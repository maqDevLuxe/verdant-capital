import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const areaData = [
  { year: "2018", fund: 8.2, benchmark: 6.1 },
  { year: "2019", fund: 12.4, benchmark: 7.8 },
  { year: "2020", fund: 6.1, benchmark: 2.3 },
  { year: "2021", fund: 22.7, benchmark: 14.2 },
  { year: "2022", fund: 14.3, benchmark: 8.9 },
  { year: "2023", fund: 18.9, benchmark: 10.1 },
  { year: "2024", fund: 16.2, benchmark: 9.5 },
];

const barData = [
  { sector: "Office", allocation: 28 },
  { sector: "Multifamily", allocation: 32 },
  { sector: "Industrial", allocation: 22 },
  { sector: "Retail", allocation: 8 },
  { sector: "Mixed-Use", allocation: 10 },
];

const PerformanceMetrics = () => (
  <section className="bg-background section-padding">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <div className="geometric-line mx-auto mb-4" />
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Financial Performance</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Consistent outperformance against institutional benchmarks across market cycles.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 border border-border"
        >
          <h4 className="font-display text-xl text-foreground mb-2">Fund vs. Benchmark Returns (%)</h4>
          <p className="font-body text-xs text-muted-foreground mb-6 tracking-wider uppercase">Annual Net IRR</p>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={areaData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150,10%,88%)" />
              <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: "'DM Sans'" }} stroke="hsl(160,8%,45%)" />
              <YAxis tick={{ fontSize: 12, fontFamily: "'DM Sans'" }} stroke="hsl(160,8%,45%)" />
              <Tooltip contentStyle={{ fontFamily: "'DM Sans'", fontSize: 12, border: "1px solid hsl(150,10%,88%)" }} />
              <Area type="monotone" dataKey="fund" stroke="hsl(43,72%,52%)" fill="hsl(43,72%,52%,0.15)" name="Vertex Fund" strokeWidth={2} />
              <Area type="monotone" dataKey="benchmark" stroke="hsl(156,35%,18%)" fill="hsl(156,35%,18%,0.1)" name="Benchmark" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 border border-border"
        >
          <h4 className="font-display text-xl text-foreground mb-2">Sector Allocation (%)</h4>
          <p className="font-body text-xs text-muted-foreground mb-6 tracking-wider uppercase">Current Portfolio Mix</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(150,10%,88%)" />
              <XAxis dataKey="sector" tick={{ fontSize: 11, fontFamily: "'DM Sans'" }} stroke="hsl(160,8%,45%)" />
              <YAxis tick={{ fontSize: 12, fontFamily: "'DM Sans'" }} stroke="hsl(160,8%,45%)" />
              <Tooltip contentStyle={{ fontFamily: "'DM Sans'", fontSize: 12 }} />
              <Bar dataKey="allocation" fill="hsl(156,35%,18%)" name="Allocation %" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PerformanceMetrics;
