import React, { Component } from "react";

export default class downloadBtn extends Component {
  render() {
    return (
      <a
        href="https://drive.google.com/file/d/1R6qg1xQeRS8Ft9hE27GYKJh4XBMFBPhN/view?usp=sharing"
        target="_blank"
      >
        <button className="btn btn--download mr-sm">Download CV</button>
      </a>
    );
  }
}
