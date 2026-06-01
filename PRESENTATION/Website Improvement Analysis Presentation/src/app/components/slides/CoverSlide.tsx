import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight, BarChart3, Users, LayoutTemplate, Globe } from "lucide-react";

export function CoverSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#16324F] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwbmdvfGVufDF8fHx8MTc4MDI5OTA0MXww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Community volunteers working together"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        {/* Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#16324F] via-[#16324F]/90 to-[#16324F]/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35] rounded-bl-[100px] z-0 opacity-80" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFB703] rounded-tr-[100px] z-0 opacity-80" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl px-12 flex flex-col text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full w-fit mb-8 backdrop-blur-sm border border-white/20">
          <Globe className="w-4 h-4 text-[#FFB703]" />
          <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">UX Audit & Redesign Strategy</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          InAmigos Foundation
          <span className="block text-[#FFB703] mt-2">Website Improvement Analysis</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl font-light leading-relaxed border-l-4 border-[#FF6B35] pl-6 mb-12">
          NGO Awareness Website Review & UX Recommendations to maximize digital impact and volunteer engagement.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl border-t border-white/20 pt-8 mt-4">
          <div className="flex flex-col gap-2">
            <LayoutTemplate className="w-6 h-6 text-[#FF6B35]" />
            <span className="text-white font-medium text-lg">UI/UX Audit</span>
          </div>
          <div className="flex flex-col gap-2">
            <Users className="w-6 h-6 text-[#FFB703]" />
            <span className="text-white font-medium text-lg">User Flow</span>
          </div>
          <div className="flex flex-col gap-2">
            <BarChart3 className="w-6 h-6 text-[#FF6B35]" />
            <span className="text-white font-medium text-lg">Conversion</span>
          </div>
        </div>
      </div>
    </div>
  );
}