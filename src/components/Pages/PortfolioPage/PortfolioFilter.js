import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as portfolioActions from "../../../redux/actions/portfolioActions";

class PortfolioFilter extends Component {
  filterPortfolio = (filter) => {
    this.props.actions.getPortfolio(filter);
  };

  render() {
    return (
      <div className="row flex">
        <div className="portfolio__filters">
          <ul className="link link--filter">
            {this.props.items.map((item) => (
              <li key={item.id}>
                <a onClick={() => this.filterPortfolio(item.name)}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.filterListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPortfolio: bindActionCreators(portfolioActions.getData, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioFilter);
