import React, { Component } from "react";

export default class downloadBtn extends Component {
  render() {
    return (
      <a href="./resume.pdf" target="_blank">
        <button className="btn btn--download mr-sm">Download CV</button>
      </a>
    );
  }
}
