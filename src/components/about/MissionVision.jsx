import { motion } from 'framer-motion'
import { Sparkles, Target } from 'lucide-react'

function MissionVision() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#e7dcc9] bg-white p-7 text-center shadow-[0_14px_34px_rgba(0,0,0,0.06)] sm:p-10 lg:text-left"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3d6] text-[#b68f23] lg:mx-0">
            <Target size={22} />
          </div>
          <h3 className="mt-4 font-display text-3xl text-[#1f180f]">Our Mission</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#4f4536] sm:text-base">
            Our mission is to empower women by offering fashion that enhances confidence and celebrates individuality.
            We are committed to delivering premium quality designs that make every occasion special.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#dcc8a0] bg-[#fff9ee] p-7 shadow-[0_14px_34px_rgba(0,0,0,0.06)] sm:p-10"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37] text-[#20190d]">
            <Sparkles size={22} />
          </div>
          <h3 className="mt-4 font-display text-3xl text-[#1f180f]">Our Vision</h3>
          <p className="mt-4 text-sm leading-relaxed text-[#4f4536] sm:text-base">
            Our vision is to become a globally recognized fashion brand known for innovation, elegance, and authenticity.
            We aim to inspire modern women to embrace their roots while expressing their unique style.
          </p>
        </motion.article>
      </div>
    </section>
  )
}

export default MissionVision
