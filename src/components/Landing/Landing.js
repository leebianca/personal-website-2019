import React, { Component } from "react";
import Typist from "react-typist";
import "./Landing.css";
import background from "../../assets/iconbackground.png";
import body from "../../assets/iconbody.png";
import laptop from "../../assets/laptopicon.png";

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-text">
          <h1 className="Hello"> Hello! I am a</h1>
          <Typist
            startDelay={900}
            cursor={{
              show: false,
              blink: true,
              element: "🖍",
              hideWhenDone: true,
              hideWhenDoneDelay: 0,
            }}
          >
            <h3 className="Hello">designer and developer</h3>
            <Typist.Backspace count={30} delay={900} />
            <h3 className="Hello">proud owner of crocs</h3>
            <Typist.Backspace count={20} delay={900} />
            <h3 className="Hello">fan of pastel colors</h3>
            <Typist.Backspace count={20} delay={900} />
            <h3 className="Hello">student at UC Berkeley</h3>
          </Typist>
          {/* <h3 className="intro">
            Second-year at UC Berkeley studying computer science. Creator of
            digital experiences. Fan of pastel colors. Consumer of whole grains.
          </h3> */}
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
