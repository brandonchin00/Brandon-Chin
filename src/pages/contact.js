import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contactSection">
      <div className="contact-container">
        <h4 className="contact-subtitle">Looking Your Next Teammate?</h4>
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-content">
          I'm currently looking for a full-time position as a product manager
          after my May-2024 graduation. I am open to any location in the U.S.
        </p>
        <button className="contact-button">Say Hi 👋</button>
      </div>
      <div className="end-credit">
        <h6 className="contact-credit">Designed and Built By Brandon Chin </h6>
        <h6 className="contact-credit">
          © 2023 Brandon Chin. All rights reserved.
        </h6>
      </div>
    </div>
  );
};

export default Contact;
