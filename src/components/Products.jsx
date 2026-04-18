import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useOrderModal } from '../context/OrderModalContext'
import { products as allProducts } from '../data/products'

function Products({ products }) {
  const navigate = useNavigate()
  const { openOrderModal } = useOrderModal()

  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl text-black">
              Discover Our Signature Styles
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              Handcrafted with passion, designed for elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-cream bg-white text-black shadow-sm transition-all duration-300 hover:border-gold hover:shadow-lg"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="mt-2 text-xl font-bold text-gold">
                      {product.price}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={`${product.id}-star-${i}`}
                          size={16}
                          className={`text-gold ${
                            i < Math.round(product.rating) ? 'fill-current' : ''
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-sm font-medium text-gray-600">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => openOrderModal(product)}
                    className="mt-5 w-full flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-black"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.65 4.897 1.885 7.02L2 30l7.18-1.857A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.455a11.41 11.41 0 0 1-5.82-1.594l-.418-.248-4.26 1.102 1.13-4.14-.272-.432A11.41 11.41 0 0 1 4.545 16c0-6.32 5.138-11.455 11.458-11.455S27.455 9.68 27.455 16c0 6.318-5.135 11.455-11.452 11.455zm6.28-8.573c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.155-.154.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.058-.43-.028-.602-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.58-.776-.59l-.66-.012c-.23 0-.602.086-.917.43-.316.344-1.205 1.177-1.205 2.87s1.233 3.33 1.405 3.56c.172.23 2.428 3.71 5.882 5.203.822.355 1.464.567 1.964.726.825.263 1.576.226 2.17.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.23-.66-.4z" /></svg>
                    Order on WhatsApp
                  </button>
                  <p className="mt-2 text-center text-xs text-black/50">⚡ Quick reply within minutes</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* STYLE INSPIRATION SECTION */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl text-black">Style Inspiration</h2>
            <p className="mt-2 text-lg text-black">
              See how our Farsi Salwar & Sharara look in real life
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                id: 1,
                productId: 1,
                image:
                  'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800',
                label: 'Farsi Salwar Look',
              },
              {
                id: 2,
                productId: 2,
                image:
                  'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800',
                label: 'Sharara Styling',
              },
              {
                id: 3,
                productId: 3,
                image:
                  'https://images.pexels.com/photos/937497/pexels-photo-937497.jpeg?auto=compress&cs=tinysrgb&w=800',
                label: 'Farsi Salwar Look',
              },
              {
                id: 4,
                productId: 4,
                image:
                  'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800',
                label: 'Sharara Styling',
              },
              {
                id: 5,
                productId: 1,
                image:
                  'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800',
                label: 'Farsi Salwar Look',
              },
              {
                id: 6,
                productId: 2,
                image:
                  'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800',
                label: 'Sharara Styling',
              },
              {
                id: 7,
                productId: 3,
                image:
                  'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800',
                label: 'Farsi Salwar Look',
              },
              {
                id: 8,
                productId: 4,
                image:
                  'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=800',
                label: 'Sharara Styling',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.id}
                onClick={() => item.productId && navigate(`/product/${item.productId}`)}
                className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      const foundProduct = allProducts.find((p) => p.id === item.productId)
                      if (foundProduct) openOrderModal(foundProduct)
                    }}
                    className="mb-6 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white opacity-0 shadow-lg transition-all duration-300 hover:bg-gold hover:text-black group-hover:opacity-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.65 4.897 1.885 7.02L2 30l7.18-1.857A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.455a11.41 11.41 0 0 1-5.82-1.594l-.418-.248-4.26 1.102 1.13-4.14-.272-.432A11.41 11.41 0 0 1 4.545 16c0-6.32 5.138-11.455 11.458-11.455S27.455 9.68 27.455 16c0 6.318-5.135 11.455-11.452 11.455zm6.28-8.573c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.155-.154.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.058-.43-.028-.602-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.58-.776-.59l-.66-.012c-.23 0-.602.086-.917.43-.316.344-1.205 1.177-1.205 2.87s1.233 3.33 1.405 3.56c.172.23 2.428 3.71 5.882 5.203.822.355 1.464.567 1.964.726.825.263 1.576.226 2.17.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.23-.66-.4z" /></svg>
                    Shop This Look
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
