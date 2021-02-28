import React, { Component } from "react";
import Burger from "./Burger";
import Menu from "./Menu";

export default class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__left">
          <div className="header__logo">
            <a href="/#">
              <img src="img/svg/logo.svg" alt="Logo" />
            </a>
          </div>
          <div className="header__text">
            <a href="/#">
              Agshin <span>Ismayilzada</span>
            </a>
          </div>
        </div>
        <div className="header__right">
          <div className="header__nav">
            <ul className="nav-list link link--nav" id="nav-list">
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#/works">Portfolio</a>
              </li>
              <li>
                <a href="/#/resume">Resume</a>
              </li>
              <li>
                <a href="/#/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <Menu />
        <Burger />
      </header>
    );
  }
}
