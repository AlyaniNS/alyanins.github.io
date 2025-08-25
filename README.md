# Alyani Septalia - Portfolio Website

A modern, responsive portfolio website built with Astro, showcasing projects, certifications, and professional experience with a clean design and dark mode support.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive**: Mobile-first design with hamburger navigation
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Project Showcase**: Dynamic project cards with detailed modals
- **Certifications**: Dedicated section for professional credentials
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Inter font family
- **Content**: Markdown-based content collections
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js) or **yarn**
  - Verify npm: `npm --version`
  - Or install yarn: `npm install -g yarn`

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/AlyaniNS/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```
*Or if you prefer yarn:*
```bash
yarn install
```

### 3. Start Development Server
```bash
npm run dev
```
*Or with yarn:*
```bash
yarn dev
```

The site will be available at `http://localhost:4321`

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check for linting issues
npm run astro check

# Type checking
npm run astro check --watch
```

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.ico
│   └── assets/
│       ├── profile.jpg
│       └── projects/
│           └── *.png
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navigation with mobile menu
│   │   ├── Hero.astro          # Main introduction section
│   │   ├── Projects.astro      # Project grid component
│   │   ├── ProjectCard.astro   # Individual project cards
│   │   ├── Certifications.astro # Certifications showcase
│   │   └── Contact.astro       # Contact section with socials
│   ├── content/
│   │   ├── config.ts           # Content collections configuration
│   │   └── projects/
│   │       └── *.md            # Project markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main layout template
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   └── projects/
│   │       └── [...slug].astro # Dynamic project pages
│   └── styles/
│       └── base.css            # Global styles
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind CSS configuration
└── package.json
```

## 🎨 Customization

### Personal Information
Edit the hero section in `src/components/Hero.astro`:
```astro
<h1>Your Name</h1>
<p>Your professional title and description</p>
```

### Social Links
Update contact information in `src/components/Contact.astro`:
```astro
const socials = [
  { name: 'GitHub', href: 'your-github-url', icon: '...' },
  { name: 'LinkedIn', href: 'your-linkedin-url', icon: '...' },
  // Add or remove social links
];
```

### Projects
Add new projects by creating markdown files in `src/content/projects/`:
```markdown
---
title: "Project Name"
description: "Brief description"
category: "Web Development"
year: 2024
stack: ["React", "Node.js", "MongoDB"]
cover: "/assets/projects/project-image.png"
featured: true
---

Detailed project description in markdown...
```

### Certifications
Update your certifications in `src/components/Certifications.astro`:
```javascript
const certifications = [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "2024",
    credentialUrl: "verification-link",
    logo: "logo-url",
    description: "Brief description"
  }
];
```

### Styling
- **Colors**: Modify the color palette in `tailwind.config.mjs`
- **Fonts**: Change typography settings in `src/layouts/BaseLayout.astro`
- **Layout**: Adjust spacing and layout in component files

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com/)
3. Deploy automatically on each push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to [Netlify](https://netlify.com/)

### Manual Deployment
```bash
npm run build
# Upload contents of dist/ folder to your hosting provider
```

## 🔍 SEO Configuration

Update meta tags in `src/layouts/BaseLayout.astro`:
```astro
<title>Your Name | Portfolio</title>
<meta name="description" content="Your professional description" />
```

## 🎯 Performance Tips

- Optimize images in `public/assets/` (use WebP format when possible)
- Keep markdown content concise for faster loading
- Use the built-in Astro image optimization for better performance

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 4321
npx kill-port 4321
# Or use a different port
npm run dev -- --port 3000
```

**Module not found errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Check for TypeScript errors
npm run astro check
```

## 📞 Support

If you encounter any issues:
1. Check the [Astro documentation](https://docs.astro.build/)
2. Review the [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Create an issue in this repository

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)
