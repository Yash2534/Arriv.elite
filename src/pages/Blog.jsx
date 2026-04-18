import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import BlogCard from '../components/blog/BlogCard'
import BlogFilter from '../components/blog/BlogFilter'

const blogPosts = [
  {
    id: 1,
    title: 'How to Style Farsi Salwar for Daily & Festive Looks',
    description:
      'From minimal daytime pairings to statement festive styling, discover easy ways to make your Farsi Salwar look polished for every setting with layering, jewelry, and footwear balance.',
    image:
      'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1000',
    category: 'Styling Ideas',
    date: '10 Feb 2026',
  },
  {
    id: 2,
    title: 'Sharara Suit Styling Guide for Weddings',
    description:
      'Master the wedding-season look with elegant drapes, rich textures, and accessories that complement your Sharara silhouette while keeping your style graceful and modern.',
    image:
      'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1000',
    category: 'Styling Ideas',
    date: '22 Feb 2026',
  },
  {
    id: 3,
    title: 'Top Ethnic Fashion Trends for Women in 2025',
    description:
      'Explore the biggest trend directions shaping ethnic wardrobes this year, from heritage-inspired detailing and soft metallic palettes to versatile occasion-ready sets.',
    image:
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1000',
    category: 'Fashion Tips',
    date: '08 Mar 2026',
  },
  {
    id: 4,
    title: '5 Easy Styling Tips to Look Elegant Instantly',
    description:
      'Use these practical styling rules to elevate any outfit quickly: proportion play, tonal layering, intentional accessories, and fabric contrast that always looks premium.',
    image:
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1000',
    category: 'Fashion Tips',
    date: '19 Mar 2026',
  },
  {
    id: 5,
    title: 'Festive Outfit Ideas for Modern Women',
    description:
      'Get inspired by festive looks that blend traditional richness with contemporary ease, perfect for poojas, family gatherings, cocktail events, and seasonal celebrations.',
    image:
      'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1000',
    category: 'Styling Ideas',
    date: '02 Apr 2026',
  },
  {
    id: 6,
    title: 'Mix & Match Ethnic Wear Like a Pro',
    description:
      'Learn how to re-style pieces you already own by mixing kurtas, bottoms, and dupattas into fresh combinations that feel new, cohesive, and fashion-forward.',
    image:
      'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=1000',
    category: 'Fashion Tips',
    date: '15 Apr 2026',
  },
]

const categories = ['All', 'Fashion Tips', 'Styling Ideas']

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const visiblePosts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      const matchesSearch = post.title.toLowerCase().includes(normalizedQuery)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const featuredPost = visiblePosts[0]
  const gridPosts = visiblePosts.slice(1)

  const handleSubscribe = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      return
    }

    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <div className="space-y-12 pb-16">
      <section className="relative isolate overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Arriv.Elite blog"
          className="h-[42vh] w-full object-cover sm:h-[48vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8"
        >
          <div className="text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Arriv.Elite Blog</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl">Fashion Tips & Styling Inspiration</h1>
            <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
              Explore expert insights, style guides, and trend edits curated for confident modern women.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlogFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {featuredPost ? (
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 grid overflow-hidden rounded-3xl border border-gold/45 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] lg:grid-cols-[1.2fr_1fr]"
          >
            <div className="overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full min-h-[19rem] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-4 p-6 sm:p-8">
              <span className="inline-flex rounded-full bg-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-black">
                Featured
              </span>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/55">{featuredPost.date}</p>
              <h2 className="font-display text-3xl leading-tight text-black">{featuredPost.title}</h2>
              <p className="text-sm leading-relaxed text-black/70 sm:text-base">{featuredPost.description}</p>
              <button
                type="button"
                className="inline-flex rounded-full border border-black px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                Read More
              </button>
            </div>
          </motion.article>
        ) : null}

        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gridPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gold/45 bg-white p-8 text-center text-black/70">
            No blog posts found for this filter.
          </div>
        )}
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gold/45 bg-cream p-8 text-center shadow-[0_14px_34px_rgba(0,0,0,0.06)] sm:p-10"
        >
          <h2 className="font-display text-3xl text-black sm:text-4xl">Get Weekly Style Tips</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-black/70 sm:text-base">
            Subscribe to receive new styling guides, trend updates, and curated fashion advice from Arriv.Elite.
          </p>

          <form onSubmit={handleSubscribe} className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setIsSubscribed(false)
              }}
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-gold/50 bg-white px-5 text-sm text-black outline-none ring-gold placeholder:text-black/45 focus:ring-2"
            />
            <button
              type="submit"
              className="h-12 rounded-full border border-black bg-black px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-gold hover:text-black"
            >
              Subscribe
            </button>
          </form>

          {isSubscribed ? (
            <p className="mt-4 text-sm text-black/80">Thanks for subscribing to Arriv.Elite style updates.</p>
          ) : null}
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gold/45 bg-white p-8 text-center shadow-[0_14px_34px_rgba(0,0,0,0.06)] sm:p-10"
        >
          <h2 className="font-display text-3xl text-black sm:text-4xl">Connect with Arriv.Elite</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-black/70 sm:text-base">
            Discover premium collections crafted with cultural richness and modern elegance.
          </p>
          <Link
            to="/shop"
            className="mt-7 inline-flex rounded-full border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-black"
          >
            Shop Now
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Blog
