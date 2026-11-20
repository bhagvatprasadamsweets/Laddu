export default function About({ selectedLaddu }) {
  const steps = [
    {
      num: 1,
      title: '100% Pure Premium Ghee',
      desc: 'We start with 100% pure cultured premium ghee to guarantee authentic golden aroma, easy digestion, and gut wellness.'
    },
    {
      num: 2,
      title: 'Slow Roasting in Heavy Brass Kadhais',
      desc: 'Our master halwais in Surat slow-roast each flour on precise medium flames for hours, patiently stirring until the signature golden hazelnut fragrance fills the room.'
    },
    {
      num: 3,
      title: 'Royal Spices & Hand-Cracked Nuts',
      desc: 'Infused with authentic Kashmiri saffron strands, freshly cracked green cardamom seeds, and generous handfuls of crunchy Californian almonds and Goan cashews.'
    },
    {
      num: 4,
      title: 'Hand-Rolled & Aroma-Lock Sealed',
      desc: 'Each sphere is delicately rolled warm by experienced generational artisans, inspected for immaculate texture, and packed in food-grade airtight gift tins for long-lasting freshness.'
    }
  ]

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative bg-white py-5 sm:py-6 lg:py-8 overflow-hidden"
    >
      {/* Subtle Ambient Decorative Accents matching Home */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-stone-100/70 rounded-full blur-3xl opacity-40 pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl opacity-30 pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 id="about-heading" className="font-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#70470d] mb-2 leading-tight">
            Authentic Indian Sweets and Laddus
          </h2>
          <p className="font-7 text-xl sm:text-2xl text-[#915e1b] mb-2.5 font-semibold">
            Pure. Natural. Divine.
          </p>
          <p className="font-7 text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
            Discover the delicious taste of traditional Indian sweets with our handcrafted Laddu collection. Laddus are among India's most loved sweets, enjoyed during festivals, celebrations, family gatherings, and special occasions. Handcrafted in Surat, Gujarat with 100% pure desi ghee, our sweets revive timeless halwai craftsmanship.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex">
            <div className="relative w-full h-full rounded-2xl sm:rounded-3xl shadow-xl border-4 border-amber-100/70 bg-gradient-to-br from-amber-50/30 to-stone-50/30 p-3 sm:p-4 flex flex-col justify-center">
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-full rounded-xl sm:rounded-2xl overflow-hidden bg-white">
                <img
                  src={selectedLaddu.mainImage}
                  alt={selectedLaddu.imageAlt || `${selectedLaddu.heading}`}
                  width={832}
                  height={832}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column: 4 Steps */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 h-full">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="group relative bg-white border-2 border-amber-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-[#8c6226] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center"
                >
                  <div className="font-1 absolute -top-3 -left-3 bg-gradient-to-br from-[#8c6226] via-[#70470d] to-[#3e2505] text-white font-bold rounded-xl w-9 h-9 flex items-center justify-center shadow-md text-sm">
                    {step.num}
                  </div>
                  <h3 className="font-1 font-bold text-lg text-[#70470d] mt-2 group-hover:text-[#8c6226] transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-7 text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
