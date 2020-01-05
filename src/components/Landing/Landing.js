import React, { Component } from "react";
import "./Landing.css";
import background from "../../assets/iconbackground.png";
import body from "../../assets/iconbody.png";
import laptop from "../../assets/laptopicon.png";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="landing-text">
          <h1 className="Hello">Hello!</h1>
          <h3 className="intro">
            Second-year at UC Berkeley studying computer science. Creator of
            digital experiences. Fan of pastel colors. Consumer of whole grains.
          </h3>
        </div>
        <div className="icon">
          <img src={background} className="icon-background" />
          <img src={body} className="icon-body translate" />
          <img src={laptop} className="laptop" />
        </div>
      </div>
    );
  }
}

export default Landing;
