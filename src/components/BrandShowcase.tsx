import { Brand } from '../types';
import { ShieldCheck } from 'lucide-react';

interface BrandShowcaseProps {
  brands: Brand[];
}

export default function BrandShowcase({ brands }: BrandShowcaseProps) {
  return (
    <section id="brands-showcase-view" className="py-16 bg-slate-50 text-left border-y border-gray-100 overflow-hidden">
      
      {/* Style Tag for Marquee Animation */}
      <style>{`
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-container-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 35s linear infinite;
        }
        .marquee-container-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
            MANUFACTURER APPROVED PARTS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal mt-2 mb-4">
            Vehicle Brands We Service
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            From heavy-duty Asian commuter SUVs to highly engineered European luxury sports coupes, our diagnostic platforms support direct ECU scanning and custom parts mapping.
          </p>
        </div>

        {/* Brands Infinite Marquee Grid - Auto Scroll Right */}
        <div className="overflow-hidden w-full relative py-4">
          {/* Decorative left/right fade masks */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="marquee-container-reverse flex gap-6">
            {/* Render duplicated list for infinite loop */}
            {[...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
              <div
                key={idx}
                id={`brand-badge-${brand.name.toLowerCase()}-${idx}`}
                className="bg-white rounded-xl border border-brand-red p-5 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center justify-center gap-3 group w-36 shrink-0"
              >
                {/* Stylized Circle Badge acting as an elegant logo */}
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center font-display font-black text-xl text-brand-charcoal group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 border border-gray-200/50">
                  {brand.logoUrl}
                </div>
                
                <div>
                  <span className="font-display font-bold text-sm text-brand-charcoal block group-hover:text-brand-red transition-colors leading-none mb-1">
                    {brand.name}
                  </span>
                  <span className="text-[9px] font-mono font-medium text-gray-400 block uppercase">
                    {brand.country}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
