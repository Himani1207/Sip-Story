# Mug Life - Coffee Shop Website (React + Vite)

A production-ready React.js application refactored from the original HTML/CSS/JavaScript coffee shop website. Built with Vite for optimal performance and modern development experience.

## 🎯 Project Overview

This is a complete refactoring of a coffee shop website into a clean, maintainable React application. The refactoring maintains **100% visual and functional parity** with the original while introducing proper component architecture, state management, and modern best practices.

## ✨ Features

- **Smooth Animations**: Rotating logo, marquee banners, and image hover effects
- **Interactive Modals**: Login, Register, and Drink detail popups
- **Responsive Design**: Mobile-first approach with full responsive support
- **Featured Drinks Section**: Interactive cards with overlay effects
- **Scrollable Menu**: Horizontally scrolling coffee menu with animations
- **Newsletter Subscription**: Form handling with validation
- **Social Media Integration**: Links to social platforms

## 🏗️ Architecture

### Component Structure

```
src/
├── components/
│   ├── Loader.jsx              # Full-screen loading animation
│   ├── Navbar.jsx              # Navigation with rotating logo
│   ├── HeroSection.jsx         # Hero area with animated banners
│   ├── MarqueeBanner.jsx       # Scrolling text banners
│   ├── FeaturedDrinks.jsx      # Featured drinks grid
│   ├── DrinkPopupModal.jsx     # Reusable modal for drink details
│   ├── MenuSection.jsx         # Full menu with scroll
│   ├── MenuItemCard.jsx        # Individual menu item card
│   ├── SubscribeSection.jsx    # Newsletter subscription
│   ├── Footer.jsx              # Social links and copyright
│   ├── LoginModal.jsx          # Login form modal
│   └── RegisterModal.jsx       # Registration form modal
├── data/
│   └── drinksData.js           # Centralized drink information
├── assets/
│   └── [images]                # All website images
├── styles/
│   └── App.css                 # Main stylesheet (original CSS preserved)
├── App.jsx                     # Root component
└── main.jsx                    # Application entry point
```

### State Management

Uses React hooks (`useState`, `useEffect`) for:
- Modal visibility (Login, Register, Drink Details)
- Form inputs (controlled components)
- Password visibility toggles
- Loader timing

### Key Improvements

1. **Component-Based Architecture**: Modular, reusable components
2. **React State Management**: Replaced DOM manipulation with state-driven updates
3. **Event Handling**: Converted inline onclick to React event handlers
4. **Form Handling**: Proper controlled components with preventDefault
5. **Smooth Scrolling**: Native JavaScript smooth scroll instead of anchor links
6. **No Design Changes**: Preserved exact visual appearance

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd coffee-shop-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Styling

- Original CSS maintained in `src/styles/App.css`
- No CSS frameworks or preprocessors added
- Responsive breakpoints preserved exactly as original
- All animations and transitions maintained

## 🔄 Migration from Original

### Converted Features

✅ **Loader**: Window.onload → useEffect with timer
✅ **Navigation**: Anchor links → smooth scrolling functions
✅ **Forms**: onsubmit with alerts → preventDefault with console logging
✅ **Modals**: CSS :target → React state-driven visibility
✅ **Password Toggle**: Inline onclick → React state management
✅ **Menu Navigation**: Hash-based → scrollIntoView with smooth behavior

### Maintained Original Behavior

- All text content unchanged
- All images unchanged
- All colors and fonts unchanged
- All animations and transitions unchanged
- Layout and spacing identical
- Responsive behavior preserved

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **JavaScript (ES6+)** - Language
- **CSS3** - Styling
- **HTML5** - Markup

## 📱 Responsive Design

- **Desktop**: Full experience with all features
- **Mobile**: Hamburger menu, stacked layout, touch-optimized
- Breakpoint: 600px (preserved from original)

## 🔐 Forms & Validation

### Login Form
- Username/email validation
- Password visibility toggle
- Console logging instead of alerts

### Register Form
- Email validation
- Password confirmation matching
- Password visibility toggles for both fields

### Newsletter Subscription
- Email validation
- Form reset after submission
- Smooth scroll to section

## 🎭 Interactive Features

1. **Rotating Logo**: CSS animation preserved in navbar
2. **Hover Effects**: Overlay appears on drink cards
3. **Marquee Banners**: Infinite scrolling text animations
4. **Modal System**: Click-to-open with backdrop dismiss
5. **Smooth Navigation**: Scroll to sections on menu clicks

## 📄 License

This project maintains the original license terms.

## 🙏 Acknowledgments

- Original design and assets from the base HTML/CSS/JS project
- React and Vite teams for excellent tooling
- All coffee lovers! ☕

---

**Note**: This is a refactored production-ready version. All functionality from the original website has been preserved and enhanced with React best practices.

