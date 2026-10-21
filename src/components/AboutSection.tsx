import React from 'react';
import { ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';
import { PageType } from '../types';
import aboutGarageImg from '@/assets/about-garage.jpg';

interface AboutSectionProps {
  onNavigate: (page: PageType) => void;
}

export default function AboutSection({ onNavigate }: AboutSectionProps) {
  const coreValues = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-red" />,
      title: 'Uncompromised Integrity',
      desc: 'We never suggest a repair that isn\'t necessary. All quotes are transparently broken down and explained beforehand.'
    },
    {
      icon: <Award className="w-6 h-6 text-brand-amber" />,
      title: 'Master Craftsmanship',
      desc: 'Our staff consists entirely of ASE-Certified technicians equipped with factory-grade diagnostic software & tooling.'
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: 'Customer First Valet',
      desc: 'From custom pickup & drop service options to comprehensive warranties, your convenience and peace of mind is our focus.'
    }
  ];

  return (
    <section id="about-us-view" className="py-16 bg-white overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal mt-2 mb-4">
            Our Story & Commitment To Safety
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            From humble beginnings as a single service bay, DriveCare has grown into a leading full-service independent automotive center, trusted by thousands of local premium vehicle owners.
          </p>
        </div>

        {/* Section Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">

          {/* Left: Uploaded Garage Image */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-red/5 rounded-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-amber/5 rounded-3xl -z-10"></div>

            <img
              src={aboutGarageImg}
              alt="DriveCare Workshop"
              className="w-full h-[360px] object-cover rounded-2xl shadow-xl border border-gray-100"
            />

            {/* Overlay statistics badge */}

          </div>

          {/* Right: Written Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-extrabold text-2xl text-brand-charcoal">
              Redefining the Independent Automotive Repair Experience
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              DriveCare was founded with a clear, singular goal: to challenge the costly, high-pressure service advisor models of modern dealerships, and deliver an authentic, friendly garage environment grounded in absolute precision engineering.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We employ state-of-the-art diagnostic scopes, digital gas analyzers, and laser alignments. But beyond technology, we invest in training. Our master technicians understand complex hybrid battery loops, multi-stage gear tolerances, and high-frequency sensor triggers.
            </p>
          </div>

        </div>

        {/* Full-width Mission & Vision Section (Placed in between Our Story and Why Choose Us) */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <div className="bg-brand-red p-6 sm:p-8 rounded-2xl text-white shadow-md border border-brand-red/10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-amber block mb-2 font-mono">
              Our Mission
            </span>
            <p className="text-sm text-red-50 leading-relaxed">
              To provide highly-calibrated, zero-guesswork mechanical repairs and scheduled servicing that restores your vehicle back to original factory parameters.
            </p>
          </div>

          <div className="bg-brand-red p-6 sm:p-8 rounded-2xl text-white shadow-md border border-brand-red/10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-amber block mb-2 font-mono">
              Our Vision
            </span>
            <p className="text-sm text-red-50 leading-relaxed">
              To set the regional gold-standard for premium independent automotive garages through complete pricing transparency and digital tooling.
            </p>
          </div>
        </div>

        {/* Certifications and Core Values Highlights */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100">
          <h3 className="font-display font-bold text-xl text-brand-charcoal text-center mb-10">
            Why Hundreds of Premium Drivers Choose Us
          </h3>

          {/* Value Boxes with Hover Effect */}
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((val, index) => (
              <div
                key={index}
                className="core-value-card bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3 hover:shadow-lg cursor-default group"
              >
                <div className="icon-container p-2 bg-gray-50 rounded-lg inline-block transition-colors">
                  {React.cloneElement(val.icon, {
                    className: `${val.icon.props.className} group-hover:text-white transition-colors`
                  })}
                </div>
                <h4 className="font-display font-bold text-base text-brand-charcoal group-hover:text-white transition-colors">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 group-hover:text-red-100 leading-relaxed transition-colors">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick lists of Certifications */}
          <div className="mt-12 pt-8 border-t border-gray-200/60 text-center">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-6">
              Our Professional Garage Accreditations
            </span>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2 text-gray-600 font-medium text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                ASE Master Technicians
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-medium text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                Bosch Authorized Partner
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-medium text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                Hybrid EV Systems Accredited
              </div>
              <div className="flex items-center gap-2 text-gray-600 font-medium text-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                AAA Approved Repair Facility
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
