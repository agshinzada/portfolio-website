import React, { Component } from "react";

export default class GridItemTitle extends Component {
  render() {
    return (
      <div className="grid__title">
        <img src={this.props.icon} alt="icon" className="title__icon" />
        <h4 className="heading-4 title__name">{this.props.name}</h4>
      </div>
    );
  }
}
