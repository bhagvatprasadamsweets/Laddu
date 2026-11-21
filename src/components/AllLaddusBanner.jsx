import { useState, useRef, useEffect } from 'react'
import { ExternalLink } from 'lucide-react'
import allLaddusBanner from '../assets/image/all_laddus_grand_banner.webp'

const ladduItems = [
  // BACK ROW (Top 3 Plates)
  {
    id: 'churma',
    name: 'Churma Laddu',
    hindi: 'ચૂરમા લાડુ',
    alt: 'Gujarati Churma Laddu',
    link: 'https://www.bhagvatprasadam.com/products/churma-ladoo-in-jaggery-traditional-indian-ladoo-gud-ke-churma-ladoo?_pos=1&_psq=chur&_psid=8d30154ec&_ss=e',
    box: {
      left: '2.5%',
      top: '19%',
      width: '31%',
      height: '38%',
      zIndex: 10,
    },
    coords: [40, 160, 460, 450]
  },
  {
    id: 'boondi',
    name: 'Boondi Laddu',
    hindi: 'બુંદી લાડુ',
    alt: 'Traditional Boondi Laddu',
    link: 'https://www.bhagvatprasadam.com/products/boondi-laddu-traditional-indian-ladoo-sweet?_pos=2&_psq=b&_psid=926b9849a&_ss=e',
    box: {
      left: '34%',
      top: '19%',
      width: '31.5%',
      height: '38%',
      zIndex: 10,
    },
    coords: [470, 160, 900, 450]
  },
  {
    id: 'magaj',
    name: 'Magaj Laddu',
    hindi: 'મગજ લાડુ',
    alt: 'Gujarati Magaj Laddu',
    link: 'https://www.bhagvatprasadam.com/products/magaj-ladoo-traditional-indian-sweets?_pos=1&_psq=magaj&_psid=cfa715244&_ss=e',
    box: {
      left: '66%',
      top: '19%',
      width: '31.5%',
      height: '38%',
      zIndex: 10,
    },
    coords: [910, 160, 1340, 450]
  },

  // FRONT ROW (Bottom 3 Plates)
  {
    id: 'motichur',
    name: 'Motichur Laddu',
    hindi: 'મોતીચૂર લાડુ',
    alt: 'Traditional Motichoor Laddu',
    link: 'https://www.bhagvatprasadam.com/products/motichur-laddu-traditional-indian-festival-sweet?variant=45408622444693&_pos=2&_sid=f00c03a91&_ss=r',
    box: {
      left: '2.5%',
      top: '56%',
      width: '31%',
      height: '42%',
      zIndex: 20,
    },
    coords: [40, 440, 460, 755]
  },
  {
    id: 'dryfruit',
    name: 'Dry Fruit Laddu',
    fullName: 'Premium Dry Fruit Laddu',
    hindi: 'ડ્રાયફ્રૂટ લાડુ',
    alt: 'Premium Dry Fruit Laddu',
    link: 'https://www.bhagvatprasadam.com/products/premium-dry-fruit-laddu-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%BF%E0%A4%AF%E0%A4%AE-%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%88-%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%82%E0%A4%9F-%E0%A4%B2%E0%A4%A1%E0%A5%8D%E0%A4%A1%E0%A5%82-nutritious-festive-sweet?_pos=1&_psq=Premium+Sugar-Free+Dry+Fruit+Laddu&_psid=8620afd06&_ss=e',
    box: {
      left: '34%',
      top: '56%',
      width: '31.5%',
      height: '42%',
      zIndex: 20,
    },
    coords: [470, 440, 900, 755]
  },
  {
    id: 'matiya',
    name: 'Mathiya Laddu',
    hindi: 'મઠિયા લાડુ',
    alt: 'Traditional Mathiya Laddu',
    link: 'https://www.bhagvatprasadam.com/products/besan-ladoo-motaiyya-ladoo-traditional-gujarati-sweet?_pos=3&_psq=mathiya+laddu&_psid=1ae260f7b&_ss=e',
    box: {
      left: '66%',
      top: '56%',
      width: '31.5%',
      height: '42%',
      zIndex: 20,
    },
    coords: [910, 440, 1340, 755]
  }
]

