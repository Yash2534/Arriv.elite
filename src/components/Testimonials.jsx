import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

function Testimonials({ testimonials }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl text-black">
            Voices of Our Community
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            Discover why our clients love Arriv.Elite.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className="flex flex-col items-center rounded-xl bg-cream p-8 text-center shadow-sm"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={`${item.name}-${i}`} size={18} className="fill-current" />
                ))}
              </div>
              <p className="flex-grow text-base leading-relaxed text-gray-800">
                "{item.comment}"
              </p>
              <p className="mt-5 text-base font-semibold text-black">
                - {item.name}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
