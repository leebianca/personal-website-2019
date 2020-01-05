import React, { Component } from "react";
import "./About.css";
import resume from "../../assets/Resume.pdf";
import sr from "../ScrollReveal.js";
import headshot from "./headshot.jpg";

class About extends Component {
  componentDidMount() {
    const headshotConfig = {
      origin: "left",
      duration: 900,
      delay: 100,
      distance: "60px",
      scale: 1,
      easing: "ease"
    };

    const textConfig = {
      origin: "right",
      duration: 900,
      delay: 100,
      distance: "60px",
      scale: 1,
      easing: "ease"
    };

    sr.reveal(this.refs.headshot, headshotConfig);
    sr.reveal(this.refs.abouttext, textConfig);
  }

  render() {
    return (
      <div className="About">
        <div className="top">
          <a className="bianca" href="/">
            BIANCA LEE
          </a>
          <div className="links-container">
            <div className="Header-link-container">
              <a className="Header-link active-link" href="/about">
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
        <div className="about-body">
          <img
            src={headshot}
            className="Headshot"
            alt="headshot"
            ref="headshot"
          />
          <div className="about-text" ref="abouttext">
            <div className="About-title">Nice to meet you!</div>
            <p className="Personal-intro">
              I'm a second-year undergrad studying Computer Science at UC
              Berkeley. I'm fascinated with building and designing platforms
              that bring people together and make people happy.
              <br />
              <br />
              On campus, you can find me as a software developer with{" "}
              <a
                href="https://codebase.berkeley.edu"
                target="_blank"
                className="text"
              >
                Berkeley Codebase
              </a>
              , teaching frontend web development and design at the{" "}
              <a href="https://www.wdd.io/" target="_blank" className="text">
                Web Design Decal
              </a>
              , and working on graphic design projects with{" "}
              <a
                href="https://innovativedesign.club/"
                target="_blank"
                className="text"
              >
                Innovative Design
              </a>
              . Last summer, I worked as a frontend software engineer intern
              at&nbsp;
              <a
                href="https://www.letseat.company/"
                target="_blank"
                className="text"
              >
                Let's Eat!
              </a>
              .
              <br />
              <br />
              In my free time, I enjoy shopping for stationery,{" "}
              <a
                href="https://airtable.com/shrbvZFU7357K39mD"
                target="_blank"
                className="text"
              >
                reading
              </a>
              , traveling, and adding to my extensive list of{" "}
              <a
                href="https://biancalee.yelp.com"
                target="_blank"
                className="text"
              >
                Yelp
              </a>{" "}
              reviews.
              <br />
              <br />
              Reach out to me if you wanna talk about anything – whether it be
              food recommendations, the latest Disney live-action remakes, or
              the best/worst design choices you've ever seen :-)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
