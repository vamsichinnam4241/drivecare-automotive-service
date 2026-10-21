import { useState, useEffect } from 'react';
import { PageType, Service, Appointment } from './types';
import { SERVICES, TEAM, BRANDS, PRICING_PACKAGES, GALLERY_ITEMS } from './data';

// Import subcomponents
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import ServiceDetails from './components/ServiceDetails';
import BookingForm from './components/BookingForm';
import TeamSection from './components/TeamSection';
import BrandShowcase from './components/BrandShowcase';
import PricingSection from './components/PricingSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

import { Shield, Settings, Wrench, Sparkles, Phone, CheckCircle } from 'lucide-react';
import paintCorrectionImg from '@/assets/paint-correction.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [lastAppointment, setLastAppointment] = useState<Appointment | null>(null);

  // Deep Link Routing Support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      // Check if hash matches an established service details link, e.g. service-details/oil-change
      if (hash.startsWith('service/')) {
        const srvId = hash.split('service/')[1];
        const srvExists = SERVICES.some((s) => s.id === srvId);
        if (srvExists) {
          setSelectedServiceId(srvId);
          setCurrentPage('service-details');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      const validPages: PageType[] = [
        'home', 'about', 'services', 'service-details', 'book', 'team', 
        'brands', 'pricing', 'gallery', 'faqs', 'contact',
        'privacy', 'terms'
      ];

      if (hash === 'testimonials') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById('customer-reviews-view');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (validPages.includes(hash as PageType)) {
        setCurrentPage(hash as PageType);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('404');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check on page load
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigation = (page: PageType, serviceId?: string) => {
    if (page === 'service-details' && serviceId) {
      setSelectedServiceId(serviceId);
      window.location.hash = `service/${serviceId}`;
    } else if (page === 'book' && serviceId) {
      setSelectedServiceId(serviceId);
      window.location.hash = page;
    } else {
      setSelectedServiceId('');
      window.location.hash = page === 'home' ? '' : page;
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickBookingInit = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleNavigation('book', serviceId);
  };

  const handleBookingConfirmation = (appt: Appointment) => {
    setLastAppointment(appt);
  };

  // Flowchart section widget for homepage
  const howWeWorkSteps = [
    {
      num: '01',
      title: 'Digital Diagnostic Scan',
      desc: 'We connect our dealer-level scanners to your vehicle’s ECU to extract error codes and live sensor metrics.'
    },
    {
      num: '02',
      title: 'Transparent Quotation',
      desc: 'Adi breaks down parts & labor estimates. No unneeded repairs, zero pressure, full transparency.'
    },
    {
      num: '03',
      title: 'Master-Tech Restoration',
      desc: 'Certified specialists overhaul or service your components using approved original manufacturer (OEM) parts.'
    },
    {
      num: '04',
      title: 'Road & System Calibration',
      desc: 'We conduct standard electronic resets and double-test key systems in live road parameters before release.'
    },
    {
      num: '05',
      title: 'Premium Handwash & Valet',
      desc: 'Your vehicle is washed, detailed, and dropped off directly to your driveway or office bay pristine.'
    }
  ];

  const currentServiceObj = SERVICES.find((s) => s.id === selectedServiceId);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-900 antialiased">
      
      {/* Sticky Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigation} />

      {/* Main View Router */}
      <main className="flex-grow">
        
        {currentPage === 'home' && (
          <div className="space-y-0 animate-fade-in">
            {/* 1. Hero Banner */}
            <Hero 
              onNavigate={handleNavigation} 
            />

            {/* 2. Brand Logos Showcase */}
            <BrandShowcase brands={BRANDS} />

            {/* 3. Services Preview Section */}
            <section id="home-services-preview" className="py-16 bg-brand-charcoal text-left border-b border-white/5 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header with Title and Corner Link */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-white/10 pb-6 mb-8">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
                      WHAT WE EXCEL AT
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2">
                      Our Certified Premium Services
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavigation('services')}
                    className="mt-4 sm:mt-0 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Browse Services
                  </button>
                </div>

                {/* Content Layout: Left Image, Right Details */}
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row items-stretch hover:shadow-lg transition-all duration-300">
                  {/* Left: Cosmetic Image */}
                  <div className="w-full md:w-1/2 min-h-[300px] sm:min-h-[360px] relative shrink-0">
                    <img 
                      src={paintCorrectionImg} 
                      alt="Paint Correction & Polishing" 
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[1.08] contrast-[1.05] saturate-[1.05]" 
                    />
                  </div>
                  {/* Right: Text details */}
                  <div className="w-full md:w-1/2 p-6 sm:p-10 space-y-4 text-left flex flex-col justify-center bg-white text-brand-charcoal">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-brand-red/5 text-brand-red rounded-lg">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-extrabold text-xl sm:text-2xl text-brand-charcoal">
                        Paint Correction & Polishing
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Restore your vehicle's original showroom finish. We perform multi-stage machine buffing, compound cutting, and micro-swirl elimination to remove scratches, oxidation, and water spots before sealing with premium waxes.
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block font-mono">
                        Starting Price:
                      </span>
                      <span className="font-display font-black text-2xl text-brand-red">
                        ₹999
                      </span>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={() => handleNavigation('book')}
                        className="px-6 py-3 bg-brand-red hover:bg-brand-red/90 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-sm"
                      >
                        Book Service
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3.5. Pricing Preview Section */}
            <section id="home-pricing-preview" className="py-16 bg-slate-50 text-left border-b border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Title and Corner Link */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-gray-200/60 pb-6 mb-8">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
                      TRANSPARENT RATES
                    </span>
                    <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal mt-2">
                      Service Pricing Packages
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavigation('pricing')}
                    className="mt-4 sm:mt-0 px-5 py-2.5 bg-brand-charcoal hover:bg-brand-red text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    Browse Pricing
                  </button>
                </div>

                {/* Grid: 3 Packages */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Basic */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div className="space-y-3">
                      <h4 className="font-display font-extrabold text-lg text-brand-charcoal">Basic Service</h4>
                      <p className="text-xs text-gray-400">Essential diagnostics, fluid checks, and oil/filter replacements.</p>
                      <span className="font-display font-black text-xl text-brand-red block pt-2">Starting ₹1,999</span>
                    </div>
                    <button 
                      onClick={() => handleNavigation('book')}
                      className="mt-6 w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-charcoal font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                    >
                      Book Package
                    </button>
                  </div>

                  {/* Standard */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div className="space-y-3">
                      <h4 className="font-display font-extrabold text-lg text-brand-charcoal">Standard Service</h4>
                      <p className="text-xs text-gray-400">Our most popular package containing brake, AC, and suspension checks.</p>
                      <span className="font-display font-black text-xl text-brand-red block pt-2">Starting ₹3,999</span>
                    </div>
                    <button 
                      onClick={() => handleNavigation('book')}
                      className="mt-6 w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-charcoal font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                    >
                      Book Package
                    </button>
                  </div>

                  {/* Premium */}
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div className="space-y-3">
                      <h4 className="font-display font-extrabold text-lg text-brand-charcoal">Premium Service</h4>
                      <p className="text-xs text-gray-400">Ultimate care diagnostics, detailing, polishing, and pickup dispatch.</p>
                      <span className="font-display font-black text-xl text-brand-red block pt-2">Starting ₹6,999</span>
                    </div>
                    <button 
                      onClick={() => handleNavigation('book')}
                      className="mt-6 w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-brand-charcoal font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                    >
                      Book Package
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. "How We Work" / Service Process Flowchart */}
            <section id="how-we-work" className="py-16 bg-brand-charcoal text-left border-b border-white/5 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
                    TRANSPARENT SYSTEM
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2 mb-4">
                    Our 5-Step Service Blueprint
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    We pride ourselves on zero-guesswork processes. Here is exactly how we look after your vehicle from drive-in to drive-away.
                  </p>
                </div>

                <div className="grid md:grid-cols-5 gap-6 relative">
                  {howWeWorkSteps.map((step, idx) => (
                    <div
                      key={idx}
                      id={`flowchart-step-${step.num}`}
                      className="bg-white/5 border border-white/10 p-6 rounded-2xl relative space-y-4 hover:bg-white/10 hover:border-brand-red/40 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-brand-red text-white rounded-xl flex items-center justify-center font-display font-bold text-sm">
                        {step.num}
                      </div>

                      <h3 className="font-display font-bold text-base text-white leading-tight">
                        {step.title}
                      </h3>
                      
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. Reviews */}
            <TestimonialsSection />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="animate-fade-in">
            <AboutSection onNavigate={handleNavigation} />
          </div>
        )}

        {currentPage === 'services' && (
          <div className="animate-fade-in">
            <ServicesGrid services={SERVICES} onNavigate={handleNavigation} />
          </div>
        )}

        {currentPage === 'service-details' && currentServiceObj && (
          <div className="animate-fade-in">
            <ServiceDetails service={currentServiceObj} onNavigate={handleNavigation} />
          </div>
        )}

        {currentPage === 'book' && (
          <div className="py-12 bg-slate-50 px-4 animate-fade-in">
            <BookingForm 
              services={SERVICES} 
              initialServiceId={selectedServiceId} 
              onBookingSuccess={handleBookingConfirmation} 
            />
          </div>
        )}

        {currentPage === 'team' && (
          <div className="animate-fade-in">
            <TeamSection team={TEAM} />
          </div>
        )}

        {currentPage === 'pricing' && (
          <div className="animate-fade-in">
            <PricingSection packages={PRICING_PACKAGES} onNavigate={handleNavigation} />
          </div>
        )}

        {currentPage === 'gallery' && (
          <div className="animate-fade-in">
            <GallerySection items={GALLERY_ITEMS} />
          </div>
        )}

        {currentPage === 'faqs' && (
          <div className="animate-fade-in">
            <FAQSection />
          </div>
        )}



        {currentPage === 'contact' && (
          <div className="animate-fade-in">
            <ContactSection />
          </div>
        )}

        {currentPage === 'privacy' && (
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 text-left animate-fade-in">
            <h1 className="font-display font-extrabold text-3xl text-brand-charcoal mb-6">Privacy Policy</h1>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed bg-white border border-gray-150 p-6 sm:p-8 rounded-2xl shadow-sm">
              <p>At DriveCare, accessible from Miyapur, Hyderabad, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by DriveCare and how we use it.</p>
              <h2 className="font-display font-bold text-lg text-brand-charcoal mt-6">Consent</h2>
              <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
              <h2 className="font-display font-bold text-lg text-brand-charcoal mt-6">Information We Collect</h2>
              <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information (such as booking appointments or sending digital inquiries).</p>
              <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
              <h2 className="font-display font-bold text-lg text-brand-charcoal mt-6">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Provide, operate, and maintain our website and scheduling services</li>
                <li>Improve, personalize, and expand our website features</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new services, features, and functionality</li>
                <li>Communicate with you to provide service updates and confirmation ticket vouchers</li>
              </ul>
            </div>
            <div className="mt-8 text-center">
              <button 
                onClick={() => handleNavigation('home')}
                className="px-6 py-3 bg-brand-charcoal hover:bg-brand-red text-white font-bold rounded-xl transition-colors cursor-pointer text-sm uppercase tracking-wider shadow-sm"
              >
                Close & Return Home
              </button>
            </div>
          </div>
        )}

        {currentPage === 'terms' && (
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 text-left animate-fade-in">
            <h1 className="font-display font-extrabold text-3xl text-brand-charcoal mb-6">Terms & Conditions</h1>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed bg-white border border-gray-150 p-6 sm:p-8 rounded-2xl shadow-sm">
              <p>Welcome to DriveCare! These terms and conditions outline the rules and regulations for the use of DriveCare's website and servicing facilities located in Miyapur, Hyderabad, Telangana.</p>
              <h2 className="font-display font-bold text-lg text-brand-charcoal mt-6">Interpretation and Definitions</h2>
              <p>The following terminology applies to these Terms and Conditions: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.</p>
              <h2 className="font-display font-bold text-lg text-brand-charcoal mt-6">Service Booking and Estimates</h2>
              <p>All service estimations and price quotes given online or via our digital voucher ticketing system serve as preliminary approximations based on industry-standard diagnostics. Final pricing sheets are finalized on-site following physical inspections by our master technicians.</p>
              <h2 className="font-display font-bold text-lg text-brand-charcoal mt-6">Pickup & Drop Valet Policy</h2>
              <p>Our valet pickup and delivery service is offered subject to slot availability and geographic bounds. Clients must ensure their vehicle has sufficient fuel and valid insurance documents at the time of key handover.</p>
              <h2 className="font-display font-bold text-lg text-brand-charcoal mt-6">Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. We will not be liable for any loss or damage of any nature.</p>
            </div>
            <div className="mt-8 text-center">
              <button 
                onClick={() => handleNavigation('home')}
                className="px-6 py-3 bg-brand-charcoal hover:bg-brand-red text-white font-bold rounded-xl transition-colors cursor-pointer text-sm uppercase tracking-wider shadow-sm"
              >
                Close & Return Home
              </button>
            </div>
          </div>
        )}

        {currentPage === '404' && (
          <div className="animate-fade-in">
            <NotFound onNavigate={handleNavigation} />
          </div>
        )}

      </main>

      {/* Persistent Multi-Widget Footer */}
      <Footer onNavigate={handleNavigation} />

      {/* Floating Speed Dial CTAs */}
      <FloatingActions />

    </div>
  );
}
