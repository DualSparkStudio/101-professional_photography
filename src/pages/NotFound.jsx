import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-camera text-white text-4xl"></i>
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-display font-bold text-gray-800 mb-4">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-700 mb-4">
            Page Not Found
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Oops! It looks like you've wandered off the beaten path. The page you're looking for doesn't exist, 
            but don't worry - we've got plenty of beautiful photography to explore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/" 
                className="btn btn-primary inline-flex items-center"
              >
                <Home size={20} className="mr-2" />
                Go Home
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => window.history.back()}
                className="btn btn-secondary inline-flex items-center"
              >
                <ArrowLeft size={20} className="mr-2" />
                Go Back
              </button>
            </motion.div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Or explore our galleries:
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/gallery" 
                className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
              >
                View Gallery
              </Link>
              <Link 
                to="/about" 
                className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound 