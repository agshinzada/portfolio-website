import React, { Component } from "react";

export default class SkillGrid extends Component {
  render() {
    return (
      <div className="row">
        <div className="skill__grid">
          <div className="skill__block">
            <h4 className="heading-4">Frontend development</h4>
            <p className="paragraph">
              HTML5, CSS3, Javascript (ES6), React, Redux, Bootstrap4, SASS
              (SCSS), jQuery, Ajax
            </p>
          </div>
          <div className="skill__block">
            <h4 className="heading-4">Backend development</h4>
            <p className="paragraph">
              Java SE (FX), Java EE (JSP & Servlet), <br />
              Spring Framework (Core, Mvc, Boot, Security, AOP), ORM (JPA,
              Hibernate), JSON, XML, NodeJS
            </p>
          </div>
          <div className="skill__block">
            <h4 className="heading-4">Database</h4>
            <p className="paragraph">MongoDB, MySQL</p>
          </div>
          <div className="skill__block">
            <h4 className="heading-4">Web Services</h4>
            <p className="paragraph">REST (Postman), SOAP (SoapUI)</p>
          </div>
          <div className="skill__block">
            <h4 className="heading-4">IDE</h4>
            <p className="paragraph">
              Visual Studio Code, Intellij IDEA, Netbeans
            </p>
          </div>
          <div className="skill__block">
            <h4 className="heading-4">Version</h4>
            <p className="paragraph">Git, Github</p>
          </div>
        </div>
      </div>
    );
  }
}
