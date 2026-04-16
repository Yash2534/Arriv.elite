import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fallbackImage =
  'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1000'

const inlineFallbackSvg =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23f7efe3"/><stop offset="100%" stop-color="%23ecd8bd"/></linearGradient></defs><rect width="900" height="1200" fill="url(%23g)"/><circle cx="450" cy="420" r="120" fill="%23dbc39f" opacity="0.7"/><rect x="290" y="580" width="320" height="210" rx="40" fill="%23c9ab7a" opacity="0.75"/><text x="450" y="910" text-anchor="middle" font-family="Arial" font-size="42" fill="%23543c20">Arihant</text><text x="450" y="960" text-anchor="middle" font-family="Arial" font-size="30" fill="%23543c20">Traditional Collection</text></svg>'

function ProductCard({ product, index }) {
  const roundedRating = product.rating ? Math.round(product.rating) : 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-2xl border border-[#D4AF37]/45 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.1)]"
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(event) => {
            if (event.currentTarget.dataset.fallbackApplied === 'true') {
              event.currentTarget.onerror = null
              event.currentTarget.src = inlineFallbackSvg
              return
            }

            event.currentTarget.dataset.fallbackApplied = 'true'
            event.currentTarget.src = fallbackImage
          }}
        />
      </Link>

      <div className="space-y-3 p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="line-clamp-2 min-h-12 text-base font-semibold text-black transition-colors duration-200 hover:text-[#D4AF37] sm:text-lg">
            {product.name}
          </h3>
        </Link>

        <p className="text-xl font-semibold text-[#D4AF37]">₹{product.price}</p>

        {product.rating ? (
          <p className="text-sm text-black/75">
            <span className="tracking-[0.08em] text-[#D4AF37]">
              {'★'.repeat(roundedRating)}{'☆'.repeat(5 - roundedRating)}
            </span>
            <span className="ml-2">({product.rating.toFixed(1)})</span>
          </p>
        ) : null}

        <button
          type="button"
          className="w-full rounded-xl border border-black bg-black px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
        >
          Add to Cart
        </button>
      </div>
    </motion.article>
  )
}

export default ProductCard
