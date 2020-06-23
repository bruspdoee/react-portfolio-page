import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card
            shadow={6}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Grid>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card
            shadow={6}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Grid>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://raw.githubusercontent.com/bruspdoee/Game-of-Thrones-Quiz/master/Assets/desktop.png) center / cover",
              }}
            >
              Game of Thrones Quiz
            </CardTitle>
            <CardText>Technologies Used: HTML, CSS, JS, Local Storage</CardText>
            <CardActions border>
              <Button
                colored
                colored
                href="https://github.com/bruspdoee/Game-of-Thrones-Quiz"
                target="_blank"
                rel="noopener noreferrer"
                GitHub
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton
                name="share"
                href="https://bruspdoee.github.io/Game-of-Thrones-Quiz/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://raw.githubusercontent.com/bruspdoee/Random-Password-Generator/master/Assets/desktop.png) center / cover",
              }}
            >
              Random Password Generator
            </CardTitle>
            <CardText>Technologies Used: HTML, CSS, JS</CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/bruspdoee/Random-Password-Generator"
                target="_blank"
                rel="noopener noreferrer"
                GitHub
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton
                name="share"
                href="https://bruspdoee.github.io/Random-Password-Generator/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://raw.githubusercontent.com/bruspdoee/BP-Work-Day-Planner/master/Assets/desktop.png) center / cover",
              }}
            >
              Workday Planner
            </CardTitle>
            <CardText>Technologies Used: HTML, CSS, JS, Local Storage</CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/bruspdoee/BP-Work-Day-Planner"
                target="_blank"
                rel="noopener noreferrer"
                GitHub
              >
                GitHub
              </Button>
            </CardActions>
            <CardMenu style={{ color: "white" }}>
              <IconButton
                name="share"
                href="https://bruspdoee.github.io/BP-Work-Day-Planner/"
                target="_blank"
                rel="noopener noreferrer"
              />
            </CardMenu>
          </Card>
        </Grid>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card
            shadow={5}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card
            shadow={6}
            style={{ minWidth: "450", margin: "auto", marginBottom: "30px" }}
          >
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Grid>
      );
    }
  }

  render() {
    return (
      <div className="projects">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Node/Express</Tab>
          <Tab> Vanilla JavaScript</Tab>
          <Tab>MySQL/MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
