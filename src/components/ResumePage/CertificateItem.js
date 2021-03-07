import React, { Component } from "react";

export default class CertificateItem extends Component {
  render() {
    return (
      <div className="cert__grid">
        <div className="cert__item">
          <div className="cert__name heading-4">SABAH graduated</div>
          <div className="cert__from heading-5">Ministry of Education</div>
          <div className="cert__date heading-6">June 2019</div>
        </div>
        <div className="cert__item">
          <div className="cert__name heading-4">
            Java Standart and Enterprise edition
          </div>
          <div className="cert__from heading-5">Orient ITM</div>
          <div className="cert__date heading-6">18 May 2020</div>
        </div>
        <div className="cert__item">
          <div className="cert__name heading-4">Java programming</div>
          <div className="cert__from heading-5">Udemy</div>
          <div className="cert__date heading-6">1 September 2020</div>
        </div>
        <div className="cert__item">
          <div className="cert__name heading-4">
            Spring framework & Hibernate
          </div>
          <div className="cert__from heading-5">Udemy</div>
          <div className="cert__date heading-6">22 September 2020</div>
        </div>
        <div className="cert__item">
          <div className="cert__name heading-4">
            Build responsive websites with HTML5 and CSS3
          </div>
          <div className="cert__from heading-5">Udemy</div>
          <div className="cert__date heading-6">14 January 2021</div>
        </div>
        <div className="cert__item">
          <div className="cert__name heading-4">
            Advanced Css and Sass: Flexbox, Grid, Animations
          </div>
          <div className="cert__from heading-5">Udemy</div>
          <div className="cert__date heading-6">1 February 2021</div>
        </div>
      </div>
    );
  }
}
