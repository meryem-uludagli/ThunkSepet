import RestaurantDetail from "../components/RestaurantDetail";
import RestaurantProducts from "../components/RestaurantProducts";

const Restaurant = () => {
  return (
    <div>
      <div classNameshadow>
        <div className="container">
          <RestaurantDetail />
        </div>
      </div>

      <div className="container">
        <RestaurantProducts />
      </div>
    </div>
  );
};

export default Restaurant;
