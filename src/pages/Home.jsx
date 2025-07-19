import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFeaturedCategories } from '../data/categories'
import { getFeaturedImages } from '../data/galleryImages'
import { siteSettings } from '../data/siteSettings'
import { getFeaturedTestimonials } from '../data/testimonials'

const Home = () => {
  const featuredCategories = getFeaturedCategories()
  const featuredImages = getFeaturedImages()
  const featuredTestimonials = getFeaturedTestimonials()

  useEffect(() => {
    // Initialize GLightbox for image galleries
    if (window.GLightbox) {
      window.GLightbox({
        selector: '.gallery-lightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      })
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-neutral-900/60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://picsum.photos/1920/1080?random=hero')`
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-large text-white mb-6"
          >
            {siteSettings.hero_title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto"
          >
            {siteSettings.hero_subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Book Your Session
            </Link>
            <Link to="/gallery" className="btn btn-outline text-lg px-8 py-4">
              View Gallery
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 cursor-pointer hover:text-white transition-colors duration-300"
            onClick={() => document.getElementById('featured-galleries').scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Galleries Section */}
      <section id="featured-galleries" className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-medium mb-6">
              Featured Galleries
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Explore our most popular photography categories and discover the artistry behind each shot
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link to={`/gallery/${category.slug}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-soft group-hover:shadow-large transition-all duration-500 card-hover">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={category.cover_image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="heading-small text-white mb-3">
                        {category.name}
                      </h3>
                      <p className="text-white/90 mb-6 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/70">
                          {category.image_count} Photos
                        </span>
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-medium mb-6">
              Featured Work
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              A curated selection of our finest photography moments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredImages.slice(0, 8).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <a
                  href={image.large}
                  className="gallery-lightbox"
                  data-gallery="featured-gallery"
                  data-title={image.title}
                  data-description={image.description}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-subtle group-hover:shadow-medium transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.medium}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i className="fas fa-search-plus text-white text-xl"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-medium text-white mb-6">
              Client Testimonials
            </h2>
            <p className="text-body text-white/80 max-w-2xl mx-auto">
              Hear what our clients have to say about their photography experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.client_photo}
                    alt={testimonial.client_name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.client_name}
                    </h4>
                    <p className="text-sm text-white/60">
                      {testimonial.session_type}
                    </p>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star text-sm ${
                        i < testimonial.rating ? 'text-accent-400' : 'text-white/20'
                      }`}
                    ></i>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-warm">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="heading-medium mb-6">
              Ready to Create Beautiful Memories?
            </h2>
            <p className="text-body mb-8">
              Let's work together to capture your special moments with artistry and passion. 
              Book your session today and let's create something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
                Get Started
              </Link>
              <Link to="/gallery" className="btn btn-secondary text-lg px-8 py-4">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 