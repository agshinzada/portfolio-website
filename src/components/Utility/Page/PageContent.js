import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../../HomePage/Profile";
import PortfolioGrid from "../../PortfolioPage/PortfolioGrid";
import PortfolioFilter from "../../PortfolioPage/PortfolioFilter";
import SkillGrid from "../../ResumePage/SkillGrid";
import Certificates from "../../ResumePage/Certificates";
import BlockContent from "../Block/BlockContent";
import BlockTitle from "../Block/BlockTitle";
import Contact from "../../ContactPage/Contact";
import Form from "../../ContactPage/Form";
import PortfolioModal from "../Modal/PortfolioModal";

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
                <PortfolioModal />
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
            path="/works"
            render={() => (
              <Fragment>
                <PortfolioFilter />
                <PortfolioGrid />
                <PortfolioModal />
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
