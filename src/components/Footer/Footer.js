import React, { Component } from "react";
import "./Footer.css";
import Footerlink from "./Footerlink.js";
import sr from "../ScrollReveal.js";
import linkedin from "./linkedin.png";
import github from "./github.png";
import behance from "./behance.png";
import goodreads from "./goodreads.png";

class Footer extends Component {
  componentDidMount() {
    const config = {
      origin: "top",
      duration: 600,
      delay: 100,
      distance: "30px",
      scale: 1,
      easing: "ease",
    };

    sr.reveal(this.refs.footer, config);
  }

  render() {
    return (
      <div className="Footer" ref="footer">
        <div className="footer-name">BIANCA LEE</div>
        <div className="footer-description">
          Developer + Designer <br />
          UC Berkeley
        </div>
        <h2 className="getintouch">Connect with me!</h2>
        <div className="email-container">
          <a className="email" href="mailto: bianca.lee@berkeley.edu">
            bianca.lee@berkeley.edu
          </a>
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/biancalee27/" target="_blank">
            <img className="link" src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/leebianca" target="_blank">
            <img className="link" src={github} alt="github" />
          </a>
          <a href="https://www.behance.net/biancalee" target="_blank">
            <img className="link" src={behance} alt="behance" />
          </a>
          <a
            href="https://www.goodreads.com/user/show/101862765-bianca-lee"
            target="_blank"
          >
            <img className="link" src={goodreads} alt="goodreads" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
