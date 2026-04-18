import { useMemo, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'
import FilterSidebar from '../components/FilterSidebar'
import GalleryGrid from '../components/gallery/GalleryGrid'
import GalleryModal from '../components/gallery/GalleryModal'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

// --- DATA ---

const priceRanges = {
  all: null,
  '1000-2000': [1000, 2000],
  '2000-3000': [2000, 3000],
}

const categoryOptions = ['All', 'Farsi Salwar', 'Sharara Suit']

const galleryImages = [
  {
    id: 'g1',
    productId: 1,
    image:
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Classic Farsi Look',
    category: 'Farsi Salwar',
  },
  {
    id: 'g2',
    productId: 2,
    image:
      'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Vibrant Sharara Style',
    category: 'Sharara Suit',
  },
  {
    id: 'g3',
    productId: 3,
    image:
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Behind the Scenes',
    category: 'Photoshoot',
  },
  {
    id: 'g4',
    productId: 4,
    image:
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Riya in our outfit',
    category: 'Customer Looks',
  },
  {
    id: 'g5',
    productId: 1,
    image: 'https://images.pexels.com/photos/937497/pexels-photo-937497.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Elegant Farsi Salwar',
    category: 'Farsi Salwar',
  },
  {
    id: 'g6',
    productId: 2,
    image:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Wedding Guest Sharara',
    category: 'Sharara Suit',
  },
]

const galleryCategories = ['All', 'Farsi Salwar', 'Sharara Suit', 'Photoshoot', 'Customer Looks']

// --- HELPERS ---

const getCategoryFromName = (name) => {
  const normalizedName = name.toLowerCase()

  if (normalizedName.includes('farsi')) {
    return 'Farsi Salwar'
  }

  if (normalizedName.includes('sharara')) {
    return 'Sharara Suit'
  }

  return 'All'
}

// --- COMPONENT ---

function Shop() {
  // Product State
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

  // Gallery State
  const [activeGalleryCategory, setActiveGalleryCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  // UX States
  const [isFiltering, setIsFiltering] = useState(false)

  useEffect(() => {
    setIsFiltering(true)
    const timer = setTimeout(() => setIsFiltering(false), 450)
    return () => clearTimeout(timer)
  }, [selectedCategory, selectedPriceRange, searchQuery, sortBy])

  // Product Logic

  const visibleProducts = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase()

    const filtered = products.filter((product) => {
      const productCategory = getCategoryFromName(product.name)
      const matchesCategory =
        selectedCategory === 'All' || productCategory === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(normalizedSearch)

      const selectedRange = priceRanges[selectedPriceRange]
      const matchesPrice =
        !selectedRange ||
        (product.price >= selectedRange[0] && product.price <= selectedRange[1])

      return matchesCategory && matchesSearch && matchesPrice
    })

    if (sortBy === 'low-high') {
      return [...filtered].sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'high-low') {
      return [...filtered].sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [selectedCategory, selectedPriceRange, searchQuery, sortBy])

  // Gallery Logic

  const filteredGalleryImages = useMemo(() => {
    if (activeGalleryCategory === 'All') {
      return galleryImages
    }
    return galleryImages.filter((img) => img.category === activeGalleryCategory)
  }, [activeGalleryCategory])

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handleNextImage = () => {
    const currentIndex = filteredGalleryImages.findIndex((img) => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredGalleryImages.length
    setSelectedImage(filteredGalleryImages[nextIndex])
  }

  const handlePrevImage = () => {
    const currentIndex = filteredGalleryImages.findIndex((img) => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredGalleryImages.length) % filteredGalleryImages.length
    setSelectedImage(filteredGalleryImages[prevIndex])
  }

  return (
    <>
      <section className="mx-auto max-w-[1500px] bg-cream px-4 pb-14 pt-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 rounded-2xl border border-gold/45 bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.05)] sm:p-6"
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/65">
                  Arriv.Elite
                </p>
                <h1 className="mt-1 font-display text-3xl text-black sm:text-4xl">Shop</h1>
                <p className="mt-2 text-sm text-black/70">{visibleProducts.length} products available</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 xl:min-w-[780px]">
                <label>
                  <span className="sr-only">Filter by category</span>
                  <select
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    className="w-full rounded-xl border border-gold/45 bg-white px-3 py-2.5 text-sm text-black outline-none transition-colors duration-300 focus:border-gold"
                  >
                    {categoryOptions.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="relative block">
                  <span className="sr-only">Search products</span>
                  <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/55" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search products"
                    className="w-full rounded-xl border border-gold/45 bg-white py-2.5 pl-10 pr-3 text-sm text-black outline-none transition-colors duration-300 placeholder:text-black/45 focus:border-gold"
                  />
                </label>

                <label>
                  <span className="sr-only">Sort products</span>
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    className="w-full rounded-xl border border-gold/45 bg-white px-3 py-2.5 text-sm text-black outline-none transition-colors duration-300 focus:border-gold"
                  >
                    <option value="default">Sort by</option>
                    <option value="low-high">Price Low to High</option>
                    <option value="high-low">Price High to Low</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <FilterSidebar
            selectedPriceRange={selectedPriceRange}
            onPriceChange={setSelectedPriceRange}
          />

          <motion.div layout className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {isFiltering ? (
              Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="animate-pulse flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                  <div className="h-80 w-full bg-gray-200"></div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="h-5 w-3/4 rounded bg-gray-200"></div>
                    <div className="mt-3 h-6 w-1/3 rounded bg-gold/40"></div>
                    <div className="mt-6 h-12 w-full rounded-full bg-gray-200"></div>
                  </div>
                </div>
              ))
            ) : visibleProducts.length > 0 ? (
               visibleProducts.map((product, index) => (
                 <ProductCard key={product.id} product={product} index={index} />
               ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center rounded-2xl border border-dashed border-gold/45 bg-white p-12 text-center text-black/70 shadow-sm transition-all duration-300 hover:border-gold">
                <p className="text-lg">No products found. Try changing category, search, or price range.</p>
                <button 
                  type="button"
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedPriceRange('all'); setSortBy('default'); }}
                  className="mt-6 rounded-full bg-black px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-black"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* --- SHOP THE LOOK GALLERY --- */}
        <motion.div
          className="mt-14 pt-14 border-t border-dashed border-gold/45"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <h2 className="font-display text-4xl text-black">Shop The Look</h2>
            <p className="mt-2 text-lg text-gray-700">
              Get inspired by our real-life styles and photoshoots.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveGalleryCategory(category)}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeGalleryCategory === category
                    ? 'bg-gold text-black shadow-md'
                    : 'bg-white text-black/70 hover:bg-white/80 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <GalleryGrid images={filteredGalleryImages} onImageClick={handleImageClick} />
        </motion.div>
      </section>

      {/* --- GALLERY MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <GalleryModal
            image={selectedImage}
            onClose={handleCloseModal}
            onNext={handleNextImage}
            onPrev={handlePrevImage}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Shop
