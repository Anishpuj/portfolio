# Anish Pujari - Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge&logo=web)](https://anish.live)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/Anishpuj/portfolio)

A modern, performance-driven portfolio website built with React, TypeScript, and Vite. Features smooth page transitions, an infinite image carousel showcasing web development projects, and a cinematic loading experience.

## 🌐 Live Preview

**Check out the live portfolio**: [**anish.live**](https://anish.live)

---

## ✨ Features

- **Modern Design**: Clean, minimalist interface with focus on typography and content
- **Smooth Transitions**: Cinematic black screen transitions between pages
- **Infinite Image Carousel**: Showcases web development projects with live links
- **Preloader**: Animated percentage counter for enhanced loading experience
- **Responsive Design**: Optimized for all screen sizes
- **TypeScript**: Type-safe development with full TypeScript support
- **Performance**: Built with Vite for lightning-fast development and builds

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: React Icons
- **Deployment**: Ready for Netlify, Vercel, or any static hosting

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── *.jpg              # Profile and project images
│   └── *.pdf              # Resume
├── src/
│   ├── components/        # React components
│   │   ├── Portfolio.tsx  # Main portfolio page
│   │   ├── WebSiteWorks.tsx # Projects showcase
│   │   ├── PageTransition.tsx # Page transitions
│   │   └── Preloader.tsx  # Loading animation
│   ├── ui/               # UI components
│   └── main.tsx          # App entry point
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Key Components

### Portfolio Page
- Personal information and education
- Current projects and roles
- Past achievements and milestones
- Social links and resume download

### WebSite Works Page
- Infinite scrolling image carousel
- Live project links
- Smooth animations and transitions

### Page Transitions
- Black screen fade effects
- Smooth entry/exit animations
- Optimized timing for cinematic feel

### Preloader
- Percentage counter animation
- 5-second loading duration
- Smooth fade-out effect

## 🌐 Deployment

### 🚀 Live Website
- **Portfolio URL**: [**anish.live**](https://anish.live)
- **Status**: ✅ Live and active
- **Host**: Static hosting with optimized performance

The portfolio is optimized for deployment on any static hosting platform:

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy dist/ folder to Vercel
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📱 Responsive Design

- **Mobile**: Optimized for screens 320px and up
- **Tablet**: Enhanced experience for 768px+ screens
- **Desktop**: Full experience for 1024px+ screens

## 🎯 Performance Features

- **Code Splitting**: Automatic code splitting with React Router
- **Image Optimization**: Lazy loading for project images
- **Minimal Bundle**: Optimized build with tree shaking
- **Fast Loading**: Preloader with smooth animations

## 🔧 Customization

### Adding New Projects
1. Add project images to `public/` folder
2. Update `images` array in `WebSiteWorks.tsx`
3. Add corresponding links in the component

### Modifying Content
- Edit personal info in `Portfolio.tsx`
- Update social links and resume
- Customize colors and fonts in Tailwind config

### Transition Timing
Adjust transition durations in `PageTransition.tsx`:
```typescript
const duration = 5000; // Preloader duration
// Modify timeout values for page transitions
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Anish Pujari**
- LinkedIn: [linkedin.com/in/anish-pujari-24387228b](https://www.linkedin.com/in/anish-pujari-24387228b)
- GitHub: [github.com/Anishpuj](https://github.com/Anishpuj)
- Email: anishpujari25@gmail.com

---

Built with ❤️ using React, TypeScript, and Vite
