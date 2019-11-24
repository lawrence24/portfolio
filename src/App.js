import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/App.scss";

export default class App extends Component {
  render = () => (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
