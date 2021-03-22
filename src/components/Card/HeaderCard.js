import React, { Component } from "react";

export default class HeaderCard extends Component {
  render() {
    return (
      <div className="header__card">
        <div className="card__img"></div>
        <div className="card__text">
          <h1 className="heading-1">Agshin Ismayilzada</h1>
          <h4 className="heading-4">Front-end Developer</h4>
        </div>
        <div className="card__links">
          <a href="https://wa.link/0anre5" target="_blank" rel="noreferrer">
            <img src="/img/svg/phone.svg" alt="call" />
          </a>
          <a
            href="https://linkedin.com/in/agshinzada/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/svg/linkedin.svg" alt="likedin" />
          </a>
          <a
            href="https://github.com/agshinzada/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/svg/github.svg" alt="github" />
          </a>
          <a
            href="https://facebook.com/agshinzada/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/img/svg/facebook.svg" alt="facebook" />
          </a>
        </div>
        <div className="card__menu">
          <a href="/cv.pdf">
            <button className="btn btn--menu">Download CV</button>
          </a>
          <img
            className="icon icon--d"
            src="/img/svg/download.svg"
            alt="icon"
          />
        </div>
      </div>
    );
  }
}
