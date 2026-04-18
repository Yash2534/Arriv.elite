import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import GalleryGrid from '../components/gallery/GalleryGrid'
import GalleryModal from '../components/gallery/GalleryModal'

const CATEGORIES = ['All', 'Farsi Salwar', 'Sharara Suit', 'Photoshoot', 'Customer Looks']

const MOCK_GALLERY = [
  { id: 1, category: 'Farsi Salwar', image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Farsi Salwar Look' },
  { id: 2, category: 'Sharara Suit', image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Sharara Styling' },
  { id: 3, category: 'Photoshoot', image: 'https://images.pexels.com/photos/937497/pexels-photo-937497.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Editorial Campaign' },
  { id: 4, category: 'Customer Looks', image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Real Brides' },
  { id: 5, category: 'Farsi Salwar', image: 'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Wedding Attire' },
  { id: 6, category: 'Photoshoot', image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Summer Collection' },
  { id: 7, category: 'Customer Looks', image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Boutique Fittings' },
  { id: 8, category: 'Sharara Suit', image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Luxury Sharara' },
]

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = MOCK_GALLERY.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
  )

  const handleNext = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const handlePrev = () => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative flex h-[50vh] w-full items-center justify-center overflow-hidden sm:h-[60vh] lg:h-[70vh]">
        <motion.img
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Arriv.Elite Gallery Background"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gold/35 via-black/40 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center pt-[72px] sm:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white"
          >
            <h1 className="font-serif text-5xl tracking-wide drop-shadow-xl sm:text-6xl md:text-7xl lg:text-8xl">
              Our Gallery
            </h1>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold sm:mt-6 sm:text-sm">
              Celebrating Timeless Ethnic Elegance
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER TABS & MAIN CONTENT GRID */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <motion.div
          className="scrollbar-hide flex items-center justify-start gap-4 overflow-x-auto pb-8 sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`whitespace-nowrap rounded-full px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 sm:text-xs ${
                activeFilter === category
                  ? 'bg-gold text-white shadow-[0_4px_15px_rgba(212,175,55,0.4)]'
                  : 'bg-cream text-black hover:bg-black hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* 3. IMAGE GRID */}
        <motion.div
          layout
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GalleryGrid images={filteredImages} onImageClick={setSelectedImage} />
        </motion.div>
      </section>

      {/* 5. INSTAGRAM CTA */}
      <section className="w-full bg-cream py-20 text-center sm:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl flex-col items-center px-4"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold sm:text-xs">
            Join Our Community
          </span>
          <h2 className="mt-4 font-serif text-3xl text-black sm:text-4xl md:text-5xl">
            Follow us on Instagram <br />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:underline"
            >
              @arriv.elite
            </a>
          </h2>
          <Link
            to="/shop"
            className="mt-10 inline-block bg-black px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-colors duration-300 hover:bg-gold"
          >
            View More
          </Link>
        </motion.div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <GalleryModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery