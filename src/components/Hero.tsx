import React from 'react';
import { Shield, Sparkles, Trophy, Star, ChevronRight } from 'lucide-react';
import { PageType } from '../types';

interface HeroProps {
  onNavigate: (page: PageType, serviceId?: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero-banner" className="relative bg-brand-charcoal overflow-hidden py-8 lg:py-14 text-left">
      {/* Red accent glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-amber/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-white animate-fade-in lg:pl-6 lg:translate-x-6">
            <div className="inline-flex items-center gap-2 bg-brand-red/15 border border-brand-red/30 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              Car Servicing & Garage Booking System
            </div>
            
            <div className="space-y-2">
              <span className="text-brand-red font-mono text-xs sm:text-sm uppercase tracking-widest font-bold block">
                Care Beyond the Drive.
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white">
                Precision Care For <br />
                <span className="text-brand-red">Your Vehicle</span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-xs sm:text-sm max-w-md leading-relaxed text-left">
              Experience dealership-level expertise without the dealership prices. DriveCare offers factory-grade diagnostics, high-performance maintenance, and seamless garage booking backed by an industry-leading 12-Month warranty.
            </p>

            {/* Micro value badges */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 max-w-xl">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-200">12-Month Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-brand-amber shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-200">Dealer Tech Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-200">4.9/5 Rating (2.5k+)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="hero-book-now-btn"
                onClick={() => onNavigate('book')}
                className="bg-brand-red hover:bg-brand-red/90 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-brand-red/20 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 cursor-pointer text-base"
              >
                Book Service
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                id="hero-services-btn"
                onClick={() => onNavigate('services')}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer text-base"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Hero Right: 3D Red Car Model Viewer (No border frame, larger size) */}
          <div className="lg:col-span-5 relative animate-fade-in lg:-translate-x-12">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/25 to-brand-amber/15 rounded-3xl filter blur-2xl opacity-60"></div>
            
            <div className="relative w-full h-[340px] sm:h-[450px] flex items-center justify-center">
              <model-viewer
                src="/red_car.glb"
                alt="3D Red Car Model"
                auto-rotate
                camera-controls
                ar
                interaction-prompt="none"
                field-of-view="60deg"
                shadow-intensity="1.5"
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent', outline: 'none', border: 'none' }}
              ></model-viewer>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
