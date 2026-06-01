import React from 'react';
import { BookOpen, AlertTriangle, TrendingUp, Users, Image as ImageIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import contentImg from "../../imports/WhatsApp_Image_2026-06-01_at_12.54.52.jpeg";

export default function Slide5Content() {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-white relative">
      <header className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF6B35] mb-2">Content Audit</h2>
        <h1 className="text-4xl font-extrabold text-[#16324F]">Projects & Storytelling</h1>
      </header>

      <div className="flex-1 flex gap-8 h-[calc(100%-80px)]">
        
        {/* Screenshot Area with Annotations */}
        <div className="w-[55%] h-full relative bg-neutral-100 rounded-xl overflow-hidden shadow-inner p-4">
          <div className="relative w-full h-full shadow-lg rounded-lg overflow-hidden border border-neutral-200">
            <ImageWithFallback src={contentImg} alt="Content Section Screenshot" className="w-full h-full object-cover object-top" />
            
            {/* Annotation Overlay - Block of text */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[80%] h-[30%] bg-red-500/10 border-2 border-red-500 border-dashed rounded-lg flex items-center justify-center">
              <span className="bg-white/95 px-3 py-1 rounded text-red-600 font-bold text-xs shadow-md flex items-center gap-1">
                <AlertTriangle size={14} /> Dense Text Blocks
              </span>
            </div>
            
            <div className="absolute bottom-8 right-8 bg-white/95 px-3 py-2 rounded shadow-lg text-neutral-800 font-bold text-xs border border-neutral-200 flex flex-col gap-1 z-10">
              <span className="text-red-500 flex items-center gap-1"><TrendingUp size={12}/> No Progress Indicators</span>
              <span className="text-red-500 flex items-center gap-1"><Users size={12}/> Missing Impact Stats</span>
            </div>
          </div>
        </div>

        {/* Analysis Grid */}
        <div className="w-[45%] flex flex-col justify-center">
          <div className="bg-[#16324F] text-white p-6 rounded-t-xl">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BookOpen className="text-[#FFB703]" /> Content Strategy Gaps
            </h3>
            <p className="text-sm text-neutral-300 mt-2">
              The current approach relies too heavily on text descriptions, making it difficult for users to quickly grasp the foundation's impact.
            </p>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-b-xl border border-neutral-200 border-t-0 space-y-4">
            
            <div className="flex items-start gap-4 pb-4 border-b border-neutral-200">
              <div className="p-2 bg-red-100 text-red-600 rounded-lg shrink-0">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#16324F]">Large Text Blocks</h4>
                <p className="text-sm text-neutral-600">Heavy paragraphs cause user fatigue. Content should be broken down into bullet points, icons, or shorter scannable sentences.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-neutral-200">
              <div className="p-2 bg-orange-100 text-[#FF6B35] rounded-lg shrink-0">
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#16324F]">No Project Progress Indicators</h4>
                <p className="text-sm text-neutral-600">Donors want to see results. Adding progress bars for funding or milestones achieved increases trust and transparency.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-neutral-200">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#16324F]">Missing Success Stories</h4>
                <p className="text-sm text-neutral-600">Lack of personal testimonials or direct quotes from beneficiaries makes the cause feel abstract rather than human-centered.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg shrink-0">
                <ImageIcon size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#16324F]">Missing Impact Visuals</h4>
                <p className="text-sm text-neutral-600">Data should be visualized. Infographics or clear counters (e.g., "500+ Kids Helped") communicate value faster than text.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
