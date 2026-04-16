import { motion } from 'framer-motion'

const priceOptions = [
  { label: 'All Prices', value: 'all' },
  { label: '₹1000 - ₹2000', value: '1000-2000' },
  { label: '₹2000 - ₹3000', value: '2000-3000' },
]

function FilterSidebar({ selectedPriceRange = 'all', onPriceChange }) {
  const handlePriceChange = (value) => {
    if (onPriceChange) {
      onPriceChange(value)
    }
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      className="h-fit rounded-2xl border border-[#D4AF37]/45 bg-white p-5 shadow-[0_12px_32px_rgba(0,0,0,0.05)]"
    >
      <h2 className="text-lg font-semibold text-black">Filters</h2>

      <div className="mt-6 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-black/70">Price Range</p>
        {priceOptions.map((option) => (
          <label key={option.value} className="flex cursor-pointer items-center gap-2 text-sm text-black">
            <input
              type="radio"
              name="price"
              value={option.value}
              checked={selectedPriceRange === option.value}
              onChange={(event) => handlePriceChange(event.target.value)}
              className="h-4 w-4 accent-[#D4AF37]"
            />
            {option.label}
          </label>
        ))}
      </div>
    </motion.aside>
  )
}

export default FilterSidebar
