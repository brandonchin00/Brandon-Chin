import Tile from "../components/tile.js";
import Start from "../components/start.js";
import "./general.css";

const Experience = () => {
  return (
    <div className="experience-wrapper">
      <ul>
        <Start />
        <Tile />
      </ul>
    </div>
  );
};

export default Experience;
