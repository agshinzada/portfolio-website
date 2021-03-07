import React, { Component } from "react";
import CertificateItem from "../ResumePage/CertificateItem";
import EduItem from "../ResumePage/EduItem";
import SkillItem from "../ResumePage/SkillItem";
import ContentTitle from "../Utility/ContentTitle";
import GridItemTitle from "../Utility/GridItemTitle";

export default class ContentResume extends Component {
  state = {
    icon: {
      path1: "img/svg/education.svg",
    },
  };
  render() {
    return (
      <div className="grid grid--1">
        <div className="grid__item">
          <ContentTitle h2="Resume" span="" />
          <GridItemTitle icon={this.state.icon.path1} name="education" />
          <EduItem />
        </div>
        <div className="grid__item">
          <ContentTitle h2="My" span="skills" />
          <SkillItem />
        </div>
        <div className="grid__item">
          <ContentTitle h2="Certificates" span="" />
          <CertificateItem />
        </div>
      </div>
    );
  }
}
