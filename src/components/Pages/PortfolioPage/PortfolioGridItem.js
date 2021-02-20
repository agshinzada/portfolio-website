import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as portfolioActions from "../../../redux/actions/portfolioActions";

class PortfolioGridItem extends Component {
  componentDidMount() {
    let pin = this.props.home;
    this.props.actions.getPortfolio(pin);
  }
  render() {
    return (
      <Fragment>
        {this.props.items.map((item) => (
          <figure
            className="portfolio__item animate__animated animate__zoomIn"
            id="{item.id}"
            key={item.id}
          >
            <img src={item.img} alt="Project photo" className="item__img" />
            <figcaption className="item__title">{item.name}</figcaption>
            <span className="item__lang">{item.banner}</span>
            <a href={item.github} target="_blank">
              <img
                className="item__link"
                src="img/svg/github.svg"
                alt="github"
              />
            </a>
          </figure>
        ))}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.portfolioListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPortfolio: bindActionCreators(portfolioActions.getData, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioGridItem);
