import { ArrowRight, Truck } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

export default function Hero({ laddus = [], selectedLaddu, onSelectLaddu, onQuickOrder }) {
  const currentLaddu = selectedLaddu || laddus[0] || {}
  const selectedWeight = '500g'

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="varieties"
      aria-label="Handcrafted Laddus Hero Showcase"
      className="relative pt-3 sm:pt-4 pb-3 sm:pb-4 lg:pb-5 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden scroll-mt-24"
    >
      {/* Subtle Ambient Decorative Accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-stone-100/70 rounded-full blur-3xl opacity-40 pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl opacity-30 pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column: Heading, Subheading, Description, Thumbnails */}
          <div className="space-y-4 sm:space-y-5 animate-fade-in text-center md:text-left">
            {/* Primary SEO H1 */}
            <h1 className="font-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#70470d] leading-tight">
              Buy Traditional Indian Laddu Online
              <span className="font-7 block text-xl sm:text-2xl lg:text-3xl text-[#915e1b] mt-1.5 font-semibold">
                Authentic Indian Sweets and Laddus | Handcrafted in Pure Ghee
              </span>
            </h1>

            {/* Currently Selected Variety Information */}
            <div
              id={currentLaddu.anchorId || `${currentLaddu.id}-laddu`}
              className="bg-white/80 backdrop-blur-xs p-3.5 sm:p-5 rounded-2xl border border-amber-200/80 shadow-xs text-left scroll-mt-28"
            >
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="font-1 text-xs text-[#8c6226] font-semibold">
                  {currentLaddu.subheading}
                </span>
              </div>
              <h2 className="font-1 text-2xl sm:text-3xl font-bold text-[#70470d] leading-tight">
                {currentLaddu.id === 'boondi' ? 'Buy Traditional Boondi Laddu Online' : currentLaddu.heading}
              </h2>
              <p className="font-7 text-sm sm:text-base text-[#3B3B3B] leading-relaxed mt-1.5">
                {currentLaddu.description}
              </p>

              {/* Applicable Free Shipping Offers (Product Detail Area) */}
              <div className="mt-3 pt-2.5 border-t border-amber-200/70 flex flex-wrap items-center gap-2">
                <span className="font-1 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-[#701a11] text-[11px] sm:text-xs font-bold border border-amber-200/90 shadow-2xs">
                  <Truck className="w-3.5 h-3.5 text-[#8c2215]" aria-hidden="true" />
                  Free Shipping above ₹999
                </span>
                <span className="font-1 inline-flex items-center px-2.5 py-1 rounded-md bg-stone-50 text-stone-700 text-[11px] sm:text-xs font-semibold border border-stone-200/80 shadow-2xs">
                  First Order: Free Shipping above ₹599
                </span>
              </div>
            </div>

            {/* Variant Switcher Thumbnails */}
            <div className="pt-1 sm:pt-2">
              <span className="font-1 text-xs font-semibold text-[#70470d] block mb-2">
                Select Artisanal Variety to Inspect:
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5 max-w-2xl mx-auto md:mx-0">
                {laddus.map((item) => {
                  const isActive = item.id === currentLaddu.id
                  return (
                    <a
                      key={item.id}
                      href={`#${item.anchorId}`}
                      onClick={(e) => {
                        e.preventDefault()
                        onSelectLaddu?.(item)
                        window.history.pushState(null, '', `#${item.anchorId}`)
                      }}
                      className={`group flex flex-col items-center p-1.5 rounded-2xl cursor-pointer transition-all duration-300 ${
                        isActive
                          ? 'bg-[#70470d] text-white shadow-lg shadow-[#70470d]/30 scale-105 ring-2 ring-[#c79e64]'
                          : 'bg-white hover:bg-amber-50 text-[#70470d] border border-amber-200 hover:border-[#70470d] shadow-xs'
                      }`}
                      title={`${item.heading}: Click to view details`}
                      aria-label={`Select ${item.name}`}
                    >
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden bg-amber-50 border border-amber-100/60 shrink-0">
                        <img
                          src={item.thumbnail || item.image}
                          alt={item.imageAlt || `${item.heading}`}
                          width={72}
                          height={72}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className={`font-1 text-[11px] font-semibold text-center mt-1.5 px-0.5 line-clamp-1 leading-tight ${
                        isActive ? 'text-amber-100' : 'text-[#70470d]'
                      }`}>
                        {item.name}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <button
                onClick={() => onQuickOrder?.(currentLaddu, selectedWeight)}
                className="font-1 px-6 py-3 rounded-full bg-gradient-to-r from-[#8c6226] via-[#70470d] to-[#4B2E1B] text-white font-semibold text-sm shadow-md hover:shadow-xl hover:opacity-95 transition-all cursor-pointer flex items-center gap-2"
                aria-label={`Inquire on WhatsApp about ${currentLaddu.heading}`}
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-[#25D366] shrink-0" />
                <span>Inquire on WhatsApp</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                onClick={() => scrollTo('contactForm')}
                className="font-1 px-5 py-3 rounded-full bg-white hover:bg-amber-50 text-[#70470d] border border-[#c79e64] font-semibold text-sm transition-colors cursor-pointer"
                aria-label="Bulk Inquiry Form - Scroll to inquiry contact form"
              >
                Bulk Inquiry Form
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="relative flex justify-center items-center">
            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-100 to-amber-50/50 rounded-3xl blur-2xl transform scale-95 opacity-50" aria-hidden="true"></div>

            {/* Main Showcase Image Card */}
            <div className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border-4 border-amber-100/60 bg-white p-3 sm:p-4 group">
              <div className="relative rounded-2xl overflow-hidden aspect-square bg-white">
                <img
                  key={currentLaddu.id}
                  src={currentLaddu.mainImage}
                  alt={currentLaddu.imageAlt || `${currentLaddu.heading}`}
                  width={500}
                  height={500}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
