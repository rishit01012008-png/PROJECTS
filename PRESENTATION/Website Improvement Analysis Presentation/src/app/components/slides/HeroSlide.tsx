import { MoveDown, MoveRight, Layers, HandHeart } from "lucide-react";

export function HeroSlide() {
  return (
    <div className="w-full h-full bg-white p-12 flex flex-col">
      <div className="mb-8 flex items-end justify-between border-b-2 border-gray-100 pb-6">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-[#FF6B35] uppercase mb-2">04. Hero Section Analysis</h2>
          <h1 className="text-4xl font-bold text-[#16324F]">Above the Fold Experience</h1>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current State */}
        <div className="flex flex-col border-2 border-red-100 rounded-2xl bg-red-50/30 overflow-hidden">
          <div className="bg-red-100 px-6 py-3 border-b border-red-200">
            <h3 className="font-bold text-red-800">Current State</h3>
          </div>
          <div className="p-6 flex-1 flex flex-col relative">
            {/* Mock Current Hero */}
            <div className="w-full h-64 bg-gray-200 rounded-xl relative flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300">
              <div className="w-3/4 h-8 bg-gray-300 rounded mb-4" />
              <div className="w-1/2 h-4 bg-gray-300 rounded mb-8" />
              <div className="w-32 h-10 bg-gray-400 rounded-full" />
              
              {/* Annotations */}
              <div className="absolute bottom-16 right-1/4">
                 <div className="relative">
                   <MoveDown className="w-10 h-10 text-red-500 absolute -top-12 left-4 stroke-[3]" />
                   <span className="absolute -top-20 -left-16 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded shadow-sm whitespace-nowrap border border-red-200">
                     Only One Vague CTA
                   </span>
                 </div>
              </div>

              <div className="absolute top-8 left-8">
                 <div className="relative">
                   <MoveRight className="w-8 h-8 text-red-500 absolute top-0 -left-10 stroke-[3]" />
                   <span className="absolute -top-2 left-0 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded shadow-sm whitespace-nowrap border border-red-200">
                     Missing 'Donate' Action
                   </span>
                 </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" /> Vague value proposition
              </p>
              <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" /> Missing volunteer registration CTA
              </p>
              <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" /> No immediate emotional hook
              </p>
            </div>
          </div>
        </div>

        {/* Proposed Wireframe */}
        <div className="flex flex-col border-2 border-green-100 rounded-2xl bg-green-50/30 overflow-hidden">
          <div className="bg-green-100 px-6 py-3 border-b border-green-200 flex justify-between items-center">
            <h3 className="font-bold text-green-800">Proposed Wireframe Mockup</h3>
            <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded font-bold uppercase tracking-wider">Solution</span>
          </div>
          <div className="p-6 flex-1 flex flex-col relative">
            {/* Mock Improved Hero */}
            <div className="w-full h-64 bg-[#16324F] rounded-xl relative flex flex-col justify-center p-8 overflow-hidden shadow-inner">
              <div className="absolute right-0 top-0 w-1/2 h-full bg-[#FF6B35]/20 rounded-l-full blur-2xl" />
              
              <div className="relative z-10 w-4/5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-4">
                  <HandHeart className="w-3 h-3 text-[#FFB703]" />
                  <span className="text-[10px] text-white/80 font-bold uppercase tracking-widest">Join The Movement</span>
                </div>
                <div className="w-full h-10 bg-white/90 rounded mb-3" />
                <div className="w-2/3 h-4 bg-white/60 rounded mb-8" />
                
                <div className="flex gap-4">
                  <div className="w-32 h-10 bg-[#FF6B35] rounded font-bold text-white text-xs flex items-center justify-center shadow-lg">
                    Donate Now
                  </div>
                  <div className="w-32 h-10 bg-transparent border-2 border-white rounded font-bold text-white text-xs flex items-center justify-center">
                    Volunteer
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" /> Dual primary actions (Donate & Volunteer)
              </p>
              <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" /> Trust-building microcopy tag
              </p>
              <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" /> High-contrast readable overlay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}