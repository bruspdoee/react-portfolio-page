import React from "react";
// import "./style.css";
import Carousel from "react-bootstrap/Carousel";

function Projects() {
  return (
    <div className="project-div">
      <h1 className="title"> Projects</h1>
      <div className="projects">
        {/*  Beast Mode Carousel   */}
        <div className="project-item">
          {" "}
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
            <p className="project-desc">
              {" "}
              Innovative online workout app that takes in a user's desired
              muscles to workout and time limit and dynamically generates a
              workout for the user.
            </p>
            <div className="icon-row">
              <a
                href={"https://github.com/bruspdoee/point-of-sale"}
                target={"_blank"}
                alt={"gh logo"}
              >
                <img
                  className="social-icon"
                  src={"./gh.svg"}
                  alt={"gh logo"}
                ></img>
              </a>
              <a
                href={"https://point-of-s.herokuapp.com/"}
                target={"_blank"}
                alt={"gh logo"}
              >
                <img
                  className="social-icon"
                  src={"./browser.svg"}
                  alt={"web logo"}
                ></img>
              </a>
            </div>
          </div>
        </div>
        {/* Game of Thrones Carousel */}
        <div className="project-item">
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
            <p className="project-desc">
              {" "}
              Have you ever wanted to test your Game of Thrones knowledge? This
              is an app made from Vanilla JS that will give you 5 hard questions
              to challenge your skills!
            </p>
            <div className="icon-row">
              <a
                href={"https://github.com/bruspdoee/Game-of-Thrones-Quiz"}
                target={"_blank"}
                alt={"gh logo"}
              >
                <img
                  className="social-icon"
                  src={"./gh.svg"}
                  alt={"gh logo"}
                ></img>
              </a>
              <a
                href={"https://bruspdoee.github.io/Game-of-Thrones-Quiz/"}
                target={"_blank"}
                alt={"gh logo"}
              >
                <img
                  className="social-icon"
                  src={"./browser.svg"}
                  alt={"web logo"}
                ></img>
              </a>
            </div>
          </div>
        </div>
        {/* Rain or Shine Carousel */}
        <div className="project-item">
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
            <p className="project-desc">
              {" "}
              Web App created to take in a user's location and provide them with
              events to do based on what the weather is that day. Rain = Indoor
              Events, Sun = Outdoor Events.
            </p>
            <div className="icon-row">
              <a
                href={"https://github.com/bruspdoee/Rain-or-Shine"}
                target={"_blank"}
                alt={"gh logo"}
              >
                <img
                  className="social-icon"
                  src={"./gh.svg"}
                  alt={"gh logo"}
                ></img>
              </a>
              <a
                href={"https://bruspdoee.github.io/Rain-or-Shine/"}
                target={"_blank"}
                alt={"gh logo"}
              >
                <img
                  className="social-icon"
                  src={"./browser.svg"}
                  alt={"web logo"}
                ></img>
              </a>
            </div>
          </div>
        </div>
        {/* Employee Directory Carousel */}
        <div className="project-item">
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
            <p className="project-desc">
              {" "}
              First React based app that uses the Random User API to build a
              searchable "Employee Directory". Enter a name and only users with
              that same name will pop up!
            </p>
            <div className="icon-row">
              <a
                href={"https://github.com/bruspdoee/react-employee-directory"}
                target={"_blank"}
                alt={"gh logo"}
              >
                <img
                  className="social-icon"
                  src={"./gh.svg"}
                  alt={"gh logo"}
                ></img>
              </a>
              <a
                href={"https://infinite-reaches-31479.herokuapp.com/"}
                target={"_blank"}
                alt={"gh logo"}
              >
                <img
                  className="social-icon"
                  src={"./browser.svg"}
                  alt={"web logo"}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
