import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="/RestaurantFood" className="menu-explore-link">
        Explore menu
      </Link>
    </div>
  );
};

export default Home;
