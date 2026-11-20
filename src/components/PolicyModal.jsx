import { useEffect, useRef } from 'react'
import {
  X,
  ArrowLeft,
  ShieldCheck,
  Truck,
  RotateCcw,
  Phone,
  MapPin,
  Clock,
  HelpCircle
} from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { policyData } from '../data/policyData'

const CURRENT_YEAR = new Date().getFullYear()

export default function PolicyModal({ policy, isBulk, activePolicyKey, onClose }) {
  // Determine active policy key directly from props
  const currentKey = isBulk
    ? 'bulk'
    : activePolicyKey && policyData[activePolicyKey]
    ? activePolicyKey
    : policy?.id && policyData[policy.id]
    ? policy.id
    : 'terms'

  const scrollContainerRef = useRef(null)

  // Lock body scroll and handle Escape key
  useEffect(() => {
    const isOpen = Boolean(policy || isBulk || activePolicyKey)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [policy, isBulk, activePolicyKey, onClose])

  // Scroll to top whenever policy changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [currentKey])

  const isOpen = Boolean(policy || isBulk || activePolicyKey)
  if (!isOpen) return null

  const currentPolicy = policyData[currentKey] || policyData.terms
  const bulkMsg = 'Hello! I am inquiring about bulk and corporate handcrafted laddu gifting orders. Please share your catalog, packaging options, and bulk pricing.'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-full-title"
      ref={scrollContainerRef}
      className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in flex flex-col min-h-screen text-gray-800 selection:bg-[#c79e64] selection:text-white"
    >
      {/* Main Full-Page Content */}
      <main className="flex-1 w-full bg-white">
        <article className="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16 sm:pb-20">
          {/* Top Bar: Only Back to Home & Close Button (No navbar styling) */}
          <div className="flex items-center justify-between pb-5 mb-8 border-b border-amber-100">
            <button
              type="button"
              onClick={onClose}
              className="font-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-[#70470d] border border-amber-200 text-xs sm:text-sm font-bold transition-all cursor-pointer active:scale-95 shadow-2xs"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Home</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white hover:bg-amber-100 text-[#70470d] border border-amber-200/90 shadow-sm flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Close and return to home"
              title="Close and return to home"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Header Banner */}
          <header className="border-b border-amber-200/80 pb-6 sm:pb-8 mb-8 sm:mb-10">
            <h1
              id="policy-full-title"
              className="font-1 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#70470d] leading-tight mb-3"
            >
              {currentPolicy.seoTitle}
            </h1>

            <p className="font-7 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mb-4">
              {currentPolicy.subtitle}
            </p>

            {/* Quality & Trust Indicator Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 font-medium">
                <Clock className="w-3.5 h-3.5 text-stone-500" aria-hidden="true" />
                Last Revised: {currentPolicy.lastUpdated}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 text-[#70470d] font-medium border border-amber-200/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                100% Pure Desi Ghee Guarantee
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 text-[#70470d] font-medium border border-amber-200/60">
                <MapPin className="w-3.5 h-3.5 text-[#8c6226]" aria-hidden="true" />
                Surat, Gujarat Kitchen
              </span>
            </div>
          </header>

          {/* Delivery Matrix Table (for Shipping Policy) */}
          {currentPolicy.deliveryTable && (
            <section aria-labelledby="delivery-matrix" className="mb-10">
              <h2 id="delivery-matrix" className="font-1 text-xl sm:text-2xl font-bold text-[#70470d] mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#8c6226]" aria-hidden="true" />
                <span>Pan-India Estimated Delivery Timelines</span>
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-amber-200 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#70470d] text-white font-1">
                    <tr>
                      <th className="p-3.5 sm:p-4">Destination Region</th>
                      <th className="p-3.5 sm:p-4">Estimated Transit Time</th>
                      <th className="p-3.5 sm:p-4">Logistics Carrier Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100 bg-white font-7">
                    {currentPolicy.deliveryTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-amber-50/30' : 'bg-white'}>
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-900">{row.region}</td>
                        <td className="p-3.5 sm:p-4 text-[#8c6226] font-bold">{row.transitTime}</td>
                        <td className="p-3.5 sm:p-4 text-gray-600">{row.courier}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* 4-Step Resolution Workflow (for Return Policy) */}
          {currentPolicy.resolutionSteps && (
            <section aria-labelledby="return-steps" className="mb-10">
              <h2 id="return-steps" className="font-1 text-xl sm:text-2xl font-bold text-[#70470d] mb-4 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-[#8c6226]" aria-hidden="true" />
                <span>Hassle-Free 4-Step Claim Process</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentPolicy.resolutionSteps.map((step) => (
                  <div key={step.step} className="p-4 sm:p-5 rounded-2xl bg-white border border-amber-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="font-1 w-8 h-8 rounded-full bg-[#70470d] text-white font-bold flex items-center justify-center text-sm mb-3">
                        {step.step}
                      </div>
                      <h3 className="font-1 font-bold text-sm text-[#70470d] mb-1.5">{step.title}</h3>
                      <p className="font-7 text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bulk Direct CTA Box (if Bulk policy) */}
          {currentKey === 'bulk' && (
            <section aria-labelledby="bulk-cta" className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#70470d] via-[#5c3a29] to-[#3e2505] text-white shadow-xl">
              <h2 id="bulk-cta" className="font-1 text-xl sm:text-2xl font-bold mb-2">
                Consult Directly with Our Surat Corporate Concierge
              </h2>
              <p className="font-7 text-white/90 text-xs sm:text-sm mb-5 leading-relaxed max-w-2xl">
                Looking for customized packaging, wedding favors, or corporate Diwali gifting hampers? We offer volume pricing starting from 15 kg orders with direct door-to-door dispatch to your employees across India.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/918850011652?text=${encodeURIComponent(bulkMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
                  <span>WhatsApp Bulk Desk (+91 88500 11652)</span>
                </a>
                <a
                  href="tel:+918850011652"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-amber-50 text-[#70470d] font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#70470d]" />
                  <span>Direct Call Desk</span>
                </a>
              </div>
            </section>
          )}

          {/* In-Depth Policy Articles */}
          <section aria-label="Detailed policy clauses" className="space-y-8 sm:space-y-10">
            {currentPolicy.sections?.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="font-1 text-lg sm:text-xl lg:text-2xl font-bold text-[#70470d]">
                  {sec.title}
                </h2>
                <div className="font-7 text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed whitespace-pre-line space-y-3">
                  {sec.content}
                </div>
              </div>
            ))}
          </section>

          {/* Frequently Asked Questions (FAQ) */}
          {currentPolicy.faqs && currentPolicy.faqs.length > 0 && (
            <section aria-labelledby="policy-faqs" className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-amber-200">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-5 h-5 text-[#8c6226]" aria-hidden="true" />
                <h2 id="policy-faqs" className="font-1 text-xl sm:text-2xl font-bold text-[#70470d]">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                {currentPolicy.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-amber-50/50 border border-amber-200/70">
                    <h3 className="font-1 font-bold text-sm sm:text-base text-[#70470d] mb-2">
                      {faq.q}
                    </h3>
                    <p className="font-7 text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Back to Home Button */}
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={onClose}
              className="font-1 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8c6226] via-[#70470d] to-[#4B2E1B] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Home</span>
            </button>
          </div>
        </article>
      </main>

      {/* Full Page Clean Footer */}
      <footer className="w-full bg-amber-50/60 border-t border-amber-200/80 py-4 px-4 text-center text-xs text-[#c79d63]">
        <div className="max-w-7xl mx-auto">
          © {CURRENT_YEAR} <strong className="text-[#70470d]">Laddu</strong> | Handcrafted Indian Sweets, Surat. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
