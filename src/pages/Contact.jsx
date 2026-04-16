import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import SocialLinks from '../components/contact/SocialLinks'

const heroImage =
  'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1800'

function Contact() {
  return (
    <div className="space-y-12 pb-16">
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Arriv.Elite contact"
          className="h-[38vh] w-full object-cover sm:h-[44vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0a]/82 via-[#0f0d0a]/55 to-[#0f0d0a]/35" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8"
        >
          <div className="text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f4d37e]">Contact Us</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">We’d love to hear from you</h1>
            <p className="mt-3 max-w-xl text-sm text-white/85 sm:text-base">
              Connect with Arriv.Elite for styling support, order help, and collaborations.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="space-y-6">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-[#D4AF37]/45 bg-white shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
        >
          <iframe
            title="Arriv.Elite Rajkot Location"
            src="https://www.google.com/maps?q=Rajkot,Gujarat,India&output=embed"
            className="h-80 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#D4AF37]/45 bg-[#FFF8ED] p-8 text-center shadow-[0_14px_34px_rgba(0,0,0,0.06)] sm:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/70">Arriv.Elite</p>
          <h2 className="mt-3 font-display text-3xl text-black sm:text-4xl">Connect with Arriv.Elite</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-black/75 sm:text-base">
            Explore our latest ethnic edits and premium collections crafted for your next occasion.
          </p>
          <Link
            to="/shop"
            className="mt-7 inline-flex rounded-full border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:text-black"
          >
            Shop Now
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Contact
