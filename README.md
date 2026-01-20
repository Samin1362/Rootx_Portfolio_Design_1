# Aarav Sen - Mathematics Student Portfolio

A modern, editorial-style portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 📱 Fully responsive design
- 🎨 Editorial-style theme with navy and orange colors
- ⚡ Fast performance with Vite
- 🎯 SEO optimized
- 📊 Multiple sections: Hero, About, Education, Research, Projects, Publications, Skills, Awards, Teaching, Contact
- 🎭 Smooth animations and transitions

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Styling
- **DaisyUI 5** - UI components

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Theme_1
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect the build settings
4. Deploy!

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Other Platforms

The project can be deployed to any static hosting platform:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Azure Static Web Apps

## Project Structure

```
Theme_1/
├── public/           # Static assets
│   ├── favicon.svg   # Custom favicon
│   └── data.json     # Portfolio content data
├── src/
│   ├── components/
│   │   ├── layout/   # Header, Footer, Layout
│   │   └── sections/ # All page sections
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── package.json      # Dependencies
├── vite.config.js    # Vite configuration
├── vercel.json       # Vercel deployment config
└── README.md         # This file
```

## Customization

### Update Content

Edit `public/data.json` to update:
- Personal information
- Education details
- Research projects
- Publications
- Skills
- Awards
- Teaching experience
- Contact information

### Update Theme Colors

The project uses these main colors:
- Navy: `#0f172a`
- Orange: `#d97706`
- Gray shades for text and borders

Colors are defined inline in component styles for consistency.

### Update Favicon

Replace `public/favicon.svg` with your custom design.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+ on all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## License

© 2026 Rootx Softwares Limited. All rights reserved.

## Contact

For support or inquiries, please contact Rootx Softwares Limited.

---

**Developed by Rootx Softwares Limited**
