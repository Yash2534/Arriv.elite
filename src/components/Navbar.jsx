import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  FiMenu,
  FiShoppingBag,
  FiUser,
  FiX,
} from 'react-icons/fi'
import logo from '../assets/LOGO.jpeg'

const navLinkClass = ({ isActive }) => {
  const base =
    'relative py-2 text-sm font-medium tracking-wide text-[#403829] transition-colors duration-300 hover:text-[#b68f23] after:absolute after:-bottom-0.5 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:bg-[#D4AF37] after:transition-transform after:duration-300'

  return isActive
    ? `${base} text-[#b68f23] after:scale-x-100`
    : `${base} after:scale-x-0 hover:after:scale-x-100`
}

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e8dcc6] shadow-[0_8px_30px_rgba(126,102,42,0.08)]">
      <div className="border-b border-[#eadfcb] bg-[#f7f1e6]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-[11px] font-medium tracking-wide text-[#6f6552] sm:px-6 sm:text-xs lg:px-8">
          <div className="flex items-center gap-3 text-[10px] sm:gap-5 sm:text-xs">
            <a className="transition-colors hover:text-[#b68f23]" href="tel:+919876543210">
+91 878 047 6677
            </a>
            <a
              className="transition-colors hover:text-[#b68f23]"
              href="mailto:care@arihantfashion.com"
            >
arihantkhimaniya@gmail.com            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4 sm:h-24">
            <Link
              to="/"
              className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-90 sm:gap-4"
              aria-label="Arihant Home"
            >
              <img
                src={logo}
                alt="Arihant"
                className="h-14 w-auto object-contain drop-shadow-[0_8px_14px_rgba(120,95,32,0.22)] sm:h-16 lg:h-[72px]"
                loading="eager"
              />
       
            </Link>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/shop" className={navLinkClass}>
                Shop
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <NavLink to="/blog" className={navLinkClass}>
                Blog
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </nav>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                aria-label="Cart"
                className="rounded-full p-2.5 text-[#4b4335] transition-all duration-300 hover:bg-[#fbf6ea] hover:text-[#b68f23]"
              >
                <FiShoppingBag className="text-lg" />
              </button>
              <button
                type="button"
                aria-label="User account"
                className="rounded-full p-2.5 text-[#4b4335] transition-all duration-300 hover:bg-[#fbf6ea] hover:text-[#b68f23]"
              >
                <FiUser className="text-lg" />
              </button>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              className="rounded-full p-2 text-[#4b4335] transition-colors hover:bg-[#fbf6ea] hover:text-[#b68f23] lg:hidden"
              onClick={() => setIsMobileOpen((open) => !open)}
            >
              {isMobileOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden border-t border-[#eadfcb] bg-white transition-all duration-300 ${
          isMobileOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <nav className="space-y-1 px-4 py-4" aria-label="Mobile navigation">
          <NavLink to="/" className="block rounded-lg px-3 py-2 text-[#433b2e]" onClick={closeMobileMenu}>
            Home
          </NavLink>
          <NavLink to="/shop" className="block rounded-lg px-3 py-2 text-[#433b2e]" onClick={closeMobileMenu}>
            Shop
          </NavLink>

          <NavLink to="/about" className="block rounded-lg px-3 py-2 text-[#433b2e]" onClick={closeMobileMenu}>
            About
          </NavLink>
          <NavLink to="/blog" className="block rounded-lg px-3 py-2 text-[#433b2e]" onClick={closeMobileMenu}>
            Blog
          </NavLink>
          <NavLink to="/contact" className="block rounded-lg px-3 py-2 text-[#433b2e]" onClick={closeMobileMenu}>
            Contact
          </NavLink>

          <div className="mt-3 flex items-center gap-2 border-t border-[#ece1cf] pt-3">
         
            <button
              type="button"
              aria-label="Cart"
              className="rounded-full p-2.5 text-[#4b4335] transition-all duration-300 hover:bg-[#fbf6ea] hover:text-[#b68f23]"
            >
              <FiShoppingBag className="text-lg" />
            </button>
            <button
              type="button"
              aria-label="User account"
              className="rounded-full p-2.5 text-[#4b4335] transition-all duration-300 hover:bg-[#fbf6ea] hover:text-[#b68f23]"
            >
              <FiUser className="text-lg" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
