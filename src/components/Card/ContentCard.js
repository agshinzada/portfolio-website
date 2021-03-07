import React, { Component } from "react";
import { Route } from "react-router";
import { HashRouter } from "react-router-dom";
import ContentAbout from "../Content/ContentAbout";
import ContentContact from "../Content/ContentContact";
import ContentResume from "../Content/ContentResume";
import ContentWorks from "../Content/ContentWorks";

export default class ContentCard extends Component {
  render() {
    return (
      <div className="content__card animate__animated animate__fadeInUp">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Route path="/" exact component={ContentAbout} />
          <Route path="/resume" exact component={ContentResume} />
          <Route path="/works" exact component={ContentWorks} />
          <Route path="/contact" exact component={ContentContact} />
        </HashRouter>
      </div>
    );
  }
}
