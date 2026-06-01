import { MoveRight, MoveUpRight, ArrowRightCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function NavigationSlide() {
  return (
    <div className="w-full h-full bg-white p-12 flex flex-col">
      {/* Header */}
      <div className="mb-8 flex items-end justify-between border-b-2 border-gray-100 pb-6">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-[#FF6B35] uppercase mb-2">03. Navigation Analysis</h2>
          <h1 className="text-4xl font-bold text-[#16324F]">Header & Menu Audit</h1>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left Column: Visual Annotation */}
        <div className="lg:col-span-3 flex flex-col bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Current Desktop Header Simulation</h3>
          
          <div className="relative w-full h-32 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-between px-6 overflow-hidden">
            {/* Fake Logo */}
            <div className="w-32 h-10 bg-gray-200 rounded animate-pulse" />
            
            {/* Fake Nav Links */}
            <div className="flex gap-6">
              <div className="w-16 h-4 bg-gray-200 rounded" />
              <div className="w-20 h-4 bg-gray-200 rounded" />
              <div className="w-16 h-4 bg-gray-200 rounded" />
            </div>

            {/* Annotations */}
            <div className="absolute top-1/2 left-[45%] -translate-y-1/2">
               <div className="relative">
                 <MoveUpRight className="w-10 h-10 text-red-500 absolute -top-8 -left-8 transform -scale-x-100 rotate-45 stroke-[3]" />
                 <span className="absolute -top-16 -left-32 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded shadow-sm whitespace-nowrap border border-red-200">
                   1. Limited Options
                 </span>
               </div>
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2">
               <div className="relative">
                 <MoveRight className="w-10 h-10 text-red-500 absolute -left-12 top-0 stroke-[3]" />
                 <span className="absolute -top-10 -left-32 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded shadow-sm whitespace-nowrap border border-red-200">
                   2. Missing CTA Button
                 </span>
               </div>
            </div>
          </div>

          <div className="mt-8 relative w-full h-48 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-between px-4 overflow-hidden">
             {/* Fake Mobile Header */}
             <div className="w-24 h-8 bg-gray-200 rounded" />
             {/* Fake Hamburger */}
             <div className="w-8 h-8 bg-gray-200 rounded" />

             {/* Annotation */}
             <div className="absolute right-8 top-1/2 -translate-y-1/2">
               <div className="relative">
                 <MoveUpRight className="w-10 h-10 text-red-500 absolute -left-10 top-2 stroke-[3]" />
                 <span className="absolute -bottom-12 -left-20 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded shadow-sm whitespace-nowrap border border-red-200">
                   3. Hidden/Poor Mobile Menu
                 </span>
               </div>
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-400 mt-4 italic">Screenshot Placeholders with Annotations</p>
        </div>

        {/* Right Column: Recommendations */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-[#16324F] text-white rounded-2xl p-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-[#FFB703]">Improvement Recommendations</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-full h-fit">
                  <ArrowRightCircle className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sticky "Donate" CTA</h4>
                  <p className="text-blue-100 text-sm mt-1">A highly visible, sticky primary action button is crucial for NGO conversions.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-full h-fit">
                  <ArrowRightCircle className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Expanded Desktop Nav</h4>
                  <p className="text-blue-100 text-sm mt-1">Add clear paths to 'Projects', 'Success Stories', and 'Get Involved'.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-full h-fit">
                  <ArrowRightCircle className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Accessible Mobile Menu</h4>
                  <p className="text-blue-100 text-sm mt-1">Implement a full-screen or slide-out modern mobile menu with large tap targets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}