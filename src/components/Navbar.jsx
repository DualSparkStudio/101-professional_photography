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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-camera text-2xl text-white"></i>
            </motion.div>
            <span className="text-xl lg:text-2xl font-display font-semibold text-white">
              {siteSettings.photographer_name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-white hover:text-primary-300 transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-primary-300' : ''
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-300"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}
            
            {/* Gallery Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-primary-300 transition-colors duration-300 flex items-center space-x-1">
                <span>Gallery</span>
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                <div className="py-2">
                  <Link
                    to="/gallery"
                    className="block px-4 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                  >
                    All Galleries
                  </Link>
                  {featuredCategories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/gallery/${category.slug}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-primary-300 transition-colors duration-300"
            >
              <Search size={20} />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-white"
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
              className="lg:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200 ${
                      location.pathname === item.path ? 'bg-primary-500/20 text-primary-300' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Gallery Submenu */}
                <div className="px-4 py-2">
                  <div className="text-white/70 text-sm font-medium mb-2">Gallery Categories:</div>
                  {featuredCategories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/gallery/${category.slug}`}
                      className="block py-1 text-white/80 hover:text-primary-300 transition-colors duration-200 text-sm"
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