import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, FileText, CheckCircle2, MessageSquare, Mail, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { SERVICES, PERSONAL_INFO } from '../data';
import { InquiryFormData } from '../types';

export default function InquiryForm() {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    selectedService: SERVICES[1].title, // default: Poster Designing
    urgency: 'flexible',
    customDetails: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setIsError(true);
      return;
    }
    setIsSubmitted(true);
  };

  // Compile formatted text for WhatsApp
  const compileWhatsAppText = () => {
    const urgencyLabel = {
      flexible: 'Flexible Schedule (1-2 weeks)',
      urgent: 'Urgent (Within 3-5 days) ⚡',
      rush: 'Super Rush (Next 24-48 hours) 🚨',
    }[formData.urgency];

    const text = `*New Design Project Inquiry - CMAC Designs*
----------------------------------------
*Client Name:* ${formData.name}
*Phone Number:* ${formData.phone}
*Email Address:* ${formData.email || 'Not provided'}
*Requested Service:* ${formData.selectedService}
*Project Urgency:* ${urgencyLabel}

*Creative Brief / Custom Details:*
${formData.customDetails || 'No custom notes provided. Ready for discussion!'}
----------------------------------------
_Inquiry created via CMAC Designs digital portal_`;

    return `${PERSONAL_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  // Compile formatted email payload
  const compileEmailHref = () => {
    const subject = encodeURIComponent(`Design Project Inquiry - ${formData.name}`);
    const urgencyLabel = {
      flexible: 'Flexible Schedule (1-2 weeks)',
      urgent: 'Urgent (Within 3-5 days)',
      rush: 'Super Rush (Next 24-48 hours)',
    }[formData.urgency];

    const body = encodeURIComponent(`Dear Harikrishna K / CMAC Designs,

I would like to inquire about your professional graphic design services. Here are my project details:

- Client Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email || 'Not provided'}
- Service Needed: ${formData.selectedService}
- Project Timeline: ${urgencyLabel}

Project Brief / Specific Requirements:
${formData.customDetails || 'No custom notes provided. Ready for discussion.'}

Please let me know your availability and estimated pricing for this scope.

