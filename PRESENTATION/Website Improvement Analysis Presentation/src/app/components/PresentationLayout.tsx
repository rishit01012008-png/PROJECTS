import { Outlet, useNavigate, useLocation } from "react-router";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  { path: "/", title: "Cover Page" },
  { path: "/executive-summary", title: "Executive Summary" },
  { path: "/navigation-analysis", title: "Navigation Analysis" },
  { path: "/hero-analysis", title: "Hero Section Analysis" },
  { path: "/content-projects", title: "Content & Projects Analysis" },
  { path: "/ux-improvements", title: "User Experience Improvements" },
  { path: "/accessibility-mobile", title: "Accessibility & Mobile" },
  { path: "/recommendations", title: "Final Recommendations" },
];

export function PresentationLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentIndex = slides.findIndex((s) => s.path === location.pathname) === -1 
    ? 0 
    : slides.findIndex((s) => s.path === location.pathname);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      navigate(slides[currentIndex + 1].path);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      navigate(slides[currentIndex - 1].path);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden font-sans">
      {/* Top Navigation Bar */}
      <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-20 shrink-0">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-md text-gray-600 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-semibold text-[#16324F] hidden sm:block">
            InAmigos Foundation Website Audit
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 font-medium">
            Page {currentIndex + 1} of {slides.length}
          </span>
          <div className="flex gap-1">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent rounded-md text-gray-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex === slides.length - 1}
              className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent rounded-md text-gray-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div 
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 z-10 shadow-lg"
            >
              <div className="p-4 py-6 flex flex-col gap-2 h-full overflow-y-auto">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 px-3">Contents</h3>
                {slides.map((slide, i) => (
                  <button
                    key={slide.path}
                    onClick={() => {
                      navigate(slide.path);
                      setSidebarOpen(false);
                    }}
                    className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      currentIndex === i 
                        ? "bg-[#16324F] text-white" 
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {i + 1}. {slide.title}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay when sidebar open */}
        {sidebarOpen && (
          <div 
            className="absolute inset-0 bg-black/10 z-0 sm:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 sm:p-8 flex justify-center pb-20">
          <div className="w-full max-w-5xl bg-white aspect-[16/9] min-h-[600px] shadow-xl rounded-xl overflow-hidden relative flex flex-col">
             {/* Slide Content with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
      
      {/* Presentation Progress Bar */}
      <div className="h-1 bg-gray-200 w-full absolute bottom-0 left-0 z-30">
        <div 
          className="h-full bg-[#FF6B35] transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}