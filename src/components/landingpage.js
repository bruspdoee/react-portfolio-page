import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <div className="space-row"></div>
          <div className="banner-text">
            <h1>Brus Palaj</h1>
            <h2>Full Stack Web Developer</h2>

            {/* <hr /> */}

            {/* <p>
              HTML | CSS | JavaScript | React | Node | Express | MySQL | MongoDB
            </p> */}

            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/brus-palaj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="https://github.com/bruspdoee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Email */}
              <a
                href="mailto:brus.palaj71@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
