import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navbar__items">
          <a href="/#">
            <li className="navbar__item">
              <img src="img/svg/person.svg" alt="about" />
              <span>About</span>
            </li>
          </a>
          <a href="#/resume">
            <li className="navbar__item">
              <img src="img/svg/document.svg" alt="resume" />
              <span>Resume</span>
            </li>
          </a>
          <a href="#/works">
            <li className="navbar__item">
              <img src="img/svg/embed.svg" alt="works" />
              <span>Works</span>
            </li>
          </a>
          <a href="#/contact">
            <li className="navbar__item">
              <img src="img/svg/mail.svg" alt="contact" />
              <span>Contact</span>
            </li>
          </a>
        </ul>
      </div>
    );
  }
}