Best regards,
${formData.name}
${formData.phone}`);

    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="quote" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Dynamic graphic accents */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-none bg-brand-dark-card border border-brand-charcoal/10 shadow-sm">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Title */}
                <div className="mb-10 text-left border-b border-brand-charcoal/10 pb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-transparent text-brand-magenta border border-brand-magenta text-xs font-mono mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Instant Project Builder</span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-charcoal">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-sm text-brand-slate mt-2 leading-relaxed">
                    Ready to collaborate? Build your project brief below, and our engine will compile an instant direct-delivery message for Harikrishna. No waiting, no middle-men.
                  </p>
                </div>

                {isError && (
                  <div className="mb-6 p-4 rounded-none bg-red-500/10 border border-red-500/20 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Please fill out your <strong>Name</strong> and <strong>Phone Number</strong> so we can contact you.</span>
                  </div>
                )}

                {/* Form fields */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-brand-slate uppercase block mb-1.5">
                        Your Full Name: <span className="text-brand-magenta">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-brand-key border border-brand-charcoal/15 rounded-none px-4 py-3.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal font-semibold"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-brand-slate uppercase block mb-1.5">
                        Mobile Phone Number: <span className="text-brand-magenta">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="7510859522"
                        className="w-full bg-brand-key border border-brand-charcoal/15 rounded-none px-4 py-3.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-brand-slate uppercase block mb-1.5">
                        Email Address (Optional):
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        className="w-full bg-brand-key border border-brand-charcoal/15 rounded-none px-4 py-3.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal font-mono"
                      />
                    </div>

                    {/* Service selection */}
                    <div>
                      <label className="text-[10px] font-mono tracking-wider text-brand-slate uppercase block mb-1.5">
                        Select Core Service Needed:
                      </label>
                      <select
                        name="selectedService"
                        value={formData.selectedService}
                        onChange={handleChange}
                        className="w-full bg-brand-key border border-brand-charcoal/15 rounded-none px-4 py-3.5 text-sm text-brand-charcoal focus:outline-none focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal font-medium appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                      >
                        {SERVICES.map((serv) => (
                          <option key={serv.id} value={serv.title} className="bg-brand-key text-brand-charcoal py-2">
                            {serv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="text-[10px] font-mono tracking-wider text-brand-slate uppercase block mb-3">
                      Project Timeline & Urgency:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { val: 'flexible', label: 'Flexible', desc: '1-2 weeks delivery' },
                        { val: 'urgent', label: 'Urgent', desc: '3-5 days delivery' },
                        { val: 'rush', label: 'Super Rush', desc: '24-48h rush job' },
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, urgency: item.val as any }))}
                          className={`p-3.5 rounded-none border text-left transition-all flex flex-col justify-between ${
                            formData.urgency === item.val
                              ? 'bg-brand-dark border-brand-charcoal text-brand-charcoal font-bold shadow-sm'
                              : 'bg-transparent border-brand-charcoal/10 hover:border-brand-charcoal/30 text-brand-slate'
                          }`}
                        >
                          <span className="text-xs font-bold font-display uppercase tracking-wider">{item.label}</span>
                          <span className="text-[10px] text-brand-slate mt-1 leading-none">{item.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Brief requirements */}
                  <div>
                    <label className="text-[10px] font-mono tracking-wider text-brand-slate uppercase block mb-1.5">
                      Creative Brief / Special Instructions:
                    </label>
                    <textarea
                      name="customDetails"
                      rows={4}
                      value={formData.customDetails}
                      onChange={handleChange}
                      placeholder="e.g. 'I need a royal-looking wedding card for 500 guests with deep red and gold borders, plus a 2-page slide digital invitation with an elegant floral frame...'"
                      className="w-full bg-brand-key border border-brand-charcoal/15 rounded-none px-4 py-3 text-sm text-brand-charcoal focus:outline-none focus:border-brand-charcoal focus:ring-1 focus:ring-brand-charcoal leading-relaxed"
                    ></textarea>
                  </div>

                  {/* Action trigger */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-none font-bold text-sm tracking-widest uppercase bg-brand-charcoal text-brand-key hover:bg-transparent hover:text-brand-charcoal border border-brand-charcoal transition-all flex items-center justify-center gap-2 font-mono"
                    >
                      <Send className="w-4 h-4" />
                      Compile Project Brief
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-none bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-charcoal mb-2">
                  Brief Compiled Successfully!
                </h3>
                <p className="text-sm text-brand-slate max-w-lg mx-auto mb-10 leading-relaxed">
                  Excellent! We have generated a professional project brief tailored to your needs. Please choose one of the direct delivery channels below to instantly send this brief to <strong>{PERSONAL_INFO.name}</strong>.
                </p>

                {/* Styled Summary Card */}
                <div className="bg-brand-key border border-brand-charcoal/10 rounded-none p-6 text-left max-w-xl mx-auto mb-10 font-sans space-y-3 relative">
                  <div className="absolute top-4 right-4 text-[9px] font-mono tracking-wider text-brand-yellow font-bold uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-yellow" /> Prepared Brief
                  </div>
                  
                  <div className="border-b border-brand-charcoal/10 pb-3">
                    <h5 className="text-[10px] font-mono uppercase text-brand-slate tracking-widest">Client Name:</h5>
                    <p className="text-sm font-semibold text-brand-charcoal mt-1">{formData.name}</p>
                  </div>
                  <div className="border-b border-brand-charcoal/10 pb-3">
                    <h5 className="text-[10px] font-mono uppercase text-brand-slate tracking-widest">Selected Service:</h5>
                    <p className="text-sm font-semibold text-brand-cyan mt-1">{formData.selectedService}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-mono uppercase text-brand-slate tracking-widest">Urgency Timeline:</h5>
                    <p className="text-sm font-semibold text-brand-magenta mt-1 uppercase tracking-wider font-mono text-xs">
                      {formData.urgency === 'flexible' ? 'Flexible (1-2 weeks)' : formData.urgency === 'urgent' ? 'Urgent (3-5 days)' : 'Super Rush (24-48 hours)'}
                    </p>
                  </div>
                </div>

                {/* Direct Send triggers */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                  <a
                    href={compileWhatsAppText()}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex-1 py-4 px-6 rounded-none font-bold text-xs tracking-wider uppercase bg-[#25D366] text-white hover:opacity-90 shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                    Send on WhatsApp
                  </a>

                  <a
                    href={compileEmailHref()}
                    className="flex-1 py-4 px-6 rounded-none font-bold text-xs tracking-widest uppercase bg-brand-charcoal hover:bg-transparent border border-brand-charcoal text-brand-key hover:text-brand-charcoal transition-all flex items-center justify-center gap-2 font-mono"
                  >
                    <Mail className="w-4 h-4" />
                    Send via Email
                  </a>
                </div>

                {/* Back button */}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-xs font-mono text-brand-charcoal hover:text-brand-magenta underline underline-offset-4"
                >
                  Edit Project Details
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
