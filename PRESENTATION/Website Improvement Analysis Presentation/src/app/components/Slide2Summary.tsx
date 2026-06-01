import React from 'react';
import { PenTool, FileText, MousePointer, Accessibility, Smartphone } from 'lucide-react';

export default function Slide2Summary() {
  const scorecards = [
    { title: 'Design & UI', score: '6.5/10', icon: <PenTool className="text-[#FF6B35]" size={24} />, description: 'Modernization needed. Inconsistent spacing and missing brand cohesion.' },
    { title: 'Content & Copy', score: '7.0/10', icon: <FileText className="text-[#16324F]" size={24} />, description: 'Good information, but requires better structuring into scannable blocks.' },
    { title: 'User Experience', score: '5.5/10', icon: <MousePointer className="text-[#FFB703]" size={24} />, description: 'Lacking clear calls-to-action (CTAs) and an intuitive conversion path.' },
    { title: 'Accessibility', score: '6.0/10', icon: <Accessibility className="text-[#FF6B35]" size={24} />, description: 'Needs contrast improvements and better keyboard navigation support.' },
    { title: 'Mobile Responsiveness', score: '4.5/10', icon: <Smartphone className="text-[#16324F]" size={24} />, description: 'Critical issues: missing mobile menu and unoptimized layout on small screens.' },
  ];

  return (
    <div className="w-full h-full flex flex-col p-12 bg-white relative">
      <div className="absolute top-0 right-0 w-32 h-2" style={{ backgroundColor: '#FF6B35' }}></div>
      <div className="absolute top-0 right-32 w-16 h-2" style={{ backgroundColor: '#FFB703' }}></div>

      <header className="mb-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#FF6B35] mb-2">Executive Summary</h2>
        <h1 className="text-4xl font-extrabold text-[#16324F]">Current State Overview</h1>
      </header>

      <div className="flex-1 flex flex-col justify-between">
        <div className="bg-neutral-50 border-l-4 p-6 rounded-r-lg mb-8" style={{ borderColor: '#16324F' }}>
          <p className="text-lg text-neutral-700 leading-relaxed">
            The InAmigos Foundation website successfully conveys the organization's mission but struggles with <strong>user retention and action conversion</strong>. While the core content is present, structural gaps—particularly in mobile navigation, clear calls-to-action (like Donations and Volunteering), and visual storytelling—limit the site's effectiveness.
          </p>
        </div>

        <h3 className="text-xl font-bold text-[#16324F] mb-6 border-b pb-2">Category Scorecards</h3>
        
        <div className="grid grid-cols-5 gap-4 flex-1">
          {scorecards.map((card, idx) => (
            <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-neutral-100">
                  {card.icon}
                </div>
                <span className="text-lg font-bold" style={{ color: '#16324F' }}>{card.score}</span>
              </div>
              <h4 className="font-bold text-neutral-800 mb-2">{card.title}</h4>
              <p className="text-sm text-neutral-500 leading-relaxed flex-1">
                {card.description}
              </p>
              
              {/* Progress bar visual */}
              <div className="w-full h-1.5 bg-neutral-100 rounded-full mt-4 overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: `${(parseFloat(card.score.split('/')[0]) / 10) * 100}%`,
                    backgroundColor: parseFloat(card.score) < 6 ? '#FF6B35' : (parseFloat(card.score) < 7.5 ? '#FFB703' : '#16324F')
                  }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
