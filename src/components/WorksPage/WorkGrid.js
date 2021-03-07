import React, { Component } from "react";
import WorkGridItem from "./WorkGridItem";

export default class WorkGrid extends Component {
  render() {
    return (
      <div className="work__grid">
        <WorkGridItem home={this.props.home} />
      </div>
    );
  }
}
