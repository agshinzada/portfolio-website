import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__left">
          <div className="header__logo">
            <a href="/">
              <img src="img/svg/logo.svg" alt="Logo" />
            </a>
          </div>
          <div className="header__text">
            <a href="/">
              Agshin <span>Ismayilzada</span>
            </a>
          </div>
        </div>
        <div className="header__right">
          <div className="header__nav">
            <ul className="nav-list link link--nav" id="nav-list">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <img src="img/svg/icons8-menu.svg" alt="menu" className="menu-icon" />
      </header>
    );
  }
}
