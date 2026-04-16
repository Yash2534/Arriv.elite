import { motion } from 'framer-motion'

function Newsletter() {
  return (
    <section className="mx-auto max-w-5xl bg-[#FFF8ED] px-4 sm:px-6 lg:px-8">
      <motion.div
        className="rounded-3xl border border-[#D4AF37] bg-white p-6 text-center shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl text-black sm:text-4xl">Stay Updated</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-black/70 sm:text-base">
          Get first access to new launches, exclusive edits, and members-only offers from Arihant.
        </p>
        <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="h-12 flex-1 rounded-full border border-[#D4AF37] bg-[#FFF8ED] px-5 text-sm text-black outline-none ring-[#D4AF37] placeholder:text-black/50 focus:ring-2"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-[#D4AF37] px-6 text-sm font-semibold uppercase tracking-[0.12em] text-black transition-colors duration-300 hover:bg-black hover:text-white"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default Newsletter
