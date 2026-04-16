import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Offers() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1f1710] via-[#3d2d18] to-[#b68f23] px-6 py-12 text-center text-white sm:px-10"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <div className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-[#f0d48b]/20 blur-3xl" />

        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4d998]">Limited Time Offer</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl">Flat 30% Off on Festive Collection</h2>
        <Link
          to="/shop"
          className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#2a2114] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fff0c9]"
        >
          Shop Now
        </Link>
      </motion.div>
    </section>
  )
}

export default Offers
