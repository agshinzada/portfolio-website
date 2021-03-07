import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as portfolioActions from "../../redux/actions/portfolioActions";

class WorkGridItem extends Component {
  componentDidMount() {
    let pin = this.props.home;
    this.props.actions.getPortfolio(pin);
  }

  successModal = (data) => {
    this.props.actions.loadModalItem(data);
    this.props.actions.openModalItem(true);
  };

  render() {
    return (
      <Fragment>
        {this.props.items.map((item) => (
          <div
            className="work__item animate__animated animate__zoomIn"
            key={item.id}
          >
            <div className="work__image">
              <img
                src={item.img}
                alt="work"
                onClick={() => this.successModal(item)}
              />
            </div>
            <div className="work__info">
              <h3 className="heading-3" onClick={() => this.successModal(item)}>
                {item.name}
              </h3>
              <h6 className="heading-6">{item.banner}</h6>
            </div>
          </div>
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
      loadModalItem: bindActionCreators(
        portfolioActions.loadPortfolioModal,
        dispatch
      ),
      openModalItem: bindActionCreators(
        portfolioActions.displayPortfolioModal,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkGridItem);
