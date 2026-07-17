import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import InquiryForm from './components/InquiryForm';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-key text-brand-charcoal font-sans selection:bg-brand-magenta selection:text-white">
      {/* Global Background Glow effects */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[800px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-[50vw] h-[50vw] max-w-[800px] rounded-full bg-brand-magenta/5 blur-[120px] pointer-events-none z-0"></div>

      {/* Main App Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <Services />
          <Showcase />
          <InquiryForm />
          <Contact />
        </main>
      </div>
    </div>
  );
}
