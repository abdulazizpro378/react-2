import React, { Component } from 'react'
import "./Footer.scss"
import aa from '../../assets/images/footer.svg'
import logo from '../../assets/images/logo.png'


export class Footer extends Component {
  render() {
    return (
     <footer>
        <div className="container">
          <div className="footer-row">
            <div className="footer-top">
              <img src={logo} alt="logo" />
              <img src={aa} alt="footer" />
            </div>
          </div>
          </div> 
     </footer>
    )
  }
}

export default Footer