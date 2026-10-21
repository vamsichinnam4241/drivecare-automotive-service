import { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  items: GalleryItem[];
}

export default function GallerySection({ items }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'garage' | 'repairs' | 'deliveries' | 'workshop'>('all');

  const filteredItems = items.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  const categories = [
    { label: 'All Photos', value: 'all' as const },
    { label: 'Garage & Bays', value: 'garage' as const },
    { label: 'Repair Work', value: 'repairs' as const },
    { label: 'Workshop Tech', value: 'workshop' as const },
    { label: 'Deliveries', value: 'deliveries' as const },
  ];

  return (
    <section id="garage-gallery-view" className="py-16 bg-slate-50 text-left border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
            OUR OPERATIONS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal mt-2 mb-4">
            Garage & Workshop Gallery
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Take a visual tour inside our pristine, fully insured diagnostic center, our heavy tooling machinery, and polished vehicle deliveries.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`gallery-cat-${cat.value}`}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-brand-charcoal text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 text-brand-charcoal p-3 rounded-full shadow-lg">
                    <Camera className="w-5 h-5 text-brand-red" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex-grow border-t border-gray-50">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-brand-red bg-brand-red/5 px-2 py-0.5 rounded-md">
                  {item.category}
                </span>
                <h4 className="font-display font-bold text-sm text-brand-charcoal mt-2 leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
