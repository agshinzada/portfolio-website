import React, { Component } from "react";

export default class BlockContent extends Component {
  render() {
    return (
      <div className="row">
        <div className="block">
          <div className="block__content">
            <h5 className="heading-5">2019 - Current</h5>
            <span className="locate">
              Azerbaijan Technical University <b>Master</b>
            </span>
            <h4 className="heading-4">Radioelectron devices</h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              qui fugit corporis eius impedit ea dicta cumque veniam modi odit?
            </p>
          </div>
          <div className="block__content">
            <h5 className="heading-5">2019 - 2020</h5>
            <span className="locate">Orient ITM</span>
            <h4 className="heading-4">Java SE(FX) and EE(JSP&Servlet)</h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              qui fugit corporis eius impedit ea dicta cumque veniam modi odit?
            </p>
          </div>
          <div className="block__content">
            <h5 className="heading-5">2015 - 2019</h5>
            <span className="locate">
              Azerbaijan Technical University <b>Bachelor</b>
            </span>
            <h4 className="heading-4">
              Electronic, telecommunication and radio engineering | SABAH groups
            </h4>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              qui fugit corporis eius impedit ea dicta cumque veniam modi odit?
            </p>
          </div>
        </div>
      </div>
    );
  }
}
