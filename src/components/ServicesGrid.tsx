import { useState } from 'react';
import * as Icons from 'lucide-react';
import { Service, PageType } from '../types';
import mechService1 from '@/assets/mech-service-1.jpg';
import mechService2 from '@/assets/mech-service-2.jpg';
import mechService3 from '@/assets/mech-service-3.png';
import mechService4 from '@/assets/mech-service-4.jpg';
import mechService5 from '@/assets/mech-service-5.png';
import maintService1 from '@/assets/maint-service-1.jpg';
import maintService2 from '@/assets/maint-service-2.png';
import maintService3 from '@/assets/maint-service-3.png';
import maintService4 from '@/assets/maint-service-4.jpg';
import maintService5 from '@/assets/maint-service-5.jpg';
import fluidInspectionImg from '@/assets/fluid-inspection.png';
import cosmService1 from '@/assets/cosm-service-1.png';
import cosmService2 from '@/assets/cosm-service-2.png';
import cosmService3 from '@/assets/cosm-service-3.png';
import cosmService4 from '@/assets/cosm-service-4.png';
import paintCorrectionImg from '@/assets/paint-correction.png';

interface ServicesGridProps {
  services: Service[];
  onNavigate: (page: PageType, serviceId?: string) => void;
}

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.Wrench className={className} />;
  }
  return <IconComponent className={className} />;
}

