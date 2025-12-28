
import React from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Star, ShieldCheck, Navigation, ChevronDown, Clock, Building2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
       <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-20">
             
             {/* Left Column: Form & Header */}
             <div className="lg:w-7/12 space-y-12">
                <header className="space-y-6">
                   <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                      <Star size={14} fill="currentColor" /> Premier Service
                   </div>
                   <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                      Connect with our <br className="hidden lg:block"/> London team.
                   </h1>
                   <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                      Visit us at our Holford Way office or fill out the form for a consultation regarding your property projects.
                   </p>
                </header>

                <div className="bg-white rounded-[3rem] p-10 lg:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                   <form className="space-y-8">
                      <h3 className="text-2xl font-black tracking-tight text-slate-900">Request a Consultation</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-xs font-black text-slate-900 uppercase tracking-widest px-1">Full Name</label>
                            <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-gray-100 py-4 px-6 rounded-2xl text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-black text-slate-900 uppercase tracking-widest px-1">Contact Number</label>
                            <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border border-gray-100 py-4 px-6 rounded-2xl text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all" />
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                            <label className="text-xs font-black text-slate-900 uppercase tracking-widest px-1">Service Required</label>
                            <div className="relative">
                               <select className="w-full appearance-none bg-slate-50 border border-gray-100 py-4 px-6 rounded-2xl text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all">
                                  <option>Construction Management</option>
                                  <option>Bespoke Renovation</option>
                                  <option>Property Extension</option>
                                  <option>General Contracting</option>
                               </select>
                               <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-black text-slate-900 uppercase tracking-widest px-1">Property Postcode</label>
                            <input type="text" placeholder="Postcode" className="w-full bg-slate-50 border border-gray-100 py-4 px-6 rounded-2xl text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all" />
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-xs font-black text-slate-900 uppercase tracking-widest px-1">Project Vision</label>
                         <textarea rows={4} placeholder="Describe your requirements..." className="w-full bg-slate-50 border border-gray-100 py-4 px-6 rounded-2xl text-slate-900 font-bold placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all resize-none"></textarea>
                      </div>

                      <button className="w-full bg-[#1677FF] text-white py-6 rounded-2xl font-black text-xl shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all active:scale-[0.98]">
                         Submit Inquiry
                      </button>

                      <div className="flex flex-wrap justify-between gap-6 pt-6 border-t border-slate-100">
                         <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-widest">
                            <CheckCircle2 size={20} className="text-green-500" /> Insured & Certified
                         </div>
                         <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-widest">
                            <Star size={20} className="text-amber-400" fill="currentColor" /> Premium Rated
                         </div>
                         <div className="flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-widest">
                            <ShieldCheck size={20} className="text-blue-500" /> Reliability Assured
                         </div>
                      </div>
                   </form>
                </div>
             </div>

             {/* Right Column: Info & Map */}
             <div className="lg:w-5/12 space-y-10">
                <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-12 text-white space-y-12 shadow-2xl">
                   <div className="space-y-8">
                      <h3 className="text-3xl font-black tracking-tight">Direct Access</h3>
                      <div className="space-y-6">
                         <a href="tel:+447734217199" className="flex items-center gap-6 group">
                            <div className="bg-blue-600 p-4 rounded-2xl group-hover:bg-blue-500 transition-colors">
                               <Phone size={24} fill="currentColor" />
                            </div>
                            <div>
                               <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Office Desk</p>
                               <p className="text-2xl font-black">+44 7734 217199</p>
                            </div>
                         </a>
                         <div className="flex items-center gap-6 group">
                            <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-slate-700 transition-colors">
                               <Mail size={24} />
                            </div>
                            <div>
                               <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                               <p className="text-lg font-bold">info@yeswecanconstruction.co.uk</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-6 group">
                            <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-slate-700 transition-colors">
                               <MapPin size={24} />
                            </div>
                            <div>
                               <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Address</p>
                               <p className="text-lg font-bold leading-tight">12 Apsley House, 2 Holford Way<br/>London SW15 5EY</p>
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="pt-12 border-t border-slate-800 space-y-8">
                      <div className="flex items-center gap-3 text-blue-500">
                         <Clock size={20} />
                         <span className="font-black text-xs uppercase tracking-[0.2em]">Operating Hours</span>
                      </div>
                      <div className="space-y-4">
                         <div className="flex justify-between items-center text-sm font-bold">
                            <span className="text-slate-400">Monday - Friday</span>
                            <span>08:30 - 18:30</span>
                         </div>
                         <div className="flex justify-between items-center text-sm font-bold">
                            <span className="text-slate-400">Saturday</span>
                            <span>By Appointment</span>
                         </div>
                         <div className="flex justify-between items-center text-sm font-bold">
                            <span className="text-slate-400">Sunday</span>
                            <span className="text-red-500 uppercase">Closed</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 group">
                   <div className="relative h-96 bg-slate-200">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }}
                        loading="lazy" 
                        allowFullScreen 
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d2486.234698547285!2d-0.2325801!3d51.4534144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ed9907c917f%3A0x6b8c8d8c8d8c8d8c!2sHolford+Way%2C+London+SW15+5EY!5e0!3m2!1sen!2suk!4v1709214562014!5m2!1sen!2suk"
                      ></iframe>
                      <div className="absolute top-4 left-4 pointer-events-none">
                         <div className="bg-blue-600 p-3 rounded-full shadow-2xl animate-pulse">
                            <MapPin size={24} className="text-white" fill="currentColor" />
                         </div>
                      </div>
                      <a 
                        href="https://www.google.com/maps/dir/?api=1&destination=12+Apsley+House+2+Holford+Way+London+SW15+5EY" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute bottom-6 right-6 bg-white px-6 py-3 rounded-xl flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 shadow-2xl border border-gray-100 hover:bg-slate-50 transition-colors"
                      >
                         <Navigation size={16} className="text-blue-600" /> Open in Maps
                      </a>
                   </div>
                   <div className="p-8 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><Building2 size={24} /></div>
                         <h4 className="font-black text-slate-900 tracking-tight">Main Office</h4>
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">SW15</span>
                   </div>
                </div>
             </div>

          </div>
       </div>

       <footer className="py-20 text-center border-t border-slate-100">
          <p className="text-slate-300 text-[11px] font-black uppercase tracking-[0.3em]">© 2024 Yes We Can Construction Ltd • 12 Apsley House, 2 Holford Way, SW15 5EY</p>
       </footer>
    </div>
  );
};

export default Contact;
