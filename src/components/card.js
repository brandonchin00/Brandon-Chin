import React from "react";
import { projects } from "../adjustment/content.js";
import "./card.css";

const Project = () => {
  return <Card data={projects} />;
};

export default Project;

function Card({ data }) {
  return (
    <div className="Card-Wrapper">
      {data.map((el) => (
        <CardItem
          key={el.title}
          image={el.image}
          title={el.title}
          text={el.text}
          tags={el.tags}
        />
      ))}
    </div>
  );
}

function CardItem({ title, text, tags, image }) {
  const tagUpdated = String(tags).split(" ");
  return (
    <div className="card-container">
      <div className="imageCard-container">
        <img src={image} alt="project" />
      </div>
      <div className="text-container">
        <span className="card-title">{title}</span>
        <span className="card-text">{text}</span>
      </div>
      <div className="tag-container">
        {tagUpdated.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
