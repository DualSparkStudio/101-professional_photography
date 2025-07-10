export const categories = [
  {
    id: 1,
    name: 'Wedding Photography',
    slug: 'wedding',
    description: 'Capturing the magic of your special day with romantic and timeless wedding photography. From intimate ceremonies to grand celebrations, we document every precious moment of your love story.',
    cover_image: 'https://picsum.photos/800/600?random=101',
    is_featured: true,
    order: 1,
    image_count: 12
  },
  {
    id: 2,
    name: 'Pre-Wedding Shoots',
    slug: 'pre-wedding',
    description: 'Romantic pre-wedding photography sessions that capture your love story before the big day. Beautiful outdoor locations and intimate moments that showcase your relationship.',
    cover_image: 'https://picsum.photos/800/600?random=201',
    is_featured: true,
    order: 2,
    image_count: 8
  },
  {
    id: 3,
    name: 'Portrait Photography',
    slug: 'portrait',
    description: 'Professional portrait sessions that capture your personality and essence. Perfect for individuals, couples, and families with stunning lighting and composition.',
    cover_image: 'https://picsum.photos/800/600?random=301',
    is_featured: true,
    order: 3,
    image_count: 10
  },
  {
    id: 4,
    name: 'Birthday Parties',
    slug: 'birthday',
    description: 'Fun and vibrant birthday party photography that captures all the joy, laughter, and celebration. From kids\' parties to milestone birthdays, we capture every smile.',
    cover_image: 'https://picsum.photos/800/600?random=401',
    is_featured: false,
    order: 4,
    image_count: 6
  },
  {
    id: 5,
    name: 'Corporate Events',
    slug: 'corporate',
    description: 'Professional corporate photography for business events, conferences, product launches, and company portraits. Showcasing your business in the best light.',
    cover_image: 'https://picsum.photos/800/600?random=501',
    is_featured: false,
    order: 5,
    image_count: 8
  },
  {
    id: 6,
    name: 'Baby & Family',
    slug: 'family',
    description: 'Precious moments with newborns, children, and families captured with care and creativity. Documenting the growth and love of your family.',
    cover_image: 'https://picsum.photos/800/600?random=601',
    is_featured: false,
    order: 6,
    image_count: 6
  },
  {
    id: 7,
    name: 'Maternity Photography',
    slug: 'maternity',
    description: 'Beautiful maternity photography celebrating the journey to motherhood. Elegant and artistic photos that capture this special time in your life.',
    cover_image: 'https://picsum.photos/800/600?random=701',
    is_featured: false,
    order: 7,
    image_count: 5
  },
  {
    id: 8,
    name: 'Graduation Photography',
    slug: 'graduation',
    description: 'Celebrating academic achievements with professional graduation photography. Capturing the pride and joy of this important milestone.',
    cover_image: 'https://picsum.photos/800/600?random=801',
    is_featured: false,
    order: 8,
    image_count: 4
  },
  {
    id: 9,
    name: 'Fashion & Model',
    slug: 'fashion',
    description: 'High-fashion photography and modeling portfolios. Creative styling, dramatic lighting, and professional quality images for fashion industry.',
    cover_image: 'https://picsum.photos/800/600?random=901',
    is_featured: false,
    order: 9,
    image_count: 7
  },
  {
    id: 10,
    name: 'Engagement Sessions',
    slug: 'engagement',
    description: 'Romantic engagement photography sessions that tell your love story. Beautiful locations and candid moments that celebrate your commitment.',
    cover_image: 'https://picsum.photos/800/600?random=1001',
    is_featured: false,
    order: 10,
    image_count: 6
  },
  {
    id: 11,
    name: 'Food Photography',
    slug: 'food',
    description: 'Professional food photography for restaurants, chefs, and culinary businesses. Making your dishes look irresistible with artistic presentation.',
    cover_image: 'https://picsum.photos/800/600?random=1101',
    is_featured: false,
    order: 11,
    image_count: 5
  },
  {
    id: 12,
    name: 'Sports Photography',
    slug: 'sports',
    description: 'Dynamic sports photography capturing the action, emotion, and intensity of athletic competitions and team events.',
    cover_image: 'https://picsum.photos/800/600?random=1201',
    is_featured: false,
    order: 12,
    image_count: 6
  }
]

export const getCategoryBySlug = (slug) => {
  return categories.find(category => category.slug === slug)
}

export const getFeaturedCategories = () => {
  return categories.filter(category => category.is_featured)
} 