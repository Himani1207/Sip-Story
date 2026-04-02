import twitterImg from '../assets/twitter.webp';
import instagramImg from '../assets/instagram.webp';
import facebookImg from '../assets/facebook.webp';

const Footer = () => {
  return (
    <div id="nav2">
      <div id="icons">
        <a
          className="twitter"
          href="https://twitter.com/Starbucks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterImg} alt="Twitter" />
        </a>
        <a
          className="insta"
          href="https://www.instagram.com/starbucksindia/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramImg} alt="Instagram" />
        </a>
        <a
          className="facebook"
          href="https://www.facebook.com/Starbucks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookImg} alt="Facebook" />
        </a>
      </div>
      <div id="legal">© MugLIFE Coffee Company </div>
    </div>
  );
};

export default Footer;
