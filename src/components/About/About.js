import React, { Component } from "react";
import "./About.css";
import resume from "../../assets/BiancaLeeResume.pdf";
import sr from "../ScrollReveal.js";
import headshot from "./headshot.jpg";
import { HashLink as Link } from "react-router-hash-link";

class About extends Component {
  componentDidMount() {
    const headshotConfig = {
      origin: "left",
      duration: 900,
      delay: 100,
      distance: "60px",
      scale: 1,
      easing: "ease",
    };

    const textConfig = {
      origin: "right",
      duration: 900,
      delay: 100,
      distance: "60px",
      scale: 1,
      easing: "ease",
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
              <a className="Header-link active-link" href="/#/about">
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
              I'm a third-year undergrad studying Computer Science (remotely 😭)
              at UC Berkeley. I'm fascinated with building and designing
              platforms that bring people together and make people happy.
              <br />
              <br />
              On campus, you can find me as a project manager with{" "}
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
              . This past summer, I was a software engineer intern at{" "}
              <a
                href="https://www.facebook.com/careers/areas-of-work/engineering/?teams[0]=Software%20Engineering"
                target="_blank"
                className="text"
              >
                Facebook
              </a>{" "}
              working on UI components for the new Facebook website.
              <br />
              <br />
              In my free time, I enjoy embroidering,{" "}
              <a
                href="https://airtable.com/shrbvZFU7357K39mD"
                target="_blank"
                className="text"
              >
                reading
              </a>
              , trying out new coffee brewing methods, and adding to my
              extensive list of{" "}
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
              Reach out to me if you wanna talk about anything—whether it be
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
