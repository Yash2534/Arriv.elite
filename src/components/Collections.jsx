import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Collections({ collections }) {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl text-black">Our Collections</h2>
          <p className="mt-2 text-lg text-gray-700">
            Discover traditional craftsmanship reimagined for the modern woman.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={collection.to}
                className="group relative block h-96 overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gold/0 transition-colors duration-300 group-hover:bg-gold/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {collection.title}
                  </h3>
                  <div className="mt-4 h-10">
                    <span className="translate-y-2 rounded-full bg-black px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:bg-gold group-hover:text-black group-hover:opacity-100">
                      Explore Collection
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections
