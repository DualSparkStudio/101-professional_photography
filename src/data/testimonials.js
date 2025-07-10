export const testimonials = [
  {
    id: 1,
    client_name: 'Sarah & Michael Johnson',
    client_photo: 'https://picsum.photos/100/100?random=1',
    testimonial_text: 'Elite Photography Studio exceeded all our expectations! They captured our wedding day perfectly. The photos are absolutely stunning and we treasure them forever. The team was professional, creative, and made us feel so comfortable throughout the entire process.',
    event_type: 'Wedding Photography',
    event_date: '2024-06-15',
    rating: 5,
    is_featured: true
  },
  {
    id: 2,
    client_name: 'Jennifer Martinez',
    client_photo: 'https://picsum.photos/100/100?random=2',
    testimonial_text: 'I needed professional headshots and the team delivered exceptional results. The photos were crisp, professional, and really captured my personality. The photographer knew exactly how to make me feel confident and natural in front of the camera.',
    event_type: 'Portrait Photography',
    event_date: '2024-05-20',
    rating: 5,
    is_featured: true
  },
  {
    id: 3,
    client_name: 'David Chen',
    client_photo: 'https://picsum.photos/100/100?random=3',
    testimonial_text: 'Our corporate event was beautifully documented. They were professional and managed to capture all the important moments perfectly. The final photos exceeded our expectations and we received many compliments from our team.',
    event_type: 'Corporate Event',
    event_date: '2024-04-15',
    rating: 5,
    is_featured: true
  },
  {
    id: 4,
    client_name: 'Emily & James Foster',
    client_photo: 'https://picsum.photos/100/100?random=4',
    testimonial_text: 'From our engagement to our wedding day, Elite Photography was amazing. They have a talented eye for capturing emotions and candid moments. Our wedding photos tell the complete story of our special day.',
    event_type: 'Wedding Photography',
    event_date: '2024-05-10',
    rating: 5,
    is_featured: true
  },
  {
    id: 5,
    client_name: 'Lisa & Tom Williams',
    client_photo: 'https://picsum.photos/100/100?random=5',
    testimonial_text: 'We had a family portrait session and it was wonderful! The photographer was great with our kids and captured beautiful, natural moments. The photos are now proudly displayed in our home.',
    event_type: 'Family Photography',
    event_date: '2024-05-15',
    rating: 5,
    is_featured: false
  },
  {
    id: 6,
    client_name: 'Amanda Rodriguez',
    client_photo: 'https://picsum.photos/100/100?random=6',
    testimonial_text: 'My daughter\'s birthday party was captured perfectly! The photographer was patient with all the kids and got amazing shots of everyone having fun. The photos are full of joy and laughter.',
    event_type: 'Birthday Party',
    event_date: '2024-05-10',
    rating: 5,
    is_featured: false
  },
  {
    id: 7,
    client_name: 'Robert Thompson',
    client_photo: 'https://picsum.photos/100/100?random=7',
    testimonial_text: 'Professional corporate photography for our annual conference. The team was punctual, professional, and delivered high-quality images that perfectly represented our company brand.',
    event_type: 'Corporate Event',
    event_date: '2024-04-18',
    rating: 5,
    is_featured: false
  },
  {
    id: 8,
    client_name: 'Maria Gonzalez',
    client_photo: 'https://picsum.photos/100/100?random=8',
    testimonial_text: 'I had a portrait session for my professional portfolio and the results were outstanding. The photographer understood exactly what I needed and delivered photos that exceeded my expectations.',
    event_type: 'Portrait Photography',
    event_date: '2024-05-22',
    rating: 5,
    is_featured: false
  }
]

export const getFeaturedTestimonials = () => {
  return testimonials.filter(testimonial => testimonial.is_featured)
}

export const getTestimonialsByEventType = (eventType) => {
  return testimonials.filter(testimonial => testimonial.event_type === eventType)
}

export const getTestimonialById = (id) => {
  return testimonials.find(testimonial => testimonial.id === id)
} 