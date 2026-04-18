import { motion } from 'framer-motion'

function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-2xl border border-gold/40 bg-white shadow-[0_14px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_46px_rgba(0,0,0,0.12)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
          {post.category}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/55">{post.date}</p>
        <h3 className="line-clamp-2 min-h-14 text-xl font-semibold leading-snug text-black">{post.title}</h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-black/70">{post.description}</p>

        <button
          type="button"
          className="inline-flex rounded-full border border-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-black hover:text-white"
        >
          Read More
        </button>
      </div>
    </motion.article>
  )
}

export default BlogCard
