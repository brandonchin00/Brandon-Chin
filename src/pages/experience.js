import Tile from "../components/Accordion.js";
import "./experience.css";
import "./general.css";

const Experience = () => {
  return (
    <div className="Experience-Wrapper">
      <div className="Experience-Container" id="workSection">
        <h2>Experiences</h2>
        <p>
          Here's a compilation of my internships. You'll quickly see the
          variety, as I intentionally pursued a diverse range of experiences in
          business operations before focusing on specialization.
        </p>
      </div>
      <Tile />
    </div>
  );
};

export default Experience;
