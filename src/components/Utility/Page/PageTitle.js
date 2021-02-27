import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DownloadBtn from "../Buttons/DownloadBtn";

export default class PageTitle extends Component {
  render() {
    return (
      <div className="page__title">
        <h1 className="heading-1">{this.props.title}</h1>
        <h4 className="heading-4">{this.props.tag}</h4>
        <Switch>
          <Route exact path="/portfolio/resume" component={DownloadBtn} />
        </Switch>
      </div>
    );
  }
}
