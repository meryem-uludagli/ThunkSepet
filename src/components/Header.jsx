import { BsBasket } from "react-icons/bs";
import { IoRestaurant } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { restaurants } = useSelector((store) => store.restaurantReducer);
  return (
    <div className="shadow">
      <div className="container flex justify-between items-center">
        <Link
          to={"/"}
          className="text-red-500 font-[900] text-2xl font-mono md:text-3xl"
        >
          ThunkSepet
        </Link>
        <div className="flex gap-5">
          <Link
            className="flex items-center gap-1 hover:underline cursor-pointer"
            to="/"
          >
            Yakininizda {restaurants?.length}
            <IoRestaurant className="text-red-500" />{" "}
            <span className="max-md:hidden">Restoran var</span>
          </Link>

          <button className="button">Giris Yap</button>
          <button className="button">Kayit Ol</button>

          <Link
            to="/cart"
            className="flex items-center gap-2 p-2 px-3 hover:bg-red-100 rounded-full"
          >
            <BsBasket />
            <span>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
