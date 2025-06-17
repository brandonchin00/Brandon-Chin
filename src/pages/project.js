import Card from "../components/card.js";
import "./project.css";

const Project = () => {
    return (
        <div className="Project-Wrapper">
            <div className="Project-Container" id="projectSection">
                <h2>Projects</h2>
                <p>
                    Below, you'll find a diverse array of projects. I believe
                    that engaging with diverse projects enables one to
                    understand various tools and communication skills, fostering
                    effective team leadership.
                </p>
                <ul className="Project-Grid">
                    <Card />
                </ul>
            </div>
        </div>
    );
};

export default Project;
