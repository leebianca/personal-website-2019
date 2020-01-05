import React, { Component } from 'react';
import './Footerlink.css';


class Footerlink extends Component {
  render() {
    return (
      <div className="Link-container">
            <a className="link" href={this.props.link} target="_blank">{this.props.name}</a>
      </div>
    );
  }
}

export default Footerlink;
