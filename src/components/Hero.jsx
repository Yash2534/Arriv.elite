import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Hero({ image }) {
  return (
    <section className="relative isolate overflow-hidden">
      <motion.img
        src={image}
        alt="Arihant luxury fashion"
        className="h-[70vh] w-full object-cover sm:h-[78vh]"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0a]/80 via-[#0f0d0a]/50 to-transparent" />

      <motion.div
        className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5d88b]">
            Arihant Signature Edit
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Elevate Your Style with Arihant
          </h1>
          <p className="mt-4 text-base text-[#f4ede2] sm:text-lg">
            Discover Premium Ethnic & Modern Wear
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1d170d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e2bf55]"
            >
              Shop Now
            </Link>
            <Link
              to="/shop"
              className="rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#18130b]"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
