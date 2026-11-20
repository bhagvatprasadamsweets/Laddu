import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function Benefits({ selectedLaddu }) {
  const [activeTab, setActiveTab] = useState('purity')

  const tabs = [
    { id: 'purity', label: 'Purity & Ghee' },
    { id: 'ingredients', label: 'Royal Ingredients' },
    { id: 'craftsmanship', label: 'Vedic Crafting' },
  ]

  const tabContent = {
    purity: {
      title: 'The Golden Vedic Difference: 100% Pure Premium Ghee',
      description: 'Unlike commercial sweets made with hydrogenated fats or refined oils, every single batch of our artisanal laddus is roasted exclusively in 100% pure cultured premium ghee sourced from grass-fed indigenous cows.',
      points: [
        'Cultured from curd using traditional two-way wooden churning with premium ghee.',
        'Rich in healthy medium-chain fatty acids (MCTs) and butyric acid.',
        'Subtle caramelized nutty aroma that lingers deliciously on the palate.',
        'Promotes smooth digestion and natural energy retention.'
      ]
    },
    ingredients: {
      title: 'Handpicked Grade-A Spices & Californian Nuts',
      description: 'We spare no expense in sourcing the finest natural ingredients across India and royal trade routes to ensure imperial flavor in every bite.',
      points: [
        'Pure Mongra saffron threads from the valleys of Kashmir.',
        'Jumbo Goan cashews and royal emerald Iranian pistachios.',
        'Freshly cracked green cardamom pods ground immediately before cooking.',
        'Unrefined country jaggery and organic khand sugar.'
      ]
    },
    craftsmanship: {
      title: 'Slow-Roasting in Heavy Brass Kadhais',
      description: 'The ancient art of halwai craftsmanship relies on patience. Our artisan sweetmakers slow-roast each flour on controlled low flames for hours until the aroma fills the room.',
      points: [
        'Even heat distribution preventing scorching and bitter aftertastes.',
        'Warm hand-pressing of each sphere by experienced generational artisans.',
        'Hygienic, touch-free packaging in food-grade vacuum sealed luxury tins.',
        'Zero artificial color dyes, chemical essences, or anti-caking agents.'
      ]
    }
  }

  const current = tabContent[activeTab]

  return (
    <section
      id="benefits-section"
      aria-labelledby="benefits-heading"
      className="relative py-5 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Subtle Ambient Decorative Accents matching Home */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-stone-100/70 rounded-full blur-3xl opacity-40 pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl opacity-30 pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
          <h2 id="benefits-heading" className="font-1 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#70470d] leading-tight">
            Traditional Sweets for Festivals and Celebrations
          </h2>
          <p className="font-7 text-gray-700 text-sm sm:text-base mt-2">
            Why choose traditional Laddu? Handcrafted with 100% pure desi ghee, natural spices, and premium nuts, perfect for festive sharing, wedding return gifts, and divine temple bhog.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div
            role="tablist"
            aria-label="Sweetmaking benefits and craftsmanship"
            className="inline-flex p-1.5 rounded-2xl bg-amber-50 border border-amber-200 shadow-inner gap-2 flex-wrap justify-center"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-1 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8c6226] to-[#70470d] text-white shadow-md'
                      : 'text-[#8c6226] hover:text-[#70470d] hover:bg-amber-100/50'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content Body */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-amber-100"
        >
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <h3 className="font-1 text-2xl sm:text-3xl font-bold text-[#70470d]">
              {current.title}
            </h3>
            <p className="font-7 text-gray-700 text-base leading-relaxed">
              {current.description}
            </p>
            <div className="space-y-3 pt-2">
              {current.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f1e0c5] text-[#70470d] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#8c6226]" aria-hidden="true" />
                  </div>
                  <span className="font-7 text-sm sm:text-base text-gray-700 font-medium">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border-2 border-amber-200 group">
              <img
                src={selectedLaddu.mainImage}
                alt={selectedLaddu.imageAlt || `${selectedLaddu.heading}`}
                width={384}
                height={320}
                loading="lazy"
                decoding="async"
                className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
