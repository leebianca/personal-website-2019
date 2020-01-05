import React, { Component } from "react";
import resume from "../../assets/Resume.pdf";
import "./Header.css";

class Header extends Component {
  render() {
    return (
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
    );
  }
}

export default Header;
