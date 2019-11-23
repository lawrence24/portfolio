import React, { Component } from "react";
import portfolio from "./img/projects/portfolio.png";
import order from "./img/projects/e_order.png";
import todo from "./img/projects/todo.png";

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
        <div className="home-top">
          <div className="home-body">
            <h2 className="sm-heading">Hello!</h2>
            <h1 className="lg-heading-home">
              I'm Joven
              <span className="text-secondary"> Lawrence Gersaniba </span>
            </h1>
            <h2 className="sm-heading-2">{textChange}</h2>
          </div>
        </div>
        <div className="handle"></div>
        <div className="home-bottom">
          <div id="content-detail">
            <div className="header-center">
              <h3>Some of my latest work</h3>
            </div>
            <ul className="thumbs">
              <li className="clear">
                <a
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  href="https://github.com/lawrence24/e_order"
                >
                  <img src={portfolio} alt="e_order" />
                </a>
                <div className="description">
                  <h4>My first portfolio</h4>
                  <p>Build in React and Sass</p>
                </div>
              </li>

              <li className="clear">
                <a
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  href="https://github.com/lawrence24/e_order"
                >
                  <img src={order} alt="e_order" />
                </a>
                <div className="description">
                  <h4>A/R Payment</h4>
                  <p>Build in Odoo</p>
                </div>
              </li>
              <li className="clear">
                <a
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  href="https://github.com/lawrence24/testTodo"
                >
                  <img src={todo} alt="todo" />
                </a>
                <div className="description">
                  <h4>Todo CRUD</h4>
                  <p>Test before I got the job</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}
