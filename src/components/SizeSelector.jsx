import React from 'react'

/**
 * Reusable SizeSelector component for product pages.
 * Props:
 * - selectedSize: string (current selected size)
 * - setSelectedSize: function (to update selected size)
 * - sizes: array of available sizes (default: ['S', 'M', 'L', 'XL'])
 */
export default function SizeSelector({ selectedSize, setSelectedSize, sizes = ['S', 'M', 'L', 'XL'] }) {
  return (
    <div className="flex gap-3 mt-6 mb-4">
      {sizes.map(size => (
        <button
          key={size}
          type="button"
          className={`px-5 py-2 rounded-full border font-semibold text-base transition-all duration-200 focus:outline-none
            ${selectedSize === size
              ? 'bg-black text-white border-black shadow-md scale-105'
              : 'bg-cream text-black border-gold hover:bg-black hover:text-white hover:border-black'}
          `}
          aria-pressed={selectedSize === size}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  )
}
