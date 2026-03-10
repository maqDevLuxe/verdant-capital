import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ProspectusCTA = () => (
  <>
    {/* CTA Section */}
    <section className="bg-background section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center border border-border p-12 md:p-16"
        >
          <div className="geometric-line mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Request Our Investment Prospectus
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
            Qualified investors may request our comprehensive fund prospectus, including detailed performance data, investment terms, and risk disclosures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-forest text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-forest-light transition-colors"
            >
              Request Prospectus <ArrowRight size={16} />
            </a>
            <Link
              to="/investor-portal"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-forest text-forest font-body text-sm tracking-wider uppercase hover:bg-forest hover:text-primary-foreground transition-colors"
            >
              Investor Login
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-forest-dark border-t border-gold/10 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
                <span className="font-display text-gold font-bold text-lg">V</span>
              </div>
              <div>
                <span className="font-display text-primary-foreground text-lg tracking-wider">VERTEX</span>
                <span className="block text-gold/70 text-[10px] tracking-[0.3em] font-body uppercase">Capital Group</span>
              </div>
            </div>
            <p className="font-body text-primary-foreground/40 text-sm leading-relaxed">
              Institutional-grade real estate investment management since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-xs text-gold tracking-[0.2em] uppercase mb-4">Investment</h4>
            <ul className="space-y-2">
              {["Core Plus Strategy", "Value-Add Strategy", "Development", "Current Offerings"].map((l) => (
                <li key={l}><a href="#" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs text-gold tracking-[0.2em] uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Leadership Team", "Careers", "ESG & Sustainability", "Press"].map((l) => (
                <li key={l}><a href="#" className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs text-gold tracking-[0.2em] uppercase mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-gold/50" />
                <span className="font-body text-sm text-primary-foreground/50">One World Financial Center, New York, NY 10281</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold/50" />
                <span className="font-body text-sm text-primary-foreground/50">+1 (212) 555-0199</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gold/50" />
                <span className="font-body text-sm text-primary-foreground/50">ir@vertexcapital.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/30">
            © 2026 Vertex Capital Group. All rights reserved. SEC Registered Investment Adviser.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Disclosures", "Form ADV"].map((l) => (
              <a key={l} href="#" className="font-body text-xs text-primary-foreground/30 hover:text-gold/50 transition-colors">{l}</a>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 border border-gold/5">
          <p className="font-body text-[10px] text-primary-foreground/20 leading-relaxed">
            This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities.
            Securities are offered only to qualified investors through a confidential private placement memorandum. Past performance is not indicative of future results.
            All investments involve risk, including possible loss of principal.
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default ProspectusCTA;
