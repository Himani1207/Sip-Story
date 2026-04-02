import { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeBanner from './components/MarqueeBanner';
import FeaturedDrinks from './components/FeaturedDrinks';
import MenuSection from './components/MenuSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import './styles/App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const handleCloseModals = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  return (
    <>
      <Loader />
      <div id="main">
        <div id="upper">
          <Navbar onLoginClick={handleOpenLogin} />
          <HeroSection />
        </div>
        <div id="lower">
          <MarqueeBanner />
          <FeaturedDrinks />
        </div>
        <MenuSection />
        <SubscribeSection />
        <Footer />
      </div>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleCloseModals}
        onSwitchToRegister={handleOpenRegister}
      />
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={handleCloseModals}
        onSwitchToLogin={handleOpenLogin}
      />
    </>
  );
}

export default App;
