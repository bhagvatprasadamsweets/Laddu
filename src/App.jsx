import { useState, useEffect } from 'react'
import { laddus, blogs, faqs, policies } from './data/ladduData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FestiveBanner from './components/FestiveBanner'
import WhatIsSection from './components/WhatIsSection'
import Benefits from './components/Benefits'
import AllLaddusBanner from './components/AllLaddusBanner'
import About from './components/About'
import Blogs from './components/Blogs'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import PolicyModal from './components/PolicyModal'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  const [selectedLaddu, setSelectedLaddu] = useState(laddus[0])
  const [activePolicyKey, setActivePolicyKey] = useState(null)
  const [bulkModalOpen, setBulkModalOpen] = useState(false)

  // Direct deep-link URL hash synchronization for 100/100 SEO & browser navigation
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase()
      if (['terms', 'terms-and-conditions', 'terms-conditions'].includes(rawHash)) {
        setActivePolicyKey('terms')
        setBulkModalOpen(false)
      } else if (['shipping', 'shipping-policy', 'delivery-policy'].includes(rawHash)) {
        setActivePolicyKey('shipping')
        setBulkModalOpen(false)
      } else if (['return', 'return-policy', 'refund-policy', 'cancellation-policy'].includes(rawHash)) {
        setActivePolicyKey('return')
        setBulkModalOpen(false)
      } else if (['privacy', 'privacy-policy', 'data-protection'].includes(rawHash)) {
        setActivePolicyKey('privacy')
        setBulkModalOpen(false)
      } else if (['bulk', 'bulk-orders', 'corporate-gifting', 'corporate-orders'].includes(rawHash)) {
        setActivePolicyKey('bulk')
        setBulkModalOpen(true)
      } else {
        // Check if hash matches one of the 6 laddu variety anchors
        const matchedLaddu = laddus.find(
          (l) => l.anchorId === rawHash || l.id === rawHash || `${l.id}-laddu` === rawHash
        )
        if (matchedLaddu) {
          setSelectedLaddu(matchedLaddu)
          setActivePolicyKey(null)
          setBulkModalOpen(false)
          // Smooth scroll to the variety anchor on load or hashchange
          setTimeout(() => {
            const el = document.getElementById(matchedLaddu.anchorId) || document.getElementById('varieties')
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }, 100)
        }
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  // Dynamic SEO Title, Description, and Canonical Link synchronization
  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]')
    const canonical = document.querySelector('link[rel="canonical"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDesc = document.querySelector('meta[property="og:description"]')

    if (activePolicyKey && policies[activePolicyKey]) {
      const p = policies[activePolicyKey]
      document.title = p.seoTitle
      if (metaDesc) metaDesc.setAttribute('content', p.metaDescription)
      if (canonical) canonical.setAttribute('href', 'https://laddu.megascale.co.in/')
      if (ogTitle) ogTitle.setAttribute('content', p.seoTitle)
      if (ogDesc) ogDesc.setAttribute('content', p.metaDescription)
    } else {
      document.title = 'Buy Laddu Online | Boondi Laddu Online & Gujarati Sweets'
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Buy Boondi Laddu online and authentic Gujarati laddu online. Handcrafted in 100% pure desi ghee: Traditional Boondi Laddu, Churma, Motichoor, Magaj, Mathiya, and Dry Fruit Laddu. Inquire online for festive treats.'
        )
      }
      if (canonical) canonical.setAttribute('href', 'https://laddu.megascale.co.in/')
      if (ogTitle) ogTitle.setAttribute('content', 'Buy Laddu Online | Boondi Laddu Online & Gujarati Sweets')
      if (ogDesc) {
        ogDesc.setAttribute(
          'content',
          'Buy Boondi Laddu online and authentic Gujarati laddu online. Handcrafted in 100% pure desi ghee: Traditional Boondi Laddu, Churma, Motichoor, Magaj, Mathiya, and Dry Fruit Laddu. Inquire online for festive treats.'
        )
      }
    }
  }, [activePolicyKey])

  const handleOpenPolicy = (key) => {
    setActivePolicyKey(key)
    setBulkModalOpen(key === 'bulk')
    const hash = policies[key]?.hash || key
    window.history.pushState(null, '', `#${hash}`)
  }

  const handleClosePolicy = () => {
    setActivePolicyKey(null)
    setBulkModalOpen(false)
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname + window.location.search)
    }
  }

  // Direct WhatsApp inquiry for selected handcrafted laddu
  const handleQuickOrder = (laddu, weight = '500g') => {
    const msg = `Hello, I would like to inquire about *${laddu.heading}* (${weight}). Please share current availability, packaging options, and dispatch schedule!`
    const url = `https://wa.me/918850011652?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const activePolicy = activePolicyKey ? policies[activePolicyKey] : null

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-[#4B2E1B] font-sans flex flex-col justify-between selection:bg-[#c79e64] selection:text-white">
      {/* Fixed Header Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main id="main-content" className="flex-1 w-full overflow-x-hidden">
        {/* Hero Section with Interactive Variant Switcher & Primary SEO Title */}
        <Hero
          laddus={laddus}
          selectedLaddu={selectedLaddu}
          onSelectLaddu={setSelectedLaddu}
          onQuickOrder={handleQuickOrder}
        />

        {/* Festive Mixed Banner (Changes with selected laddu) */}
        <FestiveBanner selectedLaddu={selectedLaddu} />

        {/* 100/100 SEO Section: What is [Selected Laddu]? */}
        <WhatIsSection selectedLaddu={selectedLaddu} />

        {/* Benefits & Purity Tabs (Why Our Handcrafted Laddus Rule Every Celebration) */}
        <Benefits selectedLaddu={selectedLaddu} />

        {/* Full Page All Laddus Grand Banner */}
        <AllLaddusBanner />

        {/* Our Story / About Section */}
        <About selectedLaddu={selectedLaddu} />

        {/* Blogs & Tradition Stories */}
        <Blogs blogs={blogs} />

        {/* Frequently Asked Questions */}
        <FAQ faqs={faqs} />

        {/* Multi-Step Contact / Inquiry Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicy={handleOpenPolicy}
        onOpenBulkModal={() => handleOpenPolicy('bulk')}
      />

      {/* Policies & Bulk Inquiries Full Page View */}
      <PolicyModal
        policy={activePolicy}
        isBulk={bulkModalOpen}
        activePolicyKey={activePolicyKey}
        onSelectPolicy={handleOpenPolicy}
        onClose={handleClosePolicy}
      />

      {/* Sticky Floating WhatsApp Inquiry */}
      <FloatingWhatsApp />
    </div>
  )
}
