import { AlertTriangle, Home, Wrench } from 'lucide-react';
import { PageType } from '../types';

interface NotFoundProps {
  onNavigate: (page: PageType) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  return (
    <section id="not-found-view" className="py-20 bg-slate-50 min-h-[70vh] flex items-center justify-center text-center">
      <div className="max-w-md mx-auto px-6 space-y-6">
        
        {/* Animated Icon */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-brand-red/10 rounded-full blur-xl animate-pulse"></div>
          <div className="relative bg-white border border-gray-100 p-6 rounded-full shadow-lg text-brand-red animate-bounce inline-block">
            <AlertTriangle className="w-12 h-12" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-charcoal">
            Route Not Found!
          </h1>
          <span className="text-[10px] font-mono font-bold tracking-widest text-brand-red uppercase block">
            ERROR CODE: 404 • ENGINE STALL
          </span>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed pt-2">
            Whoops! It looks like you've veered into the wrong lane. The physical page or dynamic document route you requested doesn't exist on our servers.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            id="notfound-home-btn"
            onClick={() => onNavigate('home')}
            className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-xl shadow-md hover:shadow-brand-red/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Return to Home
          </button>
          
          <button
            id="notfound-services-btn"
            onClick={() => onNavigate('services')}
            className="bg-white hover:bg-slate-50 text-brand-charcoal border border-gray-200 font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Wrench className="w-4 h-4 text-brand-amber" />
            Browse Services
          </button>
        </div>

      </div>
    </section>
  );
}
