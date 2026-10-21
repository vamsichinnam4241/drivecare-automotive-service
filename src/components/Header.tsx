import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Wrench, CalendarCheck } from 'lucide-react';
import { PageType } from '../types';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType, serviceId?: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' as PageType },
    { label: 'Services', page: 'services' as PageType },
    { label: 'Pricing', page: 'pricing' as PageType },
    { label: 'Our Team', page: 'team' as PageType },
    { label: 'Gallery', page: 'gallery' as PageType },
    { label: 'FAQs', page: 'faqs' as PageType },
    { label: 'About', page: 'about' as PageType },
    { label: 'Contact', page: 'contact' as PageType },
  ];

  const handleItemClick = (page: PageType) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md border-b border-gray-100 py-3' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            id="header-logo"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleItemClick('home')}
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl p-0.5 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/logo.png" 
                alt="DriveCare Logo" 
                className="w-full h-full object-contain filter drop-shadow-sm" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-brand-charcoal block leading-none">
                Drive<span className="text-brand-red">Care</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-gray-500 tracking-wider uppercase font-sans mt-0.5">
                Care Beyond the Drive.
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                id={`nav-link-${item.page}`}
                onClick={() => handleItemClick(item.page)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'text-brand-red bg-brand-red/5 font-semibold'
                    : 'text-gray-600 hover:text-brand-red hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              id="header-book-cta"
              onClick={() => handleItemClick('book')}
              className="bg-brand-red hover:bg-brand-red/90 text-white font-medium text-sm px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow-brand-red/20 hover:scale-[1.02] cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="header-mobile-book-cta"
              onClick={() => handleItemClick('book')}
              className="bg-brand-red text-white p-2 rounded-lg sm:hidden hover:bg-brand-red/95 transition-colors"
              title="Book Service"
            >
              <CalendarCheck className="w-5 h-5" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-red p-2 rounded-lg transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div 
          id="mobile-drawer"
          className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col gap-2 transition-all duration-300"
        >
          {navItems.map((item) => (
            <button
              key={item.page}
              id={`mobile-nav-link-${item.page}`}
              onClick={() => handleItemClick(item.page)}
              className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                currentPage === item.page
                  ? 'text-brand-red bg-brand-red/5 font-semibold'
                  : 'text-gray-600 hover:text-brand-red hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col gap-3">
            <button
              id="mobile-book-cta"
              onClick={() => handleItemClick('book')}
              className="w-full bg-brand-red hover:bg-brand-red/95 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
