import React from 'react';
import { AlertCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import headerImg from "../../imports/WhatsApp_Image_2026-06-01_at_12.54.53__1_.jpeg";

export default function Slide8Recommendations() {
  return (
    <div className="w-full h-full flex flex-col bg-white relative">
      
      {/* Header with image background */}
      <header className="relative h-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src={headerImg} alt="Header background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#16324F]/85 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center px-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#FFB703] mb-2">Roadmap</h2>
          <h1 className="text-4xl font-extrabold text-white">Final Recommendations</h1>
        </div>
      </header>

      <div className="flex-1 p-12 flex flex-col">
        <p className="text-lg text-neutral-600 mb-8 max-w-4xl border-l-4 border-[#FF6B35] pl-4">
          Based on the UX audit, we have categorized the required improvements into a priority matrix. Focusing on High Priority items will yield the most immediate impact on user conversion and engagement.
        </p>

        {/* Priority Matrix */}
        <div className="flex-1 grid grid-cols-3 gap-6">
          
          {/* High Priority */}
          <div className="bg-red-50 rounded-xl border-t-4 border-red-500 shadow-sm flex flex-col overflow-hidden">
            <div className="p-4 bg-red-100/50 flex items-center gap-2 border-b border-red-100">
              <AlertCircle size={20} className="text-red-600" />
              <h3 className="font-bold text-red-800">High Priority</h3>
              <span className="ml-auto text-xs font-bold bg-white text-red-600 px-2 py-1 rounded-full">Phase 1</span>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white p-3 rounded shadow-sm border border-red-100">
                  <div className="mt-0.5 text-red-500"><ArrowRight size={16} /></div>
                  <div>
                    <span className="font-bold text-neutral-800 text-sm block">Mobile Menu & Navigation</span>
                    <span className="text-xs text-neutral-500">Fix responsive menu immediately.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded shadow-sm border border-red-100">
                  <div className="mt-0.5 text-red-500"><ArrowRight size={16} /></div>
                  <div>
                    <span className="font-bold text-neutral-800 text-sm block">Donation System UI</span>
                    <span className="text-xs text-neutral-500">Prominent CTA & streamlined flow.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Medium Priority */}
          <div className="bg-orange-50 rounded-xl border-t-4 border-[#FF6B35] shadow-sm flex flex-col overflow-hidden">
            <div className="p-4 bg-orange-100/50 flex items-center gap-2 border-b border-orange-100">
              <Clock size={20} className="text-[#FF6B35]" />
              <h3 className="font-bold text-orange-900">Medium Priority</h3>
              <span className="ml-auto text-xs font-bold bg-white text-[#FF6B35] px-2 py-1 rounded-full">Phase 2</span>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white p-3 rounded shadow-sm border border-orange-100">
                  <div className="mt-0.5 text-[#FF6B35]"><ArrowRight size={16} /></div>
                  <div>
                    <span className="font-bold text-neutral-800 text-sm block">Interactive Impact Counters</span>
                    <span className="text-xs text-neutral-500">Visualize data instead of text blocks.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded shadow-sm border border-orange-100">
                  <div className="mt-0.5 text-[#FF6B35]"><ArrowRight size={16} /></div>
                  <div>
                    <span className="font-bold text-neutral-800 text-sm block">Testimonials & Social Proof</span>
                    <span className="text-xs text-neutral-500">Add trust-building elements to home.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded shadow-sm border border-orange-100">
                  <div className="mt-0.5 text-[#FF6B35]"><ArrowRight size={16} /></div>
                  <div>
                    <span className="font-bold text-neutral-800 text-sm block">Photo Gallery</span>
                    <span className="text-xs text-neutral-500">High-quality project visuals.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Low Priority */}
          <div className="bg-blue-50 rounded-xl border-t-4 border-[#16324F] shadow-sm flex flex-col overflow-hidden">
            <div className="p-4 bg-blue-100/50 flex items-center gap-2 border-b border-blue-100">
              <CheckCircle size={20} className="text-[#16324F]" />
              <h3 className="font-bold text-blue-900">Low Priority</h3>
              <span className="ml-auto text-xs font-bold bg-white text-[#16324F] px-2 py-1 rounded-full">Phase 3</span>
            </div>
            <div className="p-6 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-white p-3 rounded shadow-sm border border-blue-100">
                  <div className="mt-0.5 text-[#16324F]"><ArrowRight size={16} /></div>
                  <div>
                    <span className="font-bold text-neutral-800 text-sm block">Team Section Update</span>
                    <span className="text-xs text-neutral-500">Modernize staff/volunteer profiles.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-white p-3 rounded shadow-sm border border-blue-100">
                  <div className="mt-0.5 text-[#16324F]"><ArrowRight size={16} /></div>
                  <div>
                    <span className="font-bold text-neutral-800 text-sm block">Newsletter Signup</span>
                    <span className="text-xs text-neutral-500">Add capture form in footer.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
