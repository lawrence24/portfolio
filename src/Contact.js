import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <main id="contact">
        <h1 className="lg-heading">
          Hire<span className="text-secondary"> Me </span>
        </h1>

        <div class="boxes">
          <div>
            <span>Country: </span>
            php
          </div>
          <div>
            <span>Email: </span>
            jovenlawrencegersaniba.fcu@gmail.com
          </div>
          <div>
            <span>Phone:</span>
            (+63) 9566029372
          </div>
          <div>
            <span>Address: </span>
            Km.1 Alvarez Subd. Roxas City, Capiz
          </div>
        </div>
      </main>
    );
  }
}
