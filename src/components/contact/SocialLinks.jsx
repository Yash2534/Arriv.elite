import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: FaInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    icon: FaFacebookF,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919876543210',
    icon: FaWhatsapp,
  },
]

function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-gold/45 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/65">Follow Us</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon

          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-cream text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold"
            >
              <Icon size={18} />
            </a>
          )
        })}
      </div>
    </motion.div>
  )
}

export default SocialLinks
