import React, { Component } from "react";

export default class BlockTitle extends Component {
  render() {
    return (
      <div className="row">
        <div className="block">
          <div className="block__title">
            <h3 className="heading-3">{this.props.title}</h3>
          </div>
        </div>
      </div>
    );
  }
}
