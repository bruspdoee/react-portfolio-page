import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCatgerories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://raw.githubusercontent.com/bruspdoee/react-employee-directory/master/Home.png) center/cover",
              }}
            >
              Employee Directory
            </CardTitle>
            <CardText> Employee Directory</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Deployed App</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share " />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://raw.githubusercontent.com/bruspdoee/movie-review-app/master/movie.png) center/cover",
              }}
            >
              Movie Review app
            </CardTitle>
            <CardText> Movie Review</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Deployed App</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share " />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url() center/cover",
              }}
            >
              Employee Directory
            </CardTitle>
            <CardText> Employee Directory</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Deployed App</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share " />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1> This is Node/Express</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1> This is MongoDB</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1> This is MySQL</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Node/Express</Tab>
          <Tab>MongoDB</Tab>
          <Tab>MySql</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCatgerories()};</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
