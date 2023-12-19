import React from "react";
import "./popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="overlay">
      <div className="pop-inner">
        {props.children}
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
