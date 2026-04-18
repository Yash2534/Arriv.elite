import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function RelatedProducts({ currentProduct, products }) {
  const relatedProducts = products.filter((product) => product.id !== currentProduct.id).slice(0, 4)

  return (
    <section className="mt-14 rounded-2xl border border-gold/35 bg-cream p-4 sm:p-5">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="font-display text-3xl text-black">Related Products</h2>
        <Link to="/shop" className="text-sm font-medium text-black hover:text-gold">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {relatedProducts.map((product, index) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-gold/45 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.06)]"
          >
            <Link to={`/product/${product.id}`} className="block group">
              <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="space-y-1 p-3">
                <h3 className="line-clamp-2 text-sm font-semibold text-black sm:text-base">{product.name}</h3>
                <p className="text-sm text-gold">₹{product.price}</p>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
