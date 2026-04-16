import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Shop from './pages/Shop'

const staticPages = [
  {
    path: '/faq',
    title: 'Frequently Asked Questions',
    subtitle:
      'Find clear answers about orders, delivery timelines, size recommendations, and support channels.',
  },
  {
    path: '/shipping-policy',
    title: 'Shipping Policy',
    subtitle:
      'Transparent timelines and trusted logistics designed to deliver your outfits safely and on schedule.',
  },
  {
    path: '/return-policy',
    title: 'Return Policy',
    subtitle:
      'Simple and reliable return guidelines so you can shop with complete confidence and peace of mind.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    subtitle:
      'Your data and account security are protected with care, transparency, and strict privacy standards.',
  },
]

function PageTemplate({ title, subtitle }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#eadfcb] bg-white p-8 shadow-[0_20px_70px_rgba(126,102,42,0.10)] sm:p-12">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#fff3d6] blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-52 w-52 rounded-full bg-[#f6ead2] blur-3xl" />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b68f23]">
            Arihant Fashion
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[#2e271b] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5e5547] sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

function NotFoundPage() {
  return (
    <PageTemplate
      title="Page Not Found"
      subtitle="The page you are looking for is unavailable right now. Please continue exploring Arihant from the main navigation."
    />
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#fffdf8] text-[#352e22]">
      <Navbar />

      <main className="pt-[7.5rem] sm:pt-[8rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          {staticPages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<PageTemplate title={page.title} subtitle={page.subtitle} />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
