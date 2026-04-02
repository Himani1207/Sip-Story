import { useState } from 'react';
import topImg from '../assets/top.webp';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Successfully Subscribed:', email);
    setEmail('');
    // Scroll to subscribe section
    const element = document.getElementById('subscribe');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    const element = document.getElementById('main');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="subscribe">
      <div id="top">GO TO TOP</div>
      <div className="line1"></div>
      <div className="top" onClick={handleScrollToTop}>
        <img src={topImg} alt="Go to top" />
      </div>
      <div id="letter">Subscribe to our newsletter to get Latest Updates!</div>
      <div id="form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="news"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input type="submit" value="Subscribe" id="submit1" />
        </form>
      </div>
      <div id="tag">
        <b>MugLIFE ®</b>
      </div>
      <div className="line2"></div>
    </div>
  );
};

export default SubscribeSection;
