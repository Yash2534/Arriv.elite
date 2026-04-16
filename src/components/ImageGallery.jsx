import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const fallbackImage =
  'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1000'

function ImageGallery({ images, name }) {
  const safeImages = images?.length ? images : [fallbackImage]
  const [activeImage, setActiveImage] = useState(safeImages[0])

  useEffect(() => {
    setActiveImage(safeImages[0])
  }, [safeImages])

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="group overflow-hidden rounded-2xl border border-[#D4AF37] bg-white shadow-[0_14px_36px_rgba(0,0,0,0.08)]"
      >
        <img
          src={activeImage}
          alt={name}
          className="h-[24rem] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[30rem]"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = fallbackImage
          }}
        />
      </motion.div>

      <div className="grid grid-cols-4 gap-3">
        {safeImages.map((image, index) => {
          const isActive = image === activeImage

          return (
            <button
              key={`${name}-${index}`}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                isActive
                  ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/30'
                  : 'border-black/20 hover:border-[#D4AF37]'
              }`}
            >
              <img
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                className="h-20 w-full object-cover"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = fallbackImage
                }}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
