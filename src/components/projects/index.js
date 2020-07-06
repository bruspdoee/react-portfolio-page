import React from "react";
// import "./style.css";
import Carousel from "react-bootstrap/Carousel";

function Projects() {
  return (
    <div className="projects">
      <h1 className="proj-header">My Recent Work</h1>
      {/*  Beast Mode Carousel   */}
      <Carousel className="beastmode">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../beastmode/beast.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./beastmode/lift.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./beastmode/jump.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="project-info">
        <h2 className="proj-title"> Beast Mode</h2>
        <a
          className="social-icon"
          href={"https://github.com/bruspdoee/point-of-sale"}
          target={"_blank"}
          alt={"gh logo"}
        >
          <img className="social-icons" src={"./gh.svg"} alt={"gh logo"}></img>
        </a>
        <a
          className="social-icon"
          href={"https://point-of-s.herokuapp.com/"}
          target={"_blank"}
          alt={"gh logo"}
        >
          <img
            className="social-icons"
            src={"./browser.svg"}
            alt={"web logo"}
          ></img>
        </a>
      </div>
      {/*  Game of Thrones Carousel   */}
      <Carousel className="beastmode">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../got/got.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../got/quiz.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../got/score.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="project-info">
        <h2 className="proj-title"> Game of Thrones Quiz</h2>
        <a
          className="social-icon"
          href={"https://github.com/bruspdoee/Game-of-Thrones-Quiz"}
          target={"_blank"}
          alt={"gh logo"}
        >
          <img className="social-icons" src={"./gh.svg"} alt={"gh logo"}></img>
        </a>
        <a
          className="social-icon"
          href={"https://bruspdoee.github.io/Game-of-Thrones-Quiz/"}
          target={"_blank"}
          alt={"gh logo"}
        >
          <img
            className="social-icons"
            src={"./browser.svg"}
            alt={"web logo"}
          ></img>
        </a>
      </div>

      {/*  Rain or Shine Carousel   */}
      <Carousel className="beastmode">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../rainorshine/about.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../rainorshine/homee.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../rainorshine/events.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="project-info">
        <h2 className="proj-title"> Rain or Shine</h2>
        <a
          className="social-icon"
          href={"https://github.com/bruspdoee/Rain-or-Shine"}
          target={"_blank"}
          alt={"gh logo"}
        >
          <img className="social-icons" src={"./gh.svg"} alt={"gh logo"}></img>
        </a>
        <a
          className="social-icon"
          href={"https://bruspdoee.github.io/Rain-or-Shine/"}
          target={"_blank"}
          alt={"gh logo"}
        >
          <img
            className="social-icons"
            src={"./browser.svg"}
            alt={"web logo"}
          ></img>
        </a>
      </div>

      {/*  Employee Directory Carousel   */}
      <Carousel className="beastmode">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../employeed/home.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../employeed/results.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="project-info">
        <h2 className="proj-title"> Employee Directory</h2>
        <a
          className="social-icon"
          href={"https://github.com/bruspdoee/react-employee-directory"}
          target={"_blank"}
          alt={"gh logo"}
        >
          <img className="social-icons" src={"./gh.svg"} alt={"gh logo"}></img>
        </a>
        <a
          className="social-icon"
          href={"https://infinite-reaches-31479.herokuapp.com/"}
          target={"_blank"}
          alt={"gh logo"}
        >
          <img
            className="social-icons"
            src={"./browser.svg"}
            alt={"web logo"}
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Projects;
