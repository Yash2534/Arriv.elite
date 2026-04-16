import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const storyImage =
  'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1400'

function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="grid items-center gap-8 rounded-3xl border border-[#e8dcc6] bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.07)] md:grid-cols-2 md:p-10"
      >
        <div className="overflow-hidden rounded-2xl">
          <img
            src={storyImage}
            alt="Arriv.Elite craftsmanship"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b68f23]">Brand Story</p>
          <h2 className="mt-3 font-display text-3xl text-[#1f1a12] sm:text-4xl">
            A Story Woven In Culture, Craft, And Confidence
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#4f4638] sm:text-base">
            Arriv.Elite was born from a vision to <span className="font-semibold text-[#17120a]">redefine ethnic fashion</span> by
            blending tradition with modern sophistication. We believe every woman deserves to feel
            confident, elegant, and empowered through what she wears.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#4f4638] sm:text-base">
            From carefully curated fabrics to detailed craftsmanship, every piece tells a story of
            culture, passion, and innovation.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-full border border-[#1e1810] px-5 py-2.5 text-sm font-semibold text-[#1e1810] transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1f180d]"
          >
            Read More
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default StorySection
