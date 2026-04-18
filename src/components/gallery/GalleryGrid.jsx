import { motion } from 'framer-motion'

function GalleryGrid({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.image}
            alt={image.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-sm font-semibold">{image.title}</p>
            <p className="text-xs text-white/80">{image.category}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default GalleryGrid