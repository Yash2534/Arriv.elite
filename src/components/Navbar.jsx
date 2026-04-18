import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  FiMenu,
  FiShoppingBag,
  FiUser,
  FiX,
} from 'react-icons/fi'
import logo from '../assets/LOGO.jpeg'
import { useCart } from '../context/CartContext'

const navLinkClass = ({ isActive }) => {
  const base =
    'relative py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:bg-gold after:transition-transform after:duration-300'

  return isActive
    ? `${base} text-gold after:scale-x-100`
    : `${base} after:scale-x-0 hover:after:scale-x-100`
}

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

    // Cart logic removed

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileOpen(false)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]' : 'bg-white/95 backdrop-blur-sm'}`}>
      {/* TOP HEADER */}
      <div className="bg-black text-cream">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[10px] font-medium tracking-[0.2em] sm:px-6 sm:text-xs lg:px-8">
          <div className="hidden sm:block uppercase">Luxury Ethnic Wear</div>
          <div className="flex w-full justify-between sm:w-auto sm:justify-end gap-5">
            <span className="uppercase sm:hidden">Luxury Ethnic Wear</span>
            <a className="transition-colors hover:text-gold" href="tel:+918780476677">
              +91 878 047 6677
            </a>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4 sm:h-24">
            
            {/* LEFT: LOGO */}
            <Link
              to="/"
              className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-90 sm:gap-4"
              aria-label="Arihant Home"
              onClick={closeMobileMenu}
            >
              <img
                src={logo}
                alt="Arihant"
                className="h-12 w-auto object-contain sm:h-14 lg:h-16"
                loading="eager"
              />
            </Link>

            {/* CENTER: DESKTOP NAV */}
            <nav className="hidden items-center gap-8 lg:flex lg:gap-10" aria-label="Main navigation">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </nav>

            {/* RIGHT: ICONS AND CTA */}
            <div className="hidden items-center gap-6 lg:flex">
              <div className="flex items-center gap-4">
                  {/* Cart button removed */}
                <button
                  type="button"
                  aria-label="User account"
                  className="flex items-center justify-center rounded-full bg-transparent p-2.5 text-black transition-all duration-300 hover:bg-cream hover:text-gold"
                >
                  <FiUser className="text-[20px]" />
                </button>
              </div>
            </div>

            {/* MOBILE: ICONS & HAMBURGER */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                title="Cart"
                className="relative flex items-center justify-center rounded-full bg-cream p-2.5 text-black shadow-sm transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-black"
              >
                <FiShoppingBag className="text-[18px]" />
                {/* cartCount removed */}
              </button>
              <button
                type="button"
                aria-label="Toggle menu"
                className="text-black transition-colors hover:text-gold"
                onClick={() => setIsMobileOpen((open) => !open)}
              >
                {isMobileOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAV DROPDOWN */}
      <div
        className={`lg:hidden border-t border-gold/20 bg-cream transition-all duration-500 ease-in-out absolute w-full ${
          isMobileOpen ? 'max-h-[500px] opacity-100 shadow-2xl' : 'max-h-0 overflow-hidden opacity-0 border-none'
        }`}
      >
        <nav className="flex flex-col space-y-6 px-6 py-8" aria-label="Mobile navigation">
          {['Home', 'Shop', 'About', 'Blog', 'Contact'].map((item) => (
            <NavLink 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className="group flex w-full items-center justify-between text-sm font-semibold uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:text-gold" 
              onClick={closeMobileMenu}
            >
              {item}
              <span className="block h-[1.5px] w-0 bg-gold transition-all duration-300 group-hover:w-8" />
            </NavLink>
          ))}
          
          <div className="mt-6 flex flex-col gap-6 border-t border-black/10 pt-8">
            <button
              type="button"
              className="flex items-center gap-3 text-black transition-colors duration-300 hover:text-gold"
            >
              <FiUser className="text-[22px]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Account</span>
            </button>
          </div>
        </nav>
      </div>

      {/* CART DRAWER */}
      {/* Cart drawer removed */}
    </header>
  )
}

export default Navbar
