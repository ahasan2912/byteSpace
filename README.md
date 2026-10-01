# ByteSpace — Unlock Your Creativity & Courses

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.3.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-8.4.0-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)

ByteSpace is a modern, responsive online learning platform designed to unlock creativity, provide valuable knowledge, and help users grow their skills through a wide range of courses across different fields—from technology to arts.

## 🌟 Features

### 🏠 Home Page
- **Hero Section** with animated search functionality and interactive floating badges
- **Logo Slider** showcasing partner brands with smooth infinite scroll animation
- **Course Catalog** with category-based filtering and featured courses
- **Learning Path Categories** with 6 main learning domains
- **Professional Growth Section** highlighting platform benefits
- **Potential Creators Section** encouraging content creation
- **Testimonials** from satisfied learners and creators
- **Comprehensive Footer** with navigation, social links, and subscription

### 🔐 Authentication System
- **Sign Up Page** with full form validation
  - Full name validation (minimum 2 characters)
  - Email validation with regex pattern
  - Password validation (minimum 6 characters)
  - Password visibility toggle
  - Real-time error messages with icons
  - Loading state during submission
  
- **Sign In Page** with enhanced UX
  - Email and password validation
  - Password visibility toggle
  - Social authentication options (Facebook, Gmail)
  - Responsive design with blueprint grid background
  - Navigation to sign-up page

