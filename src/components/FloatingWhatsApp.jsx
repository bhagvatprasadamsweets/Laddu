import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/918850011652?text=${encodeURIComponent(
    'Hello, I want to inquire about your handcrafted royal laddus. Please share details and pricing!'
  )}`

  return (
    <aside aria-label="Quick WhatsApp Inquiry" className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-white/95 text-[#70470d] text-xs font-semibold shadow-lg border border-amber-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Inquire on WhatsApp
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-200 relative cursor-pointer"
        aria-label="Chat on WhatsApp for order inquiry"
        title="Chat on WhatsApp for order inquiry"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" aria-hidden="true"></span>
        <WhatsAppIcon className="w-8 h-8 text-white fill-white" aria-hidden="true" />
      </a>
    </aside>
  )
}
