import React, { Component } from "react";

export class Card extends Component {
  render() {
    const { img } = this.props;
    return (
      <div className="card-8">
       
          <img src={img} alt="Card img" />
    
      </div>
    );
  }
}

export default Card;
