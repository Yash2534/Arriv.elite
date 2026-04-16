import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'
import FilterSidebar from '../components/FilterSidebar'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const priceRanges = {
  all: null,
  '1000-2000': [1000, 2000],
  '2000-3000': [2000, 3000],
}

const categoryOptions = ['All', 'Farsi Salwar', 'Sharara Suit']

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

function Shop() {
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

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

  return (
    <section className="mx-auto max-w-[1500px] bg-[#FFF8ED] px-4 pb-14 pt-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-6 rounded-2xl border border-[#D4AF37]/45 bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.05)] sm:p-6"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/65">Arriv.Elite</p>
              <h1 className="mt-1 font-display text-3xl text-black sm:text-4xl">Shop</h1>
              <p className="mt-2 text-sm text-black/70">{visibleProducts.length} products available</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 xl:min-w-[780px]">
              <label>
                <span className="sr-only">Filter by category</span>
                <select
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                  className="w-full rounded-xl border border-[#D4AF37]/45 bg-white px-3 py-2.5 text-sm text-black outline-none transition-colors duration-300 focus:border-[#D4AF37]"
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
                  className="w-full rounded-xl border border-[#D4AF37]/45 bg-white py-2.5 pl-10 pr-3 text-sm text-black outline-none transition-colors duration-300 placeholder:text-black/45 focus:border-[#D4AF37]"
                />
              </label>

              <label>
                <span className="sr-only">Sort products</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="w-full rounded-xl border border-[#D4AF37]/45 bg-white px-3 py-2.5 text-sm text-black outline-none transition-colors duration-300 focus:border-[#D4AF37]"
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
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-[#D4AF37]/45 bg-white p-8 text-center text-black/70">
              No products found. Try changing category, search, or price range.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Shop
