import React from 'react';
import { AlertCircle, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import navImg from "../../imports/WhatsApp_Image_2026-06-01_at_12.54.52__2_.jpeg";

export default function Slide3Navigation() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white relative">
      <header className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF6B35] mb-2">Issue Analysis</h2>
        <h1 className="text-4xl font-extrabold text-[#16324F]">Navigation & Header</h1>
      </header>

      <div className="flex-1 flex gap-8 h-[calc(100%-80px)]">
        {/* Screenshot Area */}
        <div className="w-2/3 h-full relative bg-neutral-100 rounded-xl overflow-hidden shadow-inner flex items-center justify-center p-4">
          <div className="relative w-full shadow-lg rounded-lg overflow-hidden border border-neutral-200">
            <div className="w-full h-64 bg-neutral-300 relative">
               <ImageWithFallback src={navImg} alt="Navigation Screenshot" className="w-full h-full object-cover object-top" />
               
               {/* Annotations */}
               <div className="absolute top-4 right-4 bg-white/90 p-2 rounded shadow text-xs font-bold text-red-600 border border-red-200 flex items-center gap-1 z-10">
                 No Sticky CTA <ArrowUpRight size={14} />
               </div>
               
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 p-2 rounded shadow text-xs font-bold text-red-600 border border-red-200 flex items-center gap-1 z-10">
                 Limited Options
               </div>
            </div>
            
          </div>
        </div>

        {/* Notes Area */}
        <div className="w-1/3 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#16324F] mb-6 flex items-center gap-2">
            <AlertCircle className="text-[#FF6B35]" /> Identified Issues
          </h3>
          
          <ul className="space-y-6">
            <li className="bg-neutral-50 p-4 rounded-lg border-l-4 border-red-500 shadow-sm relative">
              <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold shadow">1</span>
              <h4 className="font-bold text-neutral-800">Missing Mobile Menu (Hamburger)</h4>
              <p className="text-sm text-neutral-600 mt-1">Users on smaller screens cannot access inner pages easily.</p>
            </li>
            
            <li className="bg-neutral-50 p-4 rounded-lg border-l-4 border-[#FFB703] shadow-sm relative">
              <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-[#FFB703] text-[#16324F] flex items-center justify-center text-xs font-bold shadow">2</span>
              <h4 className="font-bold text-neutral-800">Limited Navigation Options</h4>
              <p className="text-sm text-neutral-600 mt-1">Crucial links like "Projects", "Team", or "Contact" are buried or missing from the main view.</p>
            </li>
            
            <li className="bg-neutral-50 p-4 rounded-lg border-l-4 border-[#FF6B35] shadow-sm relative">
              <span className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-[#FF6B35] text-white flex items-center justify-center text-xs font-bold shadow">3</span>
              <h4 className="font-bold text-neutral-800">No Sticky CTA Button</h4>
              <p className="text-sm text-neutral-600 mt-1">A permanent "Donate" or "Volunteer" button in the top right is missing, reducing conversion opportunities.</p>
            </li>
          </ul>

          <div className="mt-8 p-4 bg-[#16324F]/5 rounded-lg border border-[#16324F]/10">
            <h4 className="font-bold text-[#16324F] text-sm uppercase mb-2">Recommendation</h4>
            <p className="text-sm text-neutral-700">Implement a responsive sticky header with a prominent donation button and a cleanly structured dropdown menu.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
