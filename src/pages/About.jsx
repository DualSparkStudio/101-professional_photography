import { motion } from 'framer-motion'
import { siteSettings } from '../data/siteSettings'

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Learn more about our passion for photography and commitment to capturing your special moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                {siteSettings.photographer_name}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {siteSettings.about_text}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that every moment is worth capturing, and every story deserves to be told through beautiful imagery. 
                Our approach combines technical expertise with artistic vision to create photographs that not only document your 
                special occasions but also evoke the emotions and memories associated with them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 