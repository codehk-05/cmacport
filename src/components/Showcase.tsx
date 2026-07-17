import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Layers, RefreshCw, Layout, Type, HelpCircle, Heart, CreditCard, Sparkles, Image, Check } from 'lucide-react';
import { DESIGN_TEMPLATES } from '../data';
import { DesignTemplate } from '../types';

export default function Showcase() {
  const [selectedTemplate, setSelectedTemplate] = useState<DesignTemplate>(DESIGN_TEMPLATES[0]);
  const [customText, setCustomText] = useState<string>('HARIKRISHNA K');
  const [customSubtitle, setCustomSubtitle] = useState<string>('Creative Director');
  const [accentChoice, setAccentChoice] = useState<string>(DESIGN_TEMPLATES[0].primaryColor);
  const [bgChoice, setBgChoice] = useState<string>(DESIGN_TEMPLATES[0].accentColor);

  const handleTemplateChange = (tmpl: DesignTemplate) => {
    setSelectedTemplate(tmpl);
    setAccentChoice(tmpl.primaryColor);
    setBgChoice(tmpl.accentColor);
    if (tmpl.layoutType === 'poster') {
      setCustomText('FUTURE TECH EXPO');
      setCustomSubtitle('KERALA DESIGN LAB');
    } else if (tmpl.layoutType === 'business_card') {
      setCustomText('HARIKRISHNA K');
      setCustomSubtitle('Lead Graphic Designer');
    } else if (tmpl.layoutType === 'social_media') {
      setCustomText('SCROLL STOPPING DESIGN');
      setCustomSubtitle('CMAC DESIGNS');
    } else if (tmpl.layoutType === 'wedding_card') {
      setCustomText('HARI & ANJALI');
      setCustomSubtitle('SAVE THE DATE • DEC 2026');
    }
  };

  const handleReset = () => {
    handleTemplateChange(selectedTemplate);
  };

  const presetAccents = ['#0a8494', '#be123c', '#a16207', '#4A5D4E', '#ffffff'];
  const presetBgs = ['#1A1A1A', '#3C3C39', '#575754', '#8C2531', '#1D3D33'];

  return (
    <section id="studio" className="py-24 bg-brand-key relative overflow-hidden">
      {/* Mesh grid details */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Blur background */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brand-cyan/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[10px] font-mono tracking-[0.3em] uppercase px-4 py-1.5 rounded-none bg-transparent text-brand-cyan border border-brand-cyan mb-4">
            Interactive Playground
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-brand-charcoal tracking-tight mb-4">
            The Interactive Design Studio
          </h2>
          <p className="text-base text-brand-slate">
            Take the driver's seat. Test our visual craftsmanship by selecting a template, customizing the messaging, and watching the layout update live on our digital canvas board.
          </p>
        </div>

        {/* Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Controls */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-none bg-brand-dark-card border border-brand-charcoal/10 shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-brand-charcoal/10">
                <Palette className="w-5 h-5 text-brand-cyan" />
                <h3 className="font-display font-bold text-lg text-brand-charcoal">Customize Template</h3>
              </div>

              {/* Template Selection */}
              <div className="space-y-3 mb-6">
                <label className="text-[10px] font-mono tracking-wider text-brand-slate uppercase block">
                  Select Design Medium:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {DESIGN_TEMPLATES.map((tmpl) => (
                    <button
                      key={tmpl.id}
                      onClick={() => handleTemplateChange(tmpl)}
                      className={`p-3 rounded-none border text-left transition-all ${
                        selectedTemplate.id === tmpl.id
                          ? 'bg-brand-dark border-brand-charcoal text-brand-charcoal font-bold'
                          : 'bg-transparent border-brand-charcoal/10 hover:border-brand-charcoal/30 text-brand-slate hover:text-brand-charcoal'
                      }`}
                    >
                      <p className="text-xs font-bold font-display leading-tight">{tmpl.name}</p>
                      <p className="text-[9px] text-brand-slate font-mono mt-0.5 leading-none">{tmpl.category}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-[10px] font-mono tracking-wider text-brand-slate uppercase block mb-1.5">
                    Primary Headline text:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value.toUpperCase())}
                      maxLength={24}
                      className="w-full bg-brand-key border border-brand-charcoal/10 rounded-none px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal tracking-wide font-display font-semibold"
                    />
                    <Type className="w-4 h-4 text-brand-slate absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-wider text-brand-slate uppercase block mb-1.5">
                    Subtitle / Tagline details:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={customSubtitle}
                      onChange={(e) => setCustomSubtitle(e.target.value)}
                      maxLength={32}
                      className="w-full bg-brand-key border border-brand-charcoal/10 rounded-none px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal font-sans"
                    />
                    <Layers className="w-4 h-4 text-brand-slate absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              {/* Color Swatch Selectors */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-[10px] font-mono tracking-wider text-brand-slate uppercase block mb-2">
                    Design Accent Tint:
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {presetAccents.map((c) => (
                      <button
                        key={c}
                        onClick={() => setAccentChoice(c)}
                        className={`w-7 h-7 rounded-none border transition-all relative flex items-center justify-center`}
                        style={{ backgroundColor: c, borderColor: accentChoice === c ? '#1A1A1A' : 'rgba(26,26,26,0.1)' }}
                      >
                        {accentChoice === c && (
                          <Check className="w-4.5 h-4.5 text-black filter drop-shadow-sm font-bold" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono tracking-wider text-brand-slate uppercase block mb-2">
                    Canvas Base Color:
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {presetBgs.map((c) => (
                      <button
                        key={c}
                        onClick={() => setBgChoice(c)}
                        className={`w-7 h-7 rounded-none border transition-all relative flex items-center justify-center`}
                        style={{ backgroundColor: c, borderColor: bgChoice === c ? '#1A1A1A' : 'rgba(26,26,26,0.1)' }}
                      >
                        {bgChoice === c && (
                          <Check className="w-4.5 h-4.5 text-white filter drop-shadow-sm font-bold" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="pt-4 border-t border-brand-charcoal/10 flex gap-2">
              <button
                onClick={handleReset}
                className="flex-1 py-3 px-4 rounded-none border border-brand-charcoal/15 bg-brand-charcoal hover:bg-transparent text-xs font-semibold tracking-widest uppercase font-mono text-brand-key hover:text-brand-charcoal transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Defaults
              </button>
            </div>
          </div>

          {/* Right Panel: Interactive Render Board */}
          <div className="lg:col-span-8 flex flex-col justify-between p-4 sm:p-6 rounded-none bg-brand-dark border border-brand-charcoal/10 relative overflow-hidden shadow-sm">
            {/* Header toolbar */}
            <div className="flex items-center justify-between border-b border-brand-charcoal/10 pb-3 mb-4">
              <div className="flex items-center gap-1.5">
                <Layout className="w-4 h-4 text-brand-charcoal" />
                <span className="text-xs font-mono text-brand-charcoal tracking-wide uppercase">
                  Studio Render: {selectedTemplate.category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-brand-charcoal animate-pulse"></span>
                <span className="text-[10px] font-mono text-brand-charcoal uppercase tracking-wider">Live Mockup</span>
              </div>
            </div>

            {/* Central Rendering Canvas Stage */}
            <div className="flex-1 flex items-center justify-center py-6 min-h-[340px] sm:min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTemplate.id + accentChoice + bgChoice}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex justify-center"
                >
                  {/* Poster Layout */}
                  {selectedTemplate.layoutType === 'poster' && (
                    <div
                      style={{ backgroundColor: bgChoice }}
                      className="relative w-full max-w-sm aspect-[3/4] rounded-none border border-brand-charcoal/20 p-6 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300"
                    >
                      {/* Grid overlay lines */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                      
                      {/* Technical graphics overlay */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-45" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <circle cx="50" cy="50" r="38" stroke={accentChoice} strokeWidth="0.2" fill="none" />
                        <line x1="50" y1="0" x2="50" y2="100" stroke={accentChoice} strokeWidth="0.1" strokeDasharray="1,1" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke={accentChoice} strokeWidth="0.1" strokeDasharray="1,1" />
                      </svg>

                      {/* Poster Content */}
                      <div className="relative z-10 flex justify-between items-start font-mono text-[9px] text-white/50">
                        <span>CMAC-STUDIO // 2026</span>
                        <span style={{ color: accentChoice }}>W.01</span>
                      </div>

                      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center my-4">
                        <motion.div
                          animate={{ scale: [1, 1.03, 1] }}
                          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                          className="w-24 h-24 rounded-none border flex items-center justify-center mb-6 relative"
                          style={{ borderColor: accentChoice }}
                        >
                          <div className="absolute inset-2 rounded-none opacity-10" style={{ backgroundColor: accentChoice }}></div>
                          <Sparkles className="w-6 h-6" style={{ color: accentChoice }} />
                        </motion.div>
                        
                        <h4 className="font-display font-black text-2xl tracking-wider text-white leading-tight uppercase px-4 max-w-xs drop-shadow-md">
                          {customText || 'FUTURE TECH EXPO'}
                        </h4>
                        
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] mt-3" style={{ color: accentChoice }}>
                          {customSubtitle || 'KERALA DESIGN LAB'}
                        </p>
                      </div>

                      <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-4 font-mono text-[8px] text-white/40 leading-none">
                        <div className="text-left">
                          <p>DESIGNER: HARI K</p>
                          <p className="mt-1">BRAND: CMAC DESIGNS</p>
                        </div>
                        <div className="text-right">
                          <p>FORMAT: HIGH-RES PDF</p>
                          <p className="mt-1" style={{ color: accentChoice }}>CMYK SYSTEM READY</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Business Card Layout */}
                  {selectedTemplate.layoutType === 'business_card' && (
                    <div
                      style={{ backgroundColor: bgChoice }}
                      className="relative w-full max-w-md aspect-[1.75/1] rounded-none border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300"
                    >
                      {/* Shiny accent block */}
                      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

                      <div className="flex items-start justify-between relative z-10">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-none border flex items-center justify-center font-display font-bold text-xs" style={{ borderColor: accentChoice, color: accentChoice }}>
                            C
                          </div>
                          <span className="font-display font-bold text-xs tracking-wider text-white">
                            CMAC <span className="font-normal text-[9px] text-white/60 uppercase ml-0.5">Designs</span>
                          </span>
                        </div>
                        <span className="text-[8px] font-mono tracking-widest text-white/50 uppercase">PREMIUM IDENTITY</span>
                      </div>

                      <div className="relative z-10 my-4 text-left">
                        <h4 className="font-display font-black text-lg sm:text-xl text-white tracking-wide uppercase">
                          {customText || 'HARIKRISHNA K'}
                        </h4>
                        <p className="text-[10px] font-mono tracking-widest uppercase mt-1" style={{ color: accentChoice }}>
                          {customSubtitle || 'LEAD CREATIVE & GRAPHIC DESIGNER'}
                        </p>
                      </div>

                      <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-3 font-mono text-[8px] text-white/50">
                        <div className="space-y-1">
                          <p className="flex items-center gap-1">
                            <span style={{ color: accentChoice }}>M:</span> +91 7510859522
                          </p>
                          <p className="flex items-center gap-1">
                            <span style={{ color: accentChoice }}>E:</span> camcgraphics.in@gmail.com
                          </p>
                        </div>
                        {/* Styled mini QR Code representation */}
                        <div className="w-10 h-10 border p-1 rounded bg-white flex flex-col gap-0.5 justify-between flex-shrink-0" style={{ borderColor: accentChoice }}>
                          <div className="flex justify-between gap-0.5 h-full">
                            <div className="bg-brand-charcoal w-full rounded-[1px]"></div>
                            <div className="bg-brand-charcoal w-full rounded-[1px]"></div>
                            <div className="bg-brand-charcoal w-full rounded-[1px]"></div>
                          </div>
                          <div className="flex justify-between gap-0.5 h-full">
                            <div className="bg-brand-charcoal w-full rounded-[1px]"></div>
                            <div className="bg-brand-charcoal w-full rounded-[1px] opacity-10"></div>
                            <div className="bg-brand-charcoal w-full rounded-[1px]"></div>
                          </div>
                          <div className="flex justify-between gap-0.5 h-full">
                            <div className="bg-brand-charcoal w-full rounded-[1px]"></div>
                            <div className="bg-brand-charcoal w-full rounded-[1px]"></div>
                            <div className="bg-brand-charcoal w-full rounded-[1px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Social Media Post Layout */}
                  {selectedTemplate.layoutType === 'social_media' && (
                    <div
                      style={{ backgroundColor: bgChoice }}
                      className="relative w-full max-w-sm aspect-square rounded-none border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300"
                    >
                      {/* Bold overlapping vectors */}
                      <div className="absolute top-[-30px] right-[-30px] w-48 h-48 rounded-full opacity-10 pointer-events-none" style={{ backgroundColor: accentChoice }}></div>
                      
                      <div className="flex justify-between items-center relative z-10">
                        <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 font-mono text-[9px] text-white">
                          <span>@cmac_designs</span>
                        </div>
                        <Image className="w-4.5 h-4.5" style={{ color: accentChoice }} />
                      </div>

                      <div className="relative z-10 flex-1 flex flex-col justify-center items-start text-left my-4">
                        <div className="w-10 h-1 bg-white mb-4 rounded" style={{ backgroundColor: accentChoice }}></div>
                        <h4 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-tight max-w-xs drop-shadow-md">
                          {customText || 'SCROLL STOPPING DESIGN'}
                        </h4>
                        <p className="text-xs font-mono font-medium tracking-wide mt-2 opacity-80" style={{ color: accentChoice }}>
                          {customSubtitle || 'CUSTOM DIGITAL LAYOUT'}
                        </p>
                      </div>

                      <div className="relative z-10 flex justify-between items-center border-t border-white/10 pt-4 font-mono text-[8px] text-white/50 leading-none">
                        <span>TAP TO WORK WITH US</span>
                        <span style={{ color: accentChoice }} className="font-bold flex items-center gap-1">
                          PORTFOLIO SHOWCASE
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Digital Wedding Card Layout */}
                  {selectedTemplate.layoutType === 'wedding_card' && (
                    <div
                      style={{ backgroundColor: bgChoice }}
                      className="relative w-full max-w-sm aspect-[3/4] rounded-none border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300"
                    >
                      {/* Royal traditional arches */}
                      <div className="absolute inset-3 border rounded-none pointer-events-none opacity-40" style={{ borderColor: accentChoice }}></div>
                      <div className="absolute inset-4 border rounded-none pointer-events-none opacity-25" style={{ borderColor: accentChoice, borderStyle: 'dashed' }}></div>

                      <div className="relative z-10 text-center font-display text-[10px] tracking-widest text-white/50 uppercase pt-2">
                        <span>A CELEBRATION OF LOVE</span>
                      </div>

                      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center my-4">
                        <Heart className="w-8 h-8 mb-5 animate-pulse" style={{ color: accentChoice }} />
                        
                        <p className="font-mono text-[9px] tracking-[0.25em] text-white/60 uppercase mb-2">
                          TOGETHER WITH THEIR FAMILIES
                        </p>
                        
                        <h4 className="font-display font-black text-2xl tracking-wider text-white leading-tight uppercase px-4 drop-shadow-md font-serif italic">
                          {customText || 'HARI & ANJALI'}
                        </h4>
                        
                        <div className="w-8 h-[1px] my-4 opacity-40" style={{ backgroundColor: accentChoice }}></div>
                        
                        <p className="font-mono text-[9px] uppercase tracking-[0.15em]" style={{ color: accentChoice }}>
                          {customSubtitle || 'SAVE THE DATE • DEC 2026'}
                        </p>
                      </div>

                      <div className="relative z-10 text-center pb-2 font-mono text-[8px] text-white/50">
                        <p>INVITATION CARD DESIGNED BY</p>
                        <p className="mt-1 font-bold" style={{ color: accentChoice }}>CMAC DESIGNS • +91 7510859522</p>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stage bottom metadata */}
            <div className="mt-4 pt-3 border-t border-brand-charcoal/10 flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-mono text-brand-charcoal gap-2">
              <p>WORKSPACE RESOLUTION: OPTIMIZED VECTOR FORMAT</p>
              <div className="flex gap-4">
                <p>COLOR: <span style={{ color: accentChoice }}>{accentChoice.toUpperCase()}</span></p>
                <p>BASE: <span className="text-brand-charcoal font-semibold">{bgChoice.toUpperCase()}</span></p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
