import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

function Testimonials({ testimonials }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b68f23]">Testimonials</p>
        <h2 className="mt-3 font-display text-3xl text-[#241d12] sm:text-4xl">What Our Customers Say</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            className="rounded-2xl border border-[#e8dcc8] bg-white p-6 shadow-[0_8px_24px_rgba(35,29,20,0.07)]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="mb-3 flex items-center gap-1 text-[#d4af37]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={`${item.name}-${i}`} size={16} className="fill-current" />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-[#5a4f40]">"{item.comment}"</p>
            <p className="mt-4 text-sm font-semibold text-[#2b2317]">{item.name}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
