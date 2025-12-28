
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MapPin, Camera, ArrowRight, ChevronRight, Briefcase, Leaf } from 'lucide-react';

const BeforeAfterSlider = ({ before, after }: { before: string, after: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-ew-resize select-none"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After Image (Background) */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Before Image (Clipped Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
          <ExpandIcon size={20} className="text-white" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[10px] font-bold text-white px-3 py-1 rounded pointer-events-none uppercase">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-blue-600/90 text-[10px] font-bold text-white px-3 py-1 rounded pointer-events-none uppercase">
        After
      </div>
      
      {/* Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-[9px] font-black text-white px-4 py-2 rounded-full uppercase tracking-[0.2em] pointer-events-none">
        Slide to Compare
      </div>
    </div>
  );
};

const Projects = () => {
  const filters = ['All', 'Residential', 'Commercial', 'Extensions'];

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
       {/* Main Container */}
       <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
          
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
             <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest">
                   <Briefcase size={16} /> Portfolio
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter">Our Latest Work</h1>
                <p className="text-slate-500 font-medium text-lg max-w-xl">
                   Explore our portfolio of high-end residential extensions, commercial fit-outs, and bespoke renovations across the UK.
                </p>
             </div>
             
             {/* Filters */}
             <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 lg:pb-0">
                {filters.map((f, i) => (
                   <button key={f} className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${i === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white border border-gray-200 text-slate-500 hover:border-blue-300 hover:text-blue-600'}`}>
                      {f}
                   </button>
                ))}
             </div>
          </div>

          {/* Featured Project - Full Width on Desktop */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-gray-100 mb-16 group">
             <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative min-h-[400px] lg:min-h-full bg-slate-200">
                   <BeforeAfterSlider 
                      before="https://images.unsplash.com/photo-1541913057-79902bc96026?auto=format&fit=crop&q=80&w=1200" 
                      after="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                   />
                </div>
                <div className="p-10 lg:p-16 flex flex-col justify-center space-y-8">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">Featured Project</span>
                         <div className="flex items-center gap-1 text-slate-400 text-xs font-bold">
                            <MapPin size={12} /> London, UK
                         </div>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight">Victorian Terrace <br/> Transformation</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">
                         A complete rear extension and ground floor reconfiguration. We added 40sqm of light-filled living space, installing full-width bi-fold doors and a bespoke kitchen island with waterfall marble tops.
                      </p>
                   </div>

                   <div className="grid grid-cols-3 gap-4">
                      {/* Stats */}
                      <div className="bg-slate-50 rounded-2xl p-4 border border-gray-100">
                         <ClockIcon className="text-blue-600 mb-2" size={20} />
                         <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Duration</div>
                         <div className="text-lg font-black text-slate-900">12 Wks</div>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-4 border border-gray-100">
                         <RulerIcon className="text-blue-600 mb-2" size={20} />
                         <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Area</div>
                         <div className="text-lg font-black text-slate-900">40m²</div>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-4 border border-gray-100">
                         <WalletIcon className="text-blue-600 mb-2" size={20} />
                         <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Budget</div>
                         <div className="text-lg font-black text-slate-900">£85k</div>
                      </div>
                   </div>

                   <Link to="/contact" className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-center hover:bg-blue-600 transition-colors shadow-lg">
                      View Case Study
                   </Link>
                </div>
             </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
             
             {/* Card 1 */}
             <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Office" />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-1">
                      <Camera size={12} /> 5 Photos
                   </div>
                </div>
                <div className="p-8 space-y-4">
                   <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Commercial • Birmingham</div>
                   <h3 className="text-xl font-black text-slate-900">Tech Startup HQ Fit-out</h3>
                   <p className="text-sm text-slate-500 font-medium line-clamp-3">Full interior renovation including HVAC installation, acoustic glass partitioning, and bespoke breakout areas for a modern workforce.</p>
                   <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">Completed Feb 2024</span>
                      <div className="p-2 bg-slate-50 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                         <ArrowRight size={16} />
                      </div>
                   </div>
                </div>
             </div>

             {/* Card 2 - Was List Item */}
             <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Kitchen" />
                </div>
                <div className="p-8 space-y-4">
                   <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Residential • Surrey</div>
                   <h3 className="text-xl font-black text-slate-900">Luxury Kitchen Remodel</h3>
                   <p className="text-sm text-slate-500 font-medium line-clamp-3">Installation of bespoke Italian cabinetry, waterfall island, and smart lighting integration.</p>
                   <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">Completed Jan 2024</span>
                      <div className="p-2 bg-slate-50 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                         <ArrowRight size={16} />
                      </div>
                   </div>
                </div>
             </div>

             {/* Card 3 - Was List Item */}
             <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Eco Home" />
                   <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                      <Leaf size={12} /> Sustainable
                   </div>
                </div>
                <div className="p-8 space-y-4">
                   <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest">New Build • Manchester</div>
                   <h3 className="text-xl font-black text-slate-900">Eco-Home Construction</h3>
                   <p className="text-sm text-slate-500 font-medium line-clamp-3">Timber frame construction with solar-ready infrastructure, triple glazing, and air source heat pump installation.</p>
                   <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">Completed Dec 2023</span>
                      <div className="p-2 bg-slate-50 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                         <ArrowRight size={16} />
                      </div>
                   </div>
                </div>
             </div>

          </div>

          <div className="text-center">
             <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-2xl font-black text-slate-900 hover:bg-slate-50 transition-all uppercase tracking-widest text-xs">
                Load More Projects <ChevronDown size={16} />
             </button>
          </div>
       </div>

       {/* CTA */}
       <div className="max-w-7xl mx-auto px-6">
        <Link to="/contact" className="w-full bg-[#1677FF] text-white py-12 rounded-[2.5rem] font-black text-2xl lg:text-4xl shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-4 hover:bg-blue-600 transition-all group">
          Start Your Project <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
        </Link>
       </div>
    </div>
  );
};

// Internal utility icons
const ClockIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);
const RulerIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21.3 15.3l-9.3-9.3c-.4-.4-1-.4-1.4 0l-4.3 4.3c-.4.4-.4 1 0 1.4l9.3 9.3c.4.4 1 .4 1.4 0l4.3-4.3c.4-.4.4-1 0-1.4z"/><path d="M7 14l-1.5 1.5"/><path d="M10 11l-1.5 1.5"/><path d="M13 8l-1.5 1.5"/></svg>
);
const WalletIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-3"/><path d="M16 12h5"/><circle cx="18.5" cy="12.5" r="1.5"/></svg>
);
const ExpandIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"/><path d="M3 3 9 9M3 3v4.8M3 3h4.8"/></svg>
);

export default Projects;
