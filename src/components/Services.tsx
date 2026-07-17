import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data';
import { ServiceItem } from '../types';

// Dynamic Icon Renderer Helper
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
}

export default function Services() {
  const generateWhatsAppLink = (serviceTitle: string) => {
    const text = `Hello Harikrishna, I was viewing your CMAC Designs portfolio and I am highly interested in inquiring about your "${serviceTitle}" services! Can you please share details on packages and pricing?`;
    return `${PERSONAL_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative colored glow backdrops */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-brand-magenta/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-brand-cyan/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[10px] font-mono tracking-[0.3em] uppercase px-4 py-1.5 rounded-none bg-transparent text-brand-magenta border border-brand-magenta mb-4"
          >
            Design Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-brand-charcoal tracking-tight mb-4"
          >
            Our Professional Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="text-base text-brand-slate"
          >
            From stunning printed stationery to responsive digital platforms, we provide a full spectrum of graphic design solutions engineered to elevate your brand presence.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative flex flex-col justify-between p-6 sm:p-8 rounded-none bg-brand-dark-card border border-brand-charcoal/10 hover:border-brand-charcoal transition-all duration-300 hover:shadow-lg overflow-hidden`}
            >
              {/* Card visual highlight accent */}
              <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br from-brand-cyan/5 to-brand-magenta/5 blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

              {/* Header inside card */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-none bg-brand-key border border-brand-charcoal/10 flex items-center justify-center text-brand-charcoal group-hover:bg-brand-charcoal group-hover:text-brand-key group-hover:border-brand-charcoal transition-all duration-300">
                    <ServiceIcon name={service.iconName} className="w-5 h-5" />
                  </div>

                  {/* Optional Service Badge */}
                  {service.badge && (
                    <span className="text-[9px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-none bg-brand-dark border border-brand-charcoal/10 text-brand-yellow font-bold">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-brand-charcoal group-hover:text-brand-magenta transition-colors duration-300 mb-3">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Deliverables / Features list */}
                <div className="space-y-2 mb-8">
                  <p className="text-[10px] font-mono text-brand-slate tracking-widest uppercase font-semibold">Deliverables:</p>
                  <ul className="space-y-1.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-brand-charcoal/80">
                        <Icons.CheckCircle className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: WhatsApp Inquiry */}
              <a
                href={generateWhatsAppLink(service.title)}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-none bg-transparent hover:bg-brand-charcoal border border-brand-charcoal/25 hover:border-brand-charcoal text-xs font-semibold tracking-wider uppercase font-mono text-brand-charcoal hover:text-brand-key transition-all duration-300"
              >
                <Icons.MessageSquare className="w-3.5 h-3.5 text-brand-cyan group-hover:scale-110 transition-transform" />
                Enquire via WhatsApp
                <Icons.ExternalLink className="w-3 h-3 text-brand-slate ml-auto" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Full-width callout for general graphic inquiries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 sm:p-8 rounded-none bg-brand-dark-card border border-brand-charcoal/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-none bg-brand-key border border-brand-charcoal/10 flex items-center justify-center text-brand-yellow flex-shrink-0">
              <Icons.Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-brand-charcoal">Need something entirely customized?</h4>
              <p className="text-xs sm:text-sm text-brand-slate">We tackle all kinds of complex, multi-scale graphic design requests. Let us build your vision!</p>
            </div>
          </div>
          <a
            href={`https://wa.me/917510859522?text=Hello%20Harikrishna,%20I%20have%20a%20custom%20graphic%20design%20requirement%20not%20listed%20on%20your%20services.%20Let's%20discuss%20pricing%20and%20ideas!`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full md:w-auto px-6 py-3 rounded-none font-bold text-xs tracking-widest bg-brand-charcoal text-brand-key hover:bg-transparent hover:text-brand-charcoal border border-brand-charcoal transition-all flex items-center justify-center gap-2 uppercase font-mono"
          >
            <Icons.PhoneCall className="w-3.5 h-3.5" />
            Discuss custom project
          </a>
        </motion.div>

      </div>
    </section>
  );
}
