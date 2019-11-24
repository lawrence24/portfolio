import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render = () => (
    <header>
      <nav className="nav">
        <div className="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <div className="nav-logo">
          <h1>{"<Portfolio />"}</h1>
        </div>
        <ul className="nav-menu">
          <Link className="nav-links" to={process.env.PUBLIC_URL + "/"}>
            <li className="nav-item">Home</li>
          </Link>
          <Link className="nav-links" to="/about">
            <li className="nav-item">About</li>
          </Link>

          <Link className="nav-links" to="/contact">
            <li className="nav-item">Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
