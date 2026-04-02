import { useState } from 'react';
import { featuredDrinks } from '../data/drinksData';
import DrinkPopupModal from './DrinkPopupModal';

const FeaturedDrinks = () => {
  const [selectedDrink, setSelectedDrink] = useState(null);

  return (
    <>
      <div id="drink">Featured Drinks</div>
      <div id="featured">
        {featuredDrinks.map((drink) => (
          <div key={drink.id} className="fade" onClick={() => setSelectedDrink(drink)}>
            <img src={drink.image} alt={drink.title} />
            <div className="overlay">
              <div className="text">{drink.title.toUpperCase()}</div>
            </div>
          </div>
        ))}
      </div>
      {selectedDrink && (
        <DrinkPopupModal
          drink={selectedDrink}
          onClose={() => setSelectedDrink(null)}
          isFeatured={true}
        />
      )}
    </>
  );
};

export default FeaturedDrinks;
