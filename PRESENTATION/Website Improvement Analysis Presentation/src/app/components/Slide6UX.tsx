import React from 'react';
import { MessageSquareQuote, Images, CalendarDays, UserPlus, HelpCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import uxImg from "../../imports/WhatsApp_Image_2026-06-01_at_12.54.53__2_.jpeg";

export default function Slide6UX() {
  const cards = [
    { icon: <MessageSquareQuote size={28} className="text-[#FF6B35]" />, title: 'Testimonials Section', desc: 'Add social proof through quotes from volunteers and beneficiaries.' },
    { icon: <Images size={28} className="text-[#16324F]" />, title: 'Photo Gallery', desc: 'Create a dedicated, categorized space for high-quality impact photography.' },
    { icon: <CalendarDays size={28} className="text-[#FFB703]" />, title: 'Event Calendar', desc: 'Interactive view of upcoming drives, fundraisers, and community events.' },
    { icon: <UserPlus size={28} className="text-[#FF6B35]" />, title: 'Volunteer Form', desc: 'Streamlined, multi-step registration flow replacing generic contact forms.' },
    { icon: <HelpCircle size={28} className="text-[#16324F]" />, title: 'FAQ Section', desc: 'Expandable accordion answering common questions about donations and processes.' }
  ];

  return (
    <div className="w-full h-full flex flex-col p-12 bg-[#16324F] relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-20 pointer-events-none">
        <ImageWithFallback src={uxImg} alt="UX Background" className="w-full h-full object-cover mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#16324F]"></div>
      </div>

      <header className="mb-8 z-10 relative">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#FFB703] mb-2">Solution Architecture</h2>
        <h1 className="text-4xl font-extrabold text-white">UX Additions Required</h1>
      </header>

      <div className="flex-1 flex flex-col z-10 relative h-[calc(100%-100px)]">
        
        {/* Before / After Concept Indicator */}
        <div className="flex items-center gap-6 mb-8 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 w-fit">
          <div className="text-center">
            <span className="text-white/60 text-xs font-bold uppercase block mb-1">Current State</span>
            <span className="text-white font-medium">Static Information Site</span>
          </div>
          <ArrowRight className="text-[#FFB703]" />
          <div className="text-center">
            <span className="text-[#FFB703] text-xs font-bold uppercase block mb-1">Target State</span>
            <span className="text-white font-bold">Interactive Community Hub</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-6 flex-1">
          {cards.slice(0, 3).map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-xl flex flex-col border-b-4 hover:-translate-y-1 transition-transform" style={{ borderColor: idx === 0 ? '#FF6B35' : idx === 1 ? '#16324F' : '#FFB703' }}>
              <div className="bg-neutral-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-neutral-100 shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[#16324F] mb-2">{card.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
          
          <div className="col-span-3 grid grid-cols-2 gap-6 mt-2 w-2/3 mx-auto">
             {cards.slice(3).map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-xl flex flex-col border-b-4 hover:-translate-y-1 transition-transform" style={{ borderColor: idx === 0 ? '#FF6B35' : '#16324F' }}>
                <div className="bg-neutral-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-neutral-100 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#16324F] mb-2">{card.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
