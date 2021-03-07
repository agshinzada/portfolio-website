import React, { Component } from "react";
import ContentTitle from "../Utility/ContentTitle";

export default class ContentContact extends Component {
  render() {
    return (
      <div className="grid grid--1">
        <ContentTitle h2="Get" span="in touch" />
        <div className="contact__grid">
          <div className="contact__item">
            <div className="contact__box">
              <img src="/img/svg/email.svg" alt="icon" />
              <span>aqsinismayilzada@gmail.com</span>
            </div>
            <a href="https://wa.link/0anre5" target="_blank" rel="noreferrer">
              <div className="contact__box">
                <img src="/img/svg/whatsapp.svg" alt="icon" />
                <span>Whatsapp</span>
              </div>
            </a>
          </div>
          <div className="contact__item">
            <form action="https://formspree.io/f/xrgovokj" method="POST">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="field field--text"
                required
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="field field--text"
                required
              />
              <textarea
                placeholder="Message"
                className="field field--area"
                name="message"
                required
              />
              <button className="btn" type="submit">
                Send message &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
