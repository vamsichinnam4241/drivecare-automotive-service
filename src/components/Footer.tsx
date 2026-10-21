import { Wrench, Phone, Mail, MapPin, ExternalLink, Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: PageType) => {
    if (page === 'testimonials') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('customer-reviews-view');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const menuLinks = [
    { label: 'Home Page', page: 'home' as PageType },
    { label: 'Our Services', page: 'services' as PageType },
    { label: 'Service Pricing', page: 'pricing' as PageType },
    { label: 'Garage Gallery', page: 'gallery' as PageType },
    { label: 'About History', page: 'about' as PageType },
    { label: 'Client Testimonials', page: 'testimonials' as PageType },
    { label: 'Frequently Asked FAQs', page: 'faqs' as PageType },
    { label: 'Contact Details', page: 'contact' as PageType },
  ];

  return (
    <footer id="main-footer" className="bg-brand-charcoal text-gray-400 text-left pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Logo & Vision Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleLinkClick('home')}>
              <div className="w-11 h-11 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/15 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/logo.png" 
                  alt="DriveCare Logo" 
                  className="w-full h-full object-contain filter drop-shadow" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-tight text-white leading-none">
                  Drive<span className="text-brand-red">Care</span>
                </span>
                <span className="text-[10px] text-gray-400 font-medium mt-0.5">Care Beyond the Drive.</span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed">
              Car Servicing & Garage Booking System — Precision mechanical repairs, luxury auto detailing, and state-of-the-art diagnostics backed by an industry-leading 12-Month/12,000-Mile nationwide warranty.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2">
              <span className="text-brand-amber font-black text-xs">★ ★ ★ ★ ★</span>
              <span className="text-[10px] text-gray-300 font-bold font-mono">
                2,500+ VERIFIED DRIVERS
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 hover:border-brand-red rounded-xl text-gray-400 hover:text-white hover:bg-brand-red/10 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4 text-brand-red" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 hover:border-brand-red rounded-xl text-gray-400 hover:text-white hover:bg-brand-red/10 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
                title="Subscribe on YouTube"
              >
                <Youtube className="w-4 h-4 text-brand-red" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 hover:border-brand-red rounded-xl text-gray-400 hover:text-white hover:bg-brand-red/10 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
                title="Follow on Twitter"
              >
                <Twitter className="w-4 h-4 text-brand-red" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-white/10 hover:border-brand-red rounded-xl text-gray-400 hover:text-white hover:bg-brand-red/10 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
                title="Follow on Facebook"
              >
                <Facebook className="w-4 h-4 text-brand-red" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.page)}
                    className="hover:text-white hover:translate-x-1 transition-all text-left flex items-center gap-1 cursor-pointer"
                  >
                    <ExternalLink className="w-3 h-3 text-brand-red shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              Workshop Schedule
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span>Monday — Friday:</span>
                <span className="font-semibold text-gray-200">8:00 AM — 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span>Saturday Sessions:</span>
                <span className="font-semibold text-gray-200">9:00 AM — 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5 text-brand-red font-bold">
                <span>Sunday Closed:</span>
                <span>Assistance 24/7</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="space-y-3.5 text-xs">
              {/* Phone */}
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="flex items-center gap-2.5 text-white hover:text-brand-red transition-colors font-semibold font-mono"
              >
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                +91 XXXXXXXXXX
              </a>

              {/* Email */}
              <a 
                href="mailto:support@drivecare.com" 
                className="flex items-center gap-2.5 text-white hover:text-brand-red transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                support@drivecare.com
              </a>

              {/* Location */}
              <a 
                href="https://maps.google.com/?q=Miyapur,Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-2.5 text-white hover:text-brand-red transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>Miyapur, Hyderabad, Telangana</span>
              </a>
            </div>
          </div>

        </div>

        {/* Lower row */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center text-xs text-gray-500">
          <p>© {currentYear} DriveCare Automotive Services. All rights reserved. Care Beyond the Drive.</p>
          <div className="flex gap-4 sm:ml-8">
            <button 
              onClick={() => handleLinkClick('privacy')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => handleLinkClick('terms')} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
