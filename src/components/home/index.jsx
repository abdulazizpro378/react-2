import React, { Component } from "react";
import Slider from "react-slick";
import "./Home.scss";
import home_2 from "../../assets/images/home-2.svg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section id="home">
        <div className="container">
          <div className="home-row">
            <Slider {...settings}>
              <div className="home-card">
                <div className="card-left">
                  <p className="desc">LEANGROUP - тубы и этикетки</p>
                  <h1>Ламинатные тубы</h1>
                  <p className="deck_2">
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и DIY Do-it-Yourself.
                  </p>
                  <button className="home-btn">Каталог</button>
                </div>
                <div className="card-right">
                  <img src={home_2} alt="faccebook" />
                </div>
              </div>
              <div className="home-card">
                <div className="card-left">
                  <p className="desc">LEANGROUP - тубы и этикетки</p>
                  <h1>Ламинатные тубы</h1>
                  <p className="deck_2">
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и DIY Do-it-Yourself.
                  </p>
                  <button className="home-btn">Каталог</button>
                </div>
                <div className="card-right">
                  <img src={home_2} alt="faccebook" />
                </div>
              </div>
              <div className="home-card">
                <div className="card-left">
                  <p className="desc">LEANGROUP - тубы и этикетки</p>
                  <h1>Ламинатные тубы</h1>
                  <p className="deck_2">
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и DIY Do-it-Yourself.
                  </p>
                  <button className="home-btn">Каталог</button>
                </div>
                <div className="card-right">
                  <img src={home_2} alt="faccebok" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
