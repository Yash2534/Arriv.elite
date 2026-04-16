import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function AboutPreview({ image }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="grid items-center gap-8 rounded-3xl border border-[#e9ddca] bg-white p-6 shadow-[0_14px_34px_rgba(35,27,17,0.08)] md:grid-cols-2 md:p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <div className="overflow-hidden rounded-2xl">
          <img
            src={image}
            alt="Arriv.elite brand story"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b68f23]">Brand Story</p>
          <h2 className="mt-3 font-display text-3xl text-[#241d12] sm:text-4xl">Where Heritage Meets Contemporary Grace</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5d5243] sm:text-base">
            At Arriv.elite, we blend tradition with modern elegance to create fashion that feels
            refined, expressive, and timeless. Every piece is designed with premium fabrics,
            elegant tailoring, and artisanal detailing for women who dress with confidence.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex rounded-full border border-[#1e1810] px-5 py-2.5 text-sm font-semibold text-[#1e1810] transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1f180d]"
          >
            Read More
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutPreview
