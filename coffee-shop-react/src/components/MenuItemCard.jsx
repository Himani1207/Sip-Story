const MenuItemCard = ({ item, onClick }) => {
  return (
    <div className="fade2" onClick={onClick}>
      <img src={item.image} alt={item.title} />
      <div className="overlay">
        <div className="text">{item.title}</div>
      </div>
    </div>
  );
};

export default MenuItemCard;
