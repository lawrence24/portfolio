import React, { Component } from "react";
import portrait from "./img/portrait.jpg";
import odoo from "./img/projects/odoo-logo.png";
import androidStudio from "./img/projects/android-studio-logo.png";
import postgreSQL from "./img/projects/postgresql-logo.png";
import Footer from "./Footer";

import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import reduxIcon from "@iconify/icons-logos/redux";
import javascriptIcon from "@iconify/icons-logos/javascript";
import html5Icon from "@iconify/icons-logos/html-5";
import css3Icon from "@iconify/icons-logos/css-3";
import visualstudioIcon from "@iconify/icons-logos/visual-studio";
import sassIcon from "@iconify/icons-logos/sass";
import loopbackIcon from "@iconify/icons-logos/loopback";
import mongodbIcon from "@iconify/icons-logos/mongodb";
import flutterIcon from "@iconify/icons-logos/flutter";
import atomIcon from "@iconify/icons-logos/atom";

export default class About extends Component {
  render = () => (
    <div>
      <main id="about">
        <h1 className="lg-heading">
          About<span className="text-secondary">me</span>
        </h1>
        <div className="about-me">
          <img
            src={portrait}
            alt="Joven Lawrence Gersaniba"
            className="portrait-image"
          />
          <div className="history">
            <h3 className="about-title">
              I'm a Junior Full Stack and Odoo Developer from Roxas City,
              Philippines
            </h3>
            <p className="about-info">
              I'm Hardworking and I want to learn more. To be able to adopt
              framework or Application that needed in field.
            </p>
            <p className="about-info">
              I enjoy Coding and I have experience in JavaScript, Python, CSS,
              HTML, XML and Sass
            </p>
          </div>
          <div className="dev-light dev-1">
            <h3 className="dev-title">Front-End Developer</h3>
            <p className="dev-info">
              Create Project Mobile and Web Application in Restaurant Fidelity
              with Admin Dashboard - Reactify for CRUD App.
            </p>
            <p className="dev-exp">Experience: 3 Months</p>
            <div>
              <Icon icon={reactIcon} className="dev-icons" />
              <Icon icon={reduxIcon} className="dev-icons" />
              <Icon icon={javascriptIcon} className="dev-icons" />
              <Icon icon={html5Icon} className="dev-icons" />
              <Icon icon={css3Icon} className="dev-icons" />
              <Icon icon={sassIcon} className="dev-icons" />
              <Icon icon={visualstudioIcon} className="dev-icons" />
            </div>
            <div></div>
          </div>
          <div className="dev-light dev-2">
            <h3 className="dev-title">Back-End Developer</h3>
            <p className="dev-info">
              Using <span>IBM LoopBack</span> to handle models and set up ROLE &
              Authentication of User Accounts that connects to{" "}
              <span>MongoDB</span> for the Database.
            </p>
            <p className="dev-exp">Experience: 3 Months</p>
            <div>
              <Icon icon={loopbackIcon} className="dev-icons" />
              <Icon icon={mongodbIcon} className="dev-icons" />
            </div>
          </div>
          <div className="dev-light dev-3">
            <h3 className="dev-title">Mobile Developer</h3>
            <p className="dev-info">
              My first Mobile App created using <span>Flutter</span> by Google.
              Develop a mobile app that has membership rewards. navigate with
              places that has selection of restaurants with Details, Gallery,
              Menu, Map Location and Reservation Form.
            </p>
            <p className="dev-exp">Experience: 3 Months</p>
            <div>
              <Icon icon={flutterIcon} className="dev-icon" />
              <img src={androidStudio} alt="Odoo" className="dev-logo" />
            </div>
          </div>

          <div className="dev-light dev-4">
            <h3 className="dev-title">Odoo Developer</h3>
            <p className="dev-info">
              Experienced creating module of Electronic Medical Record for 3
              months. 2 years in Odoo, Implement System in my local client
              (Water Factory, HOB Reaturant, TW Car Cares and Chicken Deli).
              Current work is implementing the Hospital Information System under
              the Pith Technologies Company.
            </p>
            <p className="dev-exp">Experience: 2 Years</p>
            <div>
              <Icon icon={atomIcon} className="dev-icon" />
              <img src={odoo} alt="Odoo" className="dev-logo" />
              <img src={postgreSQL} alt="PostgreSQL" className="dev-logo" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
