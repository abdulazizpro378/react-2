import React, { Component } from "react";
import "./Register.scss";

export class Register extends Component {
  render() {
    return (
      <section id="register">
        <div className="container">
          <div className="register-row">
            <h2>
              Получить подробную <span> информацию</span>
            </h2>
            <p>
              Просто заполните форму, наш менеджер свяжется вами в ближайшее
              время
            </p>
            <form>
              <div className="row-1">
               <div className="input-1">
               <input type="text" className="text"  required placeholder="Ваше имя" />
                <input type="tel" className="text" readOnly placeholder="+375 (29) 0000000" />
               </div>
                <textarea
                  id="textarea"
                  cols="30"
                  rows="10"
                  placeholder="Комментарий"
                ></textarea>
                <button type="submit" id="submt">Получить информацию</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
