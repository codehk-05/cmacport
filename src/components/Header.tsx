import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Menu, X, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Interactive Studio', href: '#studio' },
    { name: 'Get Quote', href: '#quote' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-key/95 backdrop-blur-md py-4 border-b border-brand-charcoal/10 shadow-sm shadow-brand-charcoal/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Custom Vector Logo */}
          <a href="#" className="group flex items-center gap-2">
            <Logo className="h-11 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03]" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-slate hover:text-brand-charcoal transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-charcoal hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-2 text-xs font-mono text-brand-slate hover:text-brand-charcoal transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 {PERSONAL_INFO.phone}</span>
            </a>
            <a
              href="#quote"
              className="relative group overflow-hidden px-5 py-2.5 rounded-none bg-brand-charcoal border border-brand-charcoal hover:bg-transparent transition-colors duration-300"
            >
              <span className="relative text-xs font-semibold tracking-wider text-brand-key group-hover:text-brand-charcoal flex items-center gap-2 uppercase font-mono">
                <MessageSquare className="w-3.5 h-3.5 text-brand-cyan group-hover:text-brand-charcoal" />
                Start Project
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-none bg-brand-dark border border-brand-charcoal/10 text-brand-charcoal hover:text-brand-charcoal hover:bg-brand-dark-card focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-key border-b border-brand-charcoal/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-none text-base font-medium text-brand-slate hover:text-brand-charcoal hover:bg-brand-dark transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4 border-t border-brand-charcoal/10 flex flex-col gap-4">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3 text-sm font-mono text-brand-slate hover:text-brand-charcoal"
                >
                  <Phone className="w-4 h-4 text-brand-cyan" />
                  <span>+91 {PERSONAL_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 text-sm font-mono text-brand-slate hover:text-brand-charcoal"
                >
                  <Mail className="w-4 h-4 text-brand-magenta" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <a
                  href="#quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-3 px-4 rounded-none bg-brand-charcoal font-semibold text-sm text-brand-key hover:bg-transparent hover:text-brand-charcoal border border-brand-charcoal transition-all uppercase font-mono"
                >
                  Instant Quote Builder
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
