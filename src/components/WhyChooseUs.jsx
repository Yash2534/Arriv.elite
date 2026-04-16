import { motion } from 'framer-motion'
import { RefreshCcw, ShieldCheck, Sparkles, Truck } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Premium Quality',
    text: 'Luxury fabrics and meticulous finishing in every piece.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    text: 'Quick dispatch and trusted delivery across India.',
  },
  {
    icon: RefreshCcw,
    title: 'Easy Returns',
    text: 'Simple, customer-friendly returns and exchanges.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    text: 'Trusted checkout with safe and encrypted transactions.',
  },
]

function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-[#fffdf8] to-[#f7f1e6] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b68f23]">Why Choose Us</p>
          <h2 className="mt-3 font-display text-3xl text-[#241d12] sm:text-4xl">Designed For Premium Shopping</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="group rounded-2xl border border-[#e8dcc8] bg-white p-6 text-center shadow-[0_8px_22px_rgba(35,29,20,0.06)]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff4d7] text-[#b68f23] transition-colors duration-300 group-hover:bg-[#d4af37] group-hover:text-[#2a2114]">
                <feature.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#2d2519]">{feature.title}</h3>
              <p className="mt-2 text-sm text-[#625746]">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
