import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import ImageGallery from '../components/ImageGallery'
import RelatedProducts from '../components/RelatedProducts'
import { products } from '../data/products'

function ProductDetails() {
  const { id } = useParams()
  const productId = Number(id)
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#D4AF37] bg-white p-8 text-center shadow-[0_14px_35px_rgba(0,0,0,0.06)]">
          <h1 className="font-display text-3xl text-black">Product Not Found</h1>
          <p className="mt-3 text-black/70">The product you are looking for does not exist.</p>
          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-xl border border-black bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Back to Products
          </Link>
        </div>
      </section>
    )
  }

  const whatsappMessage = encodeURIComponent(`Hello, I want to order ${product.name}`)
  const whatsappLink = `https://wa.me/9723653140?text=${whatsappMessage}`
  const roundedRating = Math.round(product.rating)
  const ratingStars = `${'★'.repeat(roundedRating)}${'☆'.repeat(5 - roundedRating)}`

  return (
    <section className="mx-auto max-w-[1500px] bg-[#FFF8ED] px-4 pb-14 pt-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <ImageGallery images={product.images} name={product.name} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-[#D4AF37] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)] sm:p-8"
        >
          <h1 className="font-display text-3xl leading-tight text-black sm:text-4xl">{product.name}</h1>

          <p className="mt-3 text-2xl font-semibold text-[#D4AF37]">₹{product.price}</p>

          <p className="mt-2 text-sm text-black/75">
            <span className="text-base tracking-[0.06em] text-[#D4AF37]">{ratingStars}</span>
            <span className="ml-2">({product.rating.toFixed(1)})</span>
          </p>

          <p className="mt-5 text-sm leading-relaxed text-black/75 sm:text-base">{product.description}</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-xl border border-black bg-black px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Add to Cart
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[#D4AF37] bg-[#D4AF37] px-5 py-3 text-center text-sm font-medium text-black transition-colors duration-300 hover:bg-white"
            >
              WhatsApp Order
            </a>
          </div>

          <div className="mt-8 rounded-xl border border-[#D4AF37]/40 bg-[#FFF8ED] p-4">
            <p className="text-sm font-semibold text-black">Why you will love it</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-black/75">
              <li>Premium Quality Fabric</li>
              <li>Easy Returns</li>
              <li>Fast Delivery</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <RelatedProducts currentProduct={product} products={products} />
    </section>
  )
}

export default ProductDetails
