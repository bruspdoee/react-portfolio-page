import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout fixedHeader>
        <Header title="BP Portfolio">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
