import { useState } from 'react';
import logoImg from '../assets/logo.webp';
import menuImg from '../assets/menu.webp';
import closeImg from '../assets/close.webp';

const Navbar = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav>
      <div className="container">
        <div className="box">
          <div className="spin-container">
            <div className="shape">
              <div className="bd"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="menu-icon" onClick={() => setIsMenuOpen(true)}>
        <img src={menuImg} alt="Menu" />
      </div>
      <div id="nav-part2" className={isMenuOpen ? 'open' : ''}>
        <div id="close-icon" id="mob-only2" onClick={() => setIsMenuOpen(false)}>
          <img src={closeImg} width="20vw" alt="Close" />
        </div>
        <a className="custom" id="mob-only" onClick={() => handleScroll('main')}>
          Home
        </a>
        <a className="custom" onClick={() => handleScroll('menu')}>
          Menu
        </a>
        <a className="custom" onClick={() => handleScroll('subscribe')}>
          Subscribe
        </a>
        <button onClick={onLoginClick}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
