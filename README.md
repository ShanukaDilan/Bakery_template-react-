# 🥐 Bakery Template - React

A modern, responsive bakery website template built with React and Vite. Features a beautiful UI with smooth animations, page transitions, and a fully responsive design.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Modern React Architecture** - Built with React 18 and Vite for optimal performance
- **Smooth Animations** - Framer Motion integration for delightful page transitions
- **Fully Responsive** - Mobile-first design that looks great on all devices
- **Multi-Page Application** - Home, About, Menu, and Location pages
- **React Router** - Seamless client-side navigation
- **Component-Based** - Reusable components for easy customization
- **Docker Support** - Production-ready containerization with Nginx
- **SEO Optimized** - Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
bakery/
├── public/
│   ├── images/
│   │   ├── bg/           # Background patterns
│   │   ├── hero/         # Hero section images
│   │   └── menu/         # Menu item images
│   └── barley.png        # Logo
├── src/
│   ├── components/
│   │   ├── Layout.jsx         # Main layout wrapper
│   │   ├── Navbar.jsx         # Navigation component
│   │   ├── Footer.jsx         # Footer component
│   │   └── PageTransition.jsx # Animation wrapper
│   ├── pages/
│   │   ├── Home.jsx           # Homepage
│   │   ├── About.jsx          # About page
│   │   ├── Menu.jsx           # Menu page
│   │   └── Location.jsx       # Location page
│   ├── data/
│   │   ├── menuData.js        # Menu items data
│   │   ├── reviews.js         # Customer reviews
│   │   └── instagram.js       # Instagram feed data
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── Dockerfile                 # Docker configuration
├── docker-compose.yml         # Docker Compose setup
├── nginx.conf                 # Nginx configuration
└── package.json               # Dependencies

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShanukaDilan/Bakery_template-react-.git
   cd bakery
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
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
docker-compose up -d
```

Access the application at `http://localhost:3000`

### Using Docker Only

```bash
# Build the image
docker build -t bakery-template .

# Run the container
docker run -p 3000:80 bakery-template
```

## 📄 Pages Overview

### 🏠 Home
- Hero section with call-to-action
- Featured products showcase
- Customer reviews carousel
- Instagram feed integration

### 👨‍🍳 About
- Bakery story and mission
- Team introduction
- Core values and philosophy

### 🍞 Menu
- Categorized product listings
- Product images and descriptions
- Pricing information
- Special dietary indicators

### 📍 Location
- Store location details
- Opening hours
- Contact information
- Embedded map integration

## 🎨 Customization

### Update Menu Items

Edit `src/data/menuData.js`:

```javascript
export const menuItems = [
  {
    id: 1,
    name: "Your Product",
    category: "Category",
    price: "$X.XX",
    description: "Description here",
    image: "/images/menu/product.png"
  }
];
```

### Update Reviews

Edit `src/data/reviews.js` to modify customer testimonials.

### Change Branding

- Replace logo in `public/barley.png`
- Update colors in `src/index.css` (CSS custom properties)
- Modify text content in respective page components

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 6.0.5
- **Routing:** React Router DOM 7.1.3
- **Animations:** Framer Motion 11.15.0
- **Icons:** React Icons 5.4.0
- **Styling:** CSS3 with custom properties
- **Web Server:** Nginx (in production)
- **Containerization:** Docker

## 📦 Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.1.3",
  "framer-motion": "^11.15.0",
  "react-icons": "^5.4.0"
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Shanuka Dilan**

- GitHub: [@ShanukaDilan](https://github.com/ShanukaDilan)

## 🙏 Acknowledgments

- Images and icons are for demonstration purposes
- Built with modern web development best practices
- Inspired by contemporary bakery websites

## 📧 Support

For support, email or open an issue in the GitHub repository.

---

⭐ **Star this repo if you find it helpful!**
