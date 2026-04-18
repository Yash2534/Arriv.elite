
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import ImageGallery from '../components/ImageGallery'
import RelatedProducts from '../components/RelatedProducts'
import { products } from '../data/products'
import { useOrderModal } from '../context/OrderModalContext'
import SizeSelector from '../components/SizeSelector'

function ProductDetails() {

  const { id } = useParams()
  const { openOrderModal } = useOrderModal()
  const productId = Number(id)
  const product = products.find((item) => item.id === productId)

  // SIZE SELECTION STATE
  const [selectedSize, setSelectedSize] = useState('M')

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gold bg-white p-8 text-center shadow-[0_14px_35px_rgba(0,0,0,0.06)]">
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

  const roundedRating = Math.round(product.rating)
  const ratingStars = `${'★'.repeat(roundedRating)}${'☆'.repeat(5 - roundedRating)}`

  return (
    <section className="mx-auto max-w-[1500px] bg-cream px-4 pb-14 pt-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <ImageGallery images={product.images} name={product.name} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-gold bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)] sm:p-8"
        >
          <h1 className="font-display text-3xl leading-tight text-black sm:text-4xl">{product.name}</h1>

          <p className="mt-3 text-2xl font-semibold text-gold">₹{product.price}</p>

          <p className="mt-2 text-sm text-black/75">
            <span className="text-base tracking-[0.06em] text-gold">{ratingStars}</span>
            <span className="ml-2">({product.rating.toFixed(1)})</span>
          </p>

          <p className="mt-5 text-sm leading-relaxed text-black/75 sm:text-base">{product.description}</p>

          {/* SIZE SELECTOR */}
          <SizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} />

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openOrderModal({ ...product, selectedSize })}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-black bg-black px-6 py-4 text-base font-semibold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105 hover:border-gold hover:bg-gold hover:text-black"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.65 4.897 1.885 7.02L2 30l7.18-1.857A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.455a11.41 11.41 0 0 1-5.82-1.594l-.418-.248-4.26 1.102 1.13-4.14-.272-.432A11.41 11.41 0 0 1 4.545 16c0-6.32 5.138-11.455 11.458-11.455S27.455 9.68 27.455 16c0 6.318-5.135 11.455-11.452 11.455zm6.28-8.573c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.155-.154.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.058-.43-.028-.602-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.58-.776-.59l-.66-.012c-.23 0-.602.086-.917.43-.316.344-1.205 1.177-1.205 2.87s1.233 3.33 1.405 3.56c.172.23 2.428 3.71 5.882 5.203.822.355 1.464.567 1.964.726.825.263 1.576.226 2.17.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.23-.66-.4z" /></svg>
              Order Now on WhatsApp
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-cream p-4 text-sm font-medium text-black/80">
            <span className="flex items-center gap-1.5"><span className="text-lg">⚡</span> Quick reply within minutes</span>
            <span className="flex items-center gap-1.5"><span className="text-lg">🔥</span> Limited stock available</span>
            <span className="flex items-center gap-1.5"><span className="text-lg">✅</span> Trusted by 500+ customers</span>
          </div>

          <div className="mt-8 rounded-xl border border-gold/40 bg-cream p-4">
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

      {/* MOBILE STICKY BUTTON */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-cream bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] sm:hidden">
        <button
          type="button"
          onClick={() => openOrderModal({ ...product, selectedSize })}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-black bg-black px-6 py-4 text-base font-semibold uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105 hover:border-gold hover:bg-gold hover:text-black"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.65 4.897 1.885 7.02L2 30l7.18-1.857A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.455a11.41 11.41 0 0 1-5.82-1.594l-.418-.248-4.26 1.102 1.13-4.14-.272-.432A11.41 11.41 0 0 1 4.545 16c0-6.32 5.138-11.455 11.458-11.455S27.455 9.68 27.455 16c0 6.318-5.135 11.455-11.452 11.455zm6.28-8.573c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.155-.154.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.058-.43-.028-.602-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.58-.776-.59l-.66-.012c-.23 0-.602.086-.917.43-.316.344-1.205 1.177-1.205 2.87s1.233 3.33 1.405 3.56c.172.23 2.428 3.71 5.882 5.203.822.355 1.464.567 1.964.726.825.263 1.576.226 2.17.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.23-.66-.4z" /></svg>
          Order Now on WhatsApp
        </button>
      </div>
    </section>
  )
}

export default ProductDetails
