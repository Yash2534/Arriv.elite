import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WhatsAppButton from './WhatsAppButton'

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
      className="group overflow-hidden rounded-2xl border border-gold/45 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.1)]"
    >
      {/* ── Product Image ── */}
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden">
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

        {/* "Order instantly via WhatsApp" badge on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/80 py-2 text-center text-[10px] font-semibold uppercase tracking-widest text-gold transition-transform duration-300 group-hover:translate-y-0">
          ⚡ Order instantly via WhatsApp
        </div>
      </Link>

      {/* ── Card Body ── */}
      <div className="space-y-3 p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="line-clamp-2 min-h-12 text-base font-semibold text-black transition-colors duration-200 hover:text-gold sm:text-lg">
            {product.name}
          </h3>
        </Link>

        <p className="text-xl font-semibold text-gold">₹{product.price}</p>

        {product.rating ? (
          <p className="text-sm text-black/75">
            <span className="tracking-[0.08em] text-gold">
              {'★'.repeat(roundedRating)}{'☆'.repeat(5 - roundedRating)}
            </span>
            <span className="ml-2">({product.rating.toFixed(1)})</span>
          </p>
        ) : null}

        <div className="pt-2">
          {/* ── WhatsApp CTA (primary) ── */}
          <WhatsAppButton product={product} size="md" fullWidth label="Order on WhatsApp" />
        </div>

        {/* Trust signal */}
        <p className="text-center text-[10px] text-black/40">
          ⚡ Quick reply within minutes
        </p>
      </div>
    </motion.article>
  )
}

export default ProductCard
