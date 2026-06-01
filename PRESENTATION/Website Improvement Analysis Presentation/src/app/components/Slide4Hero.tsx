import React from 'react';
import { ArrowDownRight, Layers, LayoutTemplate, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImg from "../../imports/WhatsApp_Image_2026-06-01_at_12.54.52__1_.jpeg";

export default function Slide4Hero() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white relative">
      <header className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF6B35] mb-2">Issue Analysis</h2>
        <h1 className="text-4xl font-extrabold text-[#16324F]">Hero Section Engagement</h1>
      </header>

      <div className="flex-1 flex flex-col gap-6 h-[calc(100%-80px)]">
        
        {/* Top Split Area */}
        <div className="flex-1 flex gap-8 h-1/2">
          {/* Screenshot Area */}
          <div className="w-1/2 h-full relative bg-neutral-100 rounded-xl overflow-hidden shadow-inner flex items-center justify-center p-4">
            <div className="relative w-full h-full shadow-lg rounded-lg overflow-hidden border border-neutral-200">
              <ImageWithFallback src={heroImg} alt="Hero Screenshot" className="w-full h-full object-cover object-top" />
              
              {/* Annotations */}
              <div className="absolute bottom-1/4 left-1/4 bg-white/90 p-2 rounded shadow-lg text-xs font-bold text-red-600 border-2 border-red-500 flex items-center gap-1 z-10">
                Only one primary CTA <ArrowDownRight size={14} />
              </div>
            </div>
          </div>

          {/* Notes Area */}
          <div className="w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#16324F] mb-6 flex items-center gap-2">
              <Target className="text-[#FF6B35]" /> Critical Missing Elements
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-neutral-50 p-4 rounded-lg border-l-4 border-red-500 flex items-start gap-4">
                <div className="mt-1 bg-red-100 p-1.5 rounded text-red-600 font-bold text-xs">01</div>
                <div>
                  <h4 className="font-bold text-neutral-800">Only One CTA Button</h4>
                  <p className="text-sm text-neutral-600">Fails to capture users with different intents (e.g., donating vs. learning more).</p>
                </div>
              </div>
              
              <div className="bg-neutral-50 p-4 rounded-lg border-l-4 border-[#FF6B35] flex items-start gap-4">
                <div className="mt-1 bg-orange-100 p-1.5 rounded text-[#FF6B35] font-bold text-xs">02</div>
                <div>
                  <h4 className="font-bold text-neutral-800">No Direct Donation Option</h4>
                  <p className="text-sm text-neutral-600">The primary goal of most NGO sites is fundraising. This must be immediately visible.</p>
                </div>
              </div>

              <div className="bg-neutral-50 p-4 rounded-lg border-l-4 border-[#FFB703] flex items-start gap-4">
                <div className="mt-1 bg-yellow-100 p-1.5 rounded text-yellow-700 font-bold text-xs">03</div>
                <div>
                  <h4 className="font-bold text-neutral-800">Missing Volunteer CTA</h4>
                  <p className="text-sm text-neutral-600">Secondary actions like joining the team or volunteering are not prominent above the fold.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wireframe mockup */}
        <div className="h-1/3 bg-neutral-50 rounded-xl border-2 border-dashed border-[#16324F]/30 p-6 flex items-center gap-6">
          <div className="w-1/4">
            <h4 className="font-bold text-[#16324F] flex items-center gap-2 mb-2">
              <LayoutTemplate size={20} /> Proposed Wireframe
            </h4>
            <p className="text-xs text-neutral-500">Dual CTA structure ensures both primary and secondary user journeys are addressed immediately upon landing.</p>
          </div>
          
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-neutral-200 h-full p-4 flex flex-col justify-center relative overflow-hidden">
             {/* Mock wireframe hero */}
             <div className="w-full max-w-lg">
                <div className="h-6 w-3/4 bg-neutral-200 rounded mb-3"></div>
                <div className="h-4 w-full bg-neutral-100 rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-neutral-100 rounded mb-6"></div>
                <div className="flex gap-4">
                  <div className="h-10 w-32 bg-[#FF6B35] rounded-md shadow-sm flex items-center justify-center text-white text-xs font-bold">Donate Now</div>
                  <div className="h-10 w-32 bg-white border-2 border-[#16324F] rounded-md flex items-center justify-center text-[#16324F] text-xs font-bold">Volunteer</div>
                </div>
             </div>
             
             {/* Annotation on wireframe */}
             <div className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-[#16324F]/10 text-[#16324F] text-xs font-bold px-3 py-1.5 rounded-full border border-[#16324F]/20 flex items-center gap-2">
               <Layers size={14} /> Improved Hierarchy
             </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
