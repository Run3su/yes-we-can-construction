
import React from 'react';
import { ArrowRight, Clock, Building2, ShieldCheck, Star, Users, Briefcase, Leaf, ChevronDown, CheckCircle2, Quote, Menu, Phone, Home, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { value: '14+', label: 'Years Exp.', icon: Clock },
    { value: '250+', label: 'Projects Completed', icon: Building2 },
    { value: '10', label: 'Awards', icon: Star },
  ];

  const coreValues = [
    { title: 'Quality First', desc: 'Precision craftsmanship for high-end properties.', icon: ShieldCheck, color: 'bg-blue-50 text-blue-600' },
    { title: 'Precision Quality', desc: 'ISO 9001 certified building processes.', icon: ShieldCheck, color: 'bg-blue-50 text-blue-600' },
    { title: 'Prime Location', desc: 'Expertise in London building regulations.', icon: MapPin, color: 'bg-blue-50 text-blue-600' },
    { title: 'Sustainable', desc: 'Building for a greener London future.', icon: Leaf, color: 'bg-blue-50 text-blue-600' },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
       {/* Hero Section */}
       <header className="relative h-96 lg:h-[600px] overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem] mx-0 lg:mx-4">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover brightness-50" alt="Construction team" />
          
          <div className="absolute inset-x-8 bottom-8 lg:inset-x-20 lg:bottom-20 flex flex-col gap-6 text-white max-w-7xl mx-auto">
             <div className="bg-blue-600 w-fit px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 size={14} fill="currentColor" />
                Established 2010
             </div>
             <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tighter max-w-4xl">Building London's Future</h1>
             <p className="text-sm lg:text-xl font-medium text-white/80 leading-relaxed max-w-xl">
                Bespoke, professional, and experienced construction from Yes We Can Construction Ltd.
             </p>
          </div>
       </header>

       <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 space-y-20 lg:space-y-32">
         <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-8">
               <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight">Our Mission</h2>
               <p className="text-slate-500 font-medium text-lg leading-relaxed">
                  We are a dedicated team based in London, committed to delivering excellence in property management and construction. At Yes We Can Construction Ltd, we bridge the gap between architectural vision and living reality, prioritizing quality and reliability above all.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <Link to="/contact" className="px-8 py-4 bg-[#1677FF] text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-transform text-center">
                    Request Proposal
                 </Link>
                 <a href="tel:+447734217199" className="px-8 py-4 border border-gray-200 rounded-xl font-bold text-slate-900 flex items-center justify-center gap-2 active:scale-95 transition-transform hover:bg-slate-50">
                    <Phone size={18} /> Call Desk
                 </a>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               {stats.map((s, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col gap-4 text-center sm:text-left hover:shadow-lg transition-shadow">
                     <s.icon size={24} className="text-blue-600 mx-auto sm:mx-0" />
                     <div>
                       <span className="block text-4xl lg:text-5xl font-black text-slate-900 leading-none mb-2">{s.value}</span>
                       <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{s.label}</span>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <section className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
               <h2 className="text-3xl lg:text-4xl font-black text-slate-900">Our Heritage</h2>
               <p className="text-slate-500 font-medium">A decade of refinement in the heart of London.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="border border-gray-100 rounded-[2rem] p-8 flex flex-col gap-6 hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between">
                     <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-black flex items-center justify-center text-sm">2010</div>
                     <ChevronDown size={20} className="text-slate-300 md:-rotate-90" />
                  </div>
                  <div>
                     <h4 className="font-extrabold text-xl text-slate-900 mb-2">The Opening</h4>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">Established as a renovation firm focused on the unique challenges of London properties.</p>
                  </div>
               </div>

               <div className="border border-gray-100 rounded-[2rem] p-8 flex flex-col gap-6 hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between">
                     <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-black flex items-center justify-center text-sm">2018</div>
                     <ChevronDown size={20} className="text-slate-300 md:-rotate-90" />
                  </div>
                  <div>
                     <h4 className="font-extrabold text-xl text-slate-900 mb-2">Expansion</h4>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">Launched our full-service construction management to provide end-to-end support for our most valued clients.</p>
                  </div>
               </div>

               <div className="bg-blue-600 rounded-[2rem] p-8 flex flex-col gap-6 shadow-xl shadow-blue-500/20 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="flex items-center justify-between relative z-10">
                     <div className="w-12 h-12 rounded-full bg-white text-blue-600 font-black flex items-center justify-center text-sm">Now</div>
                     <Star size={20} className="text-blue-200" fill="currentColor" />
                  </div>
                  <div className="relative z-10">
                     <h4 className="font-extrabold text-xl mb-2">Construction Leaders</h4>
                     <p className="text-blue-100 text-sm font-medium leading-relaxed">
                        Leading the way in luxury property construction from our Southwest London base.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         <section className="space-y-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 text-center lg:text-left">Distinguishing Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {coreValues.map((v, i) => (
                  <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm space-y-6 hover:shadow-xl hover:border-blue-100 transition-all group">
                     <div className={`p-3 rounded-2xl w-fit ${v.color} group-hover:scale-110 transition-transform`}>
                        <v.icon size={24} />
                     </div>
                     <div className="space-y-2">
                        <h4 className="font-black text-slate-900 text-lg tracking-tight">{v.title}</h4>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{v.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <section>
            <div className="bg-[#0F172A] p-12 lg:p-20 rounded-[3rem] relative overflow-hidden flex flex-col items-center text-center">
               <div className="absolute top-10 right-10 text-slate-800 opacity-50"><Quote size={120} /></div>
               <div className="relative z-10 space-y-8 max-w-3xl">
                  <div className="flex gap-1 justify-center text-blue-500">
                    {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                  </div>
                  <p className="text-2xl lg:text-4xl font-black italic text-white leading-tight">
                     "The standard of management provided by Yes We Can Construction is exceptional. They are truly reliable."
                  </p>
                  <div className="flex flex-col items-center gap-4">
                     <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center font-black text-white text-lg border-4 border-[#0F172A]">AM</div>
                     <div className="space-y-1">
                        <h4 className="text-white font-black text-lg">Arthur Miller</h4>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Client, Southwest London</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
       </div>

       <footer className="px-6 lg:px-0 text-center space-y-12 py-12 border-t border-gray-100 mt-12 bg-slate-50">
          <div className="space-y-8">
             <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Accredited By</span>
             <div className="flex flex-wrap justify-center gap-12 items-center grayscale opacity-60">
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="bg-slate-400 p-1 rounded text-white"><Home size={16} fill="currentColor" /></div>
                  <span className="font-black text-2xl">FMB</span>
                </div>
                <div className="font-black text-slate-400 text-xl border-2 border-slate-400 px-4 py-1 rounded">CHAS</div>
             </div>
          </div>
          <p className="text-slate-400 text-xs font-bold leading-relaxed max-w-lg mx-auto uppercase tracking-wider">
             Yes We Can Construction Ltd is fully insured and compliant with UK Building Regulations.
          </p>
       </footer>
    </div>
  );
};

export default About;
