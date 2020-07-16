import React from "react";
// import "./style.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        {/* <h1 className="footer-h1">Want to collaborate?</h1> */}
        <div className="row">
          <a
            className="social-icon"
            href={"mailto:brus.palaj71@gmail.com"}
            target={"_blank"}
            alt={"mail logo"}
          >
            <img
              className="social-icons"
              src={"./mail.svg"}
              alt={"mail logo"}
            ></img>
          </a>
          <a
            className="social-icon"
            href={"https://github.com/bruspdoee"}
            target={"_blank"}
            alt={"gh logo"}
          >
            <img
              className="social-icons"
              src={"./gh.svg"}
              alt={"gh logo"}
            ></img>
          </a>
          <a
            className="social-icon"
            href={"https://www.linkedin.com/in/brus-palaj/"}
            target={"_blank"}
            alt={"li logo"}
          >
            <img
              className="social-icons"
              src={"./linkedin.svg"}
              alt={"li logo"}
            ></img>
          </a>
          <a
            className="social-icon"
            href={
              "https://drive.google.com/file/d/137DJotT3G_dVLaOD1tFJLY2KzyUi1oxG/view"
            }
            target={"_blank"}
            alt={"resume logo"}
          >
            <img
              className="social-icons"
              src={"./curriculum.svg"}
              alt={"resume logo"}
            ></img>
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>© 2020 Brus Portfolio</p>
      </div>
    </div>
  );
}

export default Footer;
