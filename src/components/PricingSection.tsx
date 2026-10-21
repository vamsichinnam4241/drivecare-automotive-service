import React from 'react';
import { 
  Check, 
  Star, 
  CalendarCheck, 
  Sparkles,
  Droplet,
  Disc,
  Compass,
  Activity,
  Wind,
  Battery,
  Trash2,
  Brush,
  Layers,
  Eye,
  Navigation,
  ShieldCheck,
  Hammer,
  Paintbrush,
  RefreshCw,
  Cpu
} from 'lucide-react';
import { PageType } from '../types';

interface PricingSectionProps {
  packages?: any;
  onNavigate: (page: PageType, serviceId?: string) => void;
}

export default function PricingSection({ onNavigate }: PricingSectionProps) {
  const servicePackages = [
    {
      name: 'Basic Service',
      price: '₹1,999',
      popular: false,
      desc: 'Essential routine servicing to keep your car operating safely and smoothly on standard commutes.',
      features: [
        'Engine oil replacement',
        'Oil filter replacement',
        'Fluid level inspection',
        'Brake inspection',
        'Tire pressure check',
        'Battery check',
        'General vehicle inspection'
      ]
    },
    {
      name: 'Standard Service',
      price: '₹3,999',
      popular: false,
      desc: 'Our most popular comprehensive service package designed to optimize fuel efficiency and clean key filters.',
      features: [
        'Everything in Basic Service',
        'Air filter cleaning/replacement',
        'AC performance check',
        'Wheel alignment inspection',
        'Suspension inspection',
        'Interior vacuum cleaning',
        'Exterior car wash'
      ]
    },
    {
      name: 'Premium Service',
      price: '₹6,999',
      popular: false,
      desc: 'Ultimate care detailing and electronic diagnostics suite designed for absolute peak road readiness.',
      features: [
        'Complete vehicle inspection',
        'Engine diagnostics',
        'Brake servicing',
        'Wheel balancing',
        'AC service',
        'Interior detailing',
        'Exterior polishing',
        'Engine bay cleaning',
        'Complimentary pickup & drop'
      ]
    }
  ];

  const individualServices = [
    { name: 'Engine Oil Change', price: '₹999', icon: <Droplet className="w-4 h-4 text-brand-red" /> },
    { name: 'Brake Service', price: '₹1,499', icon: <Disc className="w-4 h-4 text-brand-red" /> },
    { name: 'Wheel Alignment', price: '₹799', icon: <Compass className="w-4 h-4 text-brand-red" /> },
    { name: 'Wheel Balancing', price: '₹699', icon: <Activity className="w-4 h-4 text-brand-red" /> },
    { name: 'AC Inspection', price: '₹499', icon: <Wind className="w-4 h-4 text-brand-red" /> },
    { name: 'AC Service', price: '₹1,299', icon: <Wind className="w-4 h-4 text-brand-red" /> },
    { name: 'Battery Check', price: 'Free', icon: <Battery className="w-4 h-4 text-brand-red" /> },
    { name: 'Battery Replacement', price: '₹3,499', icon: <Battery className="w-4 h-4 text-brand-red" /> },
    { name: 'Car Wash', price: '₹499', icon: <Trash2 className="w-4 h-4 text-brand-red" /> },
    { name: 'Interior Cleaning', price: '₹999', icon: <Brush className="w-4 h-4 text-brand-red" /> },
    { name: 'Exterior Polishing', price: '₹1,999', icon: <Sparkles className="w-4 h-4 text-brand-red" /> },
    { name: 'Engine Diagnostics', price: '₹799', icon: <Cpu className="w-4 h-4 text-brand-red" /> },
    { name: 'Suspension Check', price: '₹899', icon: <Activity className="w-4 h-4 text-brand-red" /> },
    { name: 'Dent Repair', price: '₹1,500+', icon: <Hammer className="w-4 h-4 text-brand-red" /> },
    { name: 'Paint Touch-up', price: '₹2,000+', icon: <Paintbrush className="w-4 h-4 text-brand-red" /> }
  ];

  const addOnServices = [
    { name: 'Ceramic Coating', icon: <Layers className="w-6 h-6 text-brand-red" />, desc: 'Ultra-durable nanotech glass shield for paint gloss & hydrophobic protection.' },
    { name: 'Paint Protection', icon: <ShieldCheck className="w-6 h-6 text-brand-red" />, desc: 'Self-healing urethane barrier defense against chips, scratches & UV damage.' },
    { name: 'Headlight Restoration', icon: <Eye className="w-6 h-6 text-brand-red" />, desc: 'Deep oxidation removal & UV sealant coating to restore lens clarity.' },
    { name: 'Windshield Treatment', icon: <Droplet className="w-6 h-6 text-brand-red" />, desc: 'Rain-repellent hydrophobic coating for safer high-speed wet weather driving.' },
    { name: 'Tire Rotation', icon: <RefreshCw className="w-6 h-6 text-brand-red" />, desc: 'Uniform tread wear balancing & calibration to extend tire lifetime.' },
    { name: 'Engine Bay Detailing', icon: <Cpu className="w-6 h-6 text-brand-red" />, desc: 'Safe degreasing, detailing, and protective dressing of electrical harnesses.' },
    { name: 'Car Sanitization', icon: <Wind className="w-6 h-6 text-brand-red" />, desc: 'Full cabin deep anti-microbial disinfection & air vent odor sterilization.' },
    { name: 'Pickup & Drop Service', icon: <Navigation className="w-6 h-6 text-brand-red" />, desc: 'Hassle-free doorstep collection and delivery valet for your servicing ease.' }
  ];

  return (
    <section id="pricing-packages-view" className="py-16 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
            UPFRONT HONEST COSTING
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal mt-2 mb-4">
            Transparent Service Pricing
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Choose a fixed service package, browse individual standard service diagnostics, or configure custom add-on features.
          </p>
        </div>

        {/* 1. Pricing Cards Grid */}
        <div className="mb-20">
          <h3 className="font-display font-extrabold text-2xl text-brand-charcoal mb-8 text-center sm:text-left">
            Service Packages
          </h3>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {servicePackages.map((pkg, idx) => (
              <div
                key={idx}
                id={`pricing-card-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`bg-slate-50 rounded-3xl border transition-all duration-300 p-6 flex flex-col justify-between relative ${
                  pkg.popular 
                    ? 'border-brand-red bg-white shadow-xl md:scale-[1.03] ring-4 ring-brand-red/5' 
                    : 'border-gray-200/60 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Popularity Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    Most Popular
                  </div>
                )}

                {/* Top part */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display font-extrabold text-lg text-brand-charcoal">
                      {pkg.name}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mt-1">
                      {pkg.desc}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 py-2 border-y border-gray-200/60">
                    <span className="font-display font-black text-3xl sm:text-4xl text-brand-charcoal">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 font-bold uppercase">
                      / Starting Price
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 pt-2">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex gap-2.5 items-start text-xs text-gray-600 leading-normal">
                        <div className={`p-0.5 rounded-full mt-0.5 shrink-0 ${
                          pkg.popular ? 'bg-brand-red/10 text-brand-red' : 'bg-slate-200/80 text-gray-500'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 mt-6 border-t border-gray-200/60">
                  <button
                    id={`pricing-book-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => {
                      const serviceIdMap: Record<string, string> = {
                        'Basic Service': 'fluid-inspection',
                        'Standard Service': 'car-inspection',
                        'Premium Service': 'ceramic-coating'
                      };
                      onNavigate('book', serviceIdMap[pkg.name]);
                    }}
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-brand-red hover:bg-brand-red/90 text-white shadow-md'
                        : 'bg-brand-charcoal hover:bg-brand-charcoal/90 text-white'
                    }`}
                  >
                    <CalendarCheck className="w-4 h-4" />
                    Book Package
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 2. Individual Services Table */}
        <div className="mb-20">
          <h3 className="font-display font-extrabold text-2xl text-brand-charcoal mb-8 text-center sm:text-left">
            Individual Services
          </h3>
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-gray-200/60 shadow-sm">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
              {individualServices.map((service, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between py-3 border-b border-gray-200/50 hover:bg-gray-100/50 px-2 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-gray-200/50 group-hover:bg-brand-red/5 transition-colors">
                      {service.icon}
                    </div>
                    <span className="font-display font-bold text-sm text-brand-charcoal">
                      {service.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-display font-extrabold text-sm text-brand-red">
                      {service.price}
                    </span>
                    <button
                      onClick={() => {
                        const serviceIdMap: Record<string, string> = {
                          'Engine Oil Change': 'oil-change',
                          'Brake Service': 'brake-repair',
                          'Wheel Alignment': 'wheel-alignment',
                          'Wheel Balancing': 'wheel-alignment',
                          'AC Inspection': 'ac-repair',
                          'AC Service': 'ac-repair',
                          'Battery Check': 'battery-replacement',
                          'Battery Replacement': 'battery-replacement',
                          'Car Wash': 'car-wash',
                          'Interior Cleaning': 'car-wash',
                          'Exterior Polishing': 'paint-polishing',
                          'Engine Diagnostics': 'engine-diagnostics',
                          'Suspension Check': 'suspension-repair',
                          'Dent Repair': 'dent-paint',
                          'Paint Touch-up': 'dent-paint'
                        };
                        onNavigate('book', serviceIdMap[service.name]);
                      }}
                      className="px-2.5 py-1 bg-brand-charcoal hover:bg-brand-red text-white text-[10px] uppercase font-bold tracking-wider rounded transition-all cursor-pointer"
                    >
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Add-On Services Cards */}
        <div>
          <h3 className="font-display font-extrabold text-2xl text-brand-charcoal mb-8 text-center sm:text-left">
            Add-On Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((addon, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 p-6 rounded-2xl border border-gray-200/60 hover:border-brand-red hover:shadow-md transition-all duration-300 group text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-white rounded-xl inline-block border border-gray-200/50 group-hover:bg-brand-red/5 transition-colors">
                    {addon.icon}
                  </div>
                  <h4 className="font-display font-extrabold text-base text-brand-charcoal">
                    {addon.name}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {addon.desc}
                  </p>
                </div>
                
                <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center justify-end">
                  <button 
                    onClick={() => {
                      const serviceIdMap: Record<string, string> = {
                        'Ceramic Coating': 'ceramic-coating',
                        'Paint Protection': 'paint-polishing',
                        'Headlight Restoration': 'paint-polishing',
                        'Windshield Treatment': 'paint-polishing',
                        'Tire Rotation': 'tire-replacement',
                        'Engine Bay Detailing': 'engine-diagnostics',
                        'Car Sanitization': 'car-wash',
                        'Pickup & Drop Service': 'car-inspection'
                      };
                      onNavigate('book', serviceIdMap[addon.name]);
                    }}
                    className="w-full sm:w-auto px-4 py-2 bg-brand-red hover:bg-brand-red/90 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-sm text-center"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
