import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PageContent from "./PageContent";
import PageTitle from "./PageTitle";

export default class Page extends Component {
  state = {
    resumeTitle: "Resume",
    portTitle: "Portfolio",
    contactTitle: "Contact",
    resumeTag: "Junior Software Developer",
    portTag: "My Works",
    contactTag: "Get in touch",
  };
  render() {
    return (
      <div className="page animate__animated animate__fadeIn">
        <Switch>
          <Route
            exact
            path="/resume"
            render={(props) => (
              <PageTitle
                {...props}
                title={this.state.resumeTitle}
                tag={this.state.resumeTag}
              />
            )}
          />
          <Route
            exact
            path="/works"
            render={(props) => (
              <PageTitle
                {...props}
                title={this.state.portTitle}
                tag={this.state.portTag}
              />
            )}
          />
          <Route
            exact
            path="/contact"
            render={(props) => (
              <PageTitle
                {...props}
                title={this.state.contactTitle}
                tag={this.state.contactTag}
              />
            )}
          />
        </Switch>
        <PageContent />
      </div>
    );
  }
}
