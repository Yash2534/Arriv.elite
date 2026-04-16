import { motion } from 'framer-motion'

const heroImage =
  'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1800'

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="Arriv.Elite fashion story"
        className="h-[58vh] w-full object-cover sm:h-[66vh]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0a]/85 via-[#0f0d0a]/55 to-[#0f0d0a]/30" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4d37e]">About Arriv.Elite</p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Where Tradition Meets Modern Elegance
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-white/85 sm:text-lg">
            Crafting timeless fashion for confident women.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
