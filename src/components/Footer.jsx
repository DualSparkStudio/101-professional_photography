import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { siteSettings } from '../data/siteSettings'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <i className="fas fa-camera text-neutral-900 text-sm"></i>
                </div>
                <h5 className="text-xl font-semibold">
                  {siteSettings.photographer_name}
                </h5>
              </div>
              <p className="text-white/70 mb-8 leading-relaxed">
                {siteSettings.tagline}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {siteSettings.instagram_url && (
                  <motion.a
                    href={siteSettings.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-instagram"></i>
                  </motion.a>
                )}
                
                {siteSettings.facebook_url && (
                  <motion.a
                    href={siteSettings.facebook_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </motion.a>
                )}
                
                {siteSettings.twitter_url && (
                  <motion.a
                    href={siteSettings.twitter_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-twitter"></i>
                  </motion.a>
                )}
                
                {siteSettings.whatsapp_number && (
                  <motion.a
                    href={`https://wa.me/${siteSettings.whatsapp_number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
            <h6 className="text-lg font-semibold mb-6">Quick Links</h6>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-white transition-colors duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors duration-300">
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
            <h6 className="text-lg font-semibold mb-6">Services</h6>
            <ul className="space-y-3">
              {siteSettings.services.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/gallery" 
                    className="text-white/70 hover:text-white transition-colors duration-300"
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
            <h6 className="text-lg font-semibold mb-6">Contact Info</h6>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-envelope text-white/50 mt-1 text-sm"></i>
                <a 
                  href={`mailto:${siteSettings.email}`}
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                >
                  {siteSettings.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="fas fa-phone text-white/50 mt-1 text-sm"></i>
                <a 
                  href={`tel:${siteSettings.phone}`}
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                >
                  {siteSettings.phone}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="fas fa-clock text-white/50 mt-1 text-sm"></i>
                <span className="text-white/70 text-sm">
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
          className="border-t border-white/10 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-white/50 text-sm">
                &copy; {currentYear} {siteSettings.photographer_name}. All rights reserved.
              </p>
              <div className="flex items-center mt-2 text-xs text-white/40">
                <i className="fas fa-code mr-2"></i>
                <span>Website designed & developed by</span>
                <a 
                  href="https://dualsparkstudio.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-1 text-white/60 hover:text-white transition-colors duration-300"
                >
                  DualSpark Studio
                </a>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/contact" 
                className="btn btn-outline border-white/20 text-white hover:bg-white hover:text-neutral-900 text-sm"
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