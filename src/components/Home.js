import React, { Component } from "react";

import "../App.css";
import arrow from "../assets/arrow.png";
import Landing from "./Landing/Landing";
import resume from "../assets/Resume.pdf";
import Projects from "./Projects/Projects";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <a className="bianca" href="/">
            BIANCA LEE
          </a>
          <div className="links-container">
            <div className="Header-link-container">
              <a className="Header-link" href="/about">
                about
              </a>
            </div>
            <div className="Header-link-container">
              <a className="Header-link" href="/#work">
                work
              </a>
            </div>
            <div className="Header-link-container">
              <a className="Header-link" href={resume}>
                resumé
              </a>
            </div>
            <div className="Header-link-container">
              <a className="Header-link" href="/#contact">
                contact
              </a>
            </div>
          </div>
        </div>
        <Landing />
        <div className="work-container">
          <Projects id="work" />
        </div>
      </div>
    );
  }
}

export default Home;
