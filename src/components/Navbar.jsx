import { useState, useEffect } from 'react'
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react'
import AppPromoBanner from './AppPromoBanner'

const announcements = [
  'FREE SHIPPING ON ORDERS ABOVE ₹999',
  'FREE SHIPPING ON YOUR FIRST ORDER ABOVE ₹599',
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeAnnounceIndex, setActiveAnnounceIndex] = useState(0)
  const [fade, setFade] = useState(true)

  // Smooth subtle rotation between promotional offers
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setActiveAnnounceIndex((prev) => (prev + 1) % announcements.length)
        setFade(true)
      }, 350)
    }, 3800)
    return () => clearInterval(interval)
  }, [])

  const handlePrevOffer = (e) => {
    e.stopPropagation()
    setFade(false)
    setTimeout(() => {
      setActiveAnnounceIndex((prev) => (prev - 1 + announcements.length) % announcements.length)
      setFade(true)
    }, 200)
  }

  const handleNextOffer = (e) => {
    e.stopPropagation()
    setFade(false)
    setTimeout(() => {
      setActiveAnnounceIndex((prev) => (prev + 1) % announcements.length)
      setFade(true)
    }, 200)
  }

  const scrollTo = (id) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navLinks = [
    { label: 'Varieties', id: 'varieties' },
    { label: 'About Us', id: 'about' },
    { label: 'Why Our Laddus', id: 'benefits-section' },
    { label: 'Tradition & Blogs', id: 'Blog-section' },
    { label: 'FAQ', id: 'FAQ-section' },
    { label: 'Contact Us', id: 'contactForm' },
  ]

  return (
    <>
      <header role="banner" className="fixed top-0 inset-x-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-xs transition-all">
        {/* 1. Rotating Announcement Bar (Free Shipping Offers with < and > on Mobile) */}
        <div className="w-full bg-[#70470d] text-white py-0.5 px-2 sm:px-3 text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wide text-center border-b border-white/20 select-none overflow-hidden leading-tight">
          <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center min-h-[16px]">
            {/* Mobile Left < Arrow */}
            <button
              onClick={handlePrevOffer}
              className="sm:hidden p-0.5 text-white/80 hover:text-white transition-opacity active:scale-90 cursor-pointer"
              aria-label="Previous promotional offer"
            >
              <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            <span
              className={`transition-opacity duration-300 ease-in-out inline-flex items-center px-1 ${fade ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <span>{announcements[activeAnnounceIndex]}</span>
            </span>

            {/* Mobile Right > Arrow */}
            <button
              onClick={handleNextOffer}
              className="sm:hidden p-0.5 text-white/80 hover:text-white transition-opacity active:scale-90 cursor-pointer"
              aria-label="Next promotional offer"
            >
              <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* 2. Bhagvat Prasadam App Promo Banner (Brand Color #70470d Matching Line 1) */}
        <AppPromoBanner variant="header" />

        {/* Main Navigation Bar (Height exactly matched to reference: 72px navbar, 52px logo) */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center gap-3 cursor-pointer group"
              aria-label="Laddu Home"
            >
              <img
                src="/laddu_logo.webp"
                alt="Laddu: Handcrafted Indian Laddus Logo"
                width={150}
                height={55}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-[48px] sm:h-[52px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = '/laddu_logo.png'
                }}
              />
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-5 lg:gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="font-1 text-[#8c6226] hover:text-amber-800 font-medium text-sm lg:text-[15px] transition-colors cursor-pointer tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons: Original Colored Order Inquiry + Simple Buy Now (No Icon) */}
            <div className="hidden sm:flex items-center gap-2.5 lg:gap-3">
              <button
                onClick={() => scrollTo('contactForm')}
                className="font-1 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#8c6226] via-[#70470d] to-[#4B2E1B] hover:opacity-95 text-white font-medium text-xs sm:text-sm shadow-md shadow-[#70470d]/20 transition-all cursor-pointer whitespace-nowrap"
                aria-label="Navigate to contact and inquiry section"
              >
                Order Inquiry
              </button>
              <a
                href="https://www.bhagvatprasadam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-1 inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full border border-gray-400 hover:border-[#70470d] text-[#70470d] hover:bg-amber-50/60 font-semibold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap"
                aria-label="Buy Now on Bhagvat Prasadam"
              >
                <span>Buy Now</span>
              </a>
            </div>

            {/* Mobile Actions: Simple Buy Now (No Icon) + Hamburger Button */}
            <div className="flex items-center gap-2 sm:hidden">
              <a
                href="https://www.bhagvatprasadam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-1 inline-flex items-center justify-center px-3 py-1.5 rounded-full border border-gray-400 text-[#70470d] font-semibold text-xs whitespace-nowrap"
                aria-label="Buy Now on Bhagvat Prasadam"
              >
                <span>Buy Now</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 text-[#8c6226] focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-lg"
                aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white shadow-xl px-6 py-6 transition-all animate-fade-in">
            <nav aria-label="Mobile Navigation" className="flex flex-col items-center gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="font-1 text-[#8c6226] hover:text-amber-800 font-medium text-base transition-colors cursor-pointer w-full text-center py-1"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contactForm')}
                className="font-1 w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#8c6226] to-[#70470d] text-white font-semibold text-sm shadow-md"
              >
                Order Inquiry
              </button>
              <a
                href="https://www.bhagvatprasadam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-1 w-full py-2.5 rounded-xl border border-gray-400 hover:border-[#70470d] text-[#70470d] font-semibold text-sm flex items-center justify-center hover:bg-amber-50/50"
              >
                <span>Buy Now</span>
              </a>
            </nav>
          </div>
        )}
      </header>
      {/* Spacer to guarantee smooth flow underneath fixed navbar (Total height ~108px) */}
      <div className="h-[105px] sm:h-[110px] w-full" aria-hidden="true" />
    </>
  )
}
