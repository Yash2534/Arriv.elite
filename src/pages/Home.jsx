import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import AboutPreview from '../components/AboutPreview'
import Collections from '../components/Collections'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Offers from '../components/Offers'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'

const heroImage =
  'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1800'

const collectionItems = [
  {
    title: 'Ethnic Wear',
    to: '/shop',
    image:
      'https://images.pexels.com/photos/937497/pexels-photo-937497.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    title: 'Western Wear',
    to: '/shop',
    image:
      'https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    title: 'Festive Collection',
    to: '/shop',
    image:
      'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    title: 'New Arrivals',
    to: '/shop',
    image:
      'https://images.pexels.com/photos/2075625/pexels-photo-2075625.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
]

const trendingProducts = [
  {
    id: 1,
    name: 'Ivory Mirror Work Lehenga',
    price: '₹8,999',
    rating: 4.9,
    image:
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 2,
    name: 'Velvet Midnight Saree',
    price: '₹6,499',
    rating: 4.8,
    image:
      'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 3,
    name: 'Rose Gold Anarkali Set',
    price: '₹5,799',
    rating: 4.7,
    image:
      'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 4,
    name: 'Signature Draped Gown',
    price: '₹7,299',
    rating: 4.8,
    image:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 5,
    name: 'Emerald Festive Sharara',
    price: '₹6,199',
    rating: 4.6,
    image:
      'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    id: 6,
    name: 'Classic Heritage Kurti',
    price: '₹3,499',
    rating: 4.5,
    image:
      'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
]

const aboutImage =
  'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1400'

const socialImages = [
  'https://images.pexels.com/photos/977567/pexels-photo-977567.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg?auto=compress&cs=tinysrgb&w=900',
]

const reviews = [
  {
    name: 'Riya M.',
    comment:
      'The quality is truly premium. The fit, finish, and packaging felt like a luxury boutique experience.',
  },
  {
    name: 'Pooja S.',
    comment:
      'My festive order arrived fast and looked even better than the photos. Arihant is now my go-to.',
  },
  {
    name: 'Nisha P.',
    comment:
      'Elegant designs with modern cuts. I got so many compliments at my event, absolutely worth it.',
  },
]

function InstagramSection({ images }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#b68f23]">Social Proof</p>
        <h2 className="mt-3 font-display text-3xl text-[#241d12] sm:text-4xl">Seen On Instagram</h2>
        <p className="mt-3 text-sm text-[#5d5346] sm:text-base">@arihant</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {images.map((image, index) => (
          <motion.article
            key={image}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl"
          >
            <img
              src={image}
              alt={`Arihant social ${index + 1}`}
              className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#19130c]/0 transition-colors duration-300 group-hover:bg-[#19130c]/45">
              <Camera
                className="scale-75 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                size={20}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Home() {
  return (
    <div className="space-y-24 pb-20 sm:space-y-28">
      <Hero image={heroImage} />
      <Collections collections={collectionItems} />
      <Products products={trendingProducts} />
      <AboutPreview image={aboutImage} />
      <WhyChooseUs />
      <Offers />
      <InstagramSection images={socialImages} />
      <Testimonials testimonials={reviews} />
      <Newsletter />
    </div>
  )
}

export default Home
