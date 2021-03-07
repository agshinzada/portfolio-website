import React, { Component } from "react";
import { Route } from "react-router";
import FilterBar from "../WorksPage/FilterBar";

export default class ContentTitle extends Component {
  render() {
    return (
      <div className="content__title">
        <h2 className="heading-2">{this.props.h2}</h2>
        <span className="heading-2">{this.props.span}</span>
        <Route path="/works" component={FilterBar} />
      </div>
    );
  }
}
