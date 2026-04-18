import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const supportLinks = [
  { label: 'FAQ', to: '/faq' },
  { label: 'Shipping Policy', to: '/shipping-policy' },
  { label: 'Return Policy', to: '/return-policy' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/arriv.elite', icon: FiInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com/arrivelite', icon: FiFacebook },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919876543210?text=Hi%20Arriv.Elite%2C%20I%20need%20styling%20help.',
    icon: IoLogoWhatsapp,
  },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-cream bg-gradient-to-b from-white via-cream to-cream text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-[0.18em] text-gold">
              Arriv.Elite
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gold">
              Arriv.Elite creates premium ethnic fashion with modern silhouettes, refined fabrics,
              and timeless detailing for festive and everyday elegance.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-gold">
              Premium Ethnic Wear For Women
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-black">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gold transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-black">
              Customer Support
            </h3>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gold transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-black">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gold">
              <li>Kalavad Road, Rajkot, Gujarat 360005</li>
              <li>
                <a className="transition-colors hover:text-gold" href="tel:+919876543210">
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-gold"
                  href="mailto:care@arrivelite.com"
                >
                  care@arrivelite.com
                </a>
              </li>
              <li className="text-xs uppercase tracking-[0.1em] text-gold">
                Mon-Sat 10:30 AM - 8:30 PM
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((link) => {
                const SocialIcon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="rounded-full border border-cream p-2.5 text-black transition-all duration-300 hover:border-gold hover:bg-cream hover:text-gold"
                  >
                    <SocialIcon className="text-base" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-center text-xs tracking-wide text-gold sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {currentYear} Arriv.Elite. All rights reserved.</p>
          <p>Designed for a modern luxury shopping experience.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
