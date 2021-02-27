import React, { Component } from "react";

import PortfolioGridItem from "./PortfolioGridItem";

export default class PortfolioGrid extends Component {
  render() {
    return (
      <div className="row">
        <div className="portfolio__grid">
          <PortfolioGridItem home={this.props.home} />
        </div>
      </div>
    );
  }
}
