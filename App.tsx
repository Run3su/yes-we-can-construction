
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, Phone, Star, ChevronRight, MapPin, CheckCircle2, 
  Home as HomeIcon, LayoutGrid, Briefcase, UserCircle, 
  ArrowRight, X, Camera, Bath, ChefHat, Hammer, Warehouse, Building2, HardHat, Mail
} from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';

// ScrollToTop component to handle smooth scrolling on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = [
    { label: 'Home', path: '/', icon: HomeIcon },
    { label: 'Services', path: '/services', icon: LayoutGrid },
    { label: 'Projects', path: '/projects', icon: Briefcase },
    { label: 'About', path: '/about', icon: UserCircle },
    { label: 'Reviews', path: '/reviews', icon: Star },
    { label: 'Contact', path: '/contact', icon: Phone },
  ];

  const getIconClass = (path: string) => {
    const isActive = location.pathname === path;
    return `transition-all duration-300 ${
      isActive 
        ? 'text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,1)]' 
        : 'text-blue-600 hover:text-blue-400'
    }`;
  };

  return (
    <>
      {/* Responsive Header */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 py-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="p-2 -ml-2 text-gray-700 lg:hidden focus:outline-none hover:bg-gray-100 rounded-lg transition-colors">
              <Menu size={24} />
            </button>
            <Link to="/" className="font-extrabold text-xl tracking-tighter text-gray-900 flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <Building2 size={20} />
              </div>
              <span className="hidden sm:inline">Yes We Can Construction Ltd</span>
              <span className="sm:hidden">Yes We Can</span>
            </Link>
          </div>

          {/* Desktop Nav Links - Fixed width icon containers for equal spacing alignment */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.filter(item => item.label !== 'Contact').map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 text-sm font-bold transition-all relative py-1 ${
                  location.pathname === item.path ? 'text-green-600' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <div className="w-5 flex justify-center">
                  <item.icon size={18} className={getIconClass(item.path)} />
                </div>
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <a href="tel:+447734217199" className="hidden lg:flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
              <Phone size={18} className="text-blue-600" />
              +44 7734 217199
            </a>
            <Link to="/contact" className="px-5 py-2.5 lg:px-6 lg:py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2">
              <Mail size={18} className="hidden lg:block" />
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Animated Slide-over menu (Mobile only) */}
      <div 
        className={`fixed inset-0 z-[60] flex lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          onClick={() => setIsMenuOpen(false)} 
        />
        
        <div 
          className={`relative w-72 max-w-[80vw] bg-white h-full shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1 rounded-md text-white">
                <Building2 size={16} />
              </div>
              <span className="font-extrabold text-sm tracking-tight">Navigation</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-6">
            <div className="px-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 group ${
                    location.pathname === item.path 
                      ? 'bg-green-50 text-green-700 font-bold shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-50 active:scale-95'
                  }`}
                >
                  <div className={`p-2 rounded-xl transition-all ${
                    location.pathname === item.path ? 'bg-white shadow-sm' : 'bg-gray-100 group-hover:bg-white'
                  }`}>
                    <item.icon size={18} className={getIconClass(item.path)} />
                  </div>
                  <span className="text-sm tracking-tight">{item.label}</span>
                  {location.pathname === item.path && (
                    <ChevronRight size={14} className="ml-auto opacity-50" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-6 border-t border-gray-100 bg-gray-50/50">
            <a 
              href="tel:+447734217199" 
              className="flex items-center gap-3 w-full bg-white border border-gray-200 p-4 rounded-2xl shadow-sm active:scale-95 transition-transform"
            >
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Call Desk</span>
                <span className="text-sm font-bold text-gray-900">+44 7734 217199</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Nav for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center lg:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        {navItems.slice(0, 4).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-1 transition-all ${
              location.pathname === item.path ? 'text-green-600 scale-110' : 'text-gray-400'
            }`}
          >
            <item.icon size={20} className={getIconClass(item.path)} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen pb-20 lg:pb-0 flex flex-col bg-slate-50">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Floating Mobile CTA */}
        <div className="fixed bottom-[72px] left-0 right-0 px-4 z-40 lg:hidden">
          <Link to="/contact" className="flex items-center justify-center gap-2 w-full bg-[#1677FF] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-500/30 active:scale-95 transition-all">
             <Briefcase size={18} />
             Request Management Proposal
          </Link>
        </div>
      </div>
    </Router>
  );
}
