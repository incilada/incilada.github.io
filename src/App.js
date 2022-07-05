import React from "react";
import { Link } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import Certificates from "./components/Certificate";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Events from "./components/Events";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App">
      <div id="home" className="header">
        <div className="container">
          <div className="top-header">
            <Navigation />
            <Banner />
          </div>
        </div>
      </div>
      <About />
      <Education />
      <Technologies />
      <Portfolio />
      <Certificates />
      <Events />
      <Contact />
      <a href="#home" id="toTop" style={{ display: "block" }}>
        {" "}
        <span id="toTopHover" style={{ opacity: 1 }}>
          {" "}
        </span>
      </a>
      <Link className="edit-button" to="/admin">
        <i className="bi bi-pencil-fill"></i>
      </Link>
    </div>
  );
}

export default App;
