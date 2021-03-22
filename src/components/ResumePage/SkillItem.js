import React, { Component } from "react";
import GridItemTitle from "../Utility/GridItemTitle";

export default class SkillItem extends Component {
  state = {
    icon: {
      path2: "img/svg/embed.svg",
      path3: "img/svg/front.svg",
      path4: "img/svg/http.svg",
      path5: "img/svg/database.svg",
      path6: "img/svg/tool.svg",
      path7: "img/svg/git.svg",
    },
  };
  render() {
    return (
      <div className="skill__grid">
        <div className="skill__item">
          <GridItemTitle icon={this.state.icon.path2} name="backend" />
          <ul>
            <li className="skill__line">
              <h5 className="heading-5">Java SE, EE</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">Spring framework</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">ORM</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">JSON, XML</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">NodeJs</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="skill__item">
          <GridItemTitle icon={this.state.icon.path3} name="frontend" />
          <ul>
            <li className="skill__line">
              <h5 className="heading-5">HTML5</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">CSS3, SCSS</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">Javascript</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">React, Redux</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">jQuery</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="skill__item">
          <GridItemTitle icon={this.state.icon.path4} name="web services" />
          <ul>
            <li className="skill__line">
              <h5 className="heading-5">REST</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">SOAP</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="skill__item">
          <GridItemTitle icon={this.state.icon.path5} name="database" />
          <ul>
            <li className="skill__line">
              <h5 className="heading-5">MySQL</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">MongoDB</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="skill__item">
          <GridItemTitle icon={this.state.icon.path6} name="ide" />
          <ul>
            <li className="skill__line">
              <h5 className="heading-5">Intellij IDEA</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">Visual Code Studio</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}></div>
              </div>
            </li>
            <li className="skill__line">
              <h5 className="heading-5">Netbeans</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="skill__item">
          <GridItemTitle icon={this.state.icon.path7} name="version" />
          <ul>
            <li className="skill__line">
              <h5 className="heading-5">Git, Github</h5>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
