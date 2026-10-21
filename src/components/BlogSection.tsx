import { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, X, Sparkles } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="latest-blog-view" className="py-16 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
            KNOWLEDGE BASE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal mt-2 mb-4">
            DriveCare Maintenance Blog & Tips
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Stay informed on crucial engine checks, tire wearing signals, seasonal weather precautions, and battery diagnostics.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              id={`blog-card-${post.id}`}
              className="bg-slate-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-brand-charcoal/80 backdrop-blur-md text-brand-amber font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  
                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-[10px] font-mono text-gray-400 font-bold uppercase">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brand-red" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-base sm:text-lg text-brand-charcoal leading-snug group-hover:text-brand-red transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Trigger Button */}
                <button
                  id={`blog-read-${post.id}`}
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-charcoal hover:text-brand-red transition-colors uppercase tracking-wider cursor-pointer group/btn"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

              </div>
            </article>
          ))}
        </div>

        {/* Dynamic Modal Dialog for Full Article Reader */}
        {selectedPost && (
          <div className="fixed inset-0 bg-brand-charcoal/65 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden max-h-[85vh] shadow-2xl border border-gray-100 flex flex-col">
              
              {/* Modal Header Cover */}
              <div className="relative aspect-video max-h-[220px] shrink-0">
                <img
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent"></div>
                
                {/* Close Button */}
                <button
                  id="close-blog-modal"
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-2 rounded-full border border-white/20 transition-colors focus:outline-none cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 text-white">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-brand-amber bg-brand-amber/15 px-2 py-0.5 rounded font-mono">
                    {selectedPost.category}
                  </span>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl mt-2 leading-tight">
                    {selectedPost.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-gray-500 leading-relaxed text-left">
                
                {/* Article Info Bar */}
                <div className="flex items-center gap-4 text-[10px] font-mono text-gray-400 font-bold uppercase border-b border-gray-100 pb-3">
                  <span className="flex items-center gap-1.5 text-brand-charcoal">
                    <User className="w-3.5 h-3.5 text-brand-red" />
                    By {selectedPost.author}
                  </span>
                  <span>•</span>
                  <span>Published {selectedPost.date}</span>
                  <span>•</span>
                  <span className="text-brand-amber">{selectedPost.readTime}</span>
                </div>

                {/* Article Text */}
                <div className="space-y-4 pt-2">
                  {selectedPost.content.split(/\d+\.\s+/).map((segment, idx) => {
                    if (idx === 0) {
                      return <p key={idx} className="first-letter:text-4xl first-letter:font-black first-letter:text-brand-red first-letter:mr-1 first-letter:float-left text-gray-600 leading-relaxed">{segment}</p>;
                    }
                    return (
                      <div key={idx} className="bg-slate-50 border-l-4 border-brand-red p-4 rounded-r-xl space-y-1 my-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-red block">
                          Tip #{idx}
                        </span>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {segment}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Maintenance CTA Banner */}
                <div className="bg-brand-red/5 border border-brand-red/10 rounded-2xl p-4 mt-6 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display font-bold text-brand-charcoal text-xs sm:text-sm">
                      Is your vehicle exhibiting any of these symptoms?
                    </h4>
                    <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">
                      Schedule a priority checkup with Alex or Marcus to keep your family safe.
                    </p>
                  </div>
                  <button
                    id="blog-modal-book-cta"
                    onClick={() => {
                      setSelectedPost(null);
                      // Switch to book page!
                      const triggerBtn = document.getElementById('header-book-cta');
                      if (triggerBtn) triggerBtn.click();
                    }}
                    className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-[10px] uppercase tracking-wider px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Request Diagnostic
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
