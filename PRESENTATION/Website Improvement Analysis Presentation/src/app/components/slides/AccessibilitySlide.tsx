import { Smartphone, Eye, Keyboard, Type, LayoutGrid } from "lucide-react";

export function AccessibilitySlide() {
  const improvements = [
    {
      icon: Smartphone,
      title: "Mobile-First Navigation",
      desc: "Implement a responsive hamburger menu with large, thumb-friendly tap targets and a sticky bottom bar for quick donation access on mobile devices.",
      color: "text-[#FF6B35]",
      bg: "bg-[#FF6B35]/10"
    },
    {
      icon: Eye,
      title: "Contrast & Readability",
      desc: "Ensure all text meets WCAG AA contrast ratios (minimum 4.5:1). Darken placeholder text and increase the contrast of buttons against backgrounds.",
      color: "text-[#16324F]",
      bg: "bg-[#16324F]/10"
    },
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      desc: "Add visible focus states for all interactive elements to support users navigating without a mouse. Ensure logical tab order.",
      color: "text-[#FFB703]",
      bg: "bg-[#FFB703]/10"
    },
    {
      icon: Type,
      title: "Screen Reader Support",
      desc: "Add descriptive ARIA labels, alt text for all images (especially impact photos), and semantic HTML5 landmarks (<nav>, <main>, <header>).",
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      icon: LayoutGrid,
      title: "Responsive Grids",
      desc: "Convert rigid fixed-width containers to flexible CSS grids/flexbox to prevent horizontal scrolling on smaller tablets and large phones.",
      color: "text-teal-600",
      bg: "bg-teal-100"
    }
  ];

  return (
    <div className="w-full h-full bg-white p-12 flex flex-col">
      <div className="mb-8 flex items-end justify-between border-b-2 border-gray-100 pb-6">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-[#FF6B35] uppercase mb-2">07. Technical Audit</h2>
          <h1 className="text-4xl font-bold text-[#16324F]">Accessibility & Mobile Fixes</h1>
        </div>
      </div>

      <div className="flex-1 flex gap-10">
        {/* Visual Example Area */}
        <div className="w-1/3 flex flex-col gap-6">
          <div className="bg-[#16324F] text-white rounded-2xl p-6 relative overflow-hidden h-64 flex flex-col items-center justify-center">
             <Smartphone className="w-16 h-16 text-[#FFB703] mb-4 opacity-50" />
             <p className="text-center font-bold text-lg leading-tight z-10">68% of NGO traffic comes from mobile devices.</p>
             <p className="text-center text-sm text-blue-200 mt-2 z-10">The current site is losing potential donors due to poor mobile scaling.</p>
             
             {/* Decorative circles */}
             <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-white/5 rounded-full" />
             <div className="absolute bottom-[-20px] left-[-20px] w-24 h-24 bg-[#FF6B35]/20 rounded-full" />
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50 flex flex-col items-center">
            <h4 className="font-bold text-sm text-gray-500 mb-4 uppercase tracking-wider">Contrast Example</h4>
            <div className="flex w-full gap-4">
               <div className="flex-1 p-3 bg-[#FF6B35] rounded-lg text-white text-center font-medium shadow-inner flex flex-col items-center justify-center border-2 border-green-400 relative">
                  <span className="text-sm">Passes (4.5:1)</span>
                  <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1 border-2 border-white">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
               </div>
               <div className="flex-1 p-3 bg-gray-300 rounded-lg text-white text-center font-medium shadow-inner flex flex-col items-center justify-center border-2 border-red-400 relative">
                  <span className="text-sm">Fails (1.2:1)</span>
                  <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 border-2 border-white">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* List of Improvements */}
        <div className="w-2/3 flex flex-col justify-center">
          <div className="space-y-4">
            {improvements.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className={`p-3 rounded-xl ${item.bg} shrink-0`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}