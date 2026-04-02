import coffeeCupIcon from '../assets/coffeecupicon.webp';
import coffeeMug from '../assets/coffmug.webp';

const HeroSection = () => {
  return (
    <>
      <div id="upper">
        <h1>Mug Life</h1>
        <div id="banner">
          <div className="track">
            <div id="ban1">
              <p>LATTE</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>FLAT WHITE </p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>CARTADO</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>MOCHA</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>LATTE</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>FLAT WHITE </p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>CARTADO</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>MOCHA</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>LATTE</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>FLAT WHITE </p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>CARTADO</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>MOCHA</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>LATTE</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>FLAT WHITE </p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>CARTADO</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
              <p>MOCHA</p>
              <img src={coffeeCupIcon} alt="coffee cup icon" />
            </div>
          </div>
        </div>
      </div>
      <div id="up-center">
        <img src={coffeeMug} alt="a coffee glass" />
      </div>
    </>
  );
};

export default HeroSection;
