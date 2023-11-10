import { Navbar } from "../components/NavBar";
import About from "../components/about.js";
import "./general.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <About />
    </div>
  );
};

export default Home;
