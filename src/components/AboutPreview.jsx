import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function AboutPreview({ image }) {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-12 rounded-xl bg-white p-8 shadow-md md:grid-cols-2 md:p-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-lg">
            <img
              src={image}
              alt="Arriv.Elite brand story"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-display text-4xl text-black">
              Our Story of Elegance
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              Arriv.Elite celebrates the richness of Indian tradition with a
              modern touch. Our Farsi Salwar and Sharara collections are
              crafted to empower women with elegance, confidence, and timeless
              beauty.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block rounded-full bg-black px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-gold hover:text-black"
            >
              Discover More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview
