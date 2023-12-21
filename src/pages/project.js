import Card from "../components/card.js";
import "./project.css";

const Project = () => {
  return (
    <div className="Project-Wrapper">
      <div className="Project-Container" id="projectSection">
        <h2>Projects</h2>
        <p>
          Below, you'll find front-end development and coding projects. I
          believe that grasping the fundamental tools for project development is
          pivotal in effective team leadership.
        </p>
        <Card />
      </div>
    </div>
  );
};

export default Project;
