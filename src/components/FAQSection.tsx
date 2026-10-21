import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // keeps first faq open by default

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs-view" className="py-16 bg-slate-50 text-left border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
            WE HAVE ANSWERS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Have a question about our diagnostic procedures, valet pickups, or warrantied repairs? Read our quick reference manual.
          </p>
        </div>

        {/* FAQs Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-white rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm transition-all duration-300"
              >

                {/* Header Button */}
                <button
                  id={`faq-toggle-${idx}`}
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 focus:outline-none cursor-pointer group"
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-brand-red' : 'text-gray-400 group-hover:text-brand-charcoal'}`} />
                    <span className="font-display font-bold text-sm sm:text-base text-brand-charcoal">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-slate-50 text-gray-500 group-hover:bg-slate-100 transition-colors ${isOpen ? 'rotate-180 bg-brand-red/5 text-brand-red' : ''}`}>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                {/* Content Expandable Section */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-gray-100' : 'max-h-0'
                    }`}
                >
                  <div className="p-5 sm:p-6 text-xs sm:text-sm text-gray-500 leading-relaxed pl-12 bg-slate-50/50">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Support Help box */}


      </div>
    </section>
  );
}
