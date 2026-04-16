import { motion } from 'framer-motion'
import { Gem, HeartHandshake, Leaf, ShieldCheck } from 'lucide-react'

const values = [
  {
    title: 'Women Empowerment',
    description: 'Designs that inspire confidence and celebrate every woman\'s individuality.',
    icon: HeartHandshake,
  },
  {
    title: 'Quality Craftsmanship',
    description: 'Premium fabrics, thoughtful tailoring, and details crafted with precision.',
    icon: Gem,
  },
  {
    title: 'Sustainable Fashion',
    description: 'Responsible processes and mindful choices for a better fashion future.',
    icon: Leaf,
  },
  {
    title: 'Customer First',
    description: 'Seamless service and care that put your experience at the center.',
    icon: ShieldCheck,
  },
]

function Values() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b68f23]">Why We Exist</p>
        <h2 className="mt-3 font-display text-3xl text-[#201911] sm:text-4xl">Our Core Values</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => {
          const Icon = value.icon

          return (
            <motion.article
              key={value.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#e8dcc6] bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.05)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff3d6] text-[#b68f23]">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#201911]">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#544a3b]">{value.description}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Values