export default function ServicesGrid({ services, onNavigate }: ServicesGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'mechanical' | 'maintenance' | 'cosmetic'>('all');

  const getCategory = (id: string): 'mechanical' | 'maintenance' | 'cosmetic' => {
    if ([
      'engine-repair',
      'brake-repair',
      'transmission-service',
      'suspension-repair',
      'ac-repair',
      'engine-diagnostics'
    ].includes(id)) return 'mechanical';
    
    if ([
      'oil-change',
      'wheel-alignment',
      'battery-replacement',
      'tire-replacement',
      'fluid-inspection',
      'car-inspection'
    ].includes(id)) return 'maintenance';
    
    return 'cosmetic';
  };

  const filteredServices = services.filter((srv) => {
    const matchesSearch = srv.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const srvCat = getCategory(srv.id);
    const matchesFilter = filterCategory === 'all' || srvCat === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const mechanicalServices = filteredServices.filter(s => getCategory(s.id) === 'mechanical');
  const maintenanceServices = filteredServices.filter(s => getCategory(s.id) === 'maintenance');
  const cosmeticServices = filteredServices.filter(s => getCategory(s.id) === 'cosmetic');

  const getMechImage = (id: string) => {
    switch (id) {
      case 'engine-repair': return mechService1;
      case 'brake-repair': return mechService2;
      case 'transmission-service': return mechService5;
      case 'suspension-repair': return mechService4;
      case 'ac-repair': return mechService3;
      default: return mechService1;
    }
  };

  const getMaintImage = (id: string) => {
    switch (id) {
      case 'oil-change': return maintService1;
      case 'wheel-alignment': return maintService2;
      case 'battery-replacement': return maintService4;
      case 'tire-replacement': return maintService3;
      case 'fluid-inspection': return fluidInspectionImg;
      case 'car-inspection': return maintService5;
      default: return maintService1;
    }
  };

  const getCosmImage = (id: string) => {
    switch (id) {
      case 'car-wash': return cosmService1;
      case 'ceramic-coating': return cosmService4;
      case 'paint-polishing': return paintCorrectionImg;
      case 'dent-paint': return cosmService2;
      case 'car-detailing': return cosmService4;
      default: return cosmService3;
    }
  };

  const renderMechanicalSection = (list: Service[]) => {
    if (list.length === 0) return null;
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mt-4">
          <span className="text-xl">🔧</span>
          <h3 className="font-display font-extrabold text-2xl text-brand-charcoal">
            Mechanical Services
          </h3>
          <span className="bg-brand-red/10 text-brand-red text-xs font-bold px-2 py-1 rounded-full">
            {list.length} Services
          </span>
        </div>

        <div className="space-y-12">
          {list.map((srv, index) => {
            const isImageLeft = index % 2 === 0;
            const imgUrl = getMechImage(srv.id);
            return (
              <div 
                key={srv.id}
                id={`service-row-${srv.id}`}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch hover:shadow-xl transition-all duration-300"
              >
                {isImageLeft ? (
                  <>
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 min-h-[280px] sm:min-h-[320px] relative shrink-0">
                      <img 
                        src={imgUrl} 
                        alt={srv.title} 
                        className="absolute inset-0 w-full h-full object-cover filter brightness-[1.08] contrast-[1.05] saturate-[1.05]" 
                      />
                    </div>
                    {/* Right: Text details */}
                    <div className="w-full md:w-1/2 p-6 sm:p-10 space-y-4 text-left flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-brand-red/5 text-brand-red rounded-lg">
                          <DynamicIcon name={srv.iconName} className="w-5 h-5" />
                        </div>
                        <h4 className="font-display font-extrabold text-xl text-brand-charcoal">
                          {srv.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {srv.shortDesc}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block font-mono">
                          Starting Price:
                        </span>
                        <span className="font-display font-black text-2xl text-brand-red">
                          {srv.basePrice}
                        </span>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => onNavigate('service-details', srv.id)}
                          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-charcoal font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => onNavigate('book', srv.id)}
                          className="px-5 py-2.5 bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-brand-red/10"
                        >
                          Book Service
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left: Text details */}
                    <div className="w-full md:w-1/2 p-6 sm:p-10 space-y-4 text-left order-2 md:order-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-brand-red/5 text-brand-red rounded-lg">
                          <DynamicIcon name={srv.iconName} className="w-5 h-5" />
                        </div>
                        <h4 className="font-display font-extrabold text-xl text-brand-charcoal">
                          {srv.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {srv.shortDesc}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block font-mono">
                          Starting Price:
                        </span>
                        <span className="font-display font-black text-2xl text-brand-red">
                          {srv.basePrice}
                        </span>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => onNavigate('service-details', srv.id)}
                          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-charcoal font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => onNavigate('book', srv.id)}
                          className="px-5 py-2.5 bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-brand-red/10"
                        >
                          Book Service
                        </button>
                      </div>
                    </div>
                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 min-h-[280px] sm:min-h-[320px] relative shrink-0 order-1 md:order-2">
                      <img 
                        src={imgUrl} 
                        alt={srv.title} 
                        className="absolute inset-0 w-full h-full object-cover filter brightness-[1.08] contrast-[1.05] saturate-[1.05]" 
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderMaintenanceSection = (list: Service[]) => {
    if (list.length === 0) return null;
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mt-4">
          <span className="text-xl">🛠️</span>
          <h3 className="font-display font-extrabold text-2xl text-brand-charcoal">
            Maintenance Services
          </h3>
          <span className="bg-brand-red/10 text-brand-red text-xs font-bold px-2 py-1 rounded-full">
            {list.length} Services
          </span>
        </div>

        <div className="space-y-12">
          {list.map((srv, index) => {
            const isImageLeft = index % 2 === 0;
            const imgUrl = getMaintImage(srv.id);
            return (
              <div 
                key={srv.id}
                id={`service-row-${srv.id}`}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch hover:shadow-xl transition-all duration-300"
              >
                {isImageLeft ? (
                  <>
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 min-h-[280px] sm:min-h-[320px] relative shrink-0">
                      <img 
                        src={imgUrl} 
                        alt={srv.title} 
                        className="absolute inset-0 w-full h-full object-cover filter brightness-[1.08] contrast-[1.05] saturate-[1.05]" 
                      />
                    </div>
                    {/* Right: Text details */}
                    <div className="w-full md:w-1/2 p-6 sm:p-10 space-y-4 text-left flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-brand-red/5 text-brand-red rounded-lg">
                          <DynamicIcon name={srv.iconName} className="w-5 h-5" />
                        </div>
                        <h4 className="font-display font-extrabold text-xl text-brand-charcoal">
                          {srv.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {srv.shortDesc}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block font-mono">
                          Starting Price:
                        </span>
                        <span className="font-display font-black text-2xl text-brand-red">
                          {srv.basePrice}
                        </span>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => onNavigate('service-details', srv.id)}
                          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-charcoal font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => onNavigate('book', srv.id)}
                          className="px-5 py-2.5 bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-brand-red/10"
                        >
                          Book Service
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left: Text details */}
                    <div className="w-full md:w-1/2 p-6 sm:p-10 space-y-4 text-left order-2 md:order-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-brand-red/5 text-brand-red rounded-lg">
                          <DynamicIcon name={srv.iconName} className="w-5 h-5" />
                        </div>
                        <h4 className="font-display font-extrabold text-xl text-brand-charcoal">
                          {srv.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {srv.shortDesc}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block font-mono">
                          Starting Price:
                        </span>
                        <span className="font-display font-black text-2xl text-brand-red">
                          {srv.basePrice}
                        </span>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => onNavigate('service-details', srv.id)}
                          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-charcoal font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => onNavigate('book', srv.id)}
                          className="px-5 py-2.5 bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-brand-red/10"
                        >
                          Book Service
                        </button>
                      </div>
                    </div>
                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 min-h-[280px] sm:min-h-[320px] relative shrink-0 order-1 md:order-2">
                      <img 
                        src={imgUrl} 
                        alt={srv.title} 
                        className="absolute inset-0 w-full h-full object-cover filter brightness-[1.08] contrast-[1.05] saturate-[1.05]" 
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderCosmeticSection = (list: Service[]) => {
    if (list.length === 0) return null;
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mt-4">
          <span className="text-xl">✨</span>
          <h3 className="font-display font-extrabold text-2xl text-brand-charcoal">
            Cosmetic Services
          </h3>
          <span className="bg-brand-red/10 text-brand-red text-xs font-bold px-2 py-1 rounded-full">
            {list.length} Services
          </span>
        </div>

        <div className="space-y-12">
          {list.map((srv, index) => {
            const isImageLeft = index % 2 === 0;
            const imgUrl = getCosmImage(srv.id);
            return (
              <div 
                key={srv.id}
                id={`service-row-${srv.id}`}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch hover:shadow-xl transition-all duration-300"
              >
                {isImageLeft ? (
                  <>
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 min-h-[280px] sm:min-h-[320px] relative shrink-0">
                      <img 
                        src={imgUrl} 
                        alt={srv.title} 
                        className="absolute inset-0 w-full h-full object-cover filter brightness-[1.08] contrast-[1.05] saturate-[1.05]" 
                      />
                    </div>
                    {/* Right: Text details */}
                    <div className="w-full md:w-1/2 p-6 sm:p-10 space-y-4 text-left flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-brand-red/5 text-brand-red rounded-lg">
                          <DynamicIcon name={srv.iconName} className="w-5 h-5" />
                        </div>
                        <h4 className="font-display font-extrabold text-xl text-brand-charcoal">
                          {srv.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {srv.shortDesc}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block font-mono">
                          Starting Price:
                        </span>
                        <span className="font-display font-black text-2xl text-brand-red">
                          {srv.basePrice}
                        </span>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => onNavigate('service-details', srv.id)}
                          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-charcoal font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => onNavigate('book', srv.id)}
                          className="px-5 py-2.5 bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-brand-red/10"
                        >
                          Book Service
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left: Text details */}
                    <div className="w-full md:w-1/2 p-6 sm:p-10 space-y-4 text-left order-2 md:order-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-brand-red/5 text-brand-red rounded-lg">
                          <DynamicIcon name={srv.iconName} className="w-5 h-5" />
                        </div>
                        <h4 className="font-display font-extrabold text-xl text-brand-charcoal">
                          {srv.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {srv.shortDesc}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block font-mono">
                          Starting Price:
                        </span>
                        <span className="font-display font-black text-2xl text-brand-red">
                          {srv.basePrice}
                        </span>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => onNavigate('service-details', srv.id)}
                          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-charcoal font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => onNavigate('book', srv.id)}
                          className="px-5 py-2.5 bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-sm hover:shadow-brand-red/10"
                        >
                          Book Service
                        </button>
                      </div>
                    </div>
                    {/* Right: Image */}
                    <div className="w-full md:w-1/2 min-h-[280px] sm:min-h-[320px] relative shrink-0 order-1 md:order-2">
                      <img 
                        src={imgUrl} 
                        alt={srv.title} 
                        className="absolute inset-0 w-full h-full object-cover filter brightness-[1.08] contrast-[1.05] saturate-[1.05]" 
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="services-grid-view" className="py-16 bg-slate-50 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
            WHAT WE EXCEL AT
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal mt-2 mb-4">
            Our Certified Premium Services
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            We offer dealer-level diagnostic and mechanical precision using factory certified parts. Select any of our specialty areas below to learn more.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-4 mb-10 flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            {(['all', 'mechanical', 'maintenance', 'cosmetic'] as const).map((cat) => (
              <button
                key={cat}
                id={`filter-btn-${cat}`}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-brand-red text-white shadow-sm'
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Section List Grid */}
        <div className="space-y-16">
          {filteredServices.length > 0 ? (
            <>
              {renderMechanicalSection(mechanicalServices)}
              {renderMaintenanceSection(maintenanceServices)}
              {renderCosmeticSection(cosmeticServices)}
            </>
          ) : (
            <div id="services-empty-state" className="text-center py-16 bg-white rounded-2xl border border-gray-200/60 max-w-xl mx-auto">
              <Icons.Wrench className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="font-display font-bold text-lg text-brand-charcoal mb-1">
                No matching services found
              </h3>
              <p className="text-xs text-gray-500 px-6 leading-relaxed">
                We couldn't find any services matching your search query. Try typing common terms like "brakes", "alignment", "oil", or clear your search filter.
              </p>
              <button
                id="clear-services-search"
                onClick={() => { setSearchQuery(''); setFilterCategory('all'); }}
                className="mt-4 inline-flex items-center gap-2 bg-brand-charcoal text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-lg hover:bg-brand-charcoal/90 transition-colors cursor-pointer"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
