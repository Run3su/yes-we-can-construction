
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, ChevronRight, ShieldCheck, Award, CheckCircle2, MapPin, Bath, ChefHat, Hammer, Warehouse, ArrowRight, Building2, Facebook, Linkedin, Mail } from 'lucide-react';

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14.7 8.38 8.38 0 0 1 3.8.9L21 3l-1.5 4.5Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Home = () => {
  const accreditations = [
    { icon: ShieldCheck, label: 'Federation of Master Builders' },
    { icon: Award, label: 'TrustMark Accredited' },
    { icon: CheckCircle2, label: 'Checkatrade Vetted' }
  ];

  const services = [
    { title: 'Extensions', desc: 'Expand your living space with seamless additions.', icon: Warehouse, color: 'bg-blue-100 text-blue-600' },
    { title: 'Loft Conversions', desc: 'Smart upward expansion for extra rooms.', icon: Hammer, color: 'bg-blue-100 text-blue-600' },
    { title: 'Kitchens', desc: 'Bespoke modern fitting with premium finishes.', icon: ChefHat, color: 'bg-blue-100 text-blue-600' },
    { title: 'Bathrooms', desc: 'Luxury suite installation and full tiling.', icon: Bath, color: 'bg-blue-100 text-blue-600' },
  ];

  const ratings = [
    { score: 5, pct: 80 },
    { score: 4, pct: 15 },
    { score: 3, pct: 3 },
    { score: 2, pct: 1 },
    { score: 1, pct: 1 },
  ];

  const areas = ['Putney', 'Wandsworth', 'Fulham', 'Chelsea', 'Richmond', 'Wimbledon', 'Roehampton', 'Barnes', 'Kingston'];

  const collageImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=400',
  ];

  return (
    <div className="flex flex-col gap-16 lg:gap-32 pb-12">
      {/* Hero Section with Collage Background */}
      <section className="relative h-[700px] lg:h-[850px] mx-4 lg:mx-8 my-2 rounded-[2.5rem] overflow-hidden group">
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 h-full w-full grayscale opacity-40">
          {collageImages.concat(collageImages).map((src, i) => (
            <div key={i} className="relative overflow-hidden border-[0.5px] border-black/10">
              <img 
                src={src} 
                alt={`Interior preview ${i}`} 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
              />
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 lg:bg-gradient-to-r lg:from-black lg:via-black/50 lg:to-transparent" />

        <div className="absolute inset-0 p-8 lg:p-20 flex flex-col justify-end lg:justify-center text-white max-w-7xl mx-auto w-full">
          <div className="flex flex-col gap-6 max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full text-[12px] font-extrabold uppercase tracking-widest self-start">
              <CheckCircle2 size={14} fill="currentColor" />
              Residential and Commercial Projects.
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight lg:leading-[1.1] tracking-tighter">
              Reliable <span className="text-green-500">Construction Services</span> <br className="hidden lg:block" /> You Can Trust — Built to Last, <br className="hidden lg:block" /> Delivered on Time.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 font-medium max-w-xl leading-relaxed">
              From planning to completion, Yes We Can Construction Ltd delivers high-quality services with transparency, safety, and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/contact" className="px-8 py-5 bg-[#1677FF] rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2">
                Get a Free Quote <ArrowRight size={20} />
              </Link>
              <a href="tel:+447734217199" className="px-8 py-5 border border-white/20 bg-white/10 backdrop-blur-md rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Phone size={20} />
                +44 7734 217199
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Accreditations */}
      <div className="max-w-7xl mx-auto w-full px-6">
        <section className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12 opacity-60">
          {accreditations.map((acc, idx) => (
            <div key={idx} className="flex items-center gap-4 text-gray-900 group grayscale hover:grayscale-0 transition-all">
              <acc.icon size={32} className="group-hover:text-blue-600 transition-colors" />
              <span className="text-xs lg:text-sm font-black uppercase tracking-widest max-w-[120px]">{acc.label}</span>
            </div>
          ))}
        </section>
      </div>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-6xl font-black tracking-tighter text-gray-900">Expert Solutions</h2>
            <p className="text-gray-500 text-lg font-medium max-w-xl">From initial management to final structural completion, we provide precision at every scale.</p>
          </div>
          <Link to="/services" className="text-blue-600 font-bold flex items-center gap-2 group text-lg">
            Our Services <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all group">
              <div className={`p-4 rounded-2xl w-fit mb-10 ${s.color}`}>
                <s.icon size={32} />
              </div>
              <h3 className="font-black text-2xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium mb-10">{s.desc}</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-blue-600">
                View Details <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof Split */}
      <section className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="bg-white rounded-[4rem] p-16 shadow-xl shadow-gray-200/50 border border-gray-100">
          <div className="flex flex-col items-center text-center">
            <div className="text-8xl font-black text-gray-900 mb-4 tracking-tighter">4.9</div>
            <div className="flex gap-1 text-blue-500 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} size={32} fill={i === 5 ? "none" : "currentColor"} />)}
            </div>
            <div className="text-gray-400 font-bold text-base mb-16 uppercase tracking-[0.2em]">200+ Verified Client Reviews</div>
            <div className="w-full space-y-6">
              {ratings.map(r => (
                <div key={r.score} className="flex items-center gap-8 text-sm font-black text-gray-400">
                  <span className="w-4">{r.score}</span>
                  <div className="flex-1 h-2.5 bg-gray-50 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="w-12 text-right">{r.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-10 lg:pl-10">
          <h2 className="text-4xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">Trusted Across London.</h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Our reputation is built on transparency, discretion, and excellence. We invite you to explore our verified track record across Putney and Southwest London.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
              <h4 className="font-black text-lg mb-3 uppercase tracking-tighter text-blue-600">Management</h4>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">Dedicated project management for residential and commercial assets.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
              <h4 className="font-black text-lg mb-3 uppercase tracking-tighter text-blue-600">Craftsmanship</h4>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">Professional site management and highly vetted artisans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="max-w-7xl mx-auto w-full px-6">
        <div className="bg-[#0F172A] rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-12 lg:p-24 space-y-8 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter">Based in London.</h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              Operating from our Apsley House base, we bring premier construction and management services to your doorstep across Southwest London.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map(a => (
                <span key={a} className="bg-white/5 border border-white/10 text-white/60 text-xs font-bold px-4 py-3 rounded-full uppercase tracking-widest text-center flex items-center justify-center">
                  {a}
                </span>
              ))}
            </div>
            <div className="mt-2 text-center lg:text-left">
               <span className="text-blue-500 font-black text-sm uppercase tracking-widest">Global Expertise, Local Focus</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1512470876302-972fad2aa9dd?auto=format&fit=crop&q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover brightness-50 grayscale" 
              alt="London Cityscape"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-blue-600 p-6 rounded-full shadow-2xl animate-bounce">
                  <MapPin className="text-white" size={48} fill="currentColor" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Reduced size */}
      <footer className="bg-slate-900 text-white pt-8 pb-10 px-6 lg:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <Link to="/" className="font-black text-xl tracking-tighter flex items-center gap-2">
              <div className="bg-blue-600 p-1 rounded-lg">
                <Building2 size={20} />
              </div>
              Yes We Can Construction Ltd
            </Link>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
              Reliable Construction Services You Can Trust — Built to Last, Delivered on Time.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all group">
                <Facebook size={16} />
              </a>
              <a href="https://wa.me/447734217199" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-green-600 hover:text-white transition-all group">
                <WhatsAppIcon size={16} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-700 hover:text-white transition-all group">
                <Linkedin size={16} />
              </a>
              <a href="mailto:info@yeswecanconstruction.co.uk" className="p-2 bg-slate-800 rounded-lg hover:bg-red-500 hover:text-white transition-all group">
                <Mail size={16} />
              </a>
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-black text-sm uppercase tracking-widest text-blue-500">Navigation</h4>
            <ul className="space-y-1 text-slate-400 font-bold text-xs">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-black text-sm uppercase tracking-widest text-blue-500">Contact</h4>
            <ul className="space-y-1 text-slate-400 font-bold text-xs">
              <li className="flex items-center gap-2"><Phone size={14} /> +44 7734 217199</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> 12 Apsley House, London</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Licensed & Insured</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-black text-sm uppercase tracking-widest text-blue-500">Accreditations</h4>
            <div className="flex gap-3 opacity-40">
               <ShieldCheck size={24} />
               <Award size={24} />
               <Star size={24} />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-3 text-slate-500 text-[9px] font-black uppercase tracking-widest">
          <p>© 2024 Yes We Can Construction Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
