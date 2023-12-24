import React, { useEffect } from "react";
import "./card.css";

function Popup(props) {
  useEffect(() => {
    const handlePopupAction = () => {
      props.setCard(false);
    };

    const handleClickOutside = (event) => {
      if (props.trigger && !event.target.closest(".pop-inner")) {
        handlePopupAction();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props]);

  return props.trigger ? (
    <div className="overlay">
      <div className="pop-inner">{props.children}</div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
