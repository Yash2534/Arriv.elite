import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Collections({ collections }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b68f23]">Featured Collections</p>
        <h2 className="mt-3 font-display text-3xl text-[#241d12] sm:text-4xl">Curated For Every Occasion</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection, index) => (
          <motion.article
            key={collection.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <Link
              to={collection.to}
              className="group relative block h-[22rem] overflow-hidden rounded-2xl"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a140d]/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{collection.title}</h3>
                <span className="translate-y-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#251d11] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Shop Now
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Collections
