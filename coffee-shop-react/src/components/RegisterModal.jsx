import { useState } from 'react';
import viewImg from '../assets/view.webp';
import hideImg from '../assets/hide.webp';

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('Error in confirming password!');
      return;
    }

    console.log('Welcome to Mug Life Family!');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="over3" style={{ visibility: 'visible', opacity: 1, zIndex: 3 }}>
      <a className="cancel3" onClick={onClose}></a>
      <div className="popup3">
        <h2>Register!</h2>
        <form onSubmit={handleSubmit}>
          <label id="e2">Enter Your Email</label>
          <input
            type="email"
            id="email3"
            className="login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <div className="password-toggle2">
            <input
              type={showPassword ? 'text' : 'password'}
              id="pass2"
              name="pass2"
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
          <label id="p21">Confirm Password</label>
          <div className="password-toggle3">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="pass21"
              name="pass21"
              className="login"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <img
              src={showConfirmPassword ? hideImg : viewImg}
              width="20vw"
              alt="Toggle Password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
          <input type="submit" id="submit2" value="Register" />
        </form>
        <p>
          Already have an account!{' '}
          <a className="custom" onClick={onSwitchToLogin}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
