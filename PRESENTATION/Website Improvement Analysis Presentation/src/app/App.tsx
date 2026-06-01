import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Presentation } from 'lucide-react';
import Slide1Cover from './components/Slide1Cover';
import Slide2Summary from './components/Slide2Summary';
import Slide3Navigation from './components/Slide3Navigation';
import Slide4Hero from './components/Slide4Hero';
import Slide5Content from './components/Slide5Content';
import Slide6UX from './components/Slide6UX';
import Slide7Accessibility from './components/Slide7Accessibility';
import Slide8Recommendations from './components/Slide8Recommendations';

const slides = [
  Slide1Cover,
  Slide2Summary,
  Slide3Navigation,
  Slide4Hero,
  Slide5Content,
  Slide6UX,
  Slide7Accessibility,
  Slide8Recommendations,
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-neutral-800 flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Presentation Container (16:9 Aspect Ratio) */}
      <div className="relative w-full max-w-6xl aspect-video bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col">
        {/* Slide Content */}
        <div className="flex-1 w-full h-full relative">
          <CurrentComponent />
        </div>
        
        {/* Navigation overlay for actual presentation feel */}
        <div className="absolute bottom-6 right-8 flex items-center space-x-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow border border-neutral-200 z-50 transition-opacity opacity-0 hover:opacity-100 focus-within:opacity-100" style={{ animation: 'fade-in 1s ease-in forwards' }}>
          <span className="text-sm font-bold text-[#16324F] mr-2">
            {currentSlide + 1} / {slides.length}
          </span>
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-1 rounded-full text-[#16324F] hover:bg-neutral-100 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-1 rounded-full text-[#16324F] hover:bg-neutral-100 disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="mt-6 text-neutral-400 flex items-center gap-2">
        <Presentation size={18} />
        <span className="text-sm font-medium">Use Left/Right arrows or click controls to navigate</span>
      </div>
      
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          90% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
