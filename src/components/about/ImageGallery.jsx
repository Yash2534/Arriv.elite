import { motion } from 'framer-motion'

const lifestyleImages = [
  'https://images.pexels.com/photos/937497/pexels-photo-937497.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=900',
]

function ImageGallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b68f23]">Lifestyle</p>
        <h2 className="mt-3 font-display text-3xl text-[#1f180f] sm:text-4xl">The Arriv.Elite World</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {lifestyleImages.map((image, index) => (
          <motion.article
            key={image}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-xl"
          >
            <img
              src={image}
              alt={`Arriv.Elite lifestyle ${index + 1}`}
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-64"
            />
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ImageGallery
