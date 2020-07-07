import React from "react";
// import "./style.css";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-div">
        <h1 className="intro-h1 anim-typewriter">Brus Palaj</h1>
        <h2 className="intro-h2 anim-typewriter1"> Full Stack Developer</h2>
      </div>
      <div className="intro-text">
        <p className="intro-p anim-typewriter2">
          {" "}
          Making Technology Comprehensible
        </p>
      </div>
    </section>
  );
}

export default Intro;
