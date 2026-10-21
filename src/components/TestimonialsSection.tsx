import { Star, Quote, Play, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsSection() {
  return (
    <section id="customer-reviews-view" className="py-16 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
            TESTED & TRUSTED
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal mt-2 mb-4">
            Customer Testimonials
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Read transparent reviews written by premium sports, hybrid, and daily commuter vehicle owners who trust DriveCare.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              id={`testimonial-card-${idx}`}
              className="bg-slate-50 border border-gray-100 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm relative group hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="w-4.5 h-4.5 text-brand-amber fill-brand-amber" />
                  ))}
                </div>

                {/* Review Copy */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                  "{review.review}"
                </p>
              </div>

              {/* Bio details */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-200/60">
                <img
                  src={review.avatar}
                  alt={review.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border"
                />
                <div>
                  <span className="font-display font-bold text-sm text-brand-charcoal block leading-tight">
                    {review.name}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-brand-red block">
                    {review.vehicle} • {review.date}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
