import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getFeaturedCategories } from '../data/categories'
import { siteSettings } from '../data/siteSettings'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const featuredCategories = getFeaturedCategories()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-neutral-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 lg:w-10 lg:h-10 bg-neutral-900 rounded-lg flex items-center justify-center"
            >
              <i className="fas fa-camera text-white text-sm lg:text-base"></i>
            </motion.div>
            <span className={`text-lg lg:text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-neutral-900' : 'text-white'
            }`}>
              {siteSettings.photographer_name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative nav-link transition-all duration-300 ${
                  isScrolled ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/90 hover:text-white'
                } ${
                  location.pathname === item.path 
                    ? (isScrolled ? 'text-neutral-900 font-semibold' : 'text-white font-semibold') 
                    : ''
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      isScrolled ? 'bg-neutral-900' : 'bg-white'
                    }`}
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}
            
            {/* Gallery Dropdown */}
            <div className="relative group">
              <button className={`transition-all duration-300 flex items-center space-x-1 ${
                isScrolled ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/90 hover:text-white'
              }`}>
                <span>Gallery</span>
                <i className="fas fa-chevron-down text-xs transition-transform duration-200 group-hover:rotate-180"></i>
              </button>
              <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-xl shadow-large opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top border border-neutral-100">
                <div className="py-2">
                  <Link
                    to="/gallery"
                    className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-all duration-200 text-sm"
                  >
                    All Galleries
                  </Link>
                  {featuredCategories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/gallery/${category.slug}`}
                      className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-all duration-200 text-sm"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/90 hover:text-white'
              }`}
            >
              <Search size={20} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled ? 'text-neutral-900' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md rounded-xl mt-3 overflow-hidden shadow-large border border-neutral-100"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-all duration-200 ${
                      location.pathname === item.path ? 'bg-neutral-100 text-neutral-900 font-medium' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Gallery Submenu */}
                <div className="px-4 py-3 border-t border-neutral-100">
                  <div className="text-neutral-500 text-sm font-medium mb-3">Gallery Categories:</div>
                  {featuredCategories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/gallery/${category.slug}`}
                      className="block py-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200 text-sm"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar 