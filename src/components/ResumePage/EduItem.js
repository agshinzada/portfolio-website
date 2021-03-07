import React, { Component } from "react";

export default class EduItem extends Component {
  render() {
    return (
      <div className="edu__grid">
        <div className="edu__item">
          <span>2019 - Present</span> MASTER
          <h4 className="heading-4">Radioelectron devices</h4>
          <h5 className="heading-5">Azerbaijan Technical University</h5>
        </div>
        <div className="edu__item">
          <span>2019 - 2020</span> DEVELOPMENT
          <h4 className="heading-4">Java SE (FX) and EE (JSP & Servlet)</h4>
          <h5 className="heading-5">Orient ITM</h5>
        </div>
        <div className="edu__item">
          <span>2015 - 2019</span> BACHELOR
          <h4 className="heading-4">
            Electronic, telecommunication and radio engineering | SABAH groups
          </h4>
          <h5 className="heading-5">Azerbaijan Technical University</h5>
        </div>
      </div>
    );
  }
}
