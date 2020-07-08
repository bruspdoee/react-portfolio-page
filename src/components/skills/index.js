import React from "react";
// import "./style.css";

function Skills() {
  return (
    <div className="skills-div">
      <h1 className="skills-h1">Skills</h1>
      <div className="gridlock">
        <div className="grid-iteM">
          <h5 className="skill-title">HTML5</h5>
          <img className="skill-logo" src="../skills/html5.png" alt=""></img>
        </div>
        <div className="grid-iteM">
          <h5 className="skill-title">CSS3</h5>
          <img className="skill-logo" src="../skills/css.png" alt=""></img>
        </div>
        <div className="grid-iteM">
          <h5 className="skill-title">Bootstrap</h5>
          <img
            className="skill-logo"
            src="../skills/bootstrap.png"
            alt=""
          ></img>
        </div>
        <div className="grid-iteM">
          <h5 className="skill-title">JavaScript</h5>
          <img
            className="skill-logo"
            src="../skills/javascript.png"
            alt=""
          ></img>
        </div>
        <div className="grid-iteM">
          <h5 className="skill-title">jQuery</h5>
          <img className="skill-logo" src="../skills/jquery.png" alt=""></img>
        </div>
        <div className="grid-iteM">
          <h5 className="skill-title">JSX</h5>
          <img
            className="skill-logo"
            src="../skills/jsx.png"
            style={{
              paddingBottom: "10px",
              paddingTop: "15px",
              paddingRight: "12px",
              paddingLeft: "12px",
            }}
            alt=""
          ></img>
        </div>
        <div className="grid-iteM">
          <h5 className="skill-title">Node</h5>
          <img className="skill-logo" src="../skills/nodejs.png" alt=""></img>
        </div>
        <div className="grid-iteM">
          <h5 className="skill-title">React</h5>
          <img className="skill-logo" src="../skills/react.png" alt=""></img>
        </div>
        <div className="grid-iteM">
          <h5 className="skill-title">MongoDB</h5>
          <img className="skill-logo" src="../skills/mongodb.png" alt=""></img>
        </div>
        <div className="grid-iteM">
          <h5 className="skill-title">MySQL</h5>
          <img className="skill-logo" src="../skills/mysql.png" alt=""></img>
        </div>
        <div className="grid-iteM">
          <h5 className="skill-title">Heroku</h5>
          <img className="skill-logo" src="../skills/heroku.png" alt=""></img>
        </div>
        <div className="grid-iteM">
          <h5 className="skill-title">GitHub</h5>
          <img className="skill-logo" src="../skills/githubs.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Skills;
