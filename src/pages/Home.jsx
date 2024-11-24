import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { getRestaurants } from "../redux/actions/restActions";
import Error from "../components/Error";

const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );
  const dispatch = useDispatch();
  const retry = () => dispatch(getRestaurants());

  return (
    <div className="container">
      <h1>Yakininizdaki Restoranlar</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} retry={retry} />
      ) : (
        <div>VERILER GELDI</div>
      )}
    </div>
  );
};

export default Home;
