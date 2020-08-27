import React, { Component } from "react";

import "../App.css";
import Landing from "./Landing/Landing";
import resume from "../assets/BiancaLeeResume.pdf";
import Projects from "./Projects/Projects";
import { HashLink as Link } from "react-router-hash-link";

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
              <a className="Header-link" href="/#/about">
                about
              </a>
            </div>
            <div className="Header-link-container">
              <Link className="Header-link" to="/#work">
                work
              </Link>
            </div>
            <div className="Header-link-container">
              <a className="Header-link" href={resume} target="blank">
                resumé
              </a>
            </div>
            <div className="Header-link-container">
              <Link className="Header-link" to="/#contact">
                contact
              </Link>
            </div>
          </div>
        </div>
        <Landing />
        <div className="work-container" id="work">
          <Projects id="work" />
        </div>
      </div>
    );
  }
}

export default Home;
