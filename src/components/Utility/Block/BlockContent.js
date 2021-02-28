import React, { Component } from "react";

export default class BlockContent extends Component {
  render() {
    return (
      <div className="row">
        <div className="block">
          <div className="block__content">
            <h5 className="heading-5">2019 - Current</h5>
            <span className="locate">
              <b>Master</b>
            </span>
            <h4 className="heading-4">Radioelectron devices</h4>
            <p className="paragraph">Azerbaijan Technical University</p>
          </div>
          <div className="block__content">
            <h5 className="heading-5">2019 - 2020</h5>
            <span className="locate">
              <b>Development</b>
            </span>
            <h4 className="heading-4">Java SE (FX) and EE (JSP & Servlet)</h4>
            <p className="paragraph">Orient ITM</p>
          </div>
          <div className="block__content">
            <h5 className="heading-5">2015 - 2019</h5>
            <span className="locate">
              <b>Bachelor</b>
            </span>
            <h4 className="heading-4">
              Electronic, telecommunication and radio engineering | SABAH groups
            </h4>
            <p className="paragraph">Azerbaijan Technical University</p>
          </div>
        </div>
      </div>
    );
  }
}
