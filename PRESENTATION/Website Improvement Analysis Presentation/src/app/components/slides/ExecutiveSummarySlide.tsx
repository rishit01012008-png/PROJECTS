import { CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";

export function ExecutiveSummarySlide() {
  const scorecards = [
    { name: "Design & Aesthetics", score: 65, color: "bg-[#FF6B35]" },
    { name: "Content Strategy", score: 55, color: "bg-[#FFB703]" },
    { name: "User Experience (UX)", score: 45, color: "bg-red-500" },
    { name: "Accessibility", score: 40, color: "bg-red-600" },
    { name: "Mobile Responsiveness", score: 50, color: "bg-[#FFB703]" },
  ];

  return (
    <div className="w-full h-full bg-white p-12 flex flex-col">
      {/* Header */}
      <div className="mb-10 flex items-end justify-between border-b-2 border-gray-100 pb-6">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-[#FF6B35] uppercase mb-2">02. Executive Summary</h2>
          <h1 className="text-4xl font-bold text-[#16324F]">Current State Analysis</h1>
        </div>
        <div className="w-16 h-2 bg-[#FFB703] rounded-full" />
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Text Overview */}
        <div className="flex flex-col gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-[#16324F]">
            <h3 className="text-xl font-bold text-[#16324F] mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#FF6B35]" />
              Website Overview
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The InAmigos Foundation website currently serves as a basic digital brochure but lacks the interactive and structural elements necessary for a modern NGO platform. While the mission is noble, the digital execution limits potential reach, donations, and volunteer sign-ups.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Strengths
              </h4>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• Clear brand colors</li>
                <li>• Good quality imagery</li>
                <li>• Concise mission statement</li>
              </ul>
            </div>
            
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Weaknesses
              </h4>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• Weak calls-to-action</li>
                <li>• Poor mobile navigation</li>
                <li>• Missing donation flow</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Scorecards */}
        <div className="flex flex-col justify-center bg-white shadow-lg shadow-gray-200/50 rounded-2xl p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-[#16324F] mb-8 text-center">Performance Scorecards</h3>
          
          <div className="space-y-6">
            {scorecards.map((item) => (
              <div key={item.name} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700">{item.name}</span>
                  <span className="font-bold text-[#16324F]">{item.score}/100</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm font-medium text-gray-500">
              Overall Website Health Score: <span className="text-2xl font-bold text-[#FF6B35] ml-2">51/100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}