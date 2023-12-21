import React from "react";
import "./card.css";

function Popup(props) {
  return props.trigger ? (
    <div className="overlay">
      <div className="pop-inner">{props.children}</div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
