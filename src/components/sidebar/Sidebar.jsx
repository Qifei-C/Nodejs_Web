import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
    return (
        <aside className="aside">
            <a href="#home" className="nav__logo">
                <img src={Logo} alt="" />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nac__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="icon-book-open"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#certificates" className="nav__link">
                                <i className="icon-badge"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#comments" className="nav__link">
                                <i className="icon-speech"></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="icon-bubbles"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy; 2024 - 2025.</span>
            </div>
        </aside>
    )
}

export default Sidebar