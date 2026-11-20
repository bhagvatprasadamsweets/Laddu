import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle2, Send } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    type: 'Royal Motichur Laddu',
    gram: '1 kg',
    message: '',
    _hp: '' // Honeypot spam trap
  })
  const [errors, setErrors] = useState({})

  const ladduTypes = [
    'Royal Motichur Laddu',
    'Gujarati Churma Laddu',
    'Golden Boondi Laddu',
    'Traditional Magaj Laddu',
    'Mathiyaa Laddu',
    'Premium Dry Fruit Laddu'
  ]

  const gramOptions = [
    '1 kg',
    '500 gram',
    '250 gram'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name'
    }
    if (!formData.mobile.trim() || !/^\+?\d{10,}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit phone/WhatsApp number'
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.type) {
      newErrors.type = 'Please select laddu type'
    }
    if (!formData.gram) {
      newErrors.gram = 'Please select weight / grams'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData._hp) return // Honeypot trap

    if (validate()) {
      setSubmitted(true)
    }
  }

  const whatsappInquiryUrl = `https://wa.me/918850011652?text=${encodeURIComponent(
    `Hello, I would like to inquire about *${formData.type}* (${formData.gram}).\n\nName: ${formData.name}\nPhone: ${formData.mobile}${formData.email ? `\nEmail: ${formData.email}` : ''}${formData.message ? `\nMessage: ${formData.message}` : ''}`
  )}`

  return (
    <section
      id="contactForm"
      aria-labelledby="contact-heading"
      className="bg-gradient-to-br from-[#70470d] via-[#3e2505] to-[#3e2505] flex items-center justify-center py-6 sm:py-7 lg:py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="w-full max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Contact Information */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between border border-white/10 shadow-2xl">
            <div>
              <h2 id="contact-heading" className="font-1 text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                Get In Touch &amp; Place Inquiry
              </h2>
              <p className="text-white/80 text-sm sm:text-base mb-5 sm:mb-6 font-7 leading-relaxed">
                Fill out the quick form to receive bespoke quotations, custom festive gift packaging, and express dispatch schedules across India.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-2xl shrink-0">
                    <MapPin className="w-6 h-6 text-amber-200" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-1 font-semibold text-base mb-0.5">Kitchen &amp; Office</h3>
                    <address className="not-italic text-white/70 text-sm leading-relaxed">
                      411-412, New Escon Plaza, Amroli,<br />
                      Surat, Gujarat 394107, India
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-2xl shrink-0">
                    <Phone className="w-6 h-6 text-amber-200" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-1 font-semibold text-base mb-0.5">Call &amp; WhatsApp</h3>
                    <p className="text-white/70 text-sm">
                      <a href="tel:+918850011652" className="hover:underline focus:outline-none focus:ring-1 focus:ring-amber-300">
                        +91 88500 11652
                      </a>
                      <br />
                      Mon to Sat, 9:00 AM to 6:00 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-2xl shrink-0">
                    <Mail className="w-6 h-6 text-amber-200" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-1 font-semibold text-base mb-0.5">Email Inquiries</h3>
                    <p className="text-white/70 text-sm">
                      <a href="mailto:info@megascale.in" className="hover:underline focus:outline-none focus:ring-1 focus:ring-amber-300">
                        info@megascale.in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-white/10 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-amber-300" aria-hidden="true" />
                <h3 className="font-1 font-semibold text-sm">Fresh Roasting &amp; Dispatch Hours</h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Monday to Saturday: 9:00 AM to 6:00 PM<br />
                Sunday: Closed for pure premium ghee sourcing &amp; sacred kitchen preparation
              </p>
            </div>
          </div>

          {/* Right Column: Single Clean Interactive Form */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-5 sm:p-8 text-[#4B2E1B] flex flex-col justify-between border border-amber-200">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center my-auto animate-fade-in" role="status" aria-live="polite">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 shadow-md">
                  <CheckCircle2 className="w-12 h-12" aria-hidden="true" />
                </div>
                <h3 className="font-1 text-3xl font-bold text-[#70470d] mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-sm mb-6 leading-relaxed font-7">
                  Thank you, <strong>{formData.name}</strong>. We have received your inquiry for <strong>{formData.type} ({formData.gram})</strong>. Our team in Surat will contact you promptly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba5a] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white fill-white" />
                    <span>Send on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        mobile: '',
                        email: '',
                        type: 'Royal Motichur Laddu',
                        gram: '1 kg',
                        message: '',
                        _hp: ''
                      })
                    }}
                    className="px-6 py-2.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200 transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot Spam Trap */}
                <input
                  type="text"
                  name="_hp"
                  value={formData._hp}
                  onChange={handleInputChange}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Form Header */}
                <div className="mb-2">
                  <h3 className="font-1 text-2xl font-bold text-[#70470d]">
                    Quick Inquiry Form
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Please provide your details below and we will prepare your fresh laddu order.
                  </p>
                </div>

                {/* 1. Full Name */}
                <div>
                  <label htmlFor="inquiry-name" className="text-xs font-semibold text-gray-700 block mb-1">
                    Full Name *
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Ramesh Patel"
                    aria-invalid={!!errors.name}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                      errors.name ? 'border-rose-400 bg-rose-50/50' : 'border-gray-300 focus:border-[#70470d] focus:ring-1 focus:ring-[#70470d]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-rose-500 text-xs mt-1" role="alert">{errors.name}</p>
                  )}
                </div>

                {/* Phone & Email side by side on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Phone / WhatsApp */}
                  <div>
                    <label htmlFor="inquiry-mobile" className="text-xs font-semibold text-gray-700 block mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="inquiry-mobile"
                      type="tel"
                      name="mobile"
                      autoComplete="tel"
                      required
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      aria-invalid={!!errors.mobile}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        errors.mobile ? 'border-rose-400 bg-rose-50/50' : 'border-gray-300 focus:border-[#70470d] focus:ring-1 focus:ring-[#70470d]'
                      }`}
                    />
                    {errors.mobile && (
                      <p className="text-rose-500 text-xs mt-1" role="alert">{errors.mobile}</p>
                    )}
                  </div>

                  {/* 2. Email Address */}
                  <div>
                    <label htmlFor="inquiry-email" className="text-xs font-semibold text-gray-700 block mb-1">
                      Email Address
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      aria-invalid={!!errors.email}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-gray-300 focus:border-[#70470d] focus:ring-1 focus:ring-[#70470d]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-500 text-xs mt-1" role="alert">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Type & Gram side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* 3. Laddu Type */}
                  <div>
                    <label htmlFor="inquiry-type" className="text-xs font-semibold text-gray-700 block mb-1">
                      Laddu Type *
                    </label>
                    <select
                      id="inquiry-type"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#70470d] focus:ring-1 focus:ring-[#70470d] outline-none bg-white cursor-pointer"
                    >
                      {ladduTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* 4. Gram / Quantity */}
                  <div>
                    <label htmlFor="inquiry-gram" className="text-xs font-semibold text-gray-700 block mb-1">
                      Weight / Gram *
                    </label>
                    <select
                      id="inquiry-gram"
                      name="gram"
                      value={formData.gram}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-[#70470d] focus:ring-1 focus:ring-[#70470d] outline-none bg-white cursor-pointer"
                    >
                      {gramOptions.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 5. Message */}
                <div>
                  <label htmlFor="inquiry-message" className="text-xs font-semibold text-gray-700 block mb-1">
                    Message / Special Requirement
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows="3"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter delivery city, customized gift box notes, or any special requests..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-[#70470d] focus:ring-1 focus:ring-[#70470d] text-sm outline-none resize-none"
                  ></textarea>
                </div>

                {/* 6. Last Button (Submit) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8c6226] via-[#70470d] to-[#4B2E1B] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:opacity-95 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
