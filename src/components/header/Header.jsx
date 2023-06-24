import React, { useState } from "react";
import "./header.scss";
import logo2 from "../../assets/images/logo.png";

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
    <header className="header">
      <div className="conatiner">
        <nav className="nav">
          <a href="#home" className="nav__brand">
            <img src={logo2} alt="logo" />
          </a>
          <ul className={active}>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Продукция
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Сертификаты
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Наша команда
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                О нас
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Новости
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Вакансии
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Контакты
              </a>
            </li>
            {/* <button class="header__dark-mode">
              <div>
                <svg
                  width="40"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.55 13.81c-3.88 0-7.03-2.88-7.03-6.44 0-1.34.45-2.59 1.21-3.62C4.7 4.7 2.5 7.33 2.5 10.44c0 3.9 3.45 7.06 7.7 7.06 3.4 0 6.27-2 7.3-4.8a7.46 7.46 0 0 1-3.95 1.12Z"
                    fill="#fff"
                    stroke="#111517"
                    stroke-width="1.25"
                  />
                </svg>
                <span>Dark Mode</span>
              </div>
            </button> */}
            
            <div className={`app ${darkMode ? "dark" : ""}`}>
            
              <button  className="btn-dark" onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
              
            </div>
          </ul>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
// export class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isActive: false,
//     };
//   }

//   handleToggle = () => {
//     this.setState((prevState) => ({
//       isActive: !prevState.isActive,
//     }));
//   };

//   render() {
//     return (
//       <header className="header">
//         <div className="container">
//           <nav className="nav">
//             <img src={logo2} alt="logo" />
//             <ul className="nav-link">
//               <li>Продукция</li>
//               <li>Сертификаты</li>
//               <li>Наша команда</li>
//               <li>О нас</li>
//               <li>Новости</li>
//               <li>Вакансии</li>
//               <li>Контакты</li>
//             </ul>
//             <button class="header__dark-mode">
//               <div>
//                 <svg
//                   width="40"
//                   height="20"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M13.55 13.81c-3.88 0-7.03-2.88-7.03-6.44 0-1.34.45-2.59 1.21-3.62C4.7 4.7 2.5 7.33 2.5 10.44c0 3.9 3.45 7.06 7.7 7.06 3.4 0 6.27-2 7.3-4.8a7.46 7.46 0 0 1-3.95 1.12Z"
//                     fill="#fff"
//                     stroke="#111517"
//                     stroke-width="1.25"
//                   />
//                 </svg>
//                 <span>Dark Mode</span>
//               </div>
//             </button>

//             <button className="header_toogle">
//               <img src={logo3} alt="logo" />
//             </button>
//           </nav>
//         </div>
//       </header>
//     );
//   }
// }

// export default Header;
