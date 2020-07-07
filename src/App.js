import React from "react";
import "./App.css";
// import Loading from "./loading.js";
import Intro from "./components/intro";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";

function App() {
  return (
    <div className="grid">
      <Intro className="intro" />
      <About className="about" />
      <Projects className="projects" />
      <Skills className="skills" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
