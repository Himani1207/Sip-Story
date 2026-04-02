import { useState } from 'react';
import viewImg from '../assets/view.webp';
import hideImg from '../assets/hide.webp';

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Welcome Back', username);
    setUsername('');
    setPassword('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="over3" style={{ visibility: 'visible', opacity: 1, zIndex: 3 }}>
      <a className="cancel3" onClick={onClose}></a>
      <div className="popup3">
        <h2>Welcome back!</h2>
        <form onSubmit={handleSubmit}>
          <label id="e1">Username</label>
          <input
            type="text"
            id="email2"
            className="login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password</label>
          <div className="password-toggle">
            <input
              type={showPassword ? 'text' : 'password'}
              id="pass"
              className="login"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img
              src={showPassword ? hideImg : viewImg}
              width="20vw"
              alt="Toggle Password"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <input type="submit" id="submit2" value="Log In" />
        </form>
        <p>
          Don't have an account!{' '}
          <a className="custom" onClick={onSwitchToRegister}>
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
