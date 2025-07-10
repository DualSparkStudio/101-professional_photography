import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { siteSettings } from '../data/siteSettings'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h5 className="text-2xl font-display font-semibold mb-4">
                {siteSettings.photographer_name}
              </h5>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {siteSettings.tagline}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {siteSettings.instagram_url && (
                  <motion.a
                    href={siteSettings.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-instagram"></i>
                  </motion.a>
                )}
                
                {siteSettings.facebook_url && (
                  <motion.a
                    href={siteSettings.facebook_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </motion.a>
                )}
                
                {siteSettings.twitter_url && (
                  <motion.a
                    href={siteSettings.twitter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-twitter"></i>
                  </motion.a>
                )}
                
                {siteSettings.whatsapp_number && (
                  <motion.a
                    href={`https://wa.me/${siteSettings.whatsapp_number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-whatsapp"></i>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary-300 transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-300 transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-300 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h6 className="text-lg font-semibold mb-4">Services</h6>
            <ul className="space-y-2">
              {siteSettings.services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/gallery" 
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h6 className="text-lg font-semibold mb-4">Contact Info</h6>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="fas fa-envelope text-primary-400 mt-1"></i>
                <a 
                  href={`mailto:${siteSettings.email}`}
                  className="text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  {siteSettings.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="fas fa-phone text-primary-400 mt-1"></i>
                <a 
                  href={`tel:${siteSettings.phone}`}
                  className="text-gray-300 hover:text-primary-300 transition-colors duration-300"
                >
                  {siteSettings.phone}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="fas fa-clock text-primary-400 mt-1"></i>
                <span className="text-gray-300">
                  {siteSettings.working_hours}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {currentYear} {siteSettings.photographer_name}. All rights reserved.
              </p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <i className="fas fa-code mr-2"></i>
                <span>Website designed & developed by</span>
                <a 
                  href="https://dualsparkstudio.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-1 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  DualSpark Studio
                </a>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600"
              >
                <i className="fas fa-calendar-alt mr-2"></i>
                Book a Session
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 