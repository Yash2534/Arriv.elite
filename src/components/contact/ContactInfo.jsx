import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

const contactItems = [
  {
    label: 'Address',
    value: 'Arriv.Elite, Rajkot, Gujarat, India',
    icon: MapPin,
    href: 'https://www.google.com/maps?q=Rajkot,Gujarat,India',
  },
  {
    label: 'Phone',
    value: '+91 9876543210',
    icon: Phone,
    href: 'tel:+919876543210',
  },
  {
    label: 'Email',
    value: 'support@arrivelite.com',
    icon: Mail,
    href: 'mailto:support@arrivelite.com',
  },
]

function ContactInfo() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.04 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-[#D4AF37]/45 bg-white p-6 shadow-[0_16px_38px_rgba(0,0,0,0.07)] sm:p-8"
    >
      <h2 className="font-display text-3xl text-black">Contact Details</h2>
      <p className="mt-2 text-sm text-black/70">Reach us directly for support, orders, and styling guidance.</p>

      <div className="mt-6 space-y-4">
        {contactItems.map((item) => {
          const Icon = item.icon

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.label === 'Address' ? '_blank' : undefined}
              rel={item.label === 'Address' ? 'noreferrer' : undefined}
              className="group flex items-start gap-3 rounded-xl border border-[#D4AF37]/35 bg-[#FFF8ED] px-4 py-3 transition-colors hover:bg-white"
            >
              <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                <Icon size={17} />
              </span>
              <span>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/65">{item.label}</p>
                <p className="mt-1 text-sm text-black">{item.value}</p>
              </span>
            </a>
          )
        })}
      </div>
    </motion.aside>
  )
}

export default ContactInfo
