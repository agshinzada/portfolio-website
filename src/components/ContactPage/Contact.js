import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="left-side">
        <div className="mail-box flex mb-sm">
          <div className="img-box">
            <img
              src="img/svg/email.svg"
              alt="mail-icon"
              className="contact-img"
            />
          </div>
          <div className="text-box flex">
            <h4 className="heading-4">Email</h4>
            <h5 className="heading-5">aqsinismayilzada@gmail.com</h5>
          </div>
        </div>
        <div className="call-box flex mb-sm">
          <div className="img-box">
            <img
              src="img/svg/whatsapp.svg"
              alt="call-icon"
              className="contact-img"
            />
          </div>
          <div className="text-box flex">
            <h4 className="heading-4">whatsapp</h4>
          </div>
        </div>
        <div className="social-box mb-sm">
          <a href="https://facebook.com/agshinzada/">
            <img src="img/svg/facebook.svg" alt="facebook-icon" />
          </a>
          <a href="https://linkedin.com/in/agshinzada/">
            <img src="img/svg/linkedin.svg" alt="linkedin-icon" />
          </a>
          <a href="https://github.com/agshinzada/">
            <img src="img/svg/github.svg" alt="github-icon" />
          </a>
        </div>
      </div>
    );
  }
}
