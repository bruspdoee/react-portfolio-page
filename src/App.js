import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" style={{ color: "black" }}>
            <Navigation>
              <Link style={{ fontSize: "20px" }} to="/">
                Home
              </Link>
              <a
                style={{ fontSize: "20px" }}
                href="https://docs.google.com/document/d/1nyjAwMmrW1fJwQFrQSro9bm1DiXPNUfml0RMUrb82kY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <Link style={{ fontSize: "20px" }} to="/projects">
                Projects
              </Link>
            </Navigation>
          </Header>
          <Drawer>
            <Navigation>
              <Link style={{ fontSize: "20px" }} to="/">
                Home
              </Link>
              <a
                style={{ fontSize: "20px" }}
                href="https://docs.google.com/document/d/1nyjAwMmrW1fJwQFrQSro9bm1DiXPNUfml0RMUrb82kY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <Link style={{ fontSize: "20px" }} to="/projects">
                Projects
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
