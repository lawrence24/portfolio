import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/App.scss";

export default class App extends Component {
  render = () => (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
