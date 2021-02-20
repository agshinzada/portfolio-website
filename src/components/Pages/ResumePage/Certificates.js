import React, { Component } from "react";

export default class Certificates extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const resp = await fetch("json/certificate.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let data = await resp.json();
    this.setState({ items: data });
  };

  render() {
    return (
      <div className="row">
        <div className="certificates">
          {this.state.items.map((item) => (
            <div className="certificate__item" key={item.id}>
              <div className="certificate__logo">
                <img src={item.img} alt="cert logo" />
              </div>
              <div className="certificate__detail">
                <h4 className="heading-4">{item.name}</h4>
                <h6 className="heading-6">{item.from}</h6>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
