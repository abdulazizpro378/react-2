import React, { Component } from "react";

export class HoviyCard extends Component {
  render() {
    const { img, title, deck } = this.props;
    return (
      <div className="card-8">
        <img src={img} alt="Card img" />
        <p>{title}</p>
        <h4>{deck}</h4>
      </div>
    );
  }
}

export default HoviyCard;
