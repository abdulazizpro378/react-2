import React, { Component } from "react";
import Slider from "react-slick";
import { card } from "../data/data";
import Card from "./Card";
import "./Sertifikat.scss";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
   
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section id="sertifikat">
      <div className="container infiniti">
            <h2 className="desc-3">
            Качество продукции подтверждают <span>сертификаты</span>
          </h2>
          <Slider {...settings}>
            {card.map((card, index) => (
              <Card key={index} img={card.img} />
            ))}
          </Slider>
        
        
        </div>

      </section>
  
        
      
    
    );
  }
}
