import React, { Component } from "react";
import komonda_1 from "../../assets/images/komonda-1.png";
import komonda_2 from "../../assets/images/komonda-2.png";
import komonda_3 from "../../assets/images/komonda-3.png";
import komonda_4 from "../../assets/images/komonda-4.png";
import komonda_5 from "../../assets/images/komonda-5.png";
import './Komonda.scss'

export class Komonda extends Component {
  render() {
    return (
      <section id="komonda">
        <div className="container">
          <div className="komonda-top">
            <h2>Наша <span>команда </span></h2>
          </div>
          <div className="komonda-row">
            <div className="komonda-card">
              <div className="imgs">
                <img src={komonda_1} alt="komonda-1" />
              </div>
              <h2>Войнич Дарья</h2>
              <p>Заместитель директора по продажам</p>
              <span>+375 (17) 270-53-77 (317)</span>
            </div>
            <div className="komonda-card">
              <div className="imgs">
                <img src={komonda_2} alt="komonda-1" />
              </div>
              <h2>Войнич Дарья</h2>
              <p>Заместитель директора по продажам</p>
              <span>+375 (17) 270-53-77 (317)</span>
            </div>
            <div className="komonda-card">
              <div className="imgs">
                <img src={komonda_3} alt="komonda-1" />
              </div>
              <h2>Войнич Дарья</h2>
              <p>Заместитель директора по продажам</p>
              <span>+375 (17) 270-53-77 (317)</span>
            </div>
            <div className="komonda-card">
              <div className="imgs">
                <img src={komonda_4} alt="komonda-1" />
              </div>
              <h2>Войнич Дарья</h2>
              <p>Заместитель директора по продажам</p>
              <span>+375 (17) 270-53-77 (317)</span>
            </div>
            <div className="komonda-card">
              <div className="imgs">
                <img src={komonda_5} alt="komonda-1" />
              </div>
              <h2>Войнич Дарья</h2>
              <p>Заместитель директора по продажам</p>
              <span>+375 (17) 270-53-77 (317)</span>
            </div>
          </div>
          <div className="komonda-bottom">
            <button className="komonda-btn">Наша команда</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Komonda;
