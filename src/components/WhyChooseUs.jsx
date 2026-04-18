import { motion } from 'framer-motion'
import { RefreshCcw, ShieldCheck, Sparkles, Truck } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Premium Fabric',
    text: 'High-quality fabrics selected for comfort, drape, and festive elegance.',
  },
  {
    icon: ShieldCheck,
    title: 'Elegant Designs',
    text: 'Refined silhouettes inspired by Indian heritage and modern style.',
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
]

function WhyChooseUs() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Why Choose Us</p>
          <h2 className="mt-3 font-display text-3xl text-black sm:text-4xl">Crafted For A Premium Experience</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="group rounded-2xl border border-cream bg-white p-6 text-center shadow-[0_10px_26px_rgba(35,29,20,0.07)]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cream text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-black">
                <feature.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-black">{feature.title}</h3>
              <p className="mt-2 text-sm text-black">{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
