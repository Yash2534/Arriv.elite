import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useOrderModal } from '../../context/OrderModalContext'
import { products } from '../../data/products'

function GalleryModal({ image, onClose, onNext, onPrev }) {
  const { openOrderModal } = useOrderModal()

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        type="button"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-6 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        type="button"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        type="button"
      >
        <ChevronRight size={28} />
      </button>

      {/* Image Container */}
      <div
        className="relative mx-4 max-h-[90vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.img
          key={image.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={image.image}
          alt={image.title}
          className="max-h-[85vh] w-full object-contain"
        />
        <div className="mt-4 flex flex-col items-center justify-center text-center text-white">
          <h3 className="text-xl font-semibold">{image.title}</h3>
          <p className="mt-1 text-sm text-white/70">{image.category}</p>
          
          {image.productId && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
                const foundProduct = products.find(p => p.id === image.productId);
                if(foundProduct) openOrderModal(foundProduct);
              }}
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 hover:border-gold hover:bg-gold hover:text-black"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.65 4.897 1.885 7.02L2 30l7.18-1.857A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.455a11.41 11.41 0 0 1-5.82-1.594l-.418-.248-4.26 1.102 1.13-4.14-.272-.432A11.41 11.41 0 0 1 4.545 16c0-6.32 5.138-11.455 11.458-11.455S27.455 9.68 27.455 16c0 6.318-5.135 11.455-11.452 11.455zm6.28-8.573c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.155-.154.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.058-.43-.028-.602-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.58-.776-.59l-.66-.012c-.23 0-.602.086-.917.43-.316.344-1.205 1.177-1.205 2.87s1.233 3.33 1.405 3.56c.172.23 2.428 3.71 5.882 5.203.822.355 1.464.567 1.964.726.825.263 1.576.226 2.17.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.23-.66-.4z" /></svg>
              Shop This Look
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default GalleryModal