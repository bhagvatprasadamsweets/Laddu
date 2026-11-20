import { useState } from 'react'
import { Phone, Mail, MapPin, ChevronDown, ExternalLink } from 'lucide-react'
import footerBanner from '../assets/image/footer_banner.webp'
import AppPromoBanner from './AppPromoBanner'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer({ onOpenPolicy, onOpenBulkModal }) {
  const [laddusOpen, setLaddusOpen] = useState(false)
  const [quickLinksOpen, setQuickLinksOpen] = useState(false)
  const [policiesOpen, setPoliciesOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const ladduCollection = [
    {
      name: 'Motichur Laddu',
      hindi: 'मोतीचूर लड्डू',
      url: 'https://www.bhagvatprasadam.com/products/motichur-laddu-traditional-indian-festival-sweet?variant=45408622444693&_pos=2&_sid=f00c03a91&_ss=r',
    },
    {
      name: 'Boondi Laddu',
      hindi: 'बूंदी लड्डू',
      url: 'https://www.bhagvatprasadam.com/products/boondi-laddu-traditional-indian-ladoo-sweet?_pos=2&_psq=b&_psid=926b9849a&_ss=e',
    },
    {
      name: 'Churma Laddu',
      hindi: 'चूरमा लड्डू',
      url: 'https://www.bhagvatprasadam.com/products/churma-ladoo-in-jaggery-traditional-indian-ladoo-gud-ke-churma-ladoo?_pos=1&_psq=chur&_psid=8d30154ec&_ss=e',
    },
    {
      name: 'Magaj Laddu',
      hindi: 'मगज लड्डू',
      url: 'https://www.bhagvatprasadam.com/products/magaj-ladoo-traditional-indian-sweets?_pos=1&_psq=magaj&_psid=cfa715244&_ss=e',
    },
    {
      name: 'Mathiyaa Laddu',
      hindi: 'मठिया लड्डू',
      url: 'https://www.bhagvatprasadam.com/products/besan-ladoo-motaiyya-ladoo-traditional-gujarati-sweet?_pos=3&_psq=mathiya+laddu&_psid=1ae260f7b&_ss=e',
    },
    {
      name: 'Dry Fruit Laddu',
      hindi: 'ड्राईफ्रूट लड्डू',
      url: 'https://www.bhagvatprasadam.com/products/premium-dry-fruit-laddu-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AE%E0%A4%BF%E0%A4%AF%E0%A4%AE-%E0%A4%A1%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%88-%E0%A4%AB%E0%A5%8D%E0%A4%B0%E0%A5%82%E0%A4%9F-%E0%A4%B2%E0%A4%A1%E0%A5%8D%E0%A4%A1%E0%A5%82-nutritious-festive-sweet?_pos=1&_psq=Premium+Sugar-Free+Dry+Fruit+Laddu&_psid=8620afd06&_ss=e',
    },
  ]

  const quickLinks = [
    { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'About Us', action: () => scrollTo('about') },
    { name: 'Why Our Laddus', action: () => scrollTo('benefits-section') },
    { name: 'FAQ', action: () => scrollTo('FAQ-section') },
    { name: 'Tradition Blogs', action: () => scrollTo('Blog-section') },
    { name: 'Bulk Order Inquiry', action: onOpenBulkModal },
    { name: 'Contact Us', action: () => scrollTo('contactForm') },
  ]

  const policies = [
    { name: 'Terms & Conditions', key: 'terms' },
    { name: 'Shipping Policy', key: 'shipping' },
    { name: 'Return Policy', key: 'return' },
    { name: 'Privacy Policy', key: 'privacy' },
  ]

  return (
    <footer role="contentinfo" className="bg-white border-t border-amber-200/50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-block mb-3 group"
              aria-label="Laddu Home"
            >
              <img
                src="/laddu_logo.webp"
                alt="Laddu Brand Logo"
                width="160"
                height="95"
                loading="lazy"
                decoding="async"
                className="w-auto h-[95px] object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = '/laddu_logo.png'
                }}
              />
            </a>
            <p className="font-7 text-[#8c6226] text-sm leading-relaxed max-w-sm">
              We bring the sacred heritage of royal handcrafted laddus into your festive celebrations.<br />
              <span className="font-1 text-[#5c3a29] font-semibold mt-1 inline-block">
                Pure. Natural. Divine.
              </span>
            </p>
          </div>

          {/* Our Laddu Collection */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-3">
            <button
              type="button"
              onClick={() => setLaddusOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-1 sm:py-0 text-left cursor-pointer sm:cursor-default"
              aria-expanded={laddusOpen}
            >
              <h3 className="text-lg font-semibold text-[#70470d] sm:mb-4 font-1">
                Our Laddu Collection
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-[#8c6226] sm:hidden transition-transform duration-300 ${laddusOpen ? 'rotate-180 text-[#70470d]' : ''
                  }`}
                aria-hidden="true"
              />
            </button>
            <ul
              className={`space-y-2.5 pt-2 sm:pt-0 ${laddusOpen ? 'block' : 'hidden'
                } sm:block`}
            >
              {ladduCollection.map((laddu, idx) => (
                <li key={idx}>
                  <a
                    href={laddu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 text-sm text-[#8c6226] hover:text-[#70470d] transition group py-0.5"
                  >
                    <span>
                      {laddu.name} ({laddu.hindi})
                    </span>
                    <ExternalLink
                      className="w-3.5 h-3.5 text-[#8c6226] group-hover:text-[#70470d] transition shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-2">
            <button
              type="button"
              onClick={() => setQuickLinksOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-1 sm:py-0 text-left cursor-pointer sm:cursor-default"
              aria-expanded={quickLinksOpen}
            >
              <h3 className="text-lg font-semibold text-[#70470d] sm:mb-4 font-1">
                Quick Links
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-[#8c6226] sm:hidden transition-transform duration-300 ${quickLinksOpen ? 'rotate-180 text-[#70470d]' : ''
                  }`}
                aria-hidden="true"
              />
            </button>
            <ul
              className={`space-y-2.5 pt-2 sm:pt-0 ${quickLinksOpen ? 'block' : 'hidden'
                } sm:block`}
            >
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={item.action}
                    className="text-[#8c6226] hover:text-[#70470d] transition text-sm text-left cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care & Policies */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-2">
            <button
              type="button"
              onClick={() => setPoliciesOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-1 sm:py-0 text-left cursor-pointer sm:cursor-default"
              aria-expanded={policiesOpen}
            >
              <h3 className="text-lg font-semibold text-[#70470d] sm:mb-4 font-1">
                Customer Care &amp; Policies
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-[#8c6226] sm:hidden transition-transform duration-300 ${policiesOpen ? 'rotate-180 text-[#70470d]' : ''
                  }`}
                aria-hidden="true"
              />
            </button>
            <ul
              className={`space-y-2.5 pt-2 sm:pt-0 ${policiesOpen ? 'block' : 'hidden'
                } sm:block`}
            >
              {policies.map((pol) => (
                <li key={pol.key}>
                  <button
                    onClick={() => onOpenPolicy(pol.key)}
                    className="text-[#8c6226] hover:text-[#70470d] transition text-sm text-left cursor-pointer"
                  >
                    {pol.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-2">
            <h3 className="text-lg font-semibold text-[#70470d] mb-4 font-1">
              Contact &amp; Location
            </h3>
            <address className="not-italic space-y-3.5 text-sm text-gray-700">
              <div className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#70470d] shrink-0" aria-hidden="true" />
                <a href="tel:+918850011652" className="text-[#8c6226] hover:text-[#70470d]">
                  +91 88500 11652
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-5 h-5 text-[#70470d] shrink-0" aria-hidden="true" />
                <a href="mailto:info@megascale.in" className="text-[#8c6226] hover:text-[#70470d]">
                  info@megascale.in
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#70470d] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-[#8c6226] leading-relaxed">
                  411-412, New Escon Plaza,<br />
                  Amroli, Surat, Gujarat 394107
                </span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Full Width Laddu Line-Art Banner (Seamless, Zero Gap) */}
      <div className="w-full overflow-hidden my-0 py-0">
        <div className="w-full max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-8">
          <img
            src={footerBanner}
            alt="100% Pure Premium Ghee Artisanal Laddus Surat"
            width="2232"
            height="486"
            loading="lazy"
            decoding="async"
            className="w-full h-auto block object-contain"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
      </div>

      {/* Bhagvat Prasadam Mobile App Promotion (White background matching footer color) */}
      <AppPromoBanner variant="footer" />

      {/* Copyright Line (Zero extra space between the two lines) */}
      <div className="max-w-7xl mx-auto px-4 py-2 text-center text-[#8c6226] text-xs sm:text-sm">
        © {CURRENT_YEAR}{' '}
        <span className="font-semibold text-[#70470d]">Laddu</span> | Handcrafted Indian Sweets, Surat. All Rights Reserved. |{' '}
        <a
          href="https://www.megascale.in/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#70470d] transition font-medium"
        >
          Powered by Megascale
        </a>
      </div>
    </footer>
  )
}
