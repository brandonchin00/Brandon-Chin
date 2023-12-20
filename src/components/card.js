import React, { useState } from "react";
import { projects } from "../adjustment/content.js";
import Popup from "./popup.js";

import "./card.css";

const Project = () => {
  return <Card data={projects} />;
};

export default Project;

function Card({ data }) {
  return (
    <div className="Card-Wrapper">
      {data.map((el, index) => (
        <CardItem
          index={index}
          key={el.title}
          image={el.image}
          title={el.title}
          text={el.text}
          tags={el.tags}
          task={el.task}
          solution={el.solution}
          image_in={el.images}
          title_in={el.title_in}
        />
      ))}
    </div>
  );
}

function CardItem({
  title,
  text,
  tags,
  image,
  task,
  solution,
  image_in,
  title_in,
}) {
  const tagUpdated = String(tags).split(" ");
  const [activeIndex, setActiveIndex] = useState(0);
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const [card, setCard] = useState(false);

  return (
    <div className="card-wrapper">
      <div className="card-container" onClick={() => setCard(true)}>
        <div>
          <div className="imageCard-container">
            <img src={image} alt="project" />
          </div>
          <div className="text-container">
            <div className="card-title-container">
              <span className="card-title">{title}</span>
            </div>
            <span className="card-text">{text}</span>
          </div>
        </div>
        <div className="tag-container">
          {tagUpdated.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <Popup trigger={card}>
        <h4 className="pop-title">{title_in}</h4>
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {image_in &&
            Object.values(image_in).map((imageUrl, index) => (
              <img
                className="pop-image"
                key={index}
                src={imageUrl}
                alt={` ${index}`}
                style={{ width: "100%", flex: "0 0 100%" }}
              />
            ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            className="image-button"
            onClick={() => goToSlide(0)}
          ></button>
          <button
            className="image-button"
            onClick={() => goToSlide(1)}
          ></button>
          <button
            className="image-button"
            onClick={() => goToSlide(2)}
          ></button>
        </div>
        <h5 className="popup-subtitle">Problem</h5>
        <p className="pop-task">{task}</p>
        <h5 className="popup-subtitle">Solution</h5>
        <p className="pop-solution">{solution}</p>
        <button className="close-btn" onClick={() => setCard(false)}>
          {" "}
          Close{" "}
        </button>
      </Popup>
    </div>
  );
}
