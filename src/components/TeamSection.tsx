import { Award, ShieldCheck, Briefcase } from 'lucide-react';
import { Mechanic } from '../types';

interface TeamSectionProps {
  team: Mechanic[];
}

export default function TeamSection({ team }: TeamSectionProps) {
  return (
    <section id="our-team-view" className="py-16 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
            TRUST THE EXPERTS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal mt-2 mb-4">
            Meet Our Master Mechanics
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Our garage is staffed by ASE-certified master mechanics and diagnostics engineers trained directly by global manufacturers.
          </p>
        </div>

        {/* Mechanics Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              id={`team-member-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-slate-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-amber font-mono">
                    Experience: {member.experience}
                  </span>
                  <h3 className="font-display font-extrabold text-lg leading-tight mt-0.5">
                    {member.name}
                  </h3>
                  <span className="text-xs text-gray-300 block">{member.role}</span>
                </div>
              </div>

              {/* Content info */}
              <div className="p-6 flex-grow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Specialty */}
                  <div className="flex gap-2 items-start text-xs text-gray-600 leading-normal">
                    <Briefcase className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-brand-charcoal block">Specialty area:</span>
                      {member.specialty}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-gray-500 leading-relaxed italic">
                    "{member.bio}"
                  </p>
                </div>

                {/* Certifications badges */}
                <div className="border-t border-gray-200/60 pt-4 mt-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-2 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-brand-amber" />
                    Verified Credentials
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.certifications.map((cert, cIdx) => (
                      <span
                        key={cIdx}
                        className="bg-white border border-gray-200 text-[10px] font-bold text-gray-700 px-2 py-1 rounded-md"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