### 🎨 Design Features
- **Fully Responsive** design for all screen sizes (mobile, tablet, desktop)
- **Blueprint Grid Background** for professional aesthetic
- **Custom Color Scheme** with vibrant blue (#0338E3) and lime green (#D2FB00)
- **Smooth Animations** and hover effects throughout
- **Loading Screen** with progress indicator
- **Poppins Font Family** for modern typography

### 📚 Course Management
- **18 Course Categories** including:
  - Featured courses
  - UI/UX Design, Web Development, Data Science
  - Graphic Design, Digital Illustration, Photography
  - Music, Animation, Film & Video
  - Marketing, Social Media, Creative Marketing
  - Freelance & Entrepreneurship, Productivity
  - Drawing & Painting, Crafts, Cooking
- **Course Cards** with detailed information:
  - Course title, author, and rating
  - Number of lessons, duration, and comments
  - Difficulty level and pricing
  - Student avatars
  - Course thumbnail images

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.8** - Latest React with concurrent features
- **Vite 8.3.0** - Ultra-fast build tool and development server
- **TailwindCSS 4.3.3** - Utility-first CSS framework with custom configuration
- **React Router 8.4.0** - Client-side routing with modern API

### Dependencies
- **React Hook Form 7.89.0** - Performant form validation library
- **Lucide React 1.48.0** - Beautiful, consistent icon library
- **Sharp 0.35.5** - High-performance image processing

### Development Tools
- **OxLint 1.81.0** - Fast JavaScript/TypeScript linter
- **@vitejs/plugin-react 6.1.1** - Official Vite plugin for React
- **TypeScript Types** for React 19

## 📁 Project Structure

```
byteSpace/
├── public/
│   ├── favicon.svg
│   ├── hero/                    # Hero section images
│   │   ├── person.png
│   │   ├── raw_card_students.png
│   │   ├── raw_cone.png
│   │   ├── raw_cylinder.png
│   │   ├── raw_torus.png
│   │   └── raw_spring_white_*.png
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── avatars/             # Student avatar images
│   │   ├── svg/                 # SVG icons and logos
│   │   └── *.png, *.avif       # Course images and UI elements
│   ├── components/
│   │   ├── AuthHero.jsx         # Authentication page hero component
│   │   ├── BuildSkillCard.jsx   # Individual course card
│   │   ├── BuildSkills.jsx      # Course catalog with filtering
│   │   ├── Footer.jsx           # Site footer with links
│   │   ├── Hero.jsx             # Landing page hero section
│   │   ├── LearningPathSection.jsx  # Learning categories grid
│   │   ├── Loading.jsx          # Initial loading screen
│   │   ├── LogoSlider.jsx       # Animated partner logos
│   │   ├── Navbar.jsx           # Navigation header
│   │   ├── PotentialCreators.jsx    # Creator invitation section
│   │   ├── ProfessionalGrowth.jsx   # Benefits showcase
│   │   └── Testimonials.jsx     # User testimonial carousel
│   ├── lib/
│   │   └── data.jsx             # Centralized data (courses, categories, logos)
│   ├── pages/
│   │   ├── Home.jsx             # Main landing page
│   │   ├── SignIn.jsx           # Sign in page
│   │   └── SignUp.jsx           # Sign up page
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles and Tailwind imports
├── .gitignore
├── .oxlintrc.json              # Linter configuration
├── index.html                   # HTML template
├── package.json
├── package-lock.json
├── vite.config.js              # Vite configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 18.x or higher recommended)
- **npm** (version 9.x or higher) or **yarn** (version 1.22.x or higher)
- **Git** (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/byteSpace.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd byteSpace
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

### Development

Run the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at:
- **Local**: `http://localhost:5173`
- **Network**: `http://<your-ip>:5173`

The development server features:
- ⚡️ Lightning fast HMR
- 🔥 Instant server start
- 📦 Optimized build bundling
- 🎨 TailwindCSS JIT mode

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This will:
- Bundle and minify JavaScript/CSS
- Optimize images and assets
- Generate production-ready files in the `dist/` directory
- Tree-shake unused code
- Create source maps for debugging

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

This serves the production build at `http://localhost:4173`

### Linting

Run the linter to check code quality:

```bash
npm run lint
```

OxLint will check for:
- Code style consistency
- Potential bugs and errors
- Best practice violations
- Unused variables and imports

## 🎨 Customization

### Colors

The primary color palette is defined in Tailwind configuration and can be customized:

- **Primary Blue**: `#0338E3` - Main brand color
- **Lime Green**: `#D2FB00` / `#CBF328` - Accent and CTA buttons
- **Text Dark**: `#242528` - Primary text color
- **Text Light**: `#82868E` - Secondary text color
- **Background**: `#F2F3F5` - Light background for sections

### Fonts

The application uses **Poppins** font family from Google Fonts:
- Font weights: 300, 400, 500, 600, 700, 800
- Configured in `index.html` and `index.css`
- To change font, update imports in both files

### Components

All components are modular and can be easily customized:

1. **Edit component files** in `src/components/`
2. **Update data** in `src/lib/data.jsx` for courses, categories, testimonials
3. **Modify styles** using Tailwind utility classes
4. **Add new pages** in `src/pages/` and update routes in `App.jsx`

## 📱 Responsive Breakpoints

The application is fully responsive with Tailwind breakpoints:

- **Mobile**: `< 640px` (sm)
- **Tablet**: `640px - 1024px` (md, lg)
- **Desktop**: `> 1024px` (xl, 2xl)

## 🔒 Form Validation

Form validation is handled by **React Hook Form** with the following rules:

### Sign Up Form
- **Full Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters

### Sign In Form
- **Email**: Required, valid email format
- **Password**: Required, minimum 6 characters

All forms feature:
- Real-time validation on touch/blur
- Clear error messages with icons
- Loading states during submission
- Accessible form controls
- Password visibility toggle

## 🌐 Routing

The application uses React Router with the following routes:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Main landing page with all sections |
| `/signin` | SignIn | User sign-in page |
| `/signup` | SignUp | User registration page |

## 🎯 Key Components Explained

### Loading Component
Displays an animated loading screen on initial app load with progress tracking.

### Hero Component
Features a dynamic hero section with:
- Animated floating 3D shapes
- Blueprint grid background
- Course search functionality
- Interactive statistic badges
- Responsive student imagery

### BuildSkills Component
Course catalog with:
- Category filtering system
- Dynamic course cards
- "More" button for additional categories
- Featured courses highlight
- Empty state handling

### AuthHero Component
Reusable authentication hero section shared between sign-in and sign-up pages.

### LogoSlider Component
Infinite scrolling partner/brand logos with hover pause functionality.

### Testimonials Component
User testimonials with custom styling and avatar backgrounds.

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication with JWT
- [ ] Course enrollment system
- [ ] Payment gateway integration
- [ ] User profile and dashboard
- [ ] Course creation interface
- [ ] Video player integration
- [ ] Progress tracking system
- [ ] Certificate generation
- [ ] Search functionality implementation
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Advanced filtering and sorting
- [ ] Wishlist functionality
- [ ] Course reviews and ratings

## 🐛 Known Issues

Currently, there are no known critical issues. For minor improvements:
- Search functionality is UI-only (not connected to backend)
- Social authentication buttons are placeholder links
- Form submissions are simulated (no backend integration)
- "+ More" categories button is non-functional

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure:
- Code follows the project's style guidelines
- All linting checks pass (`npm run lint`)
- Components are properly documented
- Responsive design is maintained

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👥 Authors

- **Your Name** - Initial work and development

## 🙏 Acknowledgments

- Design inspiration from modern e-learning platforms
- Icons from [Lucide Icons](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Font from [Google Fonts](https://fonts.google.com/)
- React community for excellent documentation and support

## 📧 Contact

For questions, suggestions, or support:

- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Website**: [bytespace.com](https://bytespace.com)

## 📊 Browser Support

ByteSpace supports all modern browsers:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

---

**Built with ❤️ using React, Vite, and TailwindCSS**
