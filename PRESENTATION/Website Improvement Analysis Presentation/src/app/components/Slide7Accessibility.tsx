import React from 'react';
import { Smartphone, Eye, Keyboard, MonitorSmartphone, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import mobileImg from "../../imports/WhatsApp_Image_2026-06-01_at_12.54.53.jpeg";

export default function Slide7Accessibility() {
  const items = [
    {
      icon: <Smartphone size={32} className="text-[#FF6B35]" />,
      title: "Mobile Navigation",
      desc: "Implement a robust, accessible hamburger menu overlay that traps focus and is easily tappable on small devices."
    },
    {
      icon: <Eye size={32} className="text-[#16324F]" />,
      title: "Better Contrast",
      desc: "Ensure all text against colored backgrounds meets WCAG 2.1 AA standards (minimum contrast ratio of 4.5:1 for normal text)."
    },
    {
      icon: <Keyboard size={32} className="text-[#FFB703]" />,
      title: "Keyboard Navigation",
      desc: "Add visible focus states to all interactive elements (buttons, links, form fields) for users navigating via keyboard."
    },
    {
      icon: <MonitorSmartphone size={32} className="text-[#16324F]" />,
      title: "Responsive Grids",
      desc: "Refactor multi-column layouts to stack gracefully on mobile screens, avoiding horizontal scrolling or clipped content."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col p-12 bg-neutral-50 relative">
      <header className="mb-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF6B35] mb-2">Technical Foundation</h2>
        <h1 className="text-4xl font-extrabold text-[#16324F]">Accessibility & Mobile Fixes</h1>
      </header>

      <div className="flex-1 flex gap-12 h-[calc(100%-100px)]">
        
        {/* Mobile Mockup Visualization */}
        <div className="w-[35%] flex justify-center items-center h-full relative">
          {/* Phone Frame */}
          <div className="w-[280px] h-[580px] bg-neutral-900 rounded-[3rem] p-3 shadow-2xl relative border-4 border-neutral-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl z-20"></div>
            
            <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden relative">
               <ImageWithFallback src={mobileImg} alt="Mobile View" className="w-full h-full object-cover object-top" />
               
               {/* UI overlay indicating fixes */}
               <div className="absolute top-0 left-0 w-full h-16 bg-white/90 backdrop-blur border-b flex items-center justify-between px-4 z-10">
                 <div className="w-24 h-6 bg-neutral-200 rounded"></div>
                 <div className="p-2 border-2 border-[#FF6B35] rounded text-[#FF6B35] relative">
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF6B35]"></span>
                    </span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                 </div>
               </div>
               
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 bg-[#16324F] text-white text-xs py-3 px-4 rounded-full font-bold text-center shadow-lg border border-[#16324F] flex items-center justify-center gap-2">
                 Fixed Mobile Layout <CheckCircle2 size={14} className="text-[#FFB703]" />
               </div>
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="w-[65%] flex flex-col justify-center gap-6">
          <div className="grid grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow hover:border-[#16324F]/30 relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-neutral-50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>
                <div className="relative z-10">
                  <div className="mb-4 bg-neutral-50 w-16 h-16 rounded-xl flex items-center justify-center shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#16324F] mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-5 bg-[#FFB703]/10 border border-[#FFB703]/30 rounded-lg flex items-start gap-4">
             <div className="mt-1 text-[#FFB703]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
             </div>
             <div>
               <h4 className="font-bold text-[#16324F] text-sm">Why this matters</h4>
               <p className="text-xs text-neutral-600 mt-1">Over 60% of NGO traffic typically comes from mobile devices. Ensuring an accessible, seamless mobile experience directly correlates with increased donation volume and volunteer sign-ups.</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
