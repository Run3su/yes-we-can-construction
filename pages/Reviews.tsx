
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, CheckCircle, Search, MapPin, Phone, Loader2, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  location: string;
  content: string;
  rating: number;
  date: string; // ISO format
  category: string;
  avatar?: string;
  isVerified?: boolean;
  isGoogle?: boolean;
  photos?: string[];
}

const MOCK_REVIEWS_API: Review[] = [
  {
    id: 1,
    author: 'John D.',
    location: 'Putney • Full Renovation',
    content: 'Excellent management from start to finish. Yes We Can Construction Ltd was professional, tidy, and completed our renovation ahead of schedule. Highly recommend for any London property.',
    rating: 5,
    date: '2024-03-15T10:00:00Z',
    category: 'Renovations',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
    isVerified: true,
    isGoogle: true,
    photos: ['https://images.unsplash.com/photo-1541913057-79902bc96026?auto=format&fit=crop&q=80&w=200']
  },
  {
    id: 2,
    author: 'Sarah M.',
    location: 'Wandsworth • Management',
    content: 'Discreet and efficient service. Yes We Can Construction took over our property project and the transition was seamless. Their attention to detail is unmatched.',
    rating: 5,
    date: '2024-02-28T14:30:00Z',
    category: 'Management',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    isVerified: true
  },
  {
    id: 3,
    author: 'Mike T.',
    location: 'Richmond • Renovation',
    content: 'Professional handling of a complex structural project. Polite team, clean site, and fair pricing for premium work.',
    rating: 5,
    date: '2024-03-01T09:15:00Z',
    category: 'Renovations',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    isGoogle: true
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'highest' | 'lowest'>('newest');

  const filters = ['All', 'Renovations', 'Management', 'Extensions', 'Design'];

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setReviews(MOCK_REVIEWS_API);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  const filteredAndSortedReviews = useMemo(() => {
    let result = [...reviews];
    if (activeFilter !== 'All') {
      result = result.filter(r => r.category === activeFilter);
    }
    result.sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'highest') return b.rating - a.rating;
      if (sortBy === 'lowest') return a.rating - b.rating;
      return 0;
    });
    return result;
  }, [reviews, activeFilter, sortBy]);

  const stats = {
    total: 215,
    average: 4.9,
    breakdown: [
      { score: 5, pct: 92 },
      { score: 4, pct: 5 },
      { score: 3, pct: 2 },
      { score: 2, pct: 0 },
      { score: 1, pct: 1 },
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      <section className="bg-white p-8 mb-8 border-b border-gray-100 shadow-sm">
         <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
               <Link to="/" className="p-2 -ml-2 text-slate-900 flex items-center gap-2 font-bold hover:text-blue-600 transition-colors">
                  <ArrowRight className="rotate-180" size={20} /> Home
               </Link>
               <h1 className="text-xl font-black uppercase tracking-widest text-slate-900">Track Record</h1>
               <Link to="/contact" className="text-blue-600 font-bold hover:underline">Inquire</Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="flex items-baseline gap-2 mb-2">
                     <span className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter">{stats.average}</span>
                     <span className="text-2xl font-bold text-slate-400">/ 5.0</span>
                  </div>
                  <div className="flex gap-1 text-blue-500 mb-4">
                     {[1,2,3,4,5].map(i => <Star key={i} size={32} fill={i === 5 ? "none" : "currentColor"} />)}
                  </div>
                  <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Based on {stats.total} verified testimonials</p>
               </div>

               <div className="w-full space-y-4">
                  {stats.breakdown.map(r => (
                     <div key={r.score} className="flex items-center gap-6 text-xs font-black text-slate-500">
                        <span className="w-4">{r.score} <Star size={10} className="inline ml-1 mb-0.5" fill="currentColor"/></span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: `${r.pct}%` }} />
                        </div>
                        <span className="w-12 text-right text-slate-400">{r.pct}%</span>
                     </div>
                  ))}
               </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col md:flex-row gap-4 items-center justify-center lg:justify-start">
               <button className="flex items-center gap-3 px-8 py-4 bg-white border border-gray-200 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-700 shadow-sm hover:border-blue-200 hover:bg-slate-50 transition-all active:scale-95">
                  <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
                  Leave Feedback
               </button>
               <div className="flex items-center gap-6 opacity-40 grayscale">
                  <ShieldCheck size={32} />
                  <Award size={32} />
               </div>
            </div>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div className="space-y-4 overflow-hidden">
               <h2 className="text-3xl font-black text-slate-900 tracking-tight">Customer Testimonials</h2>
               <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
                  {filters.map((f) => (
                     <button 
                        key={f} 
                        onClick={() => setActiveFilter(f)}
                        className={`px-6 py-3 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${
                          activeFilter === f 
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                          : 'bg-white border border-gray-200 text-slate-500 hover:border-blue-300'
                        }`}
                     >
                        {f}
                     </button>
                  ))}
               </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-gray-200 shadow-sm self-start">
               <span className="pl-4 text-[10px] font-black uppercase text-slate-400 tracking-widest">Sort By:</span>
               <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-xs font-bold text-slate-900 focus:outline-none pr-4 cursor-pointer"
               >
                  <option value="newest">Newest First</option>
                  <option value="highest">Highest Rating</option>
                  <option value="lowest">Lowest Rating</option>
               </select>
            </div>
         </div>

         {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
               <Loader2 className="text-blue-600 animate-spin" size={48} />
               <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-xs">Accessing Records...</p>
            </div>
         ) : filteredAndSortedReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {filteredAndSortedReviews.map((rev) => (
                  <div key={rev.id} className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 relative group hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                     {rev.isVerified && (
                        <div className="absolute top-6 right-8 bg-green-50 px-3 py-1 rounded-full flex items-center gap-1.5 border border-green-100">
                           <CheckCircle size={12} className="text-green-600" />
                           <span className="text-[10px] font-black text-green-600 uppercase tracking-tighter">Verified Project</span>
                        </div>
                     )}
                     
                     <div className="flex items-center gap-4 mb-8">
                        {typeof rev.avatar === 'string' && rev.avatar.startsWith('http') ? (
                           <img src={rev.avatar} className="w-16 h-16 rounded-2xl border-2 border-white shadow-md object-cover transform transition-transform group-hover:scale-105" alt={rev.author} />
                        ) : (
                           <div className="w-16 h-16 rounded-2xl bg-blue-50 border-2 border-blue-100 flex items-center justify-center font-black text-blue-600 shadow-sm text-xl">
                              {rev.avatar}
                           </div>
                        )}
                        <div className="flex-1">
                           <div className="flex items-center justify-between">
                              <h4 className="font-black text-lg text-slate-900">{rev.author}</h4>
                              {rev.isGoogle && <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />}
                           </div>
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{rev.location}</p>
                        </div>
                     </div>

                     <div className="flex gap-1 text-blue-500 mb-6">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} size={18} fill={i <= rev.rating ? "currentColor" : "none"} className={i > rev.rating ? "text-slate-200" : ""} />
                        ))}
                     </div>

                     <p className="text-slate-600 leading-relaxed font-medium mb-8 italic">
                        "{rev.content}"
                     </p>

                     <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                        <span>{new Date(rev.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        <span className="text-blue-500">{rev.category}</span>
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200">
               <Search className="mx-auto text-slate-200 mb-6" size={64} />
               <h3 className="text-xl font-black text-slate-900 mb-2">No reviews found</h3>
               <button onClick={() => setActiveFilter('All')} className="mt-6 text-blue-600 font-bold hover:underline">Reset Filters</button>
            </div>
         )}

         <div className="mt-20">
            <button className="w-full flex items-center justify-center gap-3 py-6 text-slate-400 font-black uppercase tracking-[0.2em] text-xs hover:text-blue-600 transition-colors border-y border-gray-100">
               Access All Testimonials <ChevronDown size={18} />
            </button>
         </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 mt-32">
         <div className="bg-[#0F172A] p-12 lg:p-24 rounded-[4rem] flex flex-col items-center text-center gap-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="bg-blue-600/20 p-4 rounded-full text-blue-400 mb-2">
               <Phone size={32} />
            </div>
            <h3 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tighter">Ready for Yes We Can Construction?</h3>
            <p className="text-slate-400 text-xl font-medium max-w-2xl">
               Join our satisfied London clientele. Get a free, discrete consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
               <Link to="/contact" className="px-12 py-5 bg-[#1677FF] text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-500 transition-all active:scale-95">
                  Request Proposal
               </Link>
               <a href="tel:+447734217199" className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all active:scale-95">
                  Call Desk
               </a>
            </div>
         </div>
      </section>

      <footer className="mt-32 max-w-4xl mx-auto px-10 pb-20 text-center border-t border-gray-100 pt-20">
         <p className="text-slate-400 text-xs leading-relaxed mb-6 font-medium max-w-lg mx-auto">
            Yes We Can Construction Ltd is a fully insured London contractor serving Putney, Wandsworth, and SW London.
         </p>
         <div className="flex flex-col gap-4">
            <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.3em]">© 2024 Yes We Can Construction Ltd. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
};

export default Reviews;
