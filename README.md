# Photography Portfolio - React + Vite

A modern, responsive photography portfolio website built with React, Vite, and Tailwind CSS. This project showcases professional photography services with a beautiful, cinematic design optimized for Netlify deployment.

## 🚀 Tech Stack

| Area | Technology | Purpose |
|------|------------|---------|
| **Frontend Framework** | React 18 + Vite | Fast development and optimized builds |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Animations** | Framer Motion | Smooth, performant animations |
| **Routing** | React Router DOM | Client-side routing |
| **Icons** | Lucide React + Font Awesome | Modern icon library |
| **Image Gallery** | GLightbox | Lightbox functionality |
| **Forms** | React Hook Form | Form handling and validation |
| **Notifications** | React Hot Toast | User feedback |
| **Deployment** | Netlify | Static site hosting |

## ✨ Features

### 🎨 Design & UX
- **Cinematic 3D Design** - Modern gradient aesthetics with glass morphism effects
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Loading Screen** - Beautiful camera-themed loading animation
- **Dark/Light Theme Ready** - Easy theme switching capability

### 📸 Photography Features
- **Gallery Categories** - Organized portfolio sections (Wedding, Portrait, Events, etc.)
- **Image Lightbox** - Full-screen image viewing with navigation
- **Featured Images** - Curated selection of best work
- **Category Filtering** - Easy navigation between different photography types
- **Image Optimization** - Multiple image sizes for responsive loading

### 💬 Client Interaction
- **Contact Forms** - Professional inquiry and booking forms
- **Testimonials** - Client reviews with star ratings
- **Social Media Integration** - Instagram, Facebook, Twitter, WhatsApp links
- **Booking System Ready** - Easy integration with booking platforms

### 🛠️ Technical Features
- **SEO Optimized** - Meta tags, structured data, performance optimized
- **Fast Loading** - Vite build optimization and code splitting
- **Accessibility** - WCAG compliant design patterns
- **Performance** - Optimized images, lazy loading, efficient animations
- **Security** - HTTPS, CSP headers, secure form handling

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── LoadingScreen.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Gallery.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── ...
├── data/               # Static data (replaces Django models)
│   ├── siteSettings.js
│   ├── categories.js
│   ├── galleryImages.js
│   └── testimonials.js
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd photography-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 🎯 Customization

### Site Settings
Edit `src/data/siteSettings.js` to customize:
- Photographer name and tagline
- Contact information
- Social media links
- Hero section content
- Services offered

### Gallery Content
- **Categories**: Edit `src/data/categories.js`
- **Images**: Edit `src/data/galleryImages.js`
- **Testimonials**: Edit `src/data/testimonials.js`

### Styling
- **Colors**: Modify `tailwind.config.js` color palette
- **Fonts**: Update Google Fonts in `index.html`
- **Animations**: Customize Framer Motion animations

## 🌐 Deployment

### Netlify (Recommended)

1. **Connect to Netlify**
   - Push code to GitHub/GitLab
   - Connect repository in Netlify dashboard

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Environment Variables** (Optional)
   ```
   VITE_SITE_URL=https://your-domain.netlify.app
   VITE_CONTACT_EMAIL=your-email@domain.com
   ```

### Other Platforms
- **Vercel**: Compatible with Vite builds
- **GitHub Pages**: Requires base path configuration
- **Firebase Hosting**: Static site hosting

## 📱 Mobile Optimization

- **Touch-friendly** navigation and interactions
- **Responsive images** with multiple breakpoints
- **Optimized performance** for mobile networks
- **PWA ready** structure for app-like experience

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Quality
- ESLint configuration for React
- Prettier formatting (recommended)
- TypeScript ready (optional upgrade)

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#667eea → #a855f7)
- **Secondary**: Purple gradient (#a855f7 → #ec4899)
- **Accent**: Pink (#ec4899)
- **Dark**: Rich blacks (#1a1a1a)
- **Light**: Clean whites (#ffffff)

### Typography
- **Display**: Playfair Display (headings)
- **Body**: Inter (body text)
- **Icons**: Font Awesome + Lucide React

### Animations
- **Entrance**: Fade in with slide up
- **Hover**: Scale and glow effects
- **Transitions**: Smooth 300ms transitions
- **Loading**: Camera-themed loading animation

## 🔮 Future Enhancements

### Planned Features
- [ ] **Blog System** - Photography tips and stories
- [ ] **Client Portal** - Private galleries for clients
- [ ] **Booking System** - Online appointment scheduling
- [ ] **E-commerce** - Print sales and digital downloads
- [ ] **Multi-language** - Internationalization support
- [ ] **Dark Mode** - Theme switching
- [ ] **PWA** - Progressive Web App features
- [ ] **Analytics** - Visitor tracking and insights

### Technical Improvements
- [ ] **TypeScript** - Type safety
- [ ] **CMS Integration** - Headless CMS (Sanity, Strapi)
- [ ] **Image CDN** - Cloudinary or similar
- [ ] **API Backend** - Netlify Functions or external API
- [ ] **Database** - Supabase or Firebase

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern photography portfolio trends
- **Icons**: Font Awesome and Lucide React
- **Images**: Picsum Photos for placeholder images
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 📞 Support

For support and questions:
- **Email**: contact@elitephotography.com
- **Website**: [Elite Photography Studio](https://your-domain.netlify.app)
- **Documentation**: [Project Wiki](link-to-wiki)

---

**Built with ❤️ by [Your Name] for Elite Photography Studio** 