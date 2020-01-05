import React, { Component } from "react";
import "./ACTransit.css";
import personas from "../../assets/actransit-personas.png";
import branding from "../../assets/actransit-branding.png";
import signsclose from "../../assets/actransit-signclose.png";
import signsfar from "../../assets/actransit-signfar.png";
import mockups from "../../assets/actransit-mockups.png";
import resume from "../../assets/Resume.pdf";

class ACTransit extends Component {
  render() {
    return (
      <div className="ac-transit-container">
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
              <a className="Header-link active-link" href="/#work">
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
        <div className="ac-transit">
          <div className="text">
            <h2 className="title">AC TRANSIT REDESIGN</h2>
            <div className="inner-ac-transit">
              <p className="description">
                <a href="http://www.actransit.org/" className="ac text">
                  AC Transit
                </a>
                &nbsp;is an Oakland-based public transit agency serving the
                Alameda and Contra Costa counties in the East Bay of the San
                Francisco Bay Area. We decided to select AC Transit as our
                design point and identified a few problems that our redesign
                needed to address: the inefficient and unclear bus scheduling,
                difficulty in reading signs, and steep learning curve in
                learning how to use the system.
              </p>
              <h4 className="section-header">User Personas</h4>
              <p className="description">
                A few personas of riders were identified to fully flesh out the
                issues that our designs would address.
              </p>
              <img src={personas} className="ac-image" />
              <h4 className="section-header">Objectives</h4>
              <p className="description">
                We used our user research to develop the following objectives.
                <br />
                • Create a more approachable and human first impression to the
                public
                <br />
                • Increase readability and ease of communication
                <br />• Simplify the bus system
              </p>
              <h4 className="section-header">Branding Package</h4>
              <p className="description">
                We needed a new image for AC Transit to solve the aforementioned
                problems. As a result, in order to make AC Transit give off a
                more approachable impression, we created a new color palette,
                logo, and fonts.
              </p>
              <img src={branding} className="ac-image" />
              <h4 className="section-header">Environmental Elements</h4>
              <p className="description">
                In our sign redesign, we display each bus line on its own row
                instead of a grid collection so that we can present more useful
                information to the rider. For each bus line, we display both the
                final destination of the line as well as the frequency that the
                bus occurs. In addition, we've added a clear indicator of which
                stop you're at (ex: Dana and Bancroft) to aid nonlocal bus
                riders who are unfamiliar with street names.
              </p>
              <img src={signsfar} className="ac-image" />
              <img src={signsclose} className="ac-image" />
              <h4 className="section-header">Mobile App</h4>
              <p className="description">
                Since our overarching goal for our designs was to make AC
                Transit more approachable and accessible, we also designed a
                mobile app prototype for riders to conveniently navigate the bus
                system, track bus arrival times, and access their Clipper Card
                account – all on the same platform.
              </p>
              <img src={mockups} className="ac-image" />
              <p className="description">
                Collaboration with Carolyn Duan (UC Berkeley '22) and Jago Pang
                (UC Berkeley '22)
              </p>
            </div>
          </div>
          <div className="icon" />
        </div>
      </div>
    );
  }
}

export default ACTransit;
