import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { bindActionCreators } from "redux";
import * as portfolioActions from "../../../redux/actions/portfolioActions";

class PortfolioModal extends Component {
  handleClose = () => {
    this.props.actions.openModalItem(false);
  };

  render() {
    return (
      <Modal
        className="modal animate__animated animate__fadeIn"
        show={this.props.value}
      >
        {this.props.item !== null ? (
          <div className="modal__body animate__animated animate__fadeInUp">
            <div className="modal__title">
              <h2 className="heading-2">{this.props.item.name}</h2>
            </div>
            <div className="modal__description">
              <p className="paragraph">{this.props.item.about}</p>
            </div>
            <div className="modal__tags">
              <div className="span">
                <span className="span__title">Technology:</span>
                <span>{this.props.item.technology}</span>
              </div>
              <div className="span">
                <span className="span__title">Date:</span>
                <span>{this.props.item.date}</span>
              </div>
              <div className="span">
                <span className="span__title">Github:</span>
                <span>
                  <a href={this.props.item.github}>Go to adress</a>
                </span>
              </div>
            </div>
            <div className="modal__images">
              <img src={this.props.item.img2} alt="image1" />
              {this.props.item.img3 !== null ? (
                <img src={this.props.item.img3} alt="image2" />
              ) : (
                <div></div>
              )}
            </div>
            <div className="modal__btns">
              <a
                href={this.props.item.link !== null ? this.props.item.link : ""}
              >
                <button className="btn--visit">Visit website</button>
              </a>
              <button className="btn--back" onClick={this.handleClose}>
                Back to portfolio
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.displayModalReducer,
    item: state.loadModalReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      openModalItem: bindActionCreators(
        portfolioActions.displayPortfolioModal,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioModal);
