import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSection from '../components/about/HeroSection'
import ImageGallery from '../components/about/ImageGallery'
import MissionVision from '../components/about/MissionVision'
import StorySection from '../components/about/StorySection'
import Values from '../components/about/Values'

function About() {
  return (
    <div className="space-y-20 pb-16">
      <HeroSection />
      <StorySection />
      <MissionVision />
      <Values />
      <ImageGallery />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-[#e5d8bf] bg-white p-8 text-center shadow-[0_14px_34px_rgba(0,0,0,0.06)] sm:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b68f23]">Ready To Explore</p>
          <h2 className="mt-3 font-display text-3xl text-[#201911] sm:text-4xl">
            Discover Your Style with Arriv.Elite
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#5a4f40] sm:text-base">
            Step into a curated fashion experience where culture, craftsmanship, and modern expression meet.
          </p>
          <Link
            to="/shop"
            className="mt-7 inline-flex rounded-full bg-[#111111] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d4af37] hover:text-[#1b140a]"
          >
            Shop Now
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default About
