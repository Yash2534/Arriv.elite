import { FiSearch } from 'react-icons/fi'

function BlogFilter({ categories, selectedCategory, onCategoryChange, searchQuery, onSearchChange }) {
  return (
    <div className="mb-8 rounded-2xl border border-gold/45 bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.05)] sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-black bg-black text-white'
                    : 'border-gold/45 bg-cream text-black hover:border-gold'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        <label className="relative block w-full lg:max-w-sm">
          <span className="sr-only">Search blog posts</span>
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by title"
            className="w-full rounded-xl border border-gold/45 bg-white py-2.5 pl-10 pr-3 text-sm text-black outline-none transition-colors duration-300 placeholder:text-black/45 focus:border-gold"
          />
        </label>
      </div>
    </div>
  )
}

export default BlogFilter
