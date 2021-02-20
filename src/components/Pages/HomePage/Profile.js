import React, { Component } from "react";
import DownloadBtn from "../../Utility/Buttons/DownloadBtn";
import ContactBtn from "../../Utility/Buttons/ContactBtn";

export default class Profile extends Component {
  render() {
    return (
      <div className="row">
        <div className="detail">
          <div className="detail__left">
            <img
              src="img/profile.jpg"
              alt="Profile image"
              className="detail__img"
            />
          </div>
          <div className="detail__right">
            <h4 className="heading-4">Junior Sotfware Developer</h4>
            <h1 className="heading-1">Agshinzada</h1>
            <p className="paragraph">
              I am junior software developer, dynamic team player and
              detail-oriented human. You can see my projects on github.
            </p>
            <div className="btn-group flex">
              <DownloadBtn />
              <ContactBtn />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
