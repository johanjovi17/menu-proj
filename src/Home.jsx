import Cart from "./components/Cart";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home">
      <Link to="/RestaurantFood" className>
        Explore menu
      </Link>
    </div>
  );
};

export default Home;
