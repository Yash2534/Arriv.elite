import { motion } from 'framer-motion'

function Newsletter() {
  return (
    <section className="mx-auto max-w-5xl bg-cream px-4 sm:px-6 lg:px-8">
      <motion.div
        className="rounded-3xl border border-gold bg-white p-6 text-center shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl text-black sm:text-4xl">Stay Updated</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-black/70 sm:text-base">
          Get first access to new launches, exclusive edits, and members-only offers from Arriv.Elite.
        </p>
        <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            className="h-12 flex-1 rounded-full border border-gold bg-cream px-5 text-sm text-black outline-none ring-gold placeholder:text-black/50 focus:border-gold focus:ring-2"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-black px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-gold hover:text-black"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default Newsletter
