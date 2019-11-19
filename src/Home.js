import React, { Component } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare
} from "react-icons/fa";

const dev = ["Web Developer", "Odoo Developer", "Programmer"];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIndex: 0
    };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIndex = this.state.textIndex;
      this.setState({ textIndex: currentIndex + 1 });
    }, 1300);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let textChange = dev[this.state.textIndex % dev.length];
    return (
      <main id="home">
        <h2 className="sm-heading">Hello!</h2>
        <h1 className="lg-heading-home">
          I'm Joven<span className="text-secondary"> Lawrence Gersaniba </span>
        </h1>
        <h2 className="sm-heading-2">{textChange}</h2>

        <div className="icons">
          <FaFacebookSquare className="fab-icons" size="50" />
          <FaTwitterSquare className="fab-icons" size="50" />
          <FaLinkedin className="fab-icons" size="50" />
          <FaGithubSquare className="fab-icons" size="50" />
        </div>
      </main>
    );
  }
}
