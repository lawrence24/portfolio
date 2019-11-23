import React, { Component } from "react";
import Footer from "./Footer";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare
} from "react-icons/fa";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <main id="contact">
          <div className="contact-body left">
            <h1 className="lg-heading float-right">Contact</h1>
            <div class="boxes">
              <div>
                Pericon Building, Km.1 Alvarez Subdivision, Roxas City, Capiz
              </div>
              <div>(+63) 9566029372</div>
              <div>jovenlawrencegersaniba.fcu@gmail.com</div>
              <div className="icons">
                <FaFacebookSquare className="fab-icons" size="50" />
                <FaTwitterSquare className="fab-icons" size="50" />
                <FaLinkedin className="fab-icons" size="50" />
                <FaGithubSquare className="fab-icons" size="50" />
              </div>
            </div>
          </div>
          <div className="contact-body right">
            <h1 className="lg-heading float-left">
              <span className="text-secondary ">me</span>
            </h1>
            <div className="group-wrap">
              <h1>Send me a message</h1>
              <div className="contact-name">
                <div className="form-outer">
                  <input placeholder="Your Name" type="text" name="name" />
                </div>
              </div>
              <div className="contact-email">
                <div className="form-outer">
                  <input placeholder="Your Email" type="text" name="email" />
                </div>
              </div>
              <div className="contact-message">
                <div className="form-outer">
                  <textarea
                    placeholder="Write me about any project"
                    type="text"
                    name="message"
                  />
                </div>
              </div>
              <div className="btn-submit">
                <div className="contact-button">
                  <button className="contact-submit">
                    <span>SEND MESSAGE</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
