import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

function Products({ products }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b68f23]">Best Sellers</p>
        <h2 className="mt-3 font-display text-3xl text-[#241d12] sm:text-4xl">Trending Products</h2>
      </div>

      <div className="flex snap-x gap-5 overflow-x-auto pb-3 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            className="group min-w-[17rem] snap-start overflow-hidden rounded-2xl border border-[#eadfcb] bg-white shadow-[0_10px_28px_rgba(30,23,14,0.08)]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-4">
              <h3 className="text-base font-semibold text-[#2e2619]">{product.name}</h3>
              <p className="text-lg font-semibold text-[#b68f23]">{product.price}</p>
              <div className="flex items-center gap-1 text-[#d4af37]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`${product.id}-star-${i}`}
                    size={14}
                    className={i < Math.round(product.rating) ? 'fill-current' : ''}
                  />
                ))}
                <span className="ml-1 text-xs font-medium text-[#665a47]">{product.rating.toFixed(1)}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full border border-[#2a2418] px-4 py-2 text-sm font-semibold text-[#2a2418] transition-all duration-300 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#1f180d]"
              >
                Add to Cart
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Products
