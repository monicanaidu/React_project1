const RestaurantCard = function (props) {
  const { resData } = props;

  const { image, name, rating, tags } = resData;
  return (
    <div className="res-card">
      <img className="food-image" src={image} />
      <h4>{name}</h4>
      <h4 className="rating">{rating}</h4>
      <h4>{tags.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
