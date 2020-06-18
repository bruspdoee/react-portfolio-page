import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="unnamed.jpg" className="avatar" />
            <div className="banner-text">
              <h1>Brus Palaj</h1>
              <h2>Full Stack Web Developer</h2>
              <hr />
              <p>
                {" "}
                HTML | CSS | JavaScript | Nodejs | React | Express | MongoDB |
                MySQL | AWS{" "}
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/brus-palaj/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/bruspdoee/" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>
                <a href="mailto:brus.palaj71@gmail.com" target="_blank">
                  <i className="fa fa-envelope-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
