import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as portfolioActions from "../../redux/actions/portfolioActions";

class FilterBar extends Component {
  filterPortfolio = (filter) => {
    this.props.actions.getPortfolio(filter);
  };
  render() {
    return (
      <div className="filter">
        <ul className="filter__bar">
          <li>
            <button className="btn" onClick={() => this.filterPortfolio("All")}>
              All
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => this.filterPortfolio("HTML/CSS")}
            >
              HTML / CSS
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => this.filterPortfolio("Java")}
            >
              Java
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => this.filterPortfolio("Javascript")}
            >
              Javascript
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPortfolio: bindActionCreators(portfolioActions.getData, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(FilterBar);
