const DrinkPopupModal = ({ drink, onClose, isFeatured = false }) => {
  if (!drink) return null;

  return (
    <div className={isFeatured ? 'over' : 'over2'} style={{ visibility: 'visible', opacity: 1, zIndex: 3 }}>
      <a className={isFeatured ? 'cancel' : 'cancel2'} onClick={onClose}></a>
      <div className={isFeatured ? 'popup' : 'popup2'}>
        <img src={drink.image} alt={drink.title} />
        {isFeatured ? <h2>{drink.title}</h2> : <h3>{drink.title}</h3>}
        <p>{drink.description}</p>
      </div>
    </div>
  );
};

export default DrinkPopupModal;
