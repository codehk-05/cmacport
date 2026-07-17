import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Mail, Award, Palette, Layers, Compass, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const designLayers = [
    { id: 'grid', title: '01 / Layout Grid', desc: 'Precision alignment & ratio spacing', color: 'text-brand-cyan', bg: 'bg-brand-cyan/20' },
    { id: 'vector', title: '02 / Vector Forms', desc: 'Clean paths and geometric curves', color: 'text-brand-magenta', bg: 'bg-brand-magenta/20' },
    { id: 'typography', title: '03 / Typography', desc: 'Expressive hierarchy & font pairings', color: 'text-brand-yellow', bg: 'bg-brand-yellow/20' },
    { id: 'palette', title: '04 / Color Theory', desc: 'Perfect CMYK/RGB color balance', color: 'text-white', bg: 'bg-white/10' },
  ];

  return (
    <section id="about" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-brand-cyan/5 via-brand-magenta/5 to-transparent blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text & Brand Introductions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Lead Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-transparent border border-brand-charcoal text-xs font-mono text-brand-charcoal mb-6 uppercase tracking-wider"
            >
              <Palette className="w-3.5 h-3.5 animate-spin-slow text-brand-magenta" />
              <span>Lead Graphic Designer & Visual Artist</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold text-brand-charcoal tracking-tight leading-[1.05] mb-6"
            >
              We shape ideas into <br />
              <span className="text-stroke-editorial text-brand-charcoal italic pr-2">
                Visual Masterpieces.
              </span>
            </motion.h1>

            {/* Tagline & Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-slate max-w-xl mb-8 leading-relaxed font-sans font-normal"
            >
              {PERSONAL_INFO.tagline} Powered by <strong>CMAC Designs</strong>, led by <strong>{PERSONAL_INFO.name}</strong>, we craft high-end web designs, striking posters, album art, digital invitations, and timeless wedding cards.
            </motion.p>

            {/* Dual Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-none font-bold text-sm tracking-widest bg-brand-charcoal text-brand-key hover:bg-transparent hover:text-brand-charcoal border border-brand-charcoal transition-all duration-300 flex items-center justify-center gap-2 group uppercase font-mono"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#quote"
                className="w-full sm:w-auto px-8 py-4 rounded-none font-bold text-sm tracking-widest bg-transparent border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-key transition-all duration-300 flex items-center justify-center gap-2 uppercase font-mono"
              >
                Get Custom Quote
              </a>
            </motion.div>

            {/* Quick Contact Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t border-brand-charcoal/10 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-brand-dark border border-brand-charcoal/15 flex items-center justify-center text-brand-cyan">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-slate font-mono uppercase tracking-widest leading-none">Phone Contact</p>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-brand-charcoal hover:text-brand-cyan transition-colors font-mono">
                    +91 {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-brand-dark border border-brand-charcoal/15 flex items-center justify-center text-brand-magenta">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-slate font-mono uppercase tracking-widest leading-none">Email Address</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-brand-charcoal hover:text-brand-magenta transition-colors font-mono">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Graphic Design Studio Layer Mockup */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Interactive Illustrator/Photoshop style canvas frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-none bg-brand-dark-card border border-brand-charcoal/15 p-5 shadow-lg flex flex-col overflow-hidden"
            >
              {/* Illustrator-like Tool Header Bar */}
              <div className="flex items-center justify-between border-b border-brand-charcoal/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-magenta"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow"></div>
                  <span className="text-[10px] text-brand-slate font-mono uppercase tracking-wider ml-2">cmac_workspace.ai</span>
                </div>
                <div className="flex items-center gap-1.5 bg-brand-dark px-2 py-0.5 rounded-none border border-brand-charcoal/10 font-mono text-[9px] text-brand-charcoal">
                  <Layers className="w-2.5 h-2.5 text-brand-magenta" />
                  <span>LAYERS ACTIVE</span>
                </div>
              </div>

              {/* Central Vector Graphics Stage / Canvas */}
              <div className="relative flex-1 bg-brand-key rounded-none border border-brand-charcoal/10 overflow-hidden flex items-center justify-center">
                {/* 1. Grid Layer (Cyan overlay when active/hovered) */}
                <div className={`absolute inset-0 bg-grid-pattern transition-opacity duration-300 ${
                  activeLayer === 'grid' ? 'opacity-90' : 'opacity-35'
                }`}></div>

                {/* 2. Vector Forms Layer (Custom animated vector paths) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  activeLayer === 'vector' ? 'scale-105 saturate-150' : 'opacity-85'
                }`}>
                  <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="65"
                      stroke={activeLayer === 'vector' ? '#ff007f' : 'rgba(255, 0, 127, 0.4)'}
                      strokeWidth={activeLayer === 'vector' ? '3' : '1.5'}
                      strokeDasharray="5, 5"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.polygon
                      points="100,45 155,140 45,140"
                      stroke={activeLayer === 'vector' ? '#00f0ff' : 'rgba(0, 240, 255, 0.3)'}
                      strokeWidth={activeLayer === 'vector' ? '3' : '1.5'}
                      animate={{ rotate: -360 }}
                      style={{ transformOrigin: '100px 108px' }}
                      transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.rect
                      x="70"
                      y="70"
                      width="60"
                      height="60"
                      stroke={activeLayer === 'vector' ? '#ffdf00' : 'rgba(255, 223, 0, 0.2)'}
                      strokeWidth={activeLayer === 'vector' ? '2' : '1'}
                      animate={{ scale: [0.95, 1.05, 0.95] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </svg>
                </div>

                {/* 3. Typography Overlay */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-300 pointer-events-none ${
                  activeLayer === 'typography' ? 'scale-110' : 'scale-100'
                }`}>
                  <h2 className="font-display font-black text-2xl tracking-widest text-brand-charcoal leading-none drop-shadow-sm">
                    CMAC
                  </h2>
                  <p className="font-mono text-[9px] tracking-[0.3em] text-brand-slate uppercase mt-1 leading-none">
                    Aesthetics Lab
                  </p>
                </div>

                {/* 4. Color Palette Accents (CMYK color drop badges) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-brand-dark-card/90 backdrop-blur-sm px-2.5 py-1 rounded-none border border-brand-charcoal/10">
                  <div className={`w-3.5 h-3.5 rounded-full bg-brand-cyan border border-black/50 ${activeLayer === 'palette' ? 'scale-125 shadow-[0_0_8px_#0a8494]' : ''} transition-all duration-300`}></div>
                  <div className={`w-3.5 h-3.5 rounded-full bg-brand-magenta border border-black/50 ${activeLayer === 'palette' ? 'scale-125 shadow-[0_0_8px_#be123c]' : ''} transition-all duration-300`}></div>
                  <div className={`w-3.5 h-3.5 rounded-full bg-brand-yellow border border-black/50 ${activeLayer === 'palette' ? 'scale-125 shadow-[0_0_8px_#a16207]' : ''} transition-all duration-300`}></div>
                  <div className={`w-3.5 h-3.5 rounded-full bg-brand-charcoal border border-white/20 ${activeLayer === 'palette' ? 'scale-125' : ''} transition-all duration-300`}></div>
                </div>

                {/* Corner grid calibration markers */}
                <div className="absolute top-2 left-2 font-mono text-[8px] text-brand-slate">0.0 PX</div>
                <div className="absolute top-2 right-2 font-mono text-[8px] text-brand-slate">W: 412</div>
                <div className="absolute bottom-2 left-2 font-mono text-[8px] text-brand-slate">H: 515</div>
                <div className="absolute bottom-2 right-2 font-mono text-[8px] text-brand-cyan animate-pulse">● SAFE</div>
              </div>

              {/* User Guide Interactive Panel */}
              <div className="mt-4 pt-3 border-t border-brand-charcoal/10">
                <span className="text-[10px] font-mono text-brand-slate tracking-wide uppercase block mb-2.5">
                  Hover layers to isolate:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {designLayers.map((layer) => (
                    <button
                      key={layer.id}
                      onMouseEnter={() => setActiveLayer(layer.id)}
                      onMouseLeave={() => setActiveLayer(null)}
                      className={`flex flex-col text-left p-2 rounded-none border transition-all ${
                        activeLayer === layer.id
                          ? `bg-brand-dark border-brand-charcoal shadow-sm`
                          : 'bg-transparent border-brand-charcoal/10 hover:border-brand-charcoal/20'
                      }`}
                    >
                      <span className={`text-[10px] font-bold font-display ${layer.color === 'text-white' ? 'text-brand-charcoal' : layer.color}`}>
                        {layer.title}
                      </span>
                      <span className="text-[8px] text-brand-slate font-sans leading-tight mt-0.5 font-medium">
                        {layer.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Float assets */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-brand-dark-card rounded-none border border-brand-charcoal/15 backdrop-blur-sm flex flex-col items-center justify-center p-2 text-center shadow-lg -rotate-12 animate-float pointer-events-none">
              <Compass className="w-5 h-5 text-brand-magenta mb-1" />
              <span className="text-[8px] font-mono font-bold uppercase text-brand-charcoal leading-none">Originals</span>
            </div>
            
            <div className="absolute -bottom-4 -right-4 w-24 h-20 bg-brand-dark-card rounded-none border border-brand-charcoal/15 backdrop-blur-sm flex flex-col items-center justify-center p-2 text-center shadow-lg rotate-12 animate-float pointer-events-none" style={{ animationDelay: '2s' }}>
              <Award className="w-5 h-5 text-brand-cyan mb-1" />
              <span className="text-[8px] font-mono font-bold uppercase text-brand-charcoal leading-none">Pixel Perfect</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
