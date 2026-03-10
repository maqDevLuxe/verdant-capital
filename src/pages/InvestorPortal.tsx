import CorporateNavbar from "@/components/CorporateNavbar";
import { motion } from "framer-motion";
import { Lock, FileText, BarChart3, Download, User, KeyRound } from "lucide-react";
import { useState } from "react";

const InvestorPortal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <CorporateNavbar />

      <section className="min-h-screen bg-forest-dark flex items-center pt-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Info */}
            <div>
              <div className="geometric-line mb-4" />
              <h1 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
                Investor <span className="text-gold-gradient">Portal</span>
              </h1>
              <p className="font-body text-primary-foreground/60 text-lg mb-10 leading-relaxed">
                Secure access to your investment dashboard, performance reports, capital account statements, and fund documentation.
              </p>

              <div className="space-y-6">
                {[
                  { icon: BarChart3, title: "Performance Dashboard", desc: "Real-time portfolio analytics and NAV tracking" },
                  { icon: FileText, title: "Quarterly Reports", desc: "Detailed fund performance and market commentary" },
                  { icon: Download, title: "Tax Documents", desc: "K-1s, capital account statements, and distributions" },
                  { icon: Lock, title: "256-bit Encryption", desc: "Bank-grade security for all investor data" },
                ].map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <f.icon className="w-5 h-5 text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="font-body text-sm text-primary-foreground">{f.title}</p>
                      <p className="font-body text-xs text-primary-foreground/40">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="border border-gold/20 p-10 md:p-12 max-w-md mx-auto w-full"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center">
                  <KeyRound className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-display text-lg text-primary-foreground">Secure Login</p>
                  <p className="font-body text-xs text-primary-foreground/40">Authorized investors only</p>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="font-body text-xs text-primary-foreground/50 tracking-wider uppercase mb-2 block">
                    Email Address
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border border-gold/20 text-primary-foreground font-body text-sm px-10 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-primary-foreground/20"
                      placeholder="investor@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs text-primary-foreground/50 tracking-wider uppercase mb-2 block">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent border border-gold/20 text-primary-foreground font-body text-sm px-10 py-3 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-primary-foreground/20"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gold text-forest-dark font-body text-sm tracking-wider uppercase hover:bg-gold-light transition-colors"
                >
                  Access Portal
                </button>

                <div className="flex justify-between">
                  <a href="#" className="font-body text-xs text-gold/50 hover:text-gold transition-colors">Forgot Password?</a>
                  <a href="#" className="font-body text-xs text-gold/50 hover:text-gold transition-colors">Request Access</a>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-gold/10 text-center">
                <p className="font-body text-[10px] text-primary-foreground/20">
                  Protected by 256-bit SSL encryption. For assistance, contact investor relations at ir@vertexcapital.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InvestorPortal;
