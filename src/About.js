import React, { Component } from "react";
import portrait from "./img/portrait.jpg";
import Footer from "./Footer";

export default class About extends Component {
  render = () => (
    <div>
      <main id="about">
        <h1 className="lg-heading">
          About<span className="text-secondary"> Me </span>
        </h1>
        <div className="about-me">
          <img
            src={portrait}
            alt="Joven Lawrence Gersaniba"
            className="portrait-image"
          />
          <div className="history">
            <h3>History</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quod repudiandae reprehenderit eum
            </p>
          </div>
          <div className="dev-light dev-1">
            <h3>FrontEnd</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quod repudiandae reprehenderit eum magnam? Commodi architecto
              optio repudiandae perferendis laudantium.
            </p>
          </div>
          <div className="dev-dark dev-2">
            <h3>BackEnd</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quod repudiandae reprehenderit eum magnam? Commodi architecto
              optio repudiandae perferendis laudantium.
            </p>
          </div>
          <div className="dev-light dev-3">
            <h3>Mobile</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quod repudiandae reprehenderit eum magnam? Commodi architecto
              optio repudiandae perferendis laudantium.
            </p>
          </div>
          <div className="dev-dark dev-4">
            <h3>Odoo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quod repudiandae reprehenderit eum magnam? Commodi architecto
              optio repudiandae perferendis laudantium.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
