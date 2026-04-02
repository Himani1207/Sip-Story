import { useState } from 'react';
import { menuItems } from '../data/drinksData';
import MenuItemCard from './MenuItemCard';
import DrinkPopupModal from './DrinkPopupModal';

const MenuSection = () => {
  const [selectedDrink, setSelectedDrink] = useState(null);

  return (
    <div id="menu">
      <h2>Menu</h2>
      <div id="menu2">
        <div className="track">
          <div className="menu-part2">
            {menuItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onClick={() => setSelectedDrink(item)}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedDrink && (
        <DrinkPopupModal
          drink={selectedDrink}
          onClose={() => setSelectedDrink(null)}
          isFeatured={false}
        />
      )}
    </div>
  );
};

export default MenuSection;
