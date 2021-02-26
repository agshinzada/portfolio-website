import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <form action="https://formspree.io/f/xrgovokj" method="POST">
        <div className="right-side flex">
          <div className="left-column mr-sm">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full name"
                className="input input--text"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="input input--text"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="input input--text"
                required
              />
            </div>
          </div>
          <div className="right-column">
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="input input--textarea"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <button className="btn btn--download" type="submit">
          Send message
        </button>
      </form>
    );
  }
}
