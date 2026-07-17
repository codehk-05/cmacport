import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ExternalLink, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-key relative overflow-hidden">
      {/* Visual background overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Text */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-block text-[10px] font-mono tracking-[0.3em] uppercase px-4 py-1.5 rounded-none bg-transparent text-brand-cyan border border-brand-cyan mb-4">
              Get In Touch
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-black text-brand-charcoal tracking-tight mb-4">
              Let's Create Something Epic
            </h3>
            <p className="text-sm sm:text-base text-brand-slate leading-relaxed mb-8">
              Based in beautiful <strong>Kerala, India</strong>, CMAC Designs is available for remote visual consultations worldwide and local print deliverables. Get in touch directly using our digital coordinates.
            </p>

            {/* Structured Info Card Nodes */}
            <div className="space-y-4">
              {/* Phone Node */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-none bg-brand-dark border border-brand-charcoal/10 hover:border-brand-charcoal hover:bg-brand-dark-card transition-all group"
              >
                <div className="w-12 h-12 rounded-none bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-mono tracking-widest text-brand-slate uppercase leading-none">CALL OR WHATSAPP</p>
                  <p className="text-base font-bold font-mono text-brand-charcoal mt-1 group-hover:text-brand-cyan transition-colors">+91 {PERSONAL_INFO.phone}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-slate ml-auto group-hover:text-brand-charcoal transition-colors" />
              </a>

              {/* Email Node */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-none bg-brand-dark border border-brand-charcoal/10 hover:border-brand-charcoal hover:bg-brand-dark-card transition-all group"
              >
                <div className="w-12 h-12 rounded-none bg-brand-magenta/10 border border-brand-magenta/20 flex items-center justify-center text-brand-magenta group-hover:bg-brand-magenta group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-mono tracking-widest text-brand-slate uppercase leading-none">EMAIL ENQUIRIES</p>
                  <p className="text-base font-bold font-mono text-brand-charcoal mt-1 group-hover:text-brand-magenta transition-colors">{PERSONAL_INFO.email}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-slate ml-auto group-hover:text-brand-charcoal transition-colors" />
              </a>

              {/* Location Node */}
              <div className="flex items-center gap-4 p-4 rounded-none bg-brand-dark border border-brand-charcoal/10">
                <div className="w-12 h-12 rounded-none bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-mono tracking-widest text-brand-slate uppercase leading-none">STUDIO LOCATION</p>
                  <p className="text-base font-bold text-brand-charcoal mt-1">{PERSONAL_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Custom stylized dark canvas map layout */}
          <div className="lg:col-span-7 relative w-full aspect-[4/3] rounded-none bg-brand-dark-card border border-brand-charcoal/10 p-2 overflow-hidden shadow-sm flex flex-col justify-between">
            {/* Map Frame header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-brand-charcoal/10">
              <div className="flex items-center gap-2 text-[10px] font-mono text-brand-slate uppercase">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                <span>kerala_service_zone.map</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-600">ACTIVE CO-ORDS</span>
            </div>

            {/* Custom stylized vector graphic map representing Kerala / India map region */}
            <div className="flex-1 relative bg-[#1A1A1A] rounded-none overflow-hidden flex items-center justify-center">
              {/* Radar scanner visual animation effect */}
              <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
              
              {/* Graphic design coordinate details */}
              <svg className="w-full h-full opacity-60" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simulated contour lines */}
                <path d="M50 80 Q100 40, 180 100 T320 80 T380 180" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
                <path d="M30 180 Q150 120, 240 220 T360 260" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
                
                {/* Major radar circular rings */}
                <circle cx="200" cy="150" r="110" stroke="rgba(0, 240, 255, 0.05)" strokeWidth="1" />
                <circle cx="200" cy="150" r="70" stroke="rgba(255, 0, 127, 0.05)" strokeWidth="1" />
                <circle cx="200" cy="150" r="30" stroke="rgba(255, 223, 0, 0.08)" strokeWidth="1" />
                
                {/* Grid intersection ticks */}
                <line x1="200" y1="20" x2="200" y2="280" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="20" y1="150" x2="380" y2="150" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="3,3" />

                {/* Kerala pinpoint highlight node */}
                <g transform="translate(180, 190)">
                  {/* Ping effect ring */}
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="16"
                    stroke="#00f0ff"
                    strokeWidth="1.5"
                    fill="none"
                    animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  />
                  <circle cx="0" cy="0" r="6" fill="#ff007f" />
                  <circle cx="0" cy="0" r="2" fill="#fff" />
                </g>
              </svg>

              {/* Glowing Overlay label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-key border border-brand-charcoal/10 px-5 py-4 rounded-none text-center shadow-lg">
                <p className="font-display font-bold text-brand-charcoal text-sm">CMAC Designs HQ</p>
                <p className="text-[10px] font-mono text-brand-cyan uppercase tracking-widest mt-1">Kerala, India</p>
                <div className="mt-3 flex justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                  <span className="w-2 h-2 rounded-full bg-brand-magenta animate-pulse"></span>
                  <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                </div>
              </div>

              {/* Status footer labels */}
              <div className="absolute bottom-3 left-4 font-mono text-[9px] text-brand-slate">
                LAT: 10.8505° N • LON: 76.2711° E
              </div>
              <div className="absolute bottom-3 right-4 font-mono text-[9px] text-brand-magenta animate-pulse">
                ● ONLINE FOR DISCUSSIONS
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Footer */}
        <div className="mt-24 pt-12 border-t border-brand-charcoal/10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="font-display font-black text-base text-brand-charcoal tracking-wider">CMAC DESIGNS</span>
              <span className="text-[10px] text-brand-slate font-mono uppercase font-semibold">by Harikrishna K</span>
            </div>
            <p className="text-xs text-brand-slate mt-1.5 leading-none font-normal">
              Premium graphic and printing designs. Kerala, India.
            </p>
          </div>
          
          <div className="text-center sm:text-right">
            <p className="text-xs text-brand-slate font-normal">
              © {new Date().getFullYear()} CMAC Designs. All Rights Reserved.
            </p>
            <p className="text-[10px] text-brand-slate font-mono uppercase mt-1 leading-none font-semibold">
              Crafted with <span className="text-brand-magenta font-bold">♥</span> & CMYK vectors
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
