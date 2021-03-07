import React, { Component } from "react";
import ContentTitle from "../Utility/ContentTitle";

export default class ContentAbout extends Component {
  render() {
    return (
      <div className="grid grid--1">
        <ContentTitle h2="About" span="Me" />
        <p className="paragraph">
          I am junior software developer, dynamic team player and
          detail-oriented human. You can see my projects on github.
        </p>
      </div>
    );
  }
}
