import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__box">
          <div className="footer__social">
            <ul className="link link--footer">
              <li>
                <a href="https://facebook.com/agshinzada/" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/agshinzada/" target="_blank">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/agshinzada/" target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__copyright">
            <p>&copy; All rights reserved. Agshin I.</p>
          </div>
        </div>
      </footer>
    );
  }
}
