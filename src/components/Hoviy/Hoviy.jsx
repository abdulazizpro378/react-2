import React, { Component } from "react";
import { noviy } from "../data/data";
import "./Hoviy.scss";
import HoviyCard from "./HoviyCard";

export class Hoviy extends Component {
  render() {
    return (
      <section id="noviy">
        <div className="container">
          <div className="noviy-row">
            <div className="noviy-top">
              <h2>Новости</h2>
            </div>
            <div className="noviy-body">
              {noviy.map((noviy, index) => (
                <HoviyCard
                  key={index}
                  img={noviy.img}
                  title={noviy.title}
                  deck={noviy.deck}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hoviy;
