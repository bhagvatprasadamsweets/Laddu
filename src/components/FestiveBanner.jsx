import boondiBanner from '../assets/image/boondi_composite_banner.webp'
import churmaBanner from '../assets/image/churma_composite_banner.webp'
import motichoorBanner from '../assets/image/motichoor_composite_banner.webp'
import magajBanner from '../assets/image/magaj_composite_banner.webp'
import mathiyaaBanner from '../assets/image/mathiyaa_composite_banner.webp'
import sugarfreeBanner from '../assets/image/sugarfree_composite_banner.webp'

const bannerMap = {
  boondi: {
    src: boondiBanner,
    alt: 'Traditional Indian Boondi Laddu'
  },
  churma: {
    src: churmaBanner,
    alt: 'Gujarati Churma Laddu'
  },
  motichoor: {
    src: motichoorBanner,
    alt: 'Traditional Motichoor Laddu'
  },
  magaj: {
    src: magajBanner,
    alt: 'Gujarati Magaj Laddu'
  },
  mathiyaa: {
    src: mathiyaaBanner,
    alt: 'Traditional Mathiya Laddu'
  },
  sugarfree: {
    src: sugarfreeBanner,
    alt: 'Premium Dry Fruit Laddu'
  }
}

export default function FestiveBanner({ selectedLaddu }) {
  const ladduId = selectedLaddu?.id || 'boondi'
  const currentBanner = bannerMap[ladduId] || bannerMap.boondi

  return (
    <section
      aria-label="Festive Laddu Banner"
      className="w-full overflow-hidden bg-white py-0 my-0 transition-all duration-500"
    >
      <div className="w-full">
        <img
          key={ladduId}
          src={currentBanner.src}
          alt={currentBanner.alt}
          width={1544}
          height={832}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover block animate-fade-in shadow-sm"
        />
      </div>
    </section>
  )
}
