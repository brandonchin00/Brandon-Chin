import React, { useState } from "react";
import { content } from "../adjustment/content.js";
import "./Accordion.css";

const Tile = () => {
  return <Accordion data={content} />;
};

export default Tile;

function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          key={el.title}
          index={i}
          isOpen={openIndex === i}
          title={el.title}
          text={el.text}
          date={el.date}
          handleToggle={handleToggle}
          image={el.image}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  index,
  isOpen,
  title,
  text,
  date,
  handleToggle,
  image,
}) {
  function handleClick() {
    handleToggle(index);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{title}</p>
      <p className="date">{date}</p>{" "}
      {isOpen && <div className="content-box">{text}</div>}
      {isOpen && <img src={image} alt="company" className="Accordion-Image" />}
    </div>
  );
}
