import React, { Component } from "react";
import project from "./img/projects/proj1.jpg";
import portfolio from "./img/projects/portfolio.png";
import Footer from "./Footer";
//import { Link } from "react-router-dom";
//import { FaGithub } from "react-icons/fa";

export default class Code extends Component {
  render = () => (
    <div>
      <main id="code">
        <h1 className="lg-heading">
          Code
          <span className="text-secondary">{"</>"}</span>
        </h1>
        <div class="projects">
          <div class="item">
            <img src={portfolio} alt="Project" />
          </div>
          <div class="item">
            <img src={project} alt="Project" />
          </div>
          <div class="item">
            <img src={project} alt="Project" />
          </div>
        </div>
        <div className="code-info">
          <div className="code-light code-1">
            <h3 className="code-header center">Language</h3>
            <ul className="code-ul">
              <li>
                JavaScript <span></span>
              </li>
              <li>Python</li>
              <li>Dart</li>
              <li>Sass</li>
              <li>CSS</li>
              <li>XML</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className="code-light code-2">
            <h3 className="code-header center">Framework</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Loopback</li>
              <li>Odoo</li>
              <li>Electron</li>
            </ul>
          </div>
          <div className="code-light code-3">
            <h3 className="code-header center">Tools</h3>
            <ul>
              <li>Atom</li>
              <li>Android Studio</li>
              <li>Visual Studio Code</li>
              <li>Trello</li>
              <li>BitBucket</li>
              <li>Slack</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
