import React, { Component } from "react";
import "./About.scss";

export class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="about-row">
            <div className="about-top">
              <h1>
                О компании <span>LEANGROUP</span>
              </h1>
            </div>
            <div className="about-body">
              <div className="about-left">
                <form>
                  <div className="ifrem">
                    <iframe
                 
                      className="ifrem-1"
                      height="315"
                      src="https://www.youtube.com/embed/sOhLV-lfgjs"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </form>
              </div>
              <div className="about-right">
                <p>
                  Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году
                  и на сегодняшний день является ведущей компанией по
                  производству ламинатных и экструзионных туб. Имея две
                  технологии – для производства ламинатных и экструзионных туб,
                  мы предлагаем вам широкий спектр возможностей. Большим
                  преимуществом является собственный печатный цех в ламинате и
                  in-line печать в экструзии с возможностью различных
                  дополнительных опций декора. Особое внимание уделяется работе
                  с поставщиками для контроля и поддержания качества
                  производимой нами продукции. С января 2018 года компания стала
                  членом Европейской Ассоциации производителей туб (ETMA), что
                  подтверждает сильную позицию бренда и на рынке Европы.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
