import { Landmark, ShieldCheck, Flame, Gift, Clock, Check, Truck } from 'lucide-react'

export default function WhatIsSection({ selectedLaddu }) {
  const current = selectedLaddu || {}
  const seo = current.seo || {}

  return (
    <section
      id="what-is-section"
      aria-labelledby="what-is-heading"
      className="relative w-full py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Subtle Ambient Decorative Accents matching Home */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-stone-100/70 rounded-full blur-3xl opacity-40 pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl opacity-30 pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="w-full max-w-7xl mx-auto">
        {/* Section Heading & Subheading */}
        <div className="flex flex-col items-center text-center mb-5 sm:mb-6">
          <h2
            id="what-is-heading"
            className="font-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#70470d] leading-tight tracking-tight"
          >
            {current.id === 'boondi' ? 'Buy Traditional Boondi Laddu Online' : current.heading}
          </h2>

          <p className="font-7 text-lg sm:text-xl md:text-2xl text-[#915e1b] mt-2.5 max-w-3xl mx-auto font-semibold">
            {current.id === 'boondi'
              ? 'Traditional Boondi Laddu | Handcrafted in 100% Pure Desi Ghee'
              : `${current.subheading} | Traditional Gujarati Pure Ghee Laddu`}
          </p>
        </div>

        {/* Grand Featured Answer Snippet Showcase Box */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 lg:p-8 shadow-xl border border-amber-200/90 relative overflow-hidden mb-6 lg:mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Showcase (Left) */}
            <div className="lg:col-span-5 relative w-full h-72 sm:h-84 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-lg border-2 border-amber-200/80 bg-gradient-to-br from-amber-50 to-orange-50 group">
              <img
                src={current.image}
                alt={current.imageAlt || `${current.heading}`}
                width={500}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Answer & Core Definition (Right) */}
            <div className="lg:col-span-7 text-left space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="font-1 text-2xl sm:text-3xl font-bold text-[#70470d]">
                  Authentic Definition &amp; Culinary Essence
                </h3>
              </div>

              {/* Definition Quote Callout */}
              <div className="border-l-4 border-[#8c6226] bg-amber-50/70 rounded-r-2xl p-4 sm:p-6 shadow-xs">
                <p className="font-7 text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed">
                  <strong className="text-[#70470d] font-bold">{seo.question}</strong> {seo.shortAnswer}
                </p>
              </div>

              {/* Detailed Description */}
              {current.description && (
                <p className="font-7 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {current.description}
                </p>
              )}

              {/* Applicable Free Shipping Offers */}
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <span className="font-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 border border-amber-200/90 text-[#701a11] text-xs font-bold shadow-2xs">
                  <Truck className="w-3.5 h-3.5 text-[#8c2215]" aria-hidden="true" />
                  Free Shipping above ₹999
                </span>
                <span className="font-1 inline-flex items-center px-3 py-1 rounded-lg bg-stone-50 border border-stone-200/80 text-stone-700 text-xs font-semibold shadow-2xs">
                  First Order: Free Shipping above ₹599
                </span>
              </div>

              {/* Quality & Authenticity Badges */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <span className="font-1 inline-flex items-center px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-[#70470d] text-xs font-semibold shadow-2xs">
                  100% Premium Ghee
                </span>
                <span className="font-1 inline-flex items-center px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-[#70470d] text-xs font-semibold shadow-2xs">
                  Zero Artificial Food Colors
                </span>
                <span className="font-1 inline-flex items-center px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-[#70470d] text-xs font-semibold shadow-2xs">
                  Slow-Roasted in Surat, Gujarat
                </span>
                <span className="font-1 inline-flex items-center px-3.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-[#70470d] text-xs font-semibold shadow-2xs">
                  Sacred Vedic Recipe
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 In-Depth SEO Pillar Cards (Full Width Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
          {/* Pillar 1: Sacred Heritage & Origins */}
          <div className="bg-white rounded-3xl p-6 lg:p-7 border border-amber-200/80 shadow-md hover:shadow-xl hover:border-[#c79e64] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 text-[#70470d] flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 transition-transform duration-300">
                <Landmark className="w-6 h-6 text-[#8c6226]" aria-hidden="true" />
              </div>
              <h3 className="font-1 text-xl font-bold text-[#70470d] mb-2.5">
                Sacred Heritage &amp; Origins
              </h3>
              <p className="font-7 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {seo.origin}
              </p>
            </div>
          </div>

          {/* Pillar 2: Pure Ingredients */}
          <div className="bg-white rounded-3xl p-6 lg:p-7 border border-amber-200/80 shadow-md hover:shadow-xl hover:border-[#c79e64] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 text-[#70470d] flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6 text-[#8c6226]" aria-hidden="true" />
              </div>
              <h3 className="font-1 text-xl font-bold text-[#70470d] mb-2.5">
                Vedic Ingredients
              </h3>
              <ul className="space-y-2 font-7 text-xs sm:text-sm text-gray-600">
                {seo.ingredientsList?.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8c6226] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pillar 3: Traditional Halwai Craftsmanship */}
          <div className="bg-white rounded-3xl p-6 lg:p-7 border border-amber-200/80 shadow-md hover:shadow-xl hover:border-[#c79e64] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 text-[#70470d] flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 transition-transform duration-300">
                <Flame className="w-6 h-6 text-[#8c6226]" aria-hidden="true" />
              </div>
              <h3 className="font-1 text-xl font-bold text-[#70470d] mb-2.5">
                Halwai Craftsmanship
              </h3>
              <p className="font-7 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {seo.craftsmanship}
              </p>
            </div>
          </div>

          {/* Pillar 4: Auspicious Celebrations & Gifting */}
          <div className="bg-white rounded-3xl p-6 lg:p-7 border border-amber-200/80 shadow-md hover:shadow-xl hover:border-[#c79e64] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 text-[#70470d] flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-6 h-6 text-[#8c6226]" aria-hidden="true" />
              </div>
              <h3 className="font-1 text-xl font-bold text-[#70470d] mb-2.5">
                Auspicious Occasions
              </h3>
              <p className="font-7 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {seo.occasions}
              </p>
            </div>
            <div className="font-1 mt-5 pt-3.5 border-t border-amber-100/80 flex items-center gap-1.5 text-xs font-semibold text-[#8c6226]">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Shelf Life: 30–45 Days at Room Temp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
