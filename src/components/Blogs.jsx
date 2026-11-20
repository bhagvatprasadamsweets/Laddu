import { useState, useEffect } from 'react'
import { Calendar, User, ArrowRight, ArrowLeft, X } from 'lucide-react'

export default function Blogs({ blogs }) {
  const [activeBlog, setActiveBlog] = useState(null)

  // Lock body scroll and listen for Escape key when full-page blog is open
  useEffect(() => {
    if (activeBlog) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveBlog(null)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [activeBlog])

  return (
    <section
      id="Blog-section"
      aria-labelledby="blogs-heading"
      className="relative py-5 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Subtle Ambient Decorative Accents matching Home */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-stone-100/70 rounded-full blur-3xl opacity-40 pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl opacity-30 pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-4 sm:mb-6 text-center md:text-left">
          <h2 id="blogs-heading" className="font-1 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#70470d]">
            Traditional Sweets &amp; Vedic Health Insights
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {blogs.map((b) => (
            <article
              key={b.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-amber-100 hover:border-[#c79e64]"
            >
              {/* Thumbnail */}
              <div className="overflow-hidden h-56 bg-amber-50">
                <img
                  src={b.image}
                  alt={`${b.title} | Traditional Indian Sweets Guide`}
                  width={384}
                  height={224}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-1 flex items-center justify-between text-[#70470d] mb-3 text-xs font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#8c6226]" aria-hidden="true" />
                      <time dateTime="2026-03-14">{b.date}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#8c6226]" aria-hidden="true" />
                      <span>{b.author}</span>
                    </div>
                  </div>

                  <h3 className="font-1 text-lg sm:text-xl font-bold mb-3 text-[#70470d] group-hover:text-[#8c6226] transition-colors line-clamp-2">
                    {b.title}
                  </h3>

                  <p className="font-7 text-gray-600 mb-4 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <button
                  onClick={() => setActiveBlog(b)}
                  className="font-1 inline-flex items-center text-[#70470d] font-semibold text-sm hover:text-[#8c6226] transition-colors cursor-pointer pt-2"
                  aria-label={`Read full article: ${b.title}`}
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Full Article View (Full Page) */}
      {activeBlog && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="full-blog-title"
          className="fixed inset-0 z-50 bg-white overflow-y-auto animate-fade-in flex flex-col"
        >
          {/* Quick Close Button */}
          <button
            type="button"
            onClick={() => setActiveBlog(null)}
            className="fixed top-4 right-4 sm:top-5 sm:right-6 z-50 w-10 h-10 rounded-full bg-white/95 hover:bg-amber-50 text-[#70470d] border border-amber-200/90 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Close article"
            title="Close article"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Full Page Article Body */}
          <main className="flex-1 w-full">
            <article className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8 sm:pb-12">
              {/* Title */}
              <h1 id="full-blog-title" className="font-1 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#70470d] leading-tight mb-4 sm:mb-6">
                {activeBlog.title}
              </h1>

              {/* Hero Image */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden aspect-16/9 sm:aspect-21/9 mb-8 sm:mb-10 shadow-lg border border-amber-200/90 bg-amber-50">
                <img
                  src={activeBlog.image}
                  alt={activeBlog.title}
                  width={1200}
                  height={600}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-base sm:prose-lg prose-amber max-w-none text-gray-700 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: activeBlog.content }}
              />

              {/* Bottom Navigation without partition line */}
              <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setActiveBlog(null)
                    window.scrollTo({ top: document.getElementById('Blog-section')?.offsetTop || 0, behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8c6226] via-[#70470d] to-[#4B2E1B] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-md cursor-pointer active:scale-95"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  <span>Back to All Articles</span>
                </button>

                <p className="text-xs text-[#8c6226] font-medium text-center sm:text-right">
                  Handcrafted with pure premium ghee • Surat, Gujarat
                </p>
              </div>
            </article>
          </main>
        </div>
      )}
    </section>
  )
}
