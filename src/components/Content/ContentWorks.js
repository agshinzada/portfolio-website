import React, { Component } from "react";
import ContentTitle from "../Utility/ContentTitle";
import WorkGrid from "../WorksPage/WorkGrid";

export default class ContentWorks extends Component {
  render() {
    return (
      <div className="grid grid--1">
        <ContentTitle h2="My" span="works" />
        <WorkGrid />
      </div>
    );
  }
}
