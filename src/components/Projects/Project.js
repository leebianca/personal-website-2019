import React, { Component } from "react";
import sr from "../ScrollReveal.js";
import "./Project.css";

class Project extends Component {
  componentDidMount() {
    const config = {
      origin: "top",
      duration: 800,
      delay: 150,
      distance: "50px",
      scale: 1,
      easing: "ease"
    };

    sr.reveal(this.refs.project, config);
  }

  render() {
    return (
      <div className="Project-container" ref="project">
        <div className="Each-project">
          <img
            className="Project-photo"
            src={this.props.image}
            alt={this.props.alt}
          />
          <div className="Overlay">
            <h2 className="Project-title">{this.props.projecttitle}</h2>
            <p className="Project-descrip">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
