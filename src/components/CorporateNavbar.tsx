import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Strategy", path: "/strategy" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Investor Portal", path: "/investor-portal" },
];

const CorporateNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-forest-dark/95 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
            <span className="font-display text-gold font-bold text-lg">V</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-primary-foreground text-lg tracking-wider">VERTEX</span>
            <span className="block text-gold/70 text-[10px] tracking-[0.3em] font-body uppercase">Capital Group</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm tracking-wider uppercase transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-gold"
                  : "text-primary-foreground/70 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/investor-portal"
            className="font-body text-sm tracking-wider uppercase px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-forest-dark transition-all duration-300"
          >
            Investor Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-forest-dark border-t border-gold/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-sm tracking-wider uppercase py-2 ${
                    location.pathname === link.path ? "text-gold" : "text-primary-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/investor-portal"
                onClick={() => setIsOpen(false)}
                className="font-body text-sm tracking-wider uppercase px-6 py-2.5 border border-gold text-gold text-center mt-2"
              >
                Investor Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default CorporateNavbar;
