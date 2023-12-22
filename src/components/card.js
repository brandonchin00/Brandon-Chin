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
          process={el.process}
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
  process,
}) {
  const tagUpdated = String(tags).split(":");
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
        <div className="pop-title-container">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setCard(false)}
            className="close-btn"
          >
            <path
              className="close-btn-1"
              d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
              stroke="rgb(152, 152, 152)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              className="close-btn-1"
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="rgb(152, 152, 152)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
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
                style={{ width: "100%", height: "auto" }}
              />
            ))}
        </div>
        <div className="image-button-container">
          <button
            className={`image-button ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => goToSlide(0)}
          ></button>
          <button
            className={`image-button ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => goToSlide(1)}
          ></button>
          <button
            className={`image-button ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => goToSlide(2)}
          ></button>
        </div>
        <div className="pop-content-container">
          <h4 className="pop-title">{title_in}</h4>
          <h5 className="popup-subtitle">Task</h5>
          <h6 className="pop-content">{task}</h6>
          <h5 className="popup-subtitle">Process</h5>
          <h6 className="pop-content">{process}</h6>
          <h5 className="popup-subtitle">Solution</h5>
          <h6 className="pop-content">{solution}</h6>
        </div>
      </Popup>
    </div>
  );
}
