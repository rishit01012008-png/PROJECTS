import { FileText, Image as ImageIcon, PieChart, Quote } from "lucide-react";

export function ContentSlide() {
  return (
    <div className="w-full h-full bg-white p-12 flex flex-col">
      <div className="mb-8 flex items-end justify-between border-b-2 border-gray-100 pb-6">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-[#FF6B35] uppercase mb-2">05. Content & Projects Analysis</h2>
          <h1 className="text-4xl font-bold text-[#16324F]">Information Architecture</h1>
        </div>
      </div>

      <div className="flex-1 flex gap-8">
        {/* Left: Annotated Wireframe */}
        <div className="w-1/2 bg-gray-50 rounded-2xl border border-gray-200 p-8 flex flex-col items-center justify-center relative shadow-inner">
          <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="h-6 w-32 bg-gray-300 rounded mb-4" />
            <div className="space-y-2 mb-6">
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-4/6 bg-gray-200 rounded" />
            </div>
            
            <div className="h-6 w-40 bg-gray-300 rounded mb-4 mt-8" />
            <div className="flex gap-4">
              <div className="w-1/3 h-24 bg-gray-200 rounded" />
              <div className="w-1/3 h-24 bg-gray-200 rounded" />
              <div className="w-1/3 h-24 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Post-it Annotations */}
          <div className="absolute top-12 -left-6 bg-yellow-200 p-4 rounded shadow-md transform -rotate-6 w-48 border border-yellow-300">
            <p className="text-xs font-bold text-yellow-900 leading-tight flex gap-2">
               <FileText className="w-4 h-4 text-red-500 shrink-0" />
               1. Large, intimidating text blocks. Needs chunking.
            </p>
          </div>

          <div className="absolute top-1/2 right-0 bg-yellow-200 p-4 rounded shadow-md transform rotate-3 w-48 border border-yellow-300 translate-x-4">
            <p className="text-xs font-bold text-yellow-900 leading-tight flex gap-2">
               <PieChart className="w-4 h-4 text-red-500 shrink-0" />
               2. No project progress indicators or goals.
            </p>
          </div>

          <div className="absolute bottom-12 -left-4 bg-yellow-200 p-4 rounded shadow-md transform rotate-2 w-48 border border-yellow-300">
            <p className="text-xs font-bold text-yellow-900 leading-tight flex gap-2">
               <Quote className="w-4 h-4 text-red-500 shrink-0" />
               3. Missing success stories & testimonials.
            </p>
          </div>

          <div className="absolute bottom-24 right-4 bg-yellow-200 p-4 rounded shadow-md transform -rotate-3 w-48 border border-yellow-300">
            <p className="text-xs font-bold text-yellow-900 leading-tight flex gap-2">
               <ImageIcon className="w-4 h-4 text-red-500 shrink-0" />
               4. Lacking real impact visuals (photos/videos).
            </p>
          </div>
        </div>

        {/* Right: Recommendations */}
        <div className="w-1/2 flex flex-col justify-center gap-6">
          <div className="bg-[#FF6B35]/10 p-6 rounded-xl border border-[#FF6B35]/20">
            <h3 className="font-bold text-[#16324F] text-lg mb-2">Content Strategy Shift</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Transition from "telling" to "showing". Users engage more with stories and data visualisations than dense paragraphs explaining the foundation's history.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <PieChart className="w-6 h-6 text-[#FFB703] mb-3" />
              <h4 className="font-bold text-sm text-[#16324F]">Impact Counters</h4>
              <p className="text-xs text-gray-500 mt-1">Add animated numbers showing lives touched, funds raised, etc.</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Quote className="w-6 h-6 text-[#FFB703] mb-3" />
              <h4 className="font-bold text-sm text-[#16324F]">Human Stories</h4>
              <p className="text-xs text-gray-500 mt-1">Feature beneficiary quotes and volunteer spotlights.</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow col-span-2">
              <ImageIcon className="w-6 h-6 text-[#FFB703] mb-3" />
              <h4 className="font-bold text-sm text-[#16324F]">Gallery & Visual Proof</h4>
              <p className="text-xs text-gray-500 mt-1">Implement a dynamic project gallery with filtering to show active on-ground work instead of stock photos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}