export default function AllLaddusBanner() {
  const [hoveredId, setHoveredId] = useState(null)
  const imgRef = useRef(null)
  const [scaledCoords, setScaledCoords] = useState({})

  // Update native HTML image map coordinates dynamically whenever banner resizes
  useEffect(() => {
    const updateCoords = () => {
      if (!imgRef.current) return
      const w = imgRef.current.clientWidth || 1376
      const h = imgRef.current.clientHeight || 768
      const scaleX = w / 1376
      const scaleY = h / 768

      const updated = {}
      ladduItems.forEach((item) => {
        const [x1, y1, x2, y2] = item.coords
        updated[item.id] = `${Math.round(x1 * scaleX)},${Math.round(y1 * scaleY)},${Math.round(x2 * scaleX)},${Math.round(y2 * scaleY)}`
      })
      setScaledCoords(updated)
    }

    updateCoords()
    window.addEventListener('resize', updateCoords)
    return () => window.removeEventListener('resize', updateCoords)
  }, [])

  return (
    <section
      aria-label="Interactive All Laddus Collection Banner"
      className="w-full overflow-hidden bg-white py-0 my-0 shadow-md"
    >
      <div className="text-center py-4 px-4 bg-amber-50/50 border-b border-amber-100">
        <h2 className="font-1 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#70470d]">
          Explore Our Delicious Laddu Collection
        </h2>
        <p className="font-7 text-gray-700 text-sm sm:text-base mt-1.5 max-w-2xl mx-auto">
          Discover our handcrafted range of authentic Indian sweets and Gujarati laddus, prepared fresh in 100% pure desi ghee.
        </p>
      </div>
      {/* Banner Container with Interactive Clickable Hotspots mapped directly over plates and labels */}
      <div className="relative w-full overflow-hidden select-none group/banner">
        <img
          ref={imgRef}
          src={allLaddusBanner}
          alt="Indian Traditional Laddu Collection: Handcrafted pure ghee Indian sweets and Gujarati laddus"
          useMap="#all-laddus-image-map"
          width={1376}
          height={768}
          loading="lazy"
          decoding="async"
          onLoad={() => {
            if (imgRef.current) {
              const w = imgRef.current.clientWidth || 1376
              const h = imgRef.current.clientHeight || 768
              const scaleX = w / 1376
              const scaleY = h / 768
              const updated = {}
              ladduItems.forEach((item) => {
                const [x1, y1, x2, y2] = item.coords
                updated[item.id] = `${Math.round(x1 * scaleX)},${Math.round(y1 * scaleY)},${Math.round(x2 * scaleX)},${Math.round(y2 * scaleY)}`
              })
              setScaledCoords(updated)
            }
          }}
          className="w-full h-auto object-cover block"
        />

        {/* Semantic HTML5 Image Map */}
        <map name="all-laddus-image-map" id="all-laddus-image-map">
          {ladduItems.map((area) => (
            <area
              key={area.id}
              shape="rect"
              coords={scaledCoords[area.id] || area.coords.join(',')}
              href={area.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              alt={area.alt || area.name}
              title={`Click to view and order ${area.name}`}
            />
          ))}
        </map>

        {/* Invisible Clickable Hotspots mapped directly over plates and labels */}
        <div className="absolute inset-0 w-full h-full pointer-events-auto">
          {ladduItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                position: 'absolute',
                left: item.box.left,
                top: item.box.top,
                width: item.box.width,
                height: item.box.height,
                zIndex: item.box.zIndex,
              }}
              aria-label={`Open ${item.name} product page`}
              title={`Click to view and order ${item.name}`}
              className="block cursor-pointer focus:outline-none"
            />
          ))}
        </div>
      </div>

      {/* Quick Clickable Buttons Bar directly underneath the banner */}
      <div className="bg-white border-y border-amber-200/60 py-2.5 sm:py-3 px-3 sm:px-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="font-1 text-xs font-bold text-[#70470d] uppercase tracking-wider mr-1 hidden lg:inline-flex items-center">
            Click Any Laddu in Banner or Below to Order Online:
          </span>

          {ladduItems.map((area) => (
            <a
              key={area.id}
              href={area.link}
              target="_blank"
              rel="nofollow noopener noreferrer"
              onMouseEnter={() => setHoveredId(area.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`font-1 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer ${
                hoveredId === area.id
                  ? 'bg-[#70470d] text-white border border-[#70470d] scale-105'
                  : 'bg-white hover:bg-[#70470d] text-[#70470d] hover:text-white border border-amber-200 hover:border-[#70470d]'
              }`}
            >
              <span>{area.name}</span>
              <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
