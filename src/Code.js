import React, { Component } from "react";
import todo from "./img/projects/todo.png";
import order from "./img/projects/e_order.png";
import portfolio from "./img/projects/portfolio.png";
import Footer from "./Footer";
//import { Link } from "react-router-dom";
//import { FaGithub } from "react-icons/fa";

export default class Code extends Component {
  render = () => (
    <div>
      <main id="code">
        <div className="code-right">
          <h1 className="lg-heading">
            <span className="text-secondary">work</span>
          </h1>
          <div class="projects">
            <div>
              <div class="item">
                <a
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  href="https://github.com/lawrence24/portfolio"
                >
                  <img src={portfolio} alt="Portfolio" />
                </a>
              </div>
              <div className="title">
                <span className="work-title">
                  My First Portfolio (React Sass)
                </span>
              </div>
            </div>
            <div>
              {" "}
              <div class="item">
                <a
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  href="https://github.com/lawrence24/e_order"
                >
                  <img src={order} alt="e_order" />
                </a>
              </div>
              <div className="title">
                <span className="work-title">A/R Payment (Odoo)</span>
              </div>
            </div>
            <div>
              <div class="item">
                <a
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                  href="https://github.com/lawrence24/testTodo"
                >
                  <img src={todo} alt="todo" />
                </a>
              </div>
              <div className="title">
                <span className="work-title">Todo using React (Exam)</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
