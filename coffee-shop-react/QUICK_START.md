# Quick Start Guide - Mug Life React App

## 🚀 Getting Started in 3 Steps

### Step 1: Navigate to Project
```bash
cd coffee-shop-react
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

Open your browser and visit: **http://localhost:5173**

---

## 📦 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload enabled) |
| `npm run build` | Create production build in `dist/` folder |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎨 What You'll See

The app looks identical to the original HTML website with:
- ✅ Animated loader on first load
- ✅ Rotating logo in navigation
- ✅ Smooth scrolling between sections
- ✅ Featured drinks with interactive popups
- ✅ Horizontally scrolling menu
- ✅ Working login/register forms
- ✅ Newsletter subscription
- ✅ Responsive mobile menu

---

## 📱 Testing Responsive Design

1. Open browser dev tools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select mobile device or resize window
4. Test hamburger menu functionality

---

## 🔧 Making Changes

### Edit Components
All components are in: `src/components/`

Example: To change the hero text, edit `src/components/HeroSection.jsx`

### Edit Styles
Main stylesheet: `src/styles/App.css`

Changes will hot-reload automatically!

### Edit Drink Data
Update drinks: `src/data/drinksData.js`

---

## 🏗️ Building for Production

1. Create optimized build:
```bash
npm run build
```

2. Test production build locally:
```bash
npm run preview
```

3. Deploy the `dist/` folder to your hosting service

---

## 📖 Need More Info?

- **Full Documentation**: See `README.md`
- **Refactoring Details**: See `../REFACTORING_SUMMARY.md`
- **Component Overview**: Check the README's Architecture section

---

## ✅ Verify Everything Works

Test these features:
- [ ] Loader appears and disappears
- [ ] Click on "Menu" in navbar (smooth scroll)
- [ ] Click "Login" button (modal opens)
- [ ] Click on a featured drink (popup appears)
- [ ] Scroll menu items horizontally
- [ ] Submit newsletter form
- [ ] Try responsive mobile view

---

## 🎯 Common Issues

**Issue**: Images not loading
- **Fix**: Make sure you're running from `coffee-shop-react/` folder

**Issue**: Port 5173 already in use
- **Fix**: Close other Vite servers or use `npm run dev -- --port 3000`

**Issue**: Styles not applying
- **Fix**: Check that `src/styles/App.css` exists and is imported in `App.jsx`

---

## 🌟 Enjoy Your React Coffee Shop!

The app is production-ready and fully functional. Happy coding! ☕
