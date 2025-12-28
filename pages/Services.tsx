
import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Warehouse, Building2, HardHat, CheckCircle2, Star, ShieldCheck as ShieldIcon, ArrowRight } from 'lucide-react';

const Services = () => {
  const serviceItems = [
    { 
      title: 'Full Renovations', 
      desc: 'Transform your existing space with our full-service renovation and modern design solutions.',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600'
    },
    { 
      title: 'Property Extensions', 
      desc: 'Add significant value and living space to your property with custom rear or side extensions.',
      icon: Warehouse,
      image: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=600'
    },
    { 
      title: 'Construction Management', 
      desc: 'Comprehensive management services for luxury residential and commercial assets.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
    },
    { 
      title: 'Kitchen Remodeling', 
      desc: 'Unlock the potential of your kitchen with bespoke cabinetry and high-end finishes.',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600'
    },
    { 
      title: 'Structural Repairs', 
      desc: 'Expert repairs, modern replacements, and high-performance structural installations.',
      icon: HardHat,
      image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=600'
    },
    { 
      title: 'Loft Conversions', 
      desc: 'Unlock unused space with high-end master suite conversions across Southwest London.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-32">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <header className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mx-auto">
            <ShieldIcon size={14} /> Certified Excellence
          </div>
          <h1 className="text-4xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-[1.05]">
            Professional Construction <br className="hidden lg:block"/> & Management.
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            From luxury renovations to high-end London extensions, Yes We Can Construction Ltd delivers building solutions to meet the highest standards.
          </p>
        </header>

        {/* Trust Badges Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {[
            { icon: CheckCircle2, label: 'Fully Insured £10m' },
            { icon: Star, label: '5-Star Service Rating' },
            { icon: ShieldIcon, label: 'FMB Accredited' },
            { icon: Building2, label: 'London Based' }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-3 bg-white px-8 py-4 rounded-2xl border border-gray-100 shadow-sm">
              <badge.icon size={20} className="text-blue-600" />
              <span className="text-xs font-black text-slate-700 uppercase tracking-widest">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceItems.map((s, idx) => (
            <div key={idx} className="group bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all">
              <div className="h-64 relative overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl">
                  <s.icon size={24} className="text-blue-600" />
                </div>
              </div>
              <div className="p-10 space-y-6">
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {s.desc}
                </p>
                <div className="pt-4 flex items-center justify-between">
                  <Link to="/contact" className="px-8 py-3 bg-slate-50 rounded-xl text-sm font-black text-slate-900 hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest">
                    Inquire
                  </Link>
                  <Link to="/about" className="text-blue-600 font-bold flex items-center gap-2 group/btn">
                    Details <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dynamic CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-blue-600 rounded-[4rem] p-16 lg:p-24 text-center space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter relative z-10">Need an Expert View?</h2>
          <p className="text-blue-100 text-xl font-medium max-w-2xl mx-auto relative z-10">
            Book a consultation with our team. We'll help you define your vision and provide a detailed roadmap for your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link to="/contact" className="px-12 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg shadow-2xl hover:bg-slate-50 transition-all">
              Schedule Visit
            </Link>
            <a href="tel:+447734217199" className="px-12 py-5 border-2 border-white/20 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
              Call Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
