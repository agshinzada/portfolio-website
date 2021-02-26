import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as menuActions from "../../redux/actions/menuActions";

class Burger extends Component {
  render() {
    return (
      <img
        src="img/svg/icons8-menu.svg"
        alt="menu"
        className="menu-icon"
        onClick={() => this.props.actions.changeMenu(!this.props.display)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    display: state.menuReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeMenu: bindActionCreators(menuActions.changeMenu, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
