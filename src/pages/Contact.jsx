import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { siteSettings } from '../data/siteSettings'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form data:', data)
      
      toast.success('Thank you! Your message has been sent successfully.')
      reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-neutral-900">
        <div className="absolute inset-0 bg-neutral-900/80"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="heading-large text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Ready to capture your special moments? Let's discuss your photography needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-soft p-8 lg:p-12"
            >
              <h2 className="heading-medium mb-8">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className={`form-input ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`form-input ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="form-input"
                      placeholder="+1234567890"
                    />
                  </div>
                  
                  <div>
                    <label className="form-label">
                      Event Type
                    </label>
                    <select
                      {...register('eventType')}
                      className="form-input"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="portrait">Portrait Session</option>
                      <option value="event">Corporate Event</option>
                      <option value="family">Family Photography</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">
                      Event Date
                    </label>
                    <input
                      type="date"
                      {...register('eventDate')}
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label className="form-label">
                      Budget Range
                    </label>
                    <input
                      type="text"
                      {...register('budget')}
                      className="form-input"
                      placeholder="e.g., $2000-$5000"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className={`form-textarea ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : ''
                    }`}
                    placeholder="Tell us about your photography needs, event details, and any special requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send size={20} className="mr-2" />
                      Send Message
                    </div>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="heading-medium mb-6">
                  Contact Information
                </h2>
                <p className="text-body mb-8">
                  Get in touch with us to discuss your photography needs. We're here to help you capture your special moments.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a 
                      href={`mailto:${siteSettings.email}`}
                      className="text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
                    >
                      {siteSettings.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <a 
                      href={`tel:${siteSettings.phone}`}
                      className="text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
                    >
                      {siteSettings.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-neutral-600">
                      {siteSettings.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                    <p className="text-neutral-600">
                      {siteSettings.working_hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white/50 rounded-xl p-6 border border-neutral-200">
                <h3 className="font-semibold text-lg mb-3">What to Expect</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-accent-500 mt-1 text-sm"></i>
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-accent-500 mt-1 text-sm"></i>
                    <span>Free consultation and quote</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-accent-500 mt-1 text-sm"></i>
                    <span>Flexible scheduling options</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fas fa-check text-accent-500 mt-1 text-sm"></i>
                    <span>Professional service guarantee</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 