import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { getCategoryBySlug } from '../data/categories'
import { getImagesByCategory } from '../data/galleryImages'

const GalleryDetail = () => {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)
  const images = getImagesByCategory(slug)

  if (!category) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Gallery Not Found</h1>
          <p className="text-gray-600">The requested gallery could not be found.</p>
        </div>
      </div>
    )
  }

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
              {category.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <a
                  href={image.large}
                  className="gallery-lightbox"
                  data-gallery={`gallery-${slug}`}
                  data-title={image.title}
                  data-description={image.description}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.medium}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i className="fas fa-search-plus text-white text-2xl"></i>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryDetail 