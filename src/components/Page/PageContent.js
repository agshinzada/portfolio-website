import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../Pages/HomePage/Profile";
import PortfolioGrid from "../Pages/PortfolioPage/PortfolioGrid";
import PortfolioFilter from "../Pages/PortfolioPage/PortfolioFilter";
import SkillGrid from "../Pages/ResumePage/SkillGrid";
import Certificates from "../Pages/ResumePage/Certificates";
import BlockContent from "../Utility/Block/BlockContent";
import BlockTitle from "../Utility/Block/BlockTitle";
import Contact from "../Pages/ContactPage/Contact";
import Form from "../Pages/ContactPage/Form";

export default class PageContent extends Component {
  render() {
    return (
      <div className="page__content">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <Profile />
                <BlockTitle title="Pinned projects" />
                <PortfolioGrid home="pin" />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/resume"
            render={() => (
              <Fragment>
                <BlockTitle title="Education" />
                <BlockContent />
                <BlockTitle title="Skills" />
                <SkillGrid />
                <BlockTitle title="Certificates" />
                <Certificates />
              </Fragment>
            )}
          />

          <Route
            exact
            path="/portfolio"
            render={() => (
              <Fragment>
                <PortfolioFilter />
                <PortfolioGrid />
              </Fragment>
            )}
          />
        </Switch>

        <Route
          exact
          path="/contact"
          render={() => (
            <div className="row">
              <div className="contact__block">
                <Fragment>
                  <Contact />
                  <Form />
                </Fragment>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
