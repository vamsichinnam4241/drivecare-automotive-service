import React from 'react';
import { ArrowLeft, Clock, ShieldAlert, Sparkles, Check, CalendarCheck } from 'lucide-react';
import { Service, PageType } from '../types';
import { DynamicIcon } from './ServicesGrid';

interface ServiceDetailsProps {
  service: Service;
  onNavigate: (page: PageType, serviceId?: string) => void;
}

export default function ServiceDetails({ service, onNavigate }: ServiceDetailsProps) {
  return (
    <section id={`service-detail-view-${service.id}`} className="py-12 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          id="service-detail-back-btn"
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-red transition-colors duration-200 mb-8 font-semibold text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Services
        </button>

        {/* Master Heading Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Header left details */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-brand-red/5 text-brand-red px-3 py-1 rounded-full text-xs font-bold font-mono uppercase">
              <DynamicIcon name={service.iconName} className="w-4 h-4" />
              Specialty Service
            </div>
            
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal">
              {service.title}
            </h1>
            
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {service.fullOverview}
            </p>
          </div>

          {/* Quick Metrics sidebar card */}
          <div className="lg:col-span-4 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col gap-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-200/60">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                Estimated Duration
              </span>
              <span className="flex items-center gap-1.5 font-bold font-mono text-brand-charcoal text-sm">
                <Clock className="w-4 h-4 text-brand-amber" />
                {service.estimatedTime}
              </span>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-gray-200/60">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                Starting Base Price
              </span>
              <span className="font-display font-black text-xl text-brand-charcoal leading-none">
                {service.basePrice}
              </span>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-gray-200/60">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                Service Warranty
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-emerald-600 text-xs sm:text-sm">
                <ShieldAlert className="w-4 h-4" />
                12-Month / 12,000 M
              </span>
            </div>

            <button
              id={`service-detail-book-btn-${service.id}`}
              onClick={() => onNavigate('book', service.id)}
              className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-brand-red/10 flex items-center justify-center gap-2 cursor-pointer mt-2 text-sm uppercase tracking-wider"
            >
              <CalendarCheck className="w-4.5 h-4.5" />
              Book This Service
            </button>
          </div>
        </div>

        {/* Details & Lists Container */}
        <div className="grid md:grid-cols-2 gap-10 mt-8 pt-8 border-t border-gray-100">
          {/* Whats Included Checklist */}
          <div className="bg-gray-50/60 rounded-2xl p-6 sm:p-8 border border-gray-100 space-y-6">
            <h3 className="font-display font-extrabold text-xl text-brand-charcoal flex items-center gap-2 border-b border-gray-200 pb-3">
              <Sparkles className="w-5 h-5 text-brand-red" />
              What's Included in Service
            </h3>
            
            <ul className="space-y-4">
              {service.whatsIncluded.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-600 leading-relaxed align-top">
                  <div className="p-1 bg-brand-red/5 rounded-full mt-0.5 shrink-0">
                    <Check className="w-4 h-4 text-brand-red stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Service Benefits */}
          <div className="bg-gray-50/60 rounded-2xl p-6 sm:p-8 border border-gray-100 space-y-6">
            <h3 className="font-display font-extrabold text-xl text-brand-charcoal flex items-center gap-2 border-b border-gray-200 pb-3">
              <ShieldAlert className="w-5 h-5 text-brand-amber" />
              Key Safety & Performance Benefits
            </h3>
            
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-600 leading-relaxed align-top">
                  <div className="p-1 bg-brand-amber/10 rounded-full mt-0.5 shrink-0">
                    <Check className="w-4 h-4 text-brand-amber stroke-[3]" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
