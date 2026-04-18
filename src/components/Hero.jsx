import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Hero({ image }) {
  return (
    <section className="relative isolate h-[80vh] w-full overflow-hidden sm:h-[90vh]">
      {/* 1. BACKGROUND IMAGE WITH SLOW ZOOM */}
      <motion.img
        src={image}
        alt="Arriv.Elite Farsi Salwar & Sharara Suit Collection"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
      />

      {/* 2. DUAL LINGER OVERLAY (Gold Top-Left to Black Bottom-Right) */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/40 via-black/40 to-black/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/20" /> {/* Base readable layer */}

      <div className="absolute inset-0 flex items-center justify-center px-4">
        {/* Main Content Reveal */}
        <motion.div
          className="flex w-full max-w-4xl flex-col items-center text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Subtle Floating Animation Wrapper with Glass Effect (PRO LEVEL) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="flex flex-col items-center rounded-3xl bg-black/10 p-6 backdrop-blur-sm sm:p-10"
          >
            {/* Subheading */}
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cream drop-shadow-lg sm:mb-6 sm:text-sm">
              Timeless Ethnic Elegance
            </h2>

            {/* Main Luxury Heading with Glow Effect */}
            <h1 className="font-serif text-5xl tracking-wide text-white drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] sm:text-6xl md:text-7xl lg:text-8xl">
              Arriv.Elite
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed tracking-wider text-cream drop-shadow-md sm:text-base md:text-lg">
              Discover premium Farsi Salwar & Sharara Suit collections crafted for modern women.
            </p>
          </motion.div>

          {/* CTA Buttons with delayed appearance */}
          <motion.div
            className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-12 sm:w-auto sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          >
            <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/shop"
                className="flex w-full items-center justify-center bg-black px-10 py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-colors duration-300 hover:bg-gold hover:text-black sm:w-auto"
              >
                Shop Now
              </Link>
            </motion.div>

            <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/shop"
                className="flex w-full items-center justify-center border border-white bg-transparent px-10 py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-black sm:w-auto"
              >
                Explore Collection
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator (PRO LEVEL) */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/80">
          Scroll
        </span>
        <motion.div
          className="h-10 w-[1.5px] bg-gradient-to-b from-gold to-transparent shadow-[0_0_10px_rgba(212,175,55,0.8)]"
          animate={{ scaleY: [0, 1, 0], translateY: [0, 10, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

export default Hero