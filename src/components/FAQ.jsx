import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section
      id="FAQ-section"
      aria-labelledby="faq-heading"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8 bg-white overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-stone-100/70 rounded-full blur-3xl opacity-40 pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl opacity-30 pointer-events-none -z-10" aria-hidden="true"></div>

      <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6">
        <h2 id="faq-heading" className="font-1 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#70470d]">
          Frequently Asked Questions
        </h2>
        <p className="font-7 text-gray-600 text-sm sm:text-base mt-2">
          Everything you need to know about our artisanal laddus, ingredients, shelf life, and delivery across Surat &amp; India.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-xs hover:border-[#c79e64] transition-all duration-200"
            >
              <h3 className="m-0 p-0 text-base sm:text-lg font-semibold">
                <button
                  type="button"
                  id={`faq-btn-${idx}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left text-[#70470d] font-semibold text-base sm:text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-300 rounded-2xl"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8c6226] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#70470d]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>

              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-btn-${idx}`}
                  className="px-6 pb-6 pt-1 text-gray-700 font-7 text-sm sm:text-base leading-relaxed"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
