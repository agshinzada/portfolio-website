import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Menu extends Component {
  render() {
    const styles = {
      responsive: {
        display: this.props.display ? "block" : "none",
        backgroundColor: "#1b262c",
        flexDirection: "column",
        position: "fixed",
        right: 0,
        top: "60px",
        width: "35vw",
        boxShadow: "5px 15px 30px #000",
        padding: "3rem",
        zIndex: 20,
      },
    };

    return (
      <ul
        className="nav-list link link--nav"
        id="nav-list"
        style={styles.responsive}
      >
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    display: state.menuReducer,
  };
}

export default connect(mapStateToProps)(Menu);
