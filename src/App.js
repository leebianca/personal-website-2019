import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";
import resume from "./assets/Resume.pdf";
import Home from "./components/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ACTransit from "./components/ACTransit/ACTransit";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/ac-transit" component={ACTransit} />
          <div id="contact">
            <Footer id="contact" />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;