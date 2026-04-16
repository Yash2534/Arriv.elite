import { FiSearch } from 'react-icons/fi'

function SortBar({ searchQuery, onSearchChange, sortBy, onSortChange, totalCount }) {
  return (
    <div className="mb-6 rounded-2xl border border-[#ececec] bg-white p-4 shadow-[0_10px_28px_rgba(0,0,0,0.05)] sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5a5a5a]">Arihant</p>
          <h1 className="mt-1 font-display text-3xl text-[#111111] sm:text-4xl">All Products</h1>
          <p className="mt-2 text-sm text-[#4d4d4d]">{totalCount} items found</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[520px]">
          <label className="relative block">
            <span className="sr-only">Search Products</span>
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#7b7b7b]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search products"
              className="w-full rounded-xl border border-[#dddddd] bg-white py-2.5 pl-10 pr-3 text-sm text-[#141414] outline-none transition-colors duration-300 placeholder:text-[#8a8a8a] focus:border-[#151515]"
            />
          </label>

          <label>
            <span className="sr-only">Sort by</span>
            <select
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
              className="w-full rounded-xl border border-[#dddddd] bg-white px-3 py-2.5 text-sm text-[#141414] outline-none transition-colors duration-300 focus:border-[#151515]"
            >
              <option value="default">Sort by</option>
              <option value="low-high">Price Low to High</option>
              <option value="high-low">Price High to Low</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  )
}

export default SortBar
