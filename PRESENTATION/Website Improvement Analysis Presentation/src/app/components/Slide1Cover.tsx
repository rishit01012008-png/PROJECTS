import React from 'react';
import { Activity, LayoutDashboard, MousePointerClick, ShieldCheck, Smartphone } from 'lucide-react';

const colors = {
  blue: '#16324F',
  orange: '#FF6B35',
  yellow: '#FFB703'
};

export default function Slide1Cover() {
  return (
    <div className="w-full h-full flex relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-[#16324F]">
          <polygon points="100,0 100,100 0,100" />
        </svg>
      </div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#FF6B35] opacity-10 pointer-events-none blur-3xl" />
      <div className="absolute top-1/4 -right-16 w-64 h-64 rounded-full bg-[#FFB703] opacity-20 pointer-events-none blur-2xl" />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-16 z-10">
        <div className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6" style={{ backgroundColor: '#FF6B35', color: 'white' }}>
          UX & Design Audit
        </div>
        
        <h1 className="text-6xl font-extrabold leading-tight mb-4" style={{ color: '#16324F' }}>
          InAmigos Foundation<br />
          <span className="text-4xl font-light text-neutral-500 block mt-2">Website Improvement Analysis</span>
        </h1>
        
        <p className="text-xl text-neutral-600 max-w-2xl mt-4 border-l-4 pl-4" style={{ borderColor: '#FFB703' }}>
          NGO Awareness Website Review & UX Recommendations to drive engagement, clarity, and impact.
        </p>

        <div className="mt-16 pt-8 border-t border-neutral-200 w-64">
          <p className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-1">Prepared For</p>
          <p className="text-lg font-bold" style={{ color: '#16324F' }}>InAmigos Foundation Leadership</p>
          <p className="text-neutral-500">June 2026</p>
        </div>
      </div>

      {/* Right side visual element */}
      <div className="w-1/3 flex items-center justify-center p-12">
        <div className="grid grid-cols-2 gap-4 w-full aspect-square relative">
          <div className="rounded-2xl p-6 flex flex-col justify-between" style={{ backgroundColor: '#16324F' }}>
            <LayoutDashboard size={32} color="white" />
            <span className="text-white font-medium">Design</span>
          </div>
          <div className="rounded-2xl p-6 flex flex-col justify-between translate-y-8" style={{ backgroundColor: '#FF6B35' }}>
            <MousePointerClick size={32} color="white" />
            <span className="text-white font-medium">UX</span>
          </div>
          <div className="rounded-2xl p-6 flex flex-col justify-between" style={{ backgroundColor: '#FFB703' }}>
            <Activity size={32} color="#16324F" />
            <span className="font-medium" style={{ color: '#16324F' }}>Impact</span>
          </div>
          <div className="rounded-2xl p-6 flex flex-col justify-between translate-y-8 bg-neutral-100 border-2" style={{ borderColor: '#16324F' }}>
            <Smartphone size={32} color="#16324F" />
            <span className="font-medium" style={{ color: '#16324F' }}>Mobile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